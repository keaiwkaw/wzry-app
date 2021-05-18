<template>
  <div class="card">
    <div class="card-header d-flex px-2 py-2">
      <div class="d-flex flex-1 px-2">
        <i class="iconfont mr-2" :class="icon"></i>
        <div class="text-black fs-lg">{{ title }}</div>
      </div>
      <div>...</div>
    </div>
    <div class="card-body">
      <Tab :dataList="dataList" :isPrimary="false" />
      
    </div>
  </div>
</template>

<script>
import Tab from "components/common/Tab";
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
    dataList: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  components: {
    Tab,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>

