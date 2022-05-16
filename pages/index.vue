<template>
  <main>
    <section>
      <b-container>
        <ul>
          <li v-for="post in articles" :key="post.title">
            <nuxt-link :to="post.path">{{ post.title }}</nuxt-link>
          </li>
        </ul>
      </b-container>
    </section>
    <section class="py-5">
      <b-container class="mini-container">
        <h2 class="subtitle">Subtitle</h2>
        <p class="h2">
          Mitten in der Natur gelegen, ermöglicht es Ihnen das Gasthaus Lamm,
          Ruhe von der Hektik des Alltags zu finden und Entspannung in
          atemberaubendem Ambiente zu genießen.
        </p>
        <p>
          Hallo. Ich bin ein kleiner Blindtext. Und zwar schon so lange ich
          denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein
          blinder Text zu sein: Man ergibt keinen Sinn. Wirklich keinen Sinn.
          Man wird zusammenhangslos eingeschoben und rumgedreht – und oftmals
          gar nicht erst gelesen.
        </p>
        <p>
          Aber bin ich allein deshalb ein schlechterer Text als andere? Na gut,
          ich werde nie in den Bestsellerlisten stehen. Aber andere Texte
          schaffen das auch nicht. Und darum stört es mich nicht besonders blind
          zu sein. Und sollten Sie diese Zeilen noch immer lesen, so habe ich
          als kleiner Blindtext etwas geschafft, wovon all die richtigen und
          wichtigen Texte meist nur träumen.
        </p>
        <b-button href="#!" variant="primary">Button</b-button>
      </b-container>
    </section>
    <section class="py-5">
      <b-container>
        <b-row class="align-items-center">
          <b-col md="6">
            <h2 class="subtitle">Subtitle</h2>
            <p class="h2">
              Mitten in der Natur gelegen, ermöglicht es Ihnen das Gasthaus
              Lamm, Ruhe von der Hektik des Alltags zu finden und Entspannung in
              atemberaubendem Ambiente zu genießen.
            </p>
            <p>
              Hallo. Ich bin ein kleiner Blindtext. Und zwar schon so lange ich
              denken kann. Es war nicht leicht zu verstehen, was es bedeutet,
              ein blinder Text zu sein: Man ergibt keinen Sinn. Wirklich keinen
              Sinn. Man wird zusammenhangslos eingeschoben und rumgedreht – und
              oftmals gar nicht erst gelesen.
            </p>
            <p>
              Aber bin ich allein deshalb ein schlechterer Text als andere? Na
              gut, ich werde nie in den Bestsellerlisten stehen. Aber andere
              Texte schaffen das auch nicht. Und darum stört es mich nicht
              besonders blind zu sein. Und sollten Sie diese Zeilen noch immer
              lesen, so habe ich als kleiner Blindtext etwas geschafft, wovon
              all die richtigen und wichtigen Texte meist nur träumen.
            </p>
            <a href="#!" class="btn btn-link">Button</a>
          </b-col>
          <div class="col-12 col-md-6">
            <LazyImg
              class="img-fluid"
              src="https://picsum.photos/1200/1600"
              alt="Alternativer Bildtext"
            />
          </div>
        </b-row>
      </b-container>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    try {
      const articles = await $content({ deep: true })
        .only(["title", "description", "image", "path"])
        .sortBy("createdAt", "desc")
        .fetch();
      return { articles };
    } catch (err) {
      error({
        statusCode: 404,
        message: "Page could not be found",
      });
    }
  },
};
</script>

<style></style>
