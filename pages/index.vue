<template>
  <main>
    <HeroHome :page="page" />
    <nuxt-content :document="page" />
    <section style="background-color: #fff">
      <b-container>
        <b-row class="align-items-center justify-content-around py-3">
          <b-col cols="3" md="1" v-for="(label, i) in labels.labels" :key="i">
            <b-img :src="label" class="img-fluid"></b-img>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <NewsSection :news="news" />
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    try {
      const page = await $content("index").fetch();
      const news = await $content("news").limit(4).fetch();
      const labels = await $content("other/labels").fetch();
      return { news, page, labels };
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
