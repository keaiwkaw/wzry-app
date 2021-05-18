<template>
  <el-carousel trigger="click" height="150px">
    <el-carousel-item>
      <img src="../../assets/images/2.jpeg" alt="" />
    </el-carousel-item>
    <el-carousel-item>
      <img src="../../assets/images/3.jpeg" alt="" />
    </el-carousel-item>
    <el-carousel-item>
      <img src="../../assets/images/1.jpeg" alt="" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "slider",
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
}
</style>
