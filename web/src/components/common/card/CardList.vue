<template>
  <div>
    <div class="pt-3">
      <div class="nav jc-between">
        <div
          class="nav-item"
          :class="{ active: active === i }"
          v-for="(category, i) in categories"
          :key="i"
          @click="$refs.list.$swiper.slideTo(i)"
        >
          <div class="nav-link">{{ category.name }}</div>
        </div>
      </div>
      <swiper
        ref="list"
        :options="{ autoHeight: true }"
        @transitionStart="() => (active = $refs.list.$swiper.realIndex)"
      >
        <swiper-slide v-for="(category, i) in categories" :key="i">
          <slot name="items" :category="category"></slot>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import Tab from "components/common/Tab";
export default {
  components: {
    Tab,
  },
  props: {
    categories: { type: Array, required: true },
  },
  data() {
    return {
      active: 0,
    };
  },
  mounted () {
    console.log(this.categories);
  }
};
</script>

<style lang="scss" scoped>
</style>
