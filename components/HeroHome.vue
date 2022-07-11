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
        <h2 class="h3">Headline für Gastronomie</h2>
        <p class="mb-5">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy.
        </p>
        <b-btn variant="outline-secondary">Essen</b-btn>
      </b-col>
      <b-col
        md="3"
        style="
          background: no-repeat center url(https://picsum.photos/400);
          background-size: cover;
          min-height: 16rem;
        "
      ></b-col>
    </b-row>
    <b-row no-gutters>
      <b-col md="3" class="bg-gray py-5 px-5" style="background-color: #c7d3b5">
        <h2 class="h3">Headline für Ferienwohnungen</h2>
        <p class="mb-5">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy.
        </p>
        <b-btn variant="outline-secondary">Schlafen</b-btn>
      </b-col>
      <b-col
        md="6"
        style="
          background: no-repeat center url(https://picsum.photos/400);
          background-size: cover;
          min-height: 24rem;
        "
      ></b-col>
      <b-col md="3" class="bg-primary text-light p-5">
        <h2 class="h3">Headline für Feiern</h2>
        <p class="mb-5">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy.
        </p>
        <b-btn variant="outline-white">Feiern</b-btn>
      </b-col>
    </b-row>
  </header>
</template>
<script>
export default {
  props: ["page"],
};
</script>
