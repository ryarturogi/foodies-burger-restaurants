<template>
  <section class="l-testimonials">
    <div class="c-testimonials">
      <client-only>
        <swiper :options="swiperOptions" class="c-testimonials__slider">
          <swiper-slide class="c-testimonials__slide">
            <h4
              class="c-testimonials-slide__title"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              “El mejor lugar para degustar en familia y amigos!”
            </h4>
            <p
              class="c-testimonials-slide__content"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Es el mejor lugar al que he venido con mi familia, la comida es
              rica, sirven rápido y te atienden de la mejor manera.
            </p>
          </swiper-slide>
          <swiper-slide>
            <h4 class="c-testimonials-slide__title">
              “El mejor lugar para degustar en familia y amigos!”
            </h4>
            <p class="c-testimonials-slide__content">
              Es el mejor lugar al que he venido con mi familia, la comida es
              rica, sirven rápido y te atienden de la mejor manera.
            </p>
          </swiper-slide>
        </swiper>
        <div
          class="c-testimonials-slide__buttons"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div slot="button-prev" class="c-testimonials-slider__button-prev">
            <img src="@/assets/img/SVG/chevron-left.svg" alt="chevron-left" />
          </div>
          <div class="c-testimonials__counter">1 / 5</div>
          <div slot="button-next" class="c-testimonials-slider__button-next">
            <img src="@/assets/img/SVG/chevron-right.svg" alt="chevron-right" />
          </div>
        </div>
      </client-only>
      <div class="c-testimonials__ketchup"></div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      swiperOptions: {
        loop: false,
        slidesPerView: 1,
        fadeEffect: {
          crossFade: true,
        },
        navigation: {
          nextEl: ".c-testimonials-slider__button-next",
          prevEl: ".c-testimonials-slider__button-prev",
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/base/breakpoints.scss";

.l-testimonials {
  width: 100%;
  max-height: 63.8rem;
  margin: 10rem auto;
  position: relative;
  display: block;
  clear: both;

  @include m {
    max-height: initial;
    min-height: 63.8rem;
  }

  &::before {
    content: "";
    width: 31.66rem;
    height: 55.57rem;
    background: url("~assets/img/SVG/testimonials-bg--left.svg") no-repeat
      center left;
    position: absolute;
    left: 0;
    top: 0;
    display: none;

    @include m {
      top: 45%;
      transform: translateY(-55%);
      display: block;
    }
  }

  &::after {
    content: "";
    width: 31.66rem;
    height: 55.57rem;
    background: url("~assets/img/SVG/testimonials-bg--right.svg") no-repeat
      center right;
    position: absolute;
    right: 0;
    top: 100%;
    display: none;

    @include m {
      top: 60%;
      transform: translateY(-40%);
      display: initial;
    }

    @include l {
      width: 46.2rem;
      height: 76.2rem;
      background: url("~assets/img/SVG/testimonials-bg--right-big.svg")
        no-repeat;
    }
  }
}

.c-testimonials {
  width: 93.4rem;
  max-width: 100%;
  max-height: 63.8rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  @include m {
    max-height: initial;
    min-height: 63.8rem;
  }
}

.c-testimonials__slide {
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.c-testimonials-slide__title {
  margin: 0 auto;
  font-family: Druk Text Wide;
  font-size: 2.6rem;
  font-weight: 700;
  line-height: 2.6rem;
  text-align: center;

  @include m {
    max-width: 44vw;
    font-size: 3.2rem;
    font-weight: 700;
    line-height: 4.2rem;
  }
}

.c-testimonials-slide__content {
  margin: 1.9rem auto 8.7rem;
  max-width: 54.9rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Syne;
  font-size: 2rem;
  font-weight: normal;
  line-height: 2.4rem;
  text-align: center;

  @include m {
    font-size: 2.2rem;
    font-weight: normal;
    line-height: 2.6rem;
  }
}

.c-testimonials-slide__buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 700;
}
.c-testimonials-slider__button-prev,
.c-testimonials-slider__button-next {
  outline: none;
  &:hover,
  &:active {
    filter: invert(87%) sepia(20%) saturate(2651%) hue-rotate(355deg)
      brightness(98%) contrast(108%);
  }
}
.swiper-button-disabled {
  cursor: default;
  filter: invert(100%) sepia(3%) saturate(491%) hue-rotate(257deg)
    brightness(118%) contrast(87%);
}
</style>
