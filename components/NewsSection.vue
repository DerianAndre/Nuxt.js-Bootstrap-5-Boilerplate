<template>
  <section class="py-5" style="background-color: #c7d3b5">
    <b-container>
      <b-row>
        <h2>Aktuelles</h2>
      </b-row>
      <b-row>
        <b-col
          md="6"
          class="p-5"
          :class="
            i === 0
              ? 'border-end border-bottom'
              : i === 1
              ? 'border-start border-bottom'
              : i === 2
              ? 'border-end border-top'
              : 'border-start border-top'
          "
          v-for="(post, i) in news"
          :key="i"
        >
          <p class="display-1 font-serif mb-5">
            {{ (date = post.date) ? date : "ⓘ" }}
          </p>
          <h3 class="fs-5 font-base fw-bold">{{ post.title }}</h3>
          <div
            v-if="post.description"
            v-html="$md.render(post.description)"
          ></div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
export default {
  props: ["news"],
};
</script>
