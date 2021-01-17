<template>
  <div class="l-hero">
    <div class="c-hero">
      <div class="c-hero__content">
        <h1 class="c-hero__title" data-aos="flip-up" data-aos-delay="300">
          Un nuevo <br />
          sabor esta en <br />
          la ciudad
        </h1>
        <p class="c-hero__subtitle" data-aos="fade-up" data-aos-delay="400">
          Estamos a punto de descubrir un mundo lleno de sabores <br />
          y de emociones inigualables.
        </p>
        <a
          class="c-hero__action"
          href="#"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-offset="-60px"
        >
          Encuentranos
          <img src="@/assets/img/SVG/arrow-right.svg" alt="arrow right" />
        </a>
      </div>

      <div class="c-hero__burger" data-aos="fade-up" data-aos-delay="200">
        <img src="@/assets/img/PNG/hero-burger.png" alt="hero-burger" />
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

.l-hero {
  width: 100%;
  height: 100vh;
  min-height: 74.5rem;
  margin: 0 auto 5rem;
  padding: 10rem 1.6rem 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: url("~assets/img/SVG/hero-bg--mobile.svg") no-repeat top right;
  background-size: calc(100% - 2rem);

  @include m {
    background: url("~assets/img/SVG/hero-bg--tablet.svg") no-repeat top right;
    height: fit-content;
    min-height: 66.9rem;
    align-items: center;
    background-size: auto;
  }
  @include l {
    background: url("~assets/img/SVG/hero-bg.svg") no-repeat top right;
    background-size: 56rem;
    min-height: 87.4rem;
    padding: 0 2rem;
  }
  @include xl {
    background: url("~assets/img/SVG/hero-bg.svg") no-repeat top right;
    min-height: 87.4rem;
    padding: 0 2rem;
  }
}
.c-hero {
  width: 100%;
  max-width: $screen-xl-min;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;

  @include m {
    grid-template-columns: 1fr 1fr;
  }
  @include xl {
    height: 100vh;
  }
}
.c-hero__content {
  order: 2;
  @include m {
    order: 1;
  }
}
.c-hero__title {
  margin: 4.2rem 0 1.8rem;
  position: relative;
  z-index: 1;
  font-family: Druk Text Wide;
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 3.8rem;

  @include m {
    margin: 0rem 0 1.8rem;
    font-size: 3.9rem;
    font-weight: 700;
    line-height: 4rem;
  }

  @include xl {
    font-size: 6rem;
    line-height: 6rem;
  }

  &::after {
    content: "";
    width: 24.2rem;
    max-width: 100%;
    height: 5.4rem;
    position: absolute;
    left: 0;
    bottom: -1rem;
    background: $color-yellow-og;
    transform: rotate(-0.64deg);
    z-index: -1;

    @include m {
      height: 5.2rem;
      width: 33.7rem;
    }
    @include xl {
      width: 41.1rem;
      bottom: -0.28rem;
    }
  }
}
.c-hero__subtitle {
  font-family: Open Sans;
  font-size: 1.8rem;
  line-height: 2.5rem;
  margin: 0 0 2.6rem;
  color: rgba(0, 0, 0, 0.4);

  @include m {
    margin: 0 0 4.6rem;
  }
}
.c-hero__action {
  font-family: Syne;
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 2.6rem;
  text-decoration: none;
  color: $color-black;

  &:hover {
    color: $color-yellow-500;
  }
}
.c-hero__burger {
  width: 31.2rem;
  margin: 0 auto;
  order: 1;

  @include m {
    order: 2;
  }

  @include l {
    width: 48rem;
    margin: 0 -5.9rem 0 0;
  }
  @include xl {
    width: 56.7rem;
    margin: 0 -5.9rem 0 0;
  }

  img {
    width: 100%;
    max-width: 100%;
  }
}
</style>
