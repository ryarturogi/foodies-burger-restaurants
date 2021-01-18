<template>
  <div class="menu">
    <AppMenuHero />
    <AppMenuFilters
      :categories="categories"
      :selected-category="selectedCategory"
      @set-category="setCategoryHandler"
      @search="setSearchHandler"
    />
    <AppMenuList :menu-list="filterMenu" />
  </div>
</template>

<script>
import AppMenuHero from "@/components/menu/AppMenuHero";
import AppMenuFilters from "@/components/menu/AppMenuFilters";
import AppMenuList from "@/components/menu/AppMenuList";

const menuApi = process.env.ELANIIN_MENU_API;
const categoriesApi = process.env.ELANIIN_CATEGORIES_API;

export default {
  components: {
    AppMenuHero,
    AppMenuFilters,
    AppMenuList,
  },
  layout: "menu",

  data() {
    return {
      selectedCategory: "",
      search: "",
      menu: [],
      categories: [],
      seo: {
        title: "Nuestro Menu - Foodies",
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
          name: "twitter:card",
          content: "summary_large_image",
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
          name: "twitter:image",
          content: this.seo.image,
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
      titleTemplate: "%s - " + this.seo.siteName,
    };
  },

  computed: {
    filterMenu() {
      return this.filterMenuByName(this.filterMenuByCategory(this.menu));
    },
  },
  mounted() {
    this.getCategories();
    this.getMenu();
  },

  methods: {
    async getMenu() {
      try {
        const res = await this.$axios.$get(menuApi);
        this.menu = res.data;
      } catch (err) {
        console.log(err.message);
      }
    },
    async getCategories() {
      try {
        const categories = await this.$axios.$get(categoriesApi);
        this.categories = categories.data;
      } catch (err) {
        console.log(err.message);
      }
    },
    filterMenuByCategory(items) {
      return items.filter(
        (item) => !item.category.indexOf(this.selectedCategory)
      );
    },

    filterMenuByName(items) {
      return items.filter((item) => {
        return item.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },

    setCategoryHandler(categoryName) {
      this.selectedCategory = categoryName;
      this.filterMenuByCategory(this.menu);
    },
    setSearchHandler(searchVal) {
      this.search = searchVal.toLowerCase();
      this.filterMenuByName(this.menu);
    },
  },
};
</script>
