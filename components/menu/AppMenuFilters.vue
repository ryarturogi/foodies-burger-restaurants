<template>
  <div class="l-menu-filters container" data-aos="flip-up" data-aos-delay="300">
    <div
      class="c-menu-filters__search form-control rounded-1 d-flex align-items-center"
    >
      <img
        class="mr-3"
        src="@/assets/img/SVG/search-icon.svg"
        alt="Search icon"
        title="buscar"
      />
      <input
        v-model="search"
        class="c-menu-filters-search__field border-0"
        type="text"
        placeholder="Busca tu platillo favorito..."
        @keyup.enter="searchValueHandler"
      />
    </div>
    <nav class="c-menu-filters__categories">
      <button
        class="c-menu-filters-categories__item btn btn-text btn-lg"
        :class="{
          'c-menu-filters-categories__item--selected': selectedCategory === '',
        }"
        @click="$emit('set-category', '')"
      >
        Todas
      </button>
      <button
        v-for="category in categories"
        :key="category.id"
        class="c-menu-filters-categories__item btn btn-text btn-lg"
        :class="{
          'c-menu-filters-categories__item--selected':
            selectedCategory === category.name,
        }"
        @click="setCategoryHandler(category.name)"
      >
        {{ category.name }}
      </button>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
    selectedCategory: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      search: "",
    };
  },
  methods: {
    setCategoryHandler(categoryName) {
      this.$emit("set-category", categoryName);
      this.search = "";
    },
    searchValueHandler() {
      this.$emit("search", this.search);
      this.search = "";
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/abstracts/variables.scss";
@import "@/assets/scss/base/breakpoints.scss";
//  d-flex justify-content-center align-items-center p-5
.l-menu-filters {
  margin: 2rem auto;
  padding: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @include l {
    margin: 2rem auto 4rem;
    flex-direction: row;
  }
}

.c-menu-filters__search {
  width: 46.7rem;
  max-width: 100%;
  margin: 0 0 3rem 0;
  overflow: hidden;

  @include l {
    margin: 0 4.7rem 0 0;
  }
}

.c-menu-filters-search__field {
  width: 100%;
  padding: 1.3rem 0;
  border: 1px solid $color-gray-400;
  outline: none;
  font-family: Open Sans;
  font-size: 1.8rem;
  line-height: 2.5rem;
}

// .c-menu-filters__categories {
// }

.c-menu-filters-categories__item {
  margin: 0 1rem 0 0;
  padding: 0;
  position: relative;
  overflow: hidden;
  font-family: Syne;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.2rem;

  &::before {
    transition: ease all 0.3s;
  }

  &:hover {
    &::before {
      content: "";
      width: -webkit-fill-available;
      height: 0.6rem;
      position: absolute;
      bottom: 0;
      z-index: -1;
      background-color: $color-yellow-500;
    }
  }

  @include m {
  }

  &--selected {
    z-index: 1;
    &::before {
      content: "";
      width: -webkit-fill-available;
      height: 0.6rem;
      position: absolute;
      bottom: 0;
      z-index: -1;
      background-color: $color-yellow-og;
    }

    &:hover {
      &::before {
        background-color: $color-orange-500;
      }
    }
  }
}
</style>
