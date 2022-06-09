<template>
  <main>
    <section class="mb-5 py-5 bg-primary text-light">
      <b-container>
        <b-row>
          <b-col md="5">
            <h1
              :class="page.title_emotional ? 'subtitle' : 'h1'"
              class="text-light"
              v-if="page.title"
            >
              {{ page.title }}
            </h1>
            <p class="h1 mb-3" v-if="page.title_emotional">
              {{ page.title_emotional }}
            </p>
            <div
              v-if="page.description"
              v-html="$md.render(page.description)"
            ></div>
          </b-col>
          <b-col
            v-if="page.cover"
            md="6"
            offset-md="1"
            :style="
              'background: no-repeat center url(' +
              page.cover +
              '); background-size: cover; min-height: 24rem;'
            "
          >
          </b-col>
        </b-row>
      </b-container>
    </section>
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
                  v-for="image in garni.images"
                  :key="image"
                  :img-src="image"
                ></b-carousel-slide>
              </b-carousel>
            </b-row>
          </b-col>
        </b-row>
        <b-row class="my-5">
          <b-col v-for="room in rooms" :key="room">
            <b-card
              :title="room.title"
              :sub-title="room.price"
              bg-variant="light"
              class="shadow"
            >
              <b-card-text v-if="room.description"
                >{{ room.description }}
              </b-card-text>
              <b-button
                v-if="room.booking"
                :href="room.booking"
                variant="primary"
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
          justified
          active-nav-item-class="border-primary opacity-100"
        >
          <b-tab
            title-item-class="me-2 mb-2 bg-light"
            title-link-class="p-0 h-100 border border-5 rounded-xl overflow-hidden text-decoration-none opacity-50"
            v-for="location in locations"
            :key="location"
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
                v-for="apartmentPath in location.apartments"
                :key="apartmentPath"
                class="list-group-item bg-white py-5"
              >
                <b-row class="align-items-center">
                  <b-col
                    v-if="(images = getApartment(apartmentPath).images)"
                    md="6"
                    class="mb-3 mb-md-0"
                    :class="images.length > 0 ? 'd-block' : 'd-none'"
                  >
                    <b-carousel
                      v-model="apartmentSlider"
                      controls
                      label-next
                      label-prev
                      v-if="images.length > 0"
                    >
                      <b-carousel-slide
                        v-for="(image, key) in images"
                        :key="key"
                        :img-src="image"
                      >
                        <template #img>
                          <img
                            class="d-block img-fluid w-100 rounded-xl"
                            :src="image"
                            alt="image slot"
                          />
                        </template>
                      </b-carousel-slide>
                    </b-carousel>
                  </b-col>
                  <b-col md="6">
                    <h4 v-if="(apartment = getApartment(apartmentPath).title)">
                      {{ apartment }}
                    </h4>
                    <b-card-text
                      v-if="
                        (description = getApartment(apartmentPath).description)
                      "
                      v-html="$md.render(description)"
                    ></b-card-text>
                  </b-col>
                </b-row>
                <b-row class="justify-content-end">
                  <b-col cols="auto"
                    ><b-btn
                      v-if="(booking = getApartment(apartmentPath).booking)"
                      :href="booking"
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
  async asyncData({ $content, params }) {
    try {
      const page = await $content("/schlafen").fetch();
      const garni = await $content("/unterkunft/hotel-garni").fetch();
      const fewo = await $content("/unterkunft/unsere-ferienwohnungen").fetch();
      const locations = await $content("locations")
        .where({ apartments: { $type: "array" } })
        .sortBy("createdAt", "desc")
        .fetch();
      const apartments = await $content("wohnungen")
        .sortBy("createdAt", "desc")
        .fetch();
      const rooms = await $content("zimmer").fetch();
      return { page, garni, fewo, apartments, locations, rooms };
    } catch (err) {
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
    getApartment(path) {
      return this.apartments.find(
        (apartment) => "content" + apartment.path + apartment.extension === path
      );
    },
  },
};
</script>
