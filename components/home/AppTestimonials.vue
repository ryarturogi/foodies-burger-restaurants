<template>
  <section class="l-testimonials container-fluid">
    <div
      class="c-testimonials d-flex justify-content-center align-items-center"
    >
      <client-only>
        <swiper :options="swiperOptions" class="c-testimonials__slider">
          <swiper-slide
            v-for="item in testimonials"
            :key="item.title"
            class="c-testimonials__slide"
          >
            <h4
              class="c-testimonials-slide__title"
              data-aos="flip-up"
              data-aos-delay="300"
            >
              {{ item.title }}
            </h4>
            <p
              class="c-testimonials-slide__content"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {{ item.description }}
            </p>
          </swiper-slide>
        </swiper>

        <div class="c-testimonials-slide__buttons">
          <div
            slot="button-prev"
            class="c-testimonials-slider__button-prev"
            width="32"
          >
            <img src="@/assets/img/SVG/chevron-left.svg" alt="chevron-left" />
          </div>
          <div
            slot="pagination"
            class="c-testimonials__counter swiper-pagination"
          ></div>
          <div slot="button-next" class="c-testimonials-slider__button-next">
            <img
              src="@/assets/img/SVG/chevron-right.svg"
              alt="chevron-right"
              width="32"
            />
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
      testimonials: [
        {
          title: "“El mejor lugar para degustar en familia y amigos!”",
          description:
            "Es el mejor lugar al que he venido con mi familia, la comida es rica, sirven rápido y te atienden de la mejor manera.",
        },
        {
          title: "“El mejor burger de mi vida!”",
          description:
            "Foodies siempre lo recomiendo entre mi familia y amigos por ser para mi el mejor lugar para comer hamburguesas",
        },
      ],
      swiperOptions: {
        loop: false,
        slidesPerView: 1,
        fadeEffect: {
          crossFade: true,
        },
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
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
@import "@/assets/scss/base/typography.scss";

.l-testimonials {
  max-height: 63.8rem;
  margin: 10rem auto 5rem;
  position: relative;
  display: block;
  clear: both;

  @include m {
    max-height: initial;
    min-height: 63.8rem;
  }

  @include l {
    margin: 10rem auto 7rem;
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

.c-testimonials__slider {
  width: 76.8rem;
  max-width: 100%;
  margin: 0 auto;
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
  font-family: $font-stack-heading;
  font-size: 2.6rem;
  font-weight: $bold;
  line-height: 3rem;
  text-align: center;

  @include m {
    max-width: 44vw;
    font-size: $text-4xl;
    font-weight: $bold;
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
  font-family: $font-stack-subheading;
  font-size: $text-xl;
  font-weight: normal;
  line-height: 2.4rem;
  text-align: center;

  @include m {
    font-size: $text-2xl;
    font-weight: normal;
    line-height: 2.6rem;
  }
}

.c-testimonials-slide__buttons {
  width: 100px;
  height: 50px;
  display: grid;
  position: relative;
  grid-auto-flow: column;
  font-size: $text-xl;
  font-weight: $bold;
}
.c-testimonials__counter {
  width: 40px;
  height: 50px;
  padding: 0;
  margin: 1.5rem 0;
  display: flex;
  justify-content: space-between;
  position: relative !important;
  font-family: $font-stack-subheading;
  font-size: $text-xl;
  font-weight: $bold;
  line-height: 2.1rem;

  .swiper-pagination-current,
  .swiper-pagination-total {
    font-family: Anonymous Pro;
    font-size: $text-xl;
    font-weight: $bold;
    line-height: 2.1rem;
  }
}
.c-testimonials-slider__button-prev,
.c-testimonials-slider__button-next {
  padding: 0;
  margin: 0;
  display: inline;
  outline: 0;
  height: 2rem;

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
