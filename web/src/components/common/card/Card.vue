<template>
  <div class="card bg-white p-3 mt-3">
    <div
      class="card-header d-flex  ai-center pb-2x" 
      :class="{ 'border-bottom': !plain, 'pd-3': !plain }"
    >
      <div class="d-flex flex-1 pb-3">
        <i class="iconfont mr-2 d-flex ai-center" :class="icon"></i>
        <div class="text-black fs-lg flex-1" :class="{ 'fw': plain }">{{ title }}</div>
        <i
          class="iconfont mr-2 d-flex ai-center"
          :class="icon"
          v-if="!plain"
        ></i>
      </div>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      require: true,
      type: String,
    },
    title: {
      require: true,
      type: String,
    },
    plain: {
      type: Boolean,
    },
  },
  components: {},
  data() {
    return {};
  },
  created() {},
};
</script>

<style lang="scss" scoped>
@import "../../../assets/css/variables";
.card {
  border-bottom: 1px solid $border-color;
}
.fw{
  font-weight: 600;
}
</style>

