<template>
  <div v-if="!formSent" class="l-cta-form">
    <div class="c-cta-form">
      <h3 class="c-cta-form__title">Cuentanos tu experiencia</h3>

      <p class="c-cta-form__subtitle">
        Don't miss out on our great offers & Receive deals from all our top
        restaurants via e-mail.
      </p>
      <div class="row container">
        <div
          v-if="errors !== ''"
          :class="{
            'notice alert-danger':
              errors.name ||
              errors.email ||
              errors.invalidMail ||
              (errors.message && formData.message.length <= 50),
            'notice alert-success': success,
          }"
        >
          <transition-group name="fade" mode="out-in">
            <div
              v-if="errors.name"
              key="1"
              class="notice alert-danger"
              role="alert"
            >
              Debes introducir un nombre
            </div>
            <div
              v-else-if="errors.email"
              key="2"
              class="notice alert-danger"
              role="alert"
            >
              Debes introducir un correo
            </div>
            <div
              v-else-if="errors.invalidMail"
              key="3"
              class="notice alert-danger"
              role="alert"
            >
              Debes introducir un correo valido
            </div>
            <div
              v-else-if="errors.subject"
              key="4"
              class="notice alert-danger"
              role="alert"
            >
              Debes introducir un asunto
            </div>
            <div
              v-else-if="errors.message && formData.message.length <= 50"
              key="5"
            >
              Debes escribir un mensaje mínimo de 50 caracteres
            </div>
          </transition-group>
        </div>
        <transition name="fade">
          <div v-if="success" class="notice alert-success" role="alert">
            Tu mensaje ha sido enviado, en breve le estaremos contactando.
          </div>
        </transition>
      </div>
      <form class="l-cta-form__box" @submit.prevent>
        <div class="c-cta-form__box row">
          <div class="col-md-6">
            <div class="form-group">
              <label
                for="name"
                class="c-cta-form__label form-label"
                :class="{ 'caption caption--error': errors.name }"
              >
                <p>Nombre</p>
                <input
                  id="name"
                  v-model="formData.name"
                  type="text"
                  class="c-cta-form__field form-control"
                  :class="{ 'form-control--error': errors.name }"
                  placeholder="Escribe tu nombre"
                />
              </label>
            </div>
            <div class="form-group">
              <label
                for="email"
                class="c-cta-form__label form-label"
                :class="{
                  'caption caption--error': errors.email || errors.invalidMail,
                }"
              >
                <p>Correo</p>
                <input
                  id="email"
                  v-model="formData.email"
                  type="email"
                  class="c-cta-form__field form-control"
                  :class="{
                    'form-control--error': errors.email || errors.invalidMail,
                  }"
                  placeholder="Escribe tu correo"
                />
              </label>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label
                for="message"
                class="c-cta-form__label form-label"
                :class="{
                  'caption caption--error': errors.message,
                  'caption caption--error':
                    errors.message && formData.message.length <= 50,
                }"
              >
                <p>Mensaje</p>
                <textarea
                  id="message"
                  v-model="formData.message"
                  type="text"
                  cols="30"
                  rows="5"
                  maxlength="250"
                  placeholder="Escribir un mensaje"
                  class="c-cta-form__textarea form-control"
                  :class="{
                    'form-control--error': errors.message,
                    'form-control--error':
                      errors.message && formData.message.length <= 50,
                  }"
                />
              </label>
            </div>
            <div class="form-group">
              <button
                :class="{
                  'btn-warning': formData.name && formData.email,
                  'btn-success': formSent,
                  'btn-danger': error,
                  'btn-secondary color-white':
                    !formData.name && !formData.email,
                }"
                class="c-cta-form__submit"
                :disabled="!formData.name && !formData.email"
                type="submit"
                @click="sendForm"
              >
                Enviar Comentarios
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  <div v-else class="l-cta-form l-cta-form__empty">
    <img
      class="c-cta-form-empty__image"
      src="@/assets/img/SVG/contact-message-sent.svg"
      title="Gracias por tus comentarios"
    />
    <h2 class="c-cta-form-empty__title">Gracias por tus comentarios</h2>
    <p class="c-cta-form-empty__description">
      Don't miss out on our great offers & Receive deals from all our top
      restaurants via e-mail.
    </p>
    <button class="c-cta-form-empty__button btn btn-large btn-warning">
      Conoce nuestro menu
    </button>
  </div>
</template>

<script>
import validator from "validator";

const contactApi = `${process.env.ELANIIN_API_PATH}/contact`;

