<template>
  <div class="container l-about-cta">
    <div class="c-about-cta__image">
      <h2 class="c-about-cta__title" data-aos="flip-up" data-aos-delay="300">
        <div>La comida es</div>
        <div class="c-about-cta__title--highlight">Nuestro Arte</div>
      </h2>
    </div>
    <div class="l-about-cta__content">
      <h3
        class="c-about-cta-content__title"
        data-aos="flip-up"
        data-aos-delay="300"
      >
        ¿Quién es Foodies?
      </h3>
      <p
        class="c-about-cta-content__text"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Elit irure ad nulla id elit laborum nostrud mollit irure. Velit
        reprehenderit sunt nulla enim aliquip duis tempor est culpa fugiat
        consequat culpa consectetur Lorem. Reprehenderit dolore culpa irure
        eiusmod minim occaecat et id minim ullamco.
      </p>
      <a
        class="c-about-cta-content__action"
        href="/"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Contáctanos
        <img src="@/assets/img/SVG/arrow-right.svg" alt="arrow right" />
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/abstracts/variables.scss";
@import "@/assets/scss/base/breakpoints.scss";
@import "@/assets/scss/base/typography.scss";

.l-about-cta {
  display: grid;
  grid-template-columns: 1fr;

  @include l {
    grid-template-columns: repeat(2, 1fr);
  }
}

.c-about-cta__image {
  height: 56.5rem;
  padding: 0 2rem 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  background: url("~assets/img/JPG/about-foodies.jpg") no-repeat center;
  background-size: cover;

  @include l {
    padding: 0 4rem 4rem;
  }
}

.c-about-cta__title {
  font-family: $font-stack-heading;
  font-size: $text-3xl;
  font-weight: $bold;
  line-height: 3.2rem;
  text-align: right;
  color: $color-white;
  text-transform: uppercase;
  white-space: nowrap;

  @include s {
    font-size: $text-4xl;
    line-height: 3.6rem;
  }
  @include m {
    font-size: $text-6xl;
    line-height: 4rem;
  }
  @include l {
    font-size: $text-7xl;
    line-height: 5rem;
  }
}

.c-about-cta__title--highlight {
  color: $color-yellow-og;
}

.l-about-cta__content {
  margin: 6rem 0 0;
  padding: 0 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url("~assets/img/SVG/about-spiral-bg.svg") no-repeat center;
  background-size: contain;
  overflow: visible;

  @include l {
    margin: 0;
  }
}

.c-about-cta-content__title {
  margin: 0 0 2.7rem;
  font-family: $font-stack-subheading;
  font-size: $text-2xl;
  font-weight: $bold;
  line-height: 2.6rem;
}

.c-about-cta-content__text {
  margin: 0 0 5.4rem;
  font-family: $font-stack-base;
  font-size: 1.8rem;
  line-height: 2.5rem;
}

.c-about-cta-content__action {
  font-family: $font-stack-subheading;
  font-size: $text-2xl;
  font-weight: $bold;
  line-height: 2.6rem;
  color: $color-black;
}
</style>
