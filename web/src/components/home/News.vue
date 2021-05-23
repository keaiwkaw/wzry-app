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
          <span
            :class="getClass(news.categoryName)"
            >[{{ news.categoryName }}]</span
          >
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
      activeColor: "red",
    };
  },
  methods: {
    async fetchNewsCats() {
      let res = await this.$http.get("news/list");
      this.newsCats = res.data;
    },
    getClass(name) {
      switch (name) {
        case "公告":
          return "text-1";
        case "活动":
          return "text-2";
        case "赛事":
          return "text-3";
        case "新闻":
          return "text-4";
        default:
          return "";
      }
    },
  },
  created() {
    this.fetchNewsCats();
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/_variables";
.text-1 {
  color: #f09a37;
}
.text-2 {
  color: #ff3636;
}
.text-3 {
  color: #1e96ab;
}
.text-4 {
  color: #4d9cf7;
}
</style>
