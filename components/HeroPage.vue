<template>
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
</template>
<script>
export default {
    props: ["page"],
}
</script>
