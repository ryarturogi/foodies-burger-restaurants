<template>
  <div class="App">
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/partials/TheHeader";
import TheFooter from "@/components/partials/TheFooter";
export default {
  name: "Default",
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/base/breakpoints.scss";

.App {
  min-height: 100vh;
  background-size: 39.5rem;
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
</style>
