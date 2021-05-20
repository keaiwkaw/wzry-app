<template>
  <div class="news">
    <m-card-list
      class="news-card"
      :categories="newsCats"
      :icon="'icon-Menu'"
      :title="'新闻资讯'"
    >
      <template #items="{ category }">
        <router-link
          tag="div"
          :to="`/articles/${news._id}`"
          class="py-2 fs-lg d-flex"
          v-for="(news, i) in category.newsList"
          :key="i"
        >
          <span class="text-info">[{{ news.categoryName }}]</span>
          <span class="px-2">|</span>
          <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{
            news.title
          }}</span>
          <span class="text-grey-1 fs-sm">{{ news.createdAt | date }}</span>
        </router-link>
      </template>
    </m-card-list>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  components: {},
    filters: {
    date(val) {
      return dayjs(val).format("MM/DD");
    },
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
    },
  },
  created() {
    this.fetchNewsCats();
  },
};
</script>

<style lang="scss" scoped>
</style>
