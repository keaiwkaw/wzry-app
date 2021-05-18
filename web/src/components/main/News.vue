<template>
  <div class="news">
    <Card
      class="news-card"
      :dataList="dataList"
      :icon="'icon-Menu'"
      :title="'新闻资讯'"
    />
  </div>
</template>

<script>
import Card from "components/common/Card";
export default {
  components: {
    Card,
  },
  data() {
    return {
      dataList: [
        { name: "热门" },
        { name: "新闻" },
        { name: "公告" },
        { name: "活动" },
        { name: "赛事" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
