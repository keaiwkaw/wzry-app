<template>
  <div>
    <Top />
    <Tab />
    <router-view></router-view>
  </div>
</template>

<script>
import Top from "components/main/Top.vue";
import Tab from "components/common/Tab.vue";
export default {
  components: {
    Tab,
    Top
  },
};
</script>

<style lang="scss" scoped>
</style>
