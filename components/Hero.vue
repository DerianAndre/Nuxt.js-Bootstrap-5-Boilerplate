<template>
  <section class="hero min-vh-100">
    <div class="page-title">
      <b-container>
        <b-row>
          <b-col>
            <h1 class="text-white">{{ title }}</h1>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="hero-bg">
      <div
        class="hero-bg-el"
        :style="
          'background: url(' +
          cover +
          ') no-repeat center center; background-size: cover;'
        "
      ></div>
      <div class="hero-bg-overlay bg-dark"></div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["title", "cover"],
};
</script>
<style scoped>
.hero .page-title,
#next .next-inner .page-next .page-title {
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(50%);
  width: 100%;
  z-index: 5;
  padding: 30px 0;
  transition: opacity 0.8s ease 0.6s;
}
.hero .hero-bg .hero-bg-el,
#next .next-inner .page-next .hero-bg .hero-bg-el {
  z-index: 2;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-position: top center !important;
  overflow-x: hidden;
}

.hero .hero-bg,
.hero .hero-bg .hero-bg-el,
.hero .hero-bg-overlay,
#next .next-inner .page-next .hero-bg,
#next .next-inner .page-next .hero-bg .hero-bg-el,
#next .next-inner .page-next .hero-bg .hero-bg-overlay {
  position: absolute;
  width: 100vw;
  height: 100%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  overflow: hidden;
}

.hero .hero-bg .hero-bg-overlay,
#next .next-inner .page-next .hero-bg .hero-bg-overlay {
  top: 0;
  left: 0;
  transform: none;
  z-index: 3;
  opacity: 0.5;
}
</style>
