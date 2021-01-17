<template>
  <div class="l-hero-menu">
    <div class="c-hero-menu container">
      <div class="c-hero-menu__heading" data-aos="flip-up" data-aos-delay="300">
        <div>Cada sabor</div>
        <div>es una nueva</div>
        <div class="c-hero-menu__heading--hightlight">experiencia</div>
      </div>
      <div class="c-hero-menu__burger" data-aos="fade-up" data-aos-delay="500">
        <img src="@/assets/img/PNG/menu-burger.png" alt="menu burger" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/abstracts/variables.scss";
@import "@/assets/scss/base/breakpoints.scss";

.l-hero-menu {
  height: 67.2rem;
  max-width: 100%;
  padding: 10rem 0 0;
  background: url("~assets/img/SVG/menu-bg--mobile.svg") no-repeat top right;
  background-size: auto;
  background-color: $color-black;
  display: flex;
  justify-content: center;
  align-items: center;

  @include m {
    height: 69.7rem;
    background: url("~assets/img/SVG/menu-bg--tablet.svg") no-repeat top right;
    background-size: 52rem;
    background-color: $color-black;
  }

  @include l {
    height: 100vh;
    background: url("~assets/img/SVG/menu-bg.svg") no-repeat top right;
    background-size: contain;
    background-color: $color-black;
  }
}
.c-hero-menu {
  width: $screen-xl-min;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: space-between;
  align-items: center;
  column-gap: 4rem;
  position: relative;
  z-index: 1;

  @include m {
    grid-template-columns: 1fr 1fr;
    flex-direction: row;
  }
}
.c-hero-menu__heading {
  position: relative;
  z-index: 1;
  order: 2;
  font-family: Druk Text Wide;
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 3.6rem;
  color: $color-white;

  div {
    white-space: nowrap;
  }

  @include m {
    font-size: 4rem;
    line-height: 4rem;
    order: 1;
  }
  @include l {
    font-size: 6rem;
    line-height: 6rem;
  }

  &::before {
    content: "";
    width: 29.4rem;
    max-width: 100%;
    height: 5.4rem;
    background: $color-yellow-og;
    color: $color-black;
    position: absolute;
    bottom: -1rem;
    z-index: -1;
    transform: rotate(-0.64deg);

    @include m {
      width: 33.7rem;
    }
    @include m {
      width: 53.7rem;
      bottom: -0.28rem;
    }
  }

  &--hightlight {
    color: $color-black;
  }
}
.c-hero-menu__burger {
  width: 100%;
  max-width: 32.8rem;
  margin: 0 auto 5.2rem;
  position: relative;
  order: 1;

  @include m {
    max-width: 38rem;
    right: 3rem;
    order: 2;
  }

  @include xl {
    right: -3rem;
    max-width: 67rem;
  }
}
</style>
