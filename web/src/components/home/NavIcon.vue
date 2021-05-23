<template>
  <div
    class="nav-icons bg-white text-center pt-3 mt-3 text-dark-1"
    ref="iconDiv"
  >
    <div class="d-flex flex-wrap">
      <div
        class="nav-item mb-3"
        v-for="(n, idx) in Bicons"
        :key="idx"
        @click="changeRouter(n.router)"
        v-show="isShow"
      >
        <i :class="n.icon"></i>
        <div class="text-grey-1 py-2">{{ n.name }}</div>
      </div>
    </div>
    <div class="d-flex flex-wrap">
      <div
        class="nav-item mb-3"
        v-for="(n, idx) in Bicons.slice(0, 4)"
        :key="idx"
        @click="changeRouter(n.router)"
        v-show="!isShow"
      >
        <i :class="n.icon"></i>
        <div class="text-grey-1 py-2">{{ n.name }}</div>
      </div>
    </div>
    <div class="bg-light py-2 fs-sm d-flex jc-center ai-center">
      <i class="sprite sprite-arrow" v-show="isShow"></i>
      <i class="iconfont icon-down3" v-show="!isShow"></i>
      <span @click="isShow = !isShow">{{ isShow ? "收起" : "展开" }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Bicons: [
        {
          icon: "sprite sprite-news",
          name: "爆料站",
          router: "https://pvp.qq.com/ingame/all/tobe/home/index.shtml",
        },
        {
          icon: "sprite sprite-story",
          name: "故事站",
          router: "https://pvp.qq.com/story201904/index.html#/index",
        },
        {
          icon: "sprite sprite-shop",
          name: "周边商城",
          router: "https://pvp.qq.com/mall/m/?biz=yxzj#/",
        },
        {
          icon: "sprite sprite-try",
          name: "体验服",
          router: "https://pvp.qq.com/cp/a20161116tyf/page01.htm",
        },
        {
          icon: "sprite sprite-new",
          name: "新人专区",
          router: "https://pvp.qq.com/m/m201606/goCenter.shtml",
        },
        {
          icon: "sprite sprite-honor",
          name: "荣耀·传承",
          router: "https://pvp.qq.com/m/memory/index.shtml",
        },
        {
          icon: "sprite sprite-camp",
          name: "王者营地",
          router: "/camp",
        },
        {
          icon: "sprite sprite-chat",
          name: "公众号",
          router: "/chat",
        },
        {
          icon: "sprite sprite-edition",
          name: "版本介绍",
          router: "https://pvp.qq.com/cp/a20190320bbgxsmm/index.html",
        },
        {
          icon: "sprite sprite-news",
          name: "对局环境",
          router: "https://pvp.qq.com/cp/a20190917station/index.html",
        },
        {
          icon: "sprite sprite-new",
          name: "无限王者团",
          router: "https://pvp.qq.com/cp/a20190827boundlessp/index.html",
        },
        {
          icon: "sprite sprite-try",
          name: "创意互动营",
          router: "https://pvp.qq.com/m/hdy/p1/index.html",
        },
      ],
      isShow: true,
    };
  },
  methods: {
    changeRouter(r) {
      window.location = r;
    },
    changeHeight() {},
  },
  computed: {
    changeState() {
      return this.Bicons.slice(0, 4);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/variables";
.nav-icons {
  border: 1px solid $border-color 0;
  .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      border-right: none;
    }
  }
}
</style>
