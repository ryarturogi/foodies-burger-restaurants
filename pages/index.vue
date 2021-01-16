<template>
  <div class="homepage">
    <AppHero />
    <AppAbout />
    <AppLocationsLocator />
    <AppTestimonials />
    <AppCTAForm />
    <AppCTAMobileApp />
  </div>
</template>

<script>
import AppHero from "@/components/home/AppHero";
import AppAbout from "@/components/home/AppAbout";
import AppLocationsLocator from "@/components/home/AppLocationsLocator";
import AppTestimonials from "@/components/home/AppTestimonials";
import AppCTAForm from "@/components/home/AppCTAForm";
import AppCTAMobileApp from "@/components/home/AppCTAMobileApp";

export default {
  components: {
    AppHero,
    AppAbout,
    AppLocationsLocator,
    AppTestimonials,
    AppCTAForm,
    AppCTAMobileApp,
  },
  data() {
    return {
      seo: {
        title: "Foodies",
        description:
          "Encuentra la mejor hamburguesa del país a la facilidad de unos clicks.",
      },
    };
  },
  head() {
    return {
      title: this.seo.title,
      meta: [
        {
          name: "description",
          content: this.seo.description,
        },
        {
          name: "canonical",
          content: "https://foodies.com" + this.$route.path,
        },
        {
          property: "og:title",
          content: this.seo.title,
        },
        {
          property: "og:description",
          content: this.seo.description,
        },
        {
          property: "og:url",
          content: "https://foodies.com" + this.$route.path,
        },
        {
          property: "twitter:description",
          content: this.seo.description,
        },
        {
          property: "twitter:title",
          content: this.seo.title,
        },
        {
          property: "og:image",
          content: "@/assets/img/PNG/logo.png",
        },
        {
          property: "og:image:secure_url",
          content: "@/assets/img/PNG/logo.png",
        },
        {
          property: "twitter:image",
          content: "@/assets/img/PNG/logo.png",
        },
        {
          property: "og:image:height",
          content: 830,
        },
        {
          property: "og:image:width",
          content: 315,
        },
      ],
      titleTemplate: "%s - Foodies",
    };
  },
};
</script>

<style lang="scss" scoped></style>
