<template>
  <main>
    <HeroHome :page="page" />
    <nuxt-content :document="page" />
    <section v-if="labels.labels" style="background-color: #fff">
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
import meta from '~/mixins/meta.js';
export default {
  mixins: [meta],
  async asyncData({ $content, error }) {
    let page = {};
    let labels = {};
    let news = [];
    try {
      page = await $content("index").fetch();
    } catch (err) {
      console.error({ err });
      error({
        statusCode: 404,
        message: "Page could not be found",
      });
    }
    try {
      news = await $content("news").limit(4).fetch();
    } catch (err) {}
    try {
      labels = await $content("other/labels").fetch();
    } catch (err) {}
    return { news, labels, page };
  },
};
</script>
