<template>
  <div>
    <div class="pt-3">
      <swiper :options="swiperOptionC">
        <swiper-slide v-for="(category, i) in categories" :key="i">
          <slot name="items" :category="category"></slot>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categories: { type: Array, required: true },
  },
  data() {
    return {
      swiperOptionC: {
        pagination: {
          el: ".pagination-home",
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
