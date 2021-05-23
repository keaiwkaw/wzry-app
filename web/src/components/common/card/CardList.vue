<template>
  <div>
    <m-card :icon="icon" :title="title">
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
    </m-card>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    icon: { type: String, required: true },
    title: { type: String, required: true },
    categories: { type: Array },
  },
  data() {
    return {
      active: 0,
    };
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
</style>
