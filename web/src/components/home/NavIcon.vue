<template>
  <div class="nav-icons bg-white text-center pt-3 mt-3 text-dark-1">
    <div class="d-flex flex-wrap">
      <div class="nav-item mb-3" v-for="n in 10" :key="n">
        <i class="sprite sprite-news"></i>
        <div class="text-grey-1 py-2">爆料站</div>
      </div>
    </div>
    <div class="bg-light py-2 fs-sm d-flex jc-center ai-center">
      <i class="sprite sprite-arrow"></i>
      <span>收起</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/css/variables";
.nav-icons{
  border:1px solid $border-color 0;
  .nav-item {
  width: 25%;
  border-right: 1px solid $border-color;
  &:nth-child(4n) {
    border-right: none;
  }
}
}
</style>
