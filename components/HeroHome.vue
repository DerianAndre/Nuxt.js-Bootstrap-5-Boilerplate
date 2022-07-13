<template>
  <header class="mb-5">
    <b-row no-gutters>
      <b-col
        md="6"
        class="bg-primary p-5 text-light d-flex flex-column justify-content-end align-items-end"
      >
        <div class="w-25 mb-3">
          <Lamm />
        </div>
        <h1 class="w-75 me-auto">{{ page.title_emotional }}</h1>
      </b-col>
      <b-col md="3" class="p-5" style="background-color: #c7d3b5">
        <h2 class="h3">So schmeckt der Süden</h2>
        <p class="mb-5">
          À la carte, Gemeinschaftsverpflegung, Barbecue und Catering
        </p>
        <b-btn variant="outline-secondary" to="/essen">Essen</b-btn>
      </b-col>
      <b-col
        md="3"
        :style="'background-image: url(' + page.images[0] + ')'"
        style="
          background-color: lightgrey;
          background: no-repeat center;
          background-size: cover;
          min-height: 24rem;
        "
      ></b-col>
    </b-row>
    <b-row no-gutters>
      <b-col md="3" class="bg-gray py-5 px-5" style="background-color: #c7d3b5">
        <h2 class="h3">Erholsame Nächte und leckeres Frühstück</h2>
        <p class="mb-5">Hotel Garni und Ferienwohnungen</p>
        <b-btn variant="outline-secondary" to="/schlafen">Schlafen</b-btn>
      </b-col>
      <b-col
        md="6"
        :style="'background-image: url(' + page.images[1] + ')'"
        style="
          background-color: lightgrey;
          background: no-repeat center;
          background-size: cover;
          min-height: 24rem;
        "
      ></b-col>
      <b-col md="3" class="bg-primary text-light p-5">
        <h2 class="h3">Feiern mit Stil</h2>
        <p class="mb-5">Die perfekte Location für jeden Anlass</p>
        <b-btn variant="outline-white" to="/feiern">Feiern</b-btn>
      </b-col>
    </b-row>
  </header>
</template>
<script>
export default {
  props: ["page"],
};
</script>
