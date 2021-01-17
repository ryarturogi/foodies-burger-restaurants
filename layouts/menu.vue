<template>
  <div class="App">
    <TheHeader :dark-mode="true" />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/partials/TheHeader";
import TheFooter from "@/components/partials/TheFooter";
export default {
  name: "Menu",
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/abstracts/variables.scss";
@import "@/assets/scss/base/breakpoints.scss";

.App {
  min-height: 100vh;
  overflow-x: hidden;

  @include xs {
    background-size: 40.5rem;
  }

  @include s {
    background-size: 42.5rem;
  }

  @include m {
    background-size: 59.538rem;
  }

  @include l {
    background-size: 74rem;
  }

  @include xl {
    background-size: 80rem;
  }
}

.c-menu-bg {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  min-width: 58.5rem;
  max-width: fit-content;
}
</style>
