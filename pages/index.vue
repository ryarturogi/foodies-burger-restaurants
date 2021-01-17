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
        title: "Foodies - Hacemos la mejor hamburguesa de El Salvador",
        siteName: "Foodies",
        description:
          "Encuentra la mejor hamburguesa del país a la facilidad de unos clicks.",
        image:
          "https://repository-images.githubusercontent.com/330184586/1010d300-5853-11eb-9f94-90979cebddbc",
        url: "https://foodies-elaniin.herokuapp.com/",
      },
    };
  },
  head() {
    return {
      title: this.seo.title,
      meta: [
        {
          property: "og:site_name",
          content: this.seo.siteName,
        },
        {
          name: "description",
          content: this.seo.description,
        },
        { property: "og:type", content: "website" },
        {
          name: "canonical",
          content: this.seo.url + this.$route.path,
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
          content: this.seo.url + this.$route.path,
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
          content: this.seo.image,
        },
        {
          property: "og:image:secure_url",
          content: this.seo.image,
        },
        {
          property: "twitter:image",
          content: this.seo.image,
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
      titleTemplate: `%s - ${this.seo.siteName}`,
    };
  },
};
</script>

<style lang="scss" scoped></style>
