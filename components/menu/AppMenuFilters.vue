<template>
  <div class="l-menu-filters container">
    <div class="c-menu-filters__panel d-flex align-items-center">
      <div
        class="c-menu-filters__search form-control rounded-1 d-flex align-items-center mr-3"
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
      <button class="btn btn-link btn-text">
        <img
          class="c-menu-filters__icon"
          src="@/assets/img/SVG/filters-icon.svg"
          alt="filters toggle button"
          @click="toggleFiltersHandler"
        />
      </button>
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

    <transition name="slide">
      <div v-if="isFiltersMenuActive" class="c-menu-filters-categories__mobile">
        <div class="c-menu-filters-categories-mobile__header">
          <nuxt-link to="/" title="Foodies">
            <img
              class="c-menu-filters-categories-mobile__logo"
              src="@/assets/img/SVG/logo--white.svg"
              alt="Logo"
            />
          </nuxt-link>
          <img
            src="@/assets/img/SVG/close-icon--white.svg"
            alt="close button"
            class="c-menu__close"
            @click="toggleFiltersHandler"
          />
        </div>
        <nav class="c-menu-filters-categories-mobile__items">
          <a
            class="c-menu-filters-categories-mobile__item"
            :class="{
              'c-menu-filters-categories-mobile__item--selected':
                selectedCategory === '',
            }"
            @click="setCategoryHandler('')"
          >
            Todas
          </a>
          <a
            v-for="category in categories"
            :key="category.id"
            class="c-menu-filters-categories-mobile__item"
            :class="{
              'c-menu-filters-categories-mobile__item--selected':
                selectedCategory === category.name,
            }"
            @click="setCategoryHandler(category.name)"
            >{{ category.name }}</a
          >
        </nav>
      </div>
    </transition>
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
      isFiltersMenuActive: false,
    };
  },
  watch: {
    "$route.path"() {
      this.isMobileMenuActive = false;
    },
  },
  methods: {
    setCategoryHandler(categoryName) {
      this.$emit("set-category", categoryName);
      this.search = "";
      this.isFiltersMenuActive = false;
    },
    searchValueHandler() {
      this.$emit("search", this.search);
      this.search = "";
    },
    toggleFiltersHandler() {
      this.isFiltersMenuActive = !this.isFiltersMenuActive;
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

.c-menu-filters__panel {
  margin: 0;
  @include m {
    margin: 0 3.7rem 3rem 0;
  }
  @include l {
    margin: 0 3.7rem 0 0;
  }
}

.c-menu-filters__search {
  width: 40.7rem;
  max-width: 100%;
  height: 6rem;
  padding: 0 2rem;
  border: 1px solid #c4c4c4;
  background: #f8f8f8;
  overflow: hidden;

  @include m {
    width: 46.7rem;
  }
}

.c-menu-filters-search__field {
  width: 100%;
  padding: 1.3rem 0;
  outline: none;
  border: 0;
  background: transparent;
  font-family: Open Sans;
  font-size: 1.8rem;
  line-height: 2.4rem;
}

.c-menu-filters__categories {
  display: none;

  @include m {
    display: block;
  }
}

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

.c-menu-filters__icon {
  @include m {
    display: none;
  }
}
.c-menu-filters-categories__mobile {
  width: 100%;
  max-width: 100vh;
  height: 100%;
  height: 100vh;
  position: fixed;
  right: 0px;
  top: 0px;
  background: $color-black;
  border-radius: 0px 0px 30px 30px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease-in-out;
  z-index: 100;

  @include m {
    display: none;
  }
}

.c-menu-filters-categories-mobile__header {
  margin: 4.7rem 1.6rem 5.1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.c-menu-filters-categories-mobile__logo {
  margin: 0;
}

.c-menu-filters-categories-mobile__items {
  display: flex;
  flex-direction: column;
}

.c-menu-filters-categories-mobile__item {
  width: auto;
  width: fit-content;
  margin: 0 1.6rem 5rem;
  font-family: Syne;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 3rem;
  position: relative;
  color: $color-white;
  transition: ease all 0.3s;

  &:hover {
    &::before {
      content: "";
      width: 100%;
      height: 0.6rem;
      position: absolute;
      bottom: 0;
      z-index: -1;
      background-color: $color-yellow-og;
      transform: rotate(-0.64deg);
    }
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

  &:last-of-type {
    margin: 0 1.6rem;
  }
}
.c-menu-filters-categories-mobile__action {
  all: unset;
  transition: ease all 0.3s;
  cursor: pointer;

  @include m {
    display: none;
  }

  &:hover {
    filter: invert(1);
  }
}
</style>
