<template>
  <transition-group name="fade" mode="out-in">
    <div
      v-if="paginatedMenu && paginatedMenu.length > 0"
      key="1"
      class="l-menu-list container"
    >
      <transition-group
        tag="ul"
        name="list"
        mode="out-in"
        class="c-menu-list"
        @before-leave="beforeLeave"
      >
        <li
          v-for="item in paginatedMenu"
          :key="item.id"
          class="c-menu-list__item card border-0"
        >
          <img :src="item.image" :alt="item.name" :title="item.name" />
          <h3 class="c-menu-list-item__title">
            {{ item.name }}
          </h3>

          <p class="c-menu-list-item__description card-body border-0">
            {{ item.description }}
          </p>
          <div
            class="c-menu-list-item__footer card-footer border-0 bg-transparent"
          >
            <div class="c-menu-list-item__category">
              {{ item.category }}
            </div>
            <div class="c-menu-list-item__price">
              <img
                src="@/assets/img/SVG/dollar-sign.svg"
                alt="dollar sign"
                class="c-menu-list-item__price--currency"
              />{{ item.price }}
            </div>
          </div>
        </li>
      </transition-group>
      <transition-group name="fade" tag="div">
        <div
          v-if="totalPages > 1"
          key="1"
          class="c-menu__pagination d-flex justify-content-center align-items-center mx-auto mt-4 mb-5 px-2"
        >
          <button
            key="2"
            :class="{
              'c-menu-pagination__button--disabled': currentPage === 1,
            }"
            class="c-menu-pagination__button btn btn-outlined btn-lg rounded"
            :disabled="currentPage === 1"
            @click="prevPage"
          >
            Anterior
          </button>
          <button
            v-for="pageNumber in totalPages"
            :key="pageNumber.id"
            class="c-menu-pagination__button c-menu-pagination__button--white btn btn-outline rounded"
            :class="{
              current: currentPage === pageNumber,
              last:
                pageNumber == totalPages &&
                Math.abs(pageNumber - currentPage) > 3,
              first: pageNumber == 1 && Math.abs(pageNumber - currentPage) > 3,
            }"
            @click="setPage(pageNumber)"
          >
            {{ pageNumber }}
          </button>
          <button
            key="3"
            :disabled="currentPage === totalPages"
            :class="{
              'c-menu-pagination__button--disabled': currentPage === totalPages,
            }"
            class="c-menu-pagination__button btn btn-outlined btn-lg rounded"
            @click="nextPage"
          >
            Siguiente
          </button>
        </div>
      </transition-group>
    </div>
    <div v-else key="2" class="l-menu-list l-menu-list__empty container">
      <img
        class="c-menu-list-empty__image"
        src="@/assets/img/SVG/burgers-not-found.svg"
        title="¡Platillo no encontrado!"
      />
      <h2 class="c-menu-list-empty__title">¡Platillo no encontrado!</h2>
      <p class="c-menu-list-empty__description">
        Te invitamos a que verifiques si el nombre esta bien escrito o prueba
        buscando un nuevo platillo.
      </p>
    </div>
  </transition-group>
</template>

<script>
export default {
  props: {
    menuList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 8,
      resultCount: 0,
    };
  },
  computed: {
    totalPages() {
      if (this.resultCount === 0) {
        return 1;
      } else {
        return Math.ceil(this.resultCount / this.itemsPerPage);
      }
    },
    paginatedMenu() {
      /* eslint-disable */
      if (!this.menuList || this.menuList.length !== this.menuList.length) {
        return;
      }
      this.resultCount = this.menuList.length;
      if (this.currentPage >= this.totalPages) {
        this.currentPage = this.totalPages;
      }
      var index = this.currentPage * this.itemsPerPage - this.itemsPerPage;
      return this.menuList.slice(index, index + this.itemsPerPage);
    },
  },
  methods: {
    setPage(pageNumber) {
      this.currentPage = pageNumber;
    },
    nextPage() {
      this.currentPage++;
    },
    prevPage() {
      this.currentPage--;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/abstracts/variables.scss";
@import "@/assets/scss/base/breakpoints.scss";
@import "@/assets/scss/base/typography.scss";

.l-menu-list {
  width: 100%;
}
.c-menu-list {
  margin: 0 auto 6.85rem;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 7rem 2.1rem;

  @include s {
    grid-template-columns: repeat(2, 1fr);
  }

  @include m {
    grid-template-columns: repeat(3, 1fr);
  }

  @include l {
    grid-template-columns: repeat(4, 1fr);
  }
}
.c-menu-list__item {
  list-style: none;

  img {
    margin: 0 0 1.4rem;
    border-radius: 1rem;
  }
}
.c-menu-list-item__title {
  margin: 0 0 2rem;
  padding: 0 2rem;
  font-family: $font-stack-subheading;
  font-size: 2.6rem;
  font-weight: 700;
  line-height: 3rem;

  @include m {
    padding: 0;
  }
}
.c-menu-list-item__description {
  margin: 0 0 3.85rem;
  padding: 0 2rem;
  font-family: $font-stack-base;
  font-size: 1.8rem;
  line-height: 2.6rem;

  @include m {
    padding: 0;
  }
}
.c-menu-list-item__footer {
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @include m {
    padding: 0;
  }
}
.c-menu-list-item__category {
  font-family: $font-stack-base;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: #78909c;
}
.c-menu-list-item__price {
  width: fit-content;
  height: 2.8rem;
  padding: 0.6rem 1rem;
  border-radius: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $color-yellow-og;
  font-family: $font-stack-heading;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 1.6rem;
  color: $color-black;

  &--currency {
    width: 1.4rem;

    margin: 0 !important;
    padding: 0;
    border-radius: 0;
  }
}
.c-menu__pagination {
  margin: 0 auto 6.5rem;
  display: flex;
  gap: 0.5rem;
}
.c-menu-pagination__button {
  height: 4.7rem;
  padding: 1rem 1.8rem;
  border-radius: 8px;
  background: $color-yellow-200;
  font-family: $font-stack-base;
  font-size: 2rem;
  font-weight: 600;
  line-height: 2.7rem;

  &--disabled {
    background: $color-gray-300;
    color: $color-gray-500;
  }

  &--white {
    background: $color-white;
  }

  &:hover,
  &:focus {
    background: $color-black;
    color: $color-white;
  }
}
.current {
  padding: 1rem 1.8rem;
  border-radius: 8px;
  background: $color-black;
  font-family: $font-stack-base;
  font-size: 2rem;
  line-height: 2.7rem;
  color: $color-yellow-og;
}

.l-menu-list__empty {
  width: 100%;
  height: fit-content;
  max-height: 100%;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @include m {
    height: 40rem;
  }
}
.c-menu-list-empty__image {
  width: 16.8rem;
  max-width: 100%;
  height: 18.7rem;
  max-height: 100%;
  margin: 0 auto 2.2rem;
}
.c-menu-list-empty__title {
  font-family: $font-stack-subheading;
  font-size: 2rem;
  font-weight: 700;
  line-height: 2.4rem;
  text-align: center;
  margin: 0 auto 0.8rem;
}
.c-menu-list-empty__description {
  width: 100%;
  max-width: 52.3rem;
  font-family: $font-stack-base;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.5rem;
  text-align: center;
}
</style>
