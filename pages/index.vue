<template>
  <main>
    <HeroHome :page="page" />
    <nuxt-content :document="page" />
    <NewsSection :news="news" />
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    try {
      const page = await $content("index").fetch();
      const news = await $content("news").limit(4).fetch();
      return { news, page };
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

<style></style>
