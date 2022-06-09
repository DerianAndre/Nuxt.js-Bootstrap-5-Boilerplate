<template>
  <main>
    <HeroPage :page="page" />
    <section
      class="py-5 my-5"
      v-for="(gastronomy, key) in gastronomies"
      :key="gastronomy"
    >
      <b-container>
        <b-row class="align-items-center">
          <b-col
            cols="12 mb-3 mb-md-0"
            :class="
              gastronomy.image
                ? key % 2 === 0
                  ? 'col-md-5 order-md-1'
                  : 'col-md-6 order-md-2 offset-md-1'
                : 'col-md-8 offset-md-2'
            "
          >
            <h2 :class="gastronomy.headline ? 'subtitle' : 'h2 mb-3'">
              {{ gastronomy.title }}
            </h2>
            <p v-if="gastronomy.headline" class="h2 mb-4">
              {{ gastronomy.headline }}
            </p>
            <div
              v-if="gastronomy.description"
              v-html="$md.render(gastronomy.description)"
            ></div>
            <div v-if="gastronomy.menus">
              <b-btn
                v-if="gastronomy.menus.length === 1"
                :href="gastronomy.menus[0].menu"
                target="_blank"
                class="mt-3"
                >{{ gastronomy.menus[0].label }}</b-btn
              >
              <ul
                v-else-if="gastronomy.menus.length > 1"
                class="mt-5 list-group list-group-flush col-md-6"
              >
                <h3>Unsere Speisepläne</h3>
                <a
                  v-for="menu in gastronomy.menus"
                  :key="menu"
                  class="list-group-item list-group-item-action d-flex justify-content-between align-items-center bg-white"
                  :href="menu.menu"
                  target="_blank"
                  >{{ menu.label }}
                  <span class="badge bg-primary rounded-pill"
                    ><i class="bi bi-download"></i></span
                ></a>
              </ul>
            </div>
          </b-col>
          <b-col
            cols="12"
            :class="
              gastronomy.image
                ? key % 2 === 0
                  ? 'col-md-6 order-md-2 offset-md-1'
                  : 'col-md-5 order-md-1'
                : 'd-none offset-md-0'
            "
          >
            <b-img
              v-if="gastronomy.image"
              :src="gastronomy.image"
              fluid
            ></b-img>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </main>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    try {
      const page = await $content("/essen").fetch();
      const gastronomies = await $content("gastronomie", { deep: true })
        .sortBy("createdAt", "desc")
        .fetch();
      const locations = await $content("locations")
        .only(["title", "description", "slug", "path"])
        .sortBy("createdAt", "desc")
        .fetch();
      return { page, gastronomies, locations };
    } catch (err) {
      error({
        statusCode: 404,
        message: "Page could not be found",
      });
    }
  },
  methods: {
    getLocation(path) {
      return this.locations.find(
        (location) => "content" + location.path + location.extension === path
      );
    },
  },
};
</script>
