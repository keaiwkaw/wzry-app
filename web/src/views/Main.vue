<template>
  <div>
    <Top />
    <Tab :isPrimary="true" :dataList="dataList" />
    <router-view></router-view>
  </div>
</template>

<script>
import Top from "components/main/Top.vue";
import Tab from "components/common/Tab.vue";
export default {
  components: {
    Tab,
    Top,
  },
  data() {
    return {
      dataList:[
        {name:'首页'},
        {name:'攻略中心'},
        {name:'赛事中心'},
        {name:'IP新游'},
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
