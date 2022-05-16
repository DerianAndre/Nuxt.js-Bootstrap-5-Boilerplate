<template>
  <div class="d-flex align-items-center">
    <div v-if="icon" style="width: 40px" v-html="icon"></div>
    <div class="ps-3 flex-grow-1">
      <p class="text-muted">{{ label }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["label", "icon"],
};
</script>
