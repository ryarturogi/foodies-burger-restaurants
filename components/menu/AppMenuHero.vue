<template>
  <div class="l-hero-menu">
    <div class="c-hero-menu container">
      <div class="c-hero-menu__heading" data-aos="flip-up" data-aos-delay="300">
        <span> Cada sabor </span> <br />
        <span> es una nueva </span> <br />
        <span class="c-hero-menu__heading--hightlight">experiencia</span>
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
  height: 50.6rem;
  max-width: 100%;
  background: $color-black;
  display: flex;
  justify-content: center;
  align-items: center;

  @include m {
    height: 48.6rem;
  }
}
.c-hero-menu {
  width: $screen-xl-min;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  column-gap: 4rem;
  position: relative;
  z-index: 1;

  @include l {
    flex-direction: row;
  }
}
.c-hero-menu__heading {
  position: relative;
  z-index: 1;
  order: 2;
  font-family: Druk Text Wide;
  font-size: 3rem;
  font-weight: 700;
  line-height: 4rem;
  white-space: nowrap;
  color: $color-white;

  @include l {
    font-size: 6rem;
    font-weight: 700;
    line-height: 6rem;
    order: 1;
  }

  &::before {
    content: "";
    width: 53.7rem;
    max-width: 100%;
    height: 5.45rem;
    background: $color-yellow-og;
    color: $color-black;
    position: absolute;
    bottom: 0;
    z-index: -1;
    transform: rotate(-0.64deg);
  }

  &--hightlight {
    color: $color-black;
  }
}
.c-hero-menu__burger {
  width: 33.8rem;
  max-width: 100%;
  margin: 0 auto 5.2rem;
  position: relative;
  order: 1;

  @include l {
    width: 53rem;
    right: -10rem;
    order: 2;
  }

  @include xl {
    width: 67rem;
  }
}
</style>
