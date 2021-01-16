<template>
  <nuxt-link to="/" class="logo" title="Foodies">
    <img
      :src="
        require(`@/assets/img/SVG/${darkMode ? `logo--white.svg` : `logo.svg`}`)
      "
      alt="Logo"
      title="Foodies"
    />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    darkMode: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.logo {
  margin: 0 8.6rem 0 0;
}
</style>
