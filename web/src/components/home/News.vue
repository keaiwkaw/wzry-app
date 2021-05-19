<template>
  <div class="news">
    <Card
      class="news-card"
      :categories="newsCats"
      :icon="'icon-Menu'"
      :title="'新闻资讯'"
    >
    </Card>
  </div>
</template>

<script>
import Card from "components/common/card/Card";
export default {
  components: {
    Card,
  },
  data() {
    return {
      newsCats: [],
    };
  },
  methods: {
    async fetchNewsCats() {
      let res = await this.$http.get("news/list");
      this.newsCats = res.data;
      console.log(this.newsCats);
    },
  },
  created() {
    this.fetchNewsCats();
  },
};
</script>

<style lang="scss" scoped>
</style>