export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
      success: false,
      formSent: false,
      error: false,
      errors: {
        name: false,
        email: false,
        invalidMail: false,
        message: false,
      },
    };
  },
  methods: {
    async sendForm() {
      this.error = false;
      if (this.formSent) return;
      this.formSent = true;

      this.errors = {
        name: false,
        email: null,
        invalidMail: false,
        message: false,
      };

      if (await this.validateInputLength("name")) {
        this.errors.name = true;
      } else if (await this.validateInputLength("email")) {
        this.errors.email = true;
      } else if (await !validator.isEmail(this.formData.email)) {
        this.errors.invalidMail = true;
      } else if (await this.validateMessageLength("message")) {
        this.errors.message = true;
      }

      for (const prop in this.errors) {
        if (Object.prototype.hasOwnProperty.call(this.errors, prop)) {
          if (this.errors[prop]) {
            this.error = true;
            this.formSent = false;
          }
        }
      }

      if (this.error) return;

      const form = {
        ...this.formData,
      };

      this.formData = {
        name: "",
        email: "",
        subject: "",
        message: "",
      };

      const { success } = await this.$axios.$post(contactApi, form);
      if (success) {
        this.success = true;
        this.formSent = false;
        setTimeout(() => {
          this.success = false;
        }, 1500);
      }
    },
    validateInputLength(name) {
      this.errors[name] = this.formData[name].length <= 0;
    },
    validateMessageLength(message) {
      this.errors[message] = this.formData[message].length <= 50;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/base/breakpoints.scss";
@import "@/assets/scss/abstracts/variables.scss";
@import "@/assets/scss/base/typography.scss";

.l-cta-form {
  width: 100%;
  min-height: 120vh;
  padding: 3rem 0 15rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: $color-black;

  @include m {
    padding: 0;
    min-height: 150vh;
    min-height: 61rem;
  }
}

.c-cta-form {
  width: $screen-lg-min;
  max-width: 100%;
  margin: 0 auto;
  padding: 2rem;
}

.c-cta-form__title {
  margin: 0 auto 1.7rem;
  font-family: $font-stack-heading;
  font-size: $text-5xl;
  font-weight: $bold;
  line-height: 3.6rem;
  text-align: center;
  color: $color-white;
}

.c-cta-form__subtitle {
  width: 69.8rem;
  max-width: 100%;
  margin: 0 auto 6.2rem;
  font-family: $font-stack-subheading;
  font-size: $text-2xl;

  line-height: 3.2rem;
  text-align: center;
  color: $color-white;
}

// .l-cta-form__box {
// }

// .c-cta-form__box {
// }

.c-cta-form__label {
  margin-bottom: 0.5rem;
  display: block;
  font-family: $font-stack-base;
  font-size: $text-sm;
  line-height: 1.634rem;
  color: $color-white;

  &:focus-within p {
    color: $color-yellow-og;
  }
}

.c-cta-form__field {
  display: initial;
  background: $color-black;
  border-radius: 4px;

  &:focus {
    border: 1px solid $color-yellow-og;
  }
}

.c-cta-form__textarea {
  height: 13.2rem;
  padding: $text-base;
  background: $color-black;
  border-radius: 4px;

  &:focus {
    border: 1px solid $color-yellow-og;
  }
}

.c-cta-form__submit {
  width: 19.6rem;
  height: 5rem;
  margin: 1rem 0 0;
  border: 0;
  border-radius: 4px;
  float: right;
  font-family: $font-stack-base;
  font-size: $text-lg;
  font-weight: $bolder;
  line-height: 2.2rem;
  outline: none;
}

.l-cta-form__empty {
  width: 100%;
  height: 67.9rem;
  max-height: 100%;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.c-cta-form-empty__image {
  width: 16.8rem;
  max-width: 100%;
  height: 18.7rem;
  max-height: 100%;
  margin: 0 auto 2.2rem;
}

.c-cta-form-empty__title {
  margin: 0 auto 1.7rem;
  font-family: $font-stack-heading;
  font-size: 3rem;
  font-weight: $bold;
  line-height: 3rem;
  text-align: center;
  color: $color-white;

  @include m {
    font-size: $text-5xl;
    line-height: 3.6rem;
  }
}

.c-cta-form-empty__description {
  margin: 0 auto 3.4rem;
  font-family: $font-stack-base;
  font-size: 1.8rem;
  line-height: 2.8rem;
  text-align: center;
  color: $color-white;

  @include m {
    font-size: $text-2xl;
    line-height: 3.3rem;
  }
}

.c-cta-form-empty__button {
  margin: 0 auto 2rem;
  padding: 1.25rem 1.5rem;
  font-family: $font-stack-base;
  font-size: $text-xl;
  font-weight: $bold;
  line-height: 2.2rem;
  text-align: center;
}
</style>
