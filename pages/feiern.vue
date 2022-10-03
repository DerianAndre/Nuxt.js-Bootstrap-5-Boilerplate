<template>
  <main>
    <HeroPage :page="page" />
    <nuxt-content :document="page" />
    <section class="py-5 my-5" v-for="(reason, key) in reasons" :key="key">
      <b-container>
        <b-row class="align-items-center">
          <b-col
            cols="12 mb-3 mb-md-0"
            :class="
              reason.image
                ? key % 2 === 0
                  ? 'col-md-5 order-md-1'
                  : 'col-md-6 order-md-2 offset-md-1'
                : 'col-md-8 offset-md-2'
            "
          >
            <h2 :class="reason.headline ? 'subtitle' : 'h2 mb-3'">
              {{ reason.title }}
            </h2>
            <p v-if="reason.headline" class="h2 mb-4">
              {{ reason.headline }}
            </p>
            <div
              v-if="reason.description"
              v-html="$md.render(reason.description)"
            ></div>
          </b-col>
          <b-col
            cols="12"
            :class="
              reason.image
                ? key % 2 === 0
                  ? 'col-md-6 order-md-2 offset-md-1'
                  : 'col-md-5 order-md-1'
                : 'd-none offset-md-0'
            "
          >
            <b-img v-if="reason.image" :src="reason.image" fluid></b-img>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </main>
</template>
<script>
export default {
  head() {
    return {
      title: this.page.meta_title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.page.meta_description
            ? this.page.meta_description
            : null,
        },
      ],
    };
  },
  async asyncData({ $content, params, error }) {
    try {
      const page = await $content("feiern").fetch();
      const reasons = await $content("anlass").fetch();
      return { page, reasons };
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
