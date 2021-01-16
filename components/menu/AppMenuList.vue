<template>
  <div class="l-menu-list container">
    <ul class="c-menu-list">
      <li
        v-for="item in paginatedMenu"
        :key="item.id"
        class="c-menu-list__item card border-0"
        data-aos="fade-up"
        data-aos-delay="100"
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
            {{ item.price }}
          </div>
        </div>
      </li>
    </ul>
    <div
      v-if="totalPages > 1"
      class="c-menu__pagination d-flex justify-content-center align-items-center mx-auto mt-4 mb-5 px-2"
    >
      <button
        v-if="currentPage !== 1"
        class="c-menu-pagination__button btn btn-outlined btn-lg rounded"
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
            pageNumber == totalPages && Math.abs(pageNumber - currentPage) > 3,
          first: pageNumber == 1 && Math.abs(pageNumber - currentPage) > 3,
        }"
        @click="setPage(pageNumber)"
      >
        {{ pageNumber }}
      </button>
      <button
        v-if="currentPage < totalPages"
        class="c-menu-pagination__button btn btn-outlined btn-lg rounded"
        @click="nextPage"
      >
        Siguiente
      </button>
    </div>
  </div>
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
      itemsPerPage: 4,
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
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      this.$nextTick(() => {
        this.$gsap.to(el, {
          opacity: 1,
          delay: el.dataset.index * 0.25,
          onComplete: done,
        });
      });
    },

    leave(el, done) {
      this.$nextTick(() => {
        this.$gsap.to(el, {
          opacity: 0,
          delay: el.dataset.index * 0.25,
          onComplete: done,
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/abstracts/variables.scss";
@import "@/assets/scss/base/breakpoints.scss";

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
  font-family: Syne;
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 2.6rem;
}
.c-menu-list-item__description {
  margin: 0 0 3.85rem;
  padding: 0 2rem;
  font-family: Open Sans;
  font-size: 1.6rem;
  line-height: 2.2rem;
}
.c-menu-list-item__footer {
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.c-menu-list-item__category {
  font-family: Open Sans;
  font-size: 1.8rem;
  line-height: 2.5rem;
}
.c-menu-list-item__price {
  width: fit-content;
  height: 2.8rem;
  padding: 0.6rem 1rem;
  border-radius: 0.8rem;
  background: $color-yellow-og;
  font-family: Druk Text Wide;
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 1.6rem;
  color: $color-black;
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
  font-family: Open Sans;
  font-size: 2rem;
  font-weight: 600;
  line-height: 2.7rem;

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
  font-family: Open Sans;
  font-size: 2rem;
  line-height: 2.7rem;
  color: $color-yellow-og;
}
</style>
