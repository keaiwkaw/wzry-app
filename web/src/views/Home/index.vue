<template>
  <div>
    <slider />
    <nav-icon />
    <news />
    <heroes />
  </div>
</template>

<script>
import slider from "components/common/Slideshow";
import navIcon from "components/home/NavIcon";
import news from "components/home/News";
import heroes from "components/home/Heroes";
export default {
  components: {
    slider,
    navIcon,
    news,
    heroes,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>
