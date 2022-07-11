<template>
  <main>
    <nuxt-content :document="page" />
  </main>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    try {
      const page = await $content("feiern").fetch();
      return { page };
    } catch (err) {
      console.error({ err });
      error({
        statusCode: 404,
        message: "Page could not be found",
      });
    }
  },
};
</script>
