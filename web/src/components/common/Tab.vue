<template>
  <div class="nav jc-between">
    <div
      class="nav-item"
      :class="{ active: active === i }"
      v-for="(category, i) in categories"
      :key="i"
      @click="$refs.list.swiper.slideTo(i)"
    >
      <div class="nav-link">{{ category.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["categories", "active"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>
