<template>
  <main>
    <HeroHome />
    <section class="py-5">
      <b-container class="mini-container">
        <h2 class="subtitle">Gasthaus Lamm</h2>
        <p class="h2">Familientradition seit 1860</p>
        <p>
          Nicht ohne Stolz feierten wir 2010 ein stattliches Jubiläum, denn wir
          können inzwischen auf über 150 Jahre schwäbische Gastlichkeit
          zurückblicken. Heute betreiben wir einen modernen, der Nachhaltigkeit
          aufgeschlossenen Gastronomie- und Beherbergungsbetrieb in fünfter
          Generation.
        </p>
        <p>
          Wir haben unser tägliches Restaurantgeschäft im Gasthaus zum Lamm seit
          Mai 2015 beendet. Zukünftig werden wir uns stärker auf die
          Geschäftsfelder Catering/Partyservice und Veranstaltungen
          konzentrieren. Unser kompetentes Team steht Ihnen jedoch weiterhin in
          unserem LammwirtStadel zur Verfügung. Wir freuen uns schon jetzt auf
          viele schöne Feste und Feiern mit Ihnen! Unsere Gasträume im Gasthaus
          zum Lamm sind für Veranstaltungen ab 20 Personen zu buchen.
        </p>
        <p>
          Außerdem beliefern wir u.a. Kindergärten und Schulen im Zuge der
          Ganztagesbetreuung mit gesundem Mittagessen.
        </p>
      </b-container>
    </section>
    <NewsSection :news="news" />
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
      const news = await $content("news").limit(4).fetch();
      return { news };
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
