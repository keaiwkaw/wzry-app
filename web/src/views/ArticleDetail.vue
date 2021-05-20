<template>
  <div class="page-article" v-if="model">
    <div class="d-flex py-3 px-2 border-bottom">
      <div class="iconfont icon-Back text-blue"></div>
      <strong class="flex-1 text-blue pl-2">{{ model.title }}</strong>
      <div class="text-grey fs-xs">2019-06-19</div>
    </div>
    <div v-html="model.body" class="px-3 body fs-lg"></div>
    <div class="px-3 border-top py-3">
      <div class="d-flex ai-center">
        <i class="iconfont icon-menu1"></i>
        <strong class="text-blue fs-lg ml-1">相关资讯</strong>
      </div>
      <div class="pt-2">
        <router-link
          class="py-1"
          tag="div"
          :to="`/articles/${item._id}`"
          v-for="item in model.related"
          :key="item._id"
          >{{ item.title }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      model: {},
    };
  },
  watch: {
    id: "fetchArticle",
  },
  methods: {
    async fetchArticle() {
      let res = await this.$http.get("articles/" + this.id);
      this.model = res.data;
      console.log(this.model);
    },
  },
  created() {
    this.fetchArticle();
  },
};
</script>

<style lang="scss" scoped>
.page-article {
  .icon-Back {
    font-size: 1.6923rem;
  }
  .body {
    img {
      max-width: 100%;
      height: auto;
    }
    iframe {
      width: 100%;
      height: auto;
    }
  }
}
</style>
