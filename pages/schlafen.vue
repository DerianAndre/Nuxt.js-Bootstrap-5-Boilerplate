<template>
  <main>
    <HeroPage :page="page" />
    <section class="py-5">
      <b-container>
        <b-row>
          <b-col :md="garni.images.length ? '5' : '8'">
            <h2
              :class="garni.title_emotional ? 'subtitle' : 'h1'"
              v-if="garni.title"
            >
              {{ garni.title }}
            </h2>
            <p class="h2 mb-3" v-if="garni.title_emotional">
              {{ garni.title_emotional }}
            </p>
            <div
              v-if="garni.description"
              v-html="$md.render(garni.description)"
            ></div>
          </b-col>
          <b-col md="6" offset-md="1" v-if="garni.images">
            <b-row>
              <b-carousel
                id="carousel-1"
                v-model="slide"
                controls
                label-next
                label-prev
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
              >
                <b-carousel-slide
                  v-for="(image, i) in garni.images"
                  :key="i"
                  :img-src="image"
                ></b-carousel-slide>
              </b-carousel>
            </b-row>
          </b-col>
        </b-row>
        <b-row class="my-5">
          <b-col v-for="(room, i) in rooms" :key="i">
            <b-card
              :title="room.title"
              :sub-title="room.price"
              bg-variant="light"
              class="shadow mb-3"
            >
              <b-card-text v-if="room.description"
                >{{ room.description }}
              </b-card-text>
              <b-button
                v-if="room.booking"
                :href="room.booking"
                variant="primary"
                target="_blank"
                >Buchen</b-button
              >
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="py-5">
      <b-container>
        <b-row class="mb-5">
          <b-col md="8">
            <h2 v-if="fewo.title">{{ fewo.title }}</h2>
            <div
              v-if="fewo.description"
              v-html="$md.render(fewo.description)"
            ></div>
          </b-col>
        </b-row>

        <b-tabs
          content-class="mt-5"
          no-nav-style
          lazy
          fill
          active-nav-item-class="border-primary opacity-100"
        >
          <b-tab
            title-item-class="mb-2 mx-2 bg-light"
            title-link-class="p-0 h-100 border border-5 rounded-xl overflow-hidden text-decoration-none opacity-50 flex-nowrap"
            v-for="(location, i) in locations"
            :key="i"
          >
            <template #title>
              <b-card
                :title="location.title"
                text-variant="dark"
                bg-variant="light"
                class="rounded-0"
                header-class="p-0"
              >
                <template #header>
                  <div
                    :style="
                      location.images
                        ? 'background: no-repeat center url(' +
                          location.images[0] +
                          '); background-size: cover;'
                        : 'background-color: red;'
                    "
                    style="height: 200px"
                  ></div>
                </template>
                <b-card-text class="fs-6 text-muted" v-if="location.apartments">
                  {{ location.apartments.length }}
                  {{
                    location.apartments.length === 1
                      ? "Ferienwohnung"
                      : "Ferienwohnungen"
                  }}
                </b-card-text>
              </b-card>
            </template>
            <b-row>
              <b-col md="5">
                <h3 v-if="location.title">
                  Unsere Ferienwohnungen - {{ location.title }}
                </h3>
                <div
                  v-if="location.description"
                  v-html="$md.render(location.description)"
                ></div>
              </b-col>
            </b-row>

            <ul class="list-group list-group-flush">
              <li
                v-for="(apartment, i) in location.apartments"
                :key="i"
                class="list-group-item bg-white py-5"
              >
                <b-row class="align-items-center">
                  <b-col
                    v-if="apartment.images"
                    md="6"
                    class="mb-3 mb-md-0"
                    :class="apartment.images.length > 0 ? 'd-block' : 'd-none'"
                  >
                    <b-carousel
                      v-model="apartmentSlider"
                      controls
                      label-next
                      label-prev
                      v-if="apartment.images.length > 0"
                    >
                      <b-carousel-slide
                        v-for="(image, key) in apartment.images"
                        :key="key"
                        :img-src="image"
                      >
                        <template #img>
                          <img
                            class="d-block img-fluid w-100"
                            :src="image"
                            alt="image slot"
                          />
                        </template>
                      </b-carousel-slide>
                    </b-carousel>
                  </b-col>
                  <b-col md="6">
                    <h4>
                      {{ apartment.title }}
                    </h4>
                    <b-card-text
                      v-html="$md.render(apartment.description)"
                    ></b-card-text>
                  </b-col>
                </b-row>
                <b-row class="justify-content-end">
                  <b-col cols="auto"
                    ><b-btn
                      v-if="apartment.booking"
                      :href="apartment.booking"
                      target="_blank"
                      variant="primary"
                      >Wohnung buchen</b-btn
                    ></b-col
                  >
                </b-row>
              </li>
            </ul>
          </b-tab>
        </b-tabs>
      </b-container>
    </section>
  </main>
</template>
<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      apartmentSlider: 0,
    };
  },
  async asyncData({ $content, params, error }) {
    try {
      const page = await $content("schlafen").fetch();
      const garni = await $content("unterkunft/hotel-garni").fetch();
      const fewo = await $content("unterkunft/unsere-ferienwohnungen").fetch();
      const rooms = await $content("zimmer").fetch();

      const apartments = (
        await $content("wohnungen").sortBy("createdAt", "desc").fetch()
      ).reduce((state, apartment) => {
        state["content" + apartment.path + apartment.extension] = apartment;
        return state;
      }, {});

      const locations = (
        await $content("locations")
          .where({ apartments: { $type: "array" } })
          .sortBy("createdAt", "desc")
          .fetch()
      ).map((location) => {
        location.apartments = location.apartments.map(
          (path) => apartments[path]
        );
        return location;
      });

      return { page, garni, fewo, locations, rooms };
    } catch (err) {
      console.error({ err });
      error({
        statusCode: 404,
        message: "Page could not be found",
      });
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>
