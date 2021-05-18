<template>
  <div>
    <slider />
    <nav-icon />
    <news/>
  </div>
</template>

<script>
import slider from "components/common/Slider";
import navIcon from "components/main/NavIcon";
import news from "components/main/News";
export default {
  components: {
    slider,
    navIcon,
    news
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>
