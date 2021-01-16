<template>
  <div class="l-hero">
    <div class="c-hero">
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
      >
        Encuentranos
        <img src="@/assets/img/SVG/arrow-right.svg" alt="arrow right" />
      </a>
    </div>

    <div class="c-hero__burger" data-aos="fade-up" data-aos-delay="200">
      <img src="@/assets/img/PNG/hero-burger.png" alt="hero-burger" />
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
  max-width: $screen-xl-min;
  height: 80vh;
  margin: 0 auto 5rem;
  padding: 0 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @include l {
    flex-direction: row;
    padding: 0;
  }
}
.c-hero {
  order: 1;
  @include l {
    flex-direction: row;
    order: 0;
  }
}
.c-hero__title {
  // height: 13rem;
  margin: 6rem 0 2.1rem;
  position: relative;
  z-index: 5;
  font-family: Druk Text Wide;
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 4rem;

  @include m {
    height: 18.5rem;
    margin: 18.3rem 0 2.1rem;
    font-size: 6rem;
    font-weight: 700;
    line-height: 6rem;
  }

  &::after {
    content: "";
    width: 25rem;
    max-width: 100%;
    height: 6rem;
    position: absolute;
    left: 0;
    bottom: 2px;
    background: $color-yellow-og;
    transform: rotate(-0.64deg);
    z-index: -1;

    @include m {
      height: 5.4rem;
      width: 41.1rem;
    }
  }
}
.c-hero__subtitle {
  font-family: Open Sans;
  font-size: 1.8rem;
  line-height: 2.5rem;
  margin: 0 0 4.6rem;
  color: rgba(0, 0, 0, 0.4);
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
  margin: 1rem auto 0;
  order: 0;

  @include m {
    width: 32rem;
  }

  @include l {
    width: 56.3rem;
    margin: 6.5rem -5.9rem 0 0;
    order: 2;
  }

  img {
    width: 100%;
    max-width: 100%;
  }
}
</style>
