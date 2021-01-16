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

const menuApi = "https://api.elaniin.dev/api/menu";
const categoriesApi = "https://api.elaniin.dev/api/categories";

export default {
  components: {
    AppMenuHero,
    AppMenuFilters,
    AppMenuList,
  },
  layout: "menu",

  data() {
    return {
      seo: {
        title: "Menu",
        description:
          "Encuentra la mejor hamburguesa del país a la facilidad de unos clicks.",
      },
      selectedCategory: "",
      search: "",
      menu: [],
      categories: [],
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

  computed: {
    filterMenu() {
      return this.filterMenuByName(this.filterMenuByCategory(this.menu));
    },
  },
  async created() {
    await this.getCategories();
    await this.getMenu();
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
