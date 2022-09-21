<template>
  <footer class="l-footer">
    <div class="c-footer container">
      <div class="c-footer__top">
        <div class="c-footer__logo">
          <img src="@/assets/img/SVG/logo-footer.svg" alt="Foodies Logo" />
        </div>
        <div class="mobile-stores__icons">
          <img
            src="@/assets/img/PNG/apple-app-store-logo.png"
            alt="Apple App Store Icon"
            title="Apple App Store"
          />
          <img
            src="@/assets/img/PNG/google-app-store-logo.png"
            alt="Google App Store Icon"
            title="Google App Store"
          />
        </div>
      </div>
      <nav class="c-footer__menu">
        <li class="c-footer-menu__item">
          <a href="#">Acerca de</a>
        </li>
        <li class="c-footer-menu__item">
          <a href="#">¿Qué hablan de nosotros?</a>
        </li>
        <li class="c-footer-menu__item">
          <a href="#">Conoce nuestros burgers</a>
        </li>
        <li class="c-footer-menu__item">
          <a href="#">Conoce nuestras sucursales</a>
        </li>
        <li class="c-footer-menu__item">
          <a href="#">Contactanos</a>
        </li>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/abstracts/variables.scss";
@import "@/assets/scss/base/breakpoints.scss";
@import "@/assets/scss/base/typography.scss";

.l-footer {
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  min-height: 16.4rem;
}
.c-footer {
}
.c-footer__top {
  width: 100%;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 2rem;

  @include m {
    padding: 0 5rem;
    flex-direction: row;
    align-items: flex-end;
    row-gap: 0;
  }
}
.c-footer__logo {
  margin: 6.8rem auto 1.8rem;

  @include m {
    margin: 6.8rem 0 0;
  }
}
.mobile-stores__icons {
  margin: 0 auto 0.72rem;

  @include m {
    margin: 0;
  }
}
.c-footer__menu {
  margin: 2.9rem 0 2rem;
  padding: 2.3rem 0 0;
  border-top: 1px solid $color-yellow-500;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  list-style: none;

  @include m {
    flex-direction: row;
    padding: 2.3rem 5rem 0;
  }
}
.c-footer-menu__item {
  margin: 0;
  padding: 1rem;
  font-size: $text-xl;
  line-height: 1.875rem;

  a {
    color: $color-gray-500;

    &:hover {
      color: $color-yellow-500;
    }
  }
}
</style>
