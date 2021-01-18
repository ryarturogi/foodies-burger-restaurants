<template>
  <div class="l-menu" :class="{ 'l-menu--dark': darkMode }">
    <nav class="c-menu">
      <a class="c-menu__item" href="#">Acerca de</a>
      <a class="c-menu__item" href="#">Restaurantes</a>
      <nuxt-link class="c-menu__item" to="/menu">Menú </nuxt-link>
      <a class="c-menu__item" href="#">Contáctanos</a>
    </nav>
    <div class="l-menu__mobile">
      <button class="c-menu-mobile__action" @click="toggleMobileMenu">
        <img
          :src="
            require(`@/assets/img/SVG/${
              darkMode ? `mobile-menu-icon--white.svg` : `mobile-menu-icon.svg`
            }`)
          "
          alt="mobile menu"
          title="Abrir Menu"
        />
      </button>

      <transition name="slide">
        <div v-if="isMobileMenuActive" class="c-menu__mobile">
          <div class="c-menu-mobile__header">
            <nuxt-link to="/" title="Foodies">
              <img
                class="c-menu-mobile__logo"
                :src="
                  require(`@/assets/img/SVG/${
                    darkMode ? `logo--white.svg` : `logo.svg`
                  }`)
                "
                alt="Logo"
              />
            </nuxt-link>
            <img
              :src="
                require(`@/assets/img/SVG/${
                  darkMode ? `close-icon--white.svg` : `close-icon.svg`
                }`)
              "
              alt="close button"
              class="c-menu__close"
              @click="toggleMobileMenu"
            />
          </div>
          <nav class="c-menu-mobile__items">
            <a class="c-menu-mobile__item" href="#">Acerca de</a>
            <a class="c-menu-mobile__item" href="#">Restaurantes</a>
            <nuxt-link class="c-menu-mobile__item" to="/menu">Menú</nuxt-link>
            <a class="c-menu-mobile__item" href="#">Contáctanos</a>
          </nav>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    darkMode: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isMobileMenuActive: false,
    };
  },
  watch: {
    "$route.path"() {
      this.isMobileMenuActive = false;
    },
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuActive = !this.isMobileMenuActive;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/abstracts/variables.scss";
@import "@/assets/scss/base/breakpoints.scss";
@import "@/assets/scss/base/typography.scss";
@import "@/assets/scss/base/utilities.scss";

.l-menu {
  display: flex;
}

.c-menu {
  display: none;

  @include l {
    display: block;
  }
}

.c-menu__close {
  cursor: pointer;
  transition: transform ease 0.3s;
  &:hover,
  &:focus {
    transform: rotate(45deg);
  }
}

.c-menu__item {
  margin: 0 3rem 0 0;
  font-family: $font-stack-subheading;
  font-size: $text-xl;
  font-weight: $bold;
  line-height: 22px;
  color: $color-black;
  text-decoration: none;

  @include l {
    margin: 0 3.9rem 0 0;
    font-size: 1.8rem;
  }

  &:hover {
    color: $color-yellow-500;
  }
}

.l_menu__mobile {
  position: relative;
  z-index: 5;
}
.c-menu__mobile {
  width: 100%;
  max-width: 100vh;
  height: 100%;
  height: 100vh;
  position: fixed;
  right: 0px;
  top: 0px;
  background: $color-white;
  border-radius: 0px 0px 30px 30px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease-in-out;
  z-index: 100;

  @include l {
    display: none;
  }
}

.c-menu-mobile__header {
  margin: 4.7rem 1.6rem 5.1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.c-menu-mobile__logo {
  margin: 0;
}

.c-menu-mobile__items {
  display: flex;
  flex-direction: column;
}

.c-menu-mobile__item {
  width: auto;
  width: fit-content;
  margin: 0 1.6rem 5rem;
  font-size: 2.5rem;
  font-weight: $bold;
  line-height: 3rem;
  color: $color-black;
  transition: ease all 0.3s;

  &:hover {
    color: $color-yellow-500;
  }

  &:last-of-type {
    margin: 0 1.6rem;
  }
}
.c-menu-mobile__action {
  all: unset;
  transition: ease all 0.3s;
  cursor: pointer;

  @include l {
    display: none;
  }

  &:hover {
    filter: invert(1);
  }
}
.nuxt-link-exact-active {
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    width: 100%;
    height: 0.6rem;
    position: absolute;
    bottom: 0;
    z-index: -1;
    background-color: $color-gray-400;
  }
}

.l-menu--dark {
  .c-menu__item {
    color: $color-white;

    &:hover {
      position: relative;
      color: $color-orange-500;
      &::before {
        content: "";
        width: 100%;
        height: 0.6rem;
        position: absolute;
        bottom: 0;
        z-index: 0;
        background-color: $color-orange-500;
      }
    }
  }

  .c-menu__mobile {
    background: $color-black;
    box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.5);
  }
  .c-menu-mobile__item {
    color: $color-white;
  }
  .nuxt-link-exact-active {
    position: relative;
    z-index: 1;

    &::before {
      content: "";
      width: 100%;
      height: 0.6rem;
      position: absolute;
      bottom: 0;
      z-index: -1;
      background-color: $color-yellow-og;
    }
  }
}
</style>
