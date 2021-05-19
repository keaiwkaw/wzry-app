<template>
  <div>
    <slider />
    <nav-icon />
    <news />
  </div>
</template>

<script>
import slider from "components/common/Slideshow";
import navIcon from "components/home/NavIcon";
import news from "components/home/News";
export default {
  components: {
    slider,
    navIcon,
    news,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>
