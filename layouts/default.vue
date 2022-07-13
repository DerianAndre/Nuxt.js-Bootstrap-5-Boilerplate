<template>
  <div class="layout" style="overflow-x: hidden">
    <Header />
    <Nuxt />
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: this.pageTitle,
    };
  },
  computed: {
    pageTitle() {
      return (
        this.$nuxt.$route.name.charAt(0).toUpperCase() +
        this.$nuxt.$route.name.slice(1)
      );
    },
  },
};
</script>
