<template>
  <div class="l-cta-mobile-app">
    <div class="c-cta-mobile-app__grid">
      <div
        class="c-cta-mobile-app__mobile-mockup"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <img src="@/assets/img/PNG/mobile-mockup.png" alt="Mobile mockup" />
      </div>
      <div class="c-cta-mobile-app__content">
        <h4
          class="c-cta-mobile-app__title"
          data-aos="flip-up"
          data-aos-delay="400"
        >
          Obtén más beneficios <br />
          Descarga nuestra App
        </h4>
        <div class="c-cta-mobile-app__cards">
          <div class="c-cta-mobile-app__card c-cta-mobile-app-cards__first">
            <div
              class="c-cta-mobile-app-cards__count"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              01
            </div>
            <h5
              class="c-cta-mobile-app-cards__title"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Solicita rápido
            </h5>
            <p
              class="c-cta-mobile-app-cards__info"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar
              tellus eget magna aliquet ultricies.
            </p>
          </div>

          <div class="c-cta-mobile-app__card c-cta-mobile-app-cards__second">
            <div
              class="c-cta-mobile-app-cards__count"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              02
            </div>
            <h5
              class="c-cta-mobile-app-cards__title"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Fácil de Usar
            </h5>
            <p
              class="c-cta-mobile-app-cards__info"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus.
            </p>
          </div>
          <div class="c-cta-mobile-app__card c-cta-mobile-app-cards__third">
            <div
              class="c-cta-mobile-app-cards__count"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              03
            </div>
            <h5
              class="c-cta-mobile-app-cards__title"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Promociones especiales
            </h5>
            <p
              class="c-cta-mobile-app-cards__info"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar
              tellus eget magna aliquet ultricies.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/abstracts/variables.scss";
@import "@/assets/scss/base/breakpoints.scss";

.l-cta-mobile-app {
  width: 100%;
  min-height: 61rem;
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @include m {
    margin: 0 0 -15rem;
  }
}
.c-cta-mobile-app__title {
  width: 100%;
  max-width: 58.2rem;
  margin: 0 auto 4.5rem;
  padding: 0 1rem;
  border-radius: 4px;
  font-family: Druk Text Wide;
  font-size: 3rem;
  font-weight: 800;
  line-height: 3.8rem;
  text-align: center;
  position: relative;

  @include m {
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 3.8rem;
  }

  &::before {
    content: "";
    width: 41.1rem;
    max-width: 100%;
    height: 6.8rem;
    position: absolute;
    left: 0;
    bottom: 0rem;
    background: $color-yellow-og;
    transform: rotate(-0.64deg);
    z-index: -1;

    @include xs {
      bottom: -1.8rem;
      height: 5.4rem;
      width: 55.8rem;
    }

    @include s {
      bottom: -1.6rem;
    }
  }
}
.c-cta-mobile-app__content {
  width: 100%;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;

  @include xl {
    width: fit-content;
  }
}
.c-cta-mobile-app__cards {
  width: fit-content;
  max-width: 100%;
  height: fit-content;
  padding: 0;
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    "First"
    "Second"
    "Third";
  gap: 0;

  @include m {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "First Second"
      "Third Third";
    background: url("~assets/img/SVG/mobile-app-arrows-bg.svg") top 5rem center
      no-repeat;
    background-position-x: 5rem;
  }
}
.c-cta-mobile-app__grid {
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  width: 100vw;

  @include l {
    grid-template-columns: minmax(28rem, 0.55fr) 1fr;
  }
}
.c-cta-mobile-app__mobile-mockup {
  position: relative;
  margin-top: -15rem;
  width: 130%;

  @include l {
    margin-top: 0;
    top: -15rem;
    width: 50vw;
  }

  img {
    max-width: 100%;
  }
}
.c-cta-mobile-app__card {
  width: 30rem;
  max-width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @include m {
    padding: 4rem 2rem;
  }
}
.c-cta-mobile-app-cards__first {
  grid-area: First;
}
.c-cta-mobile-app-cards__second {
  grid-area: Second;
}
.c-cta-mobile-app-cards__third {
  grid-area: Third;
  align-self: center;
}
.c-cta-mobile-app-cards__count {
  width: 4.6rem;
  height: 4.6rem;
  margin: 0 auto 1.75rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $color-yellow-og;
  font-size: 2rem;
  font-weight: 800;
  color: $color-white;
}
.c-cta-mobile-app-cards__title {
  width: 29.85rem;
  max-width: 100%;
  margin: 0 auto 2.5rem;
  font-family: Roboto;
  font-weight: 800;
  font-size: 2.2rem;
  line-height: 2.6rem;
  text-align: center;
  color: $color-black;
}
.c-cta-mobile-app-cards__info {
  width: 29.85rem;
  font-family: Syne;
  font-size: 1.8rem;
  line-height: 2.1rem;
  text-align: center;
  color: $color-black;
}
</style>
