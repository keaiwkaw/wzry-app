<template>
  <div class="card bg-white p-3 mt-3">
    <div class="card-header d-flex px-2 py-2 ai-center">
      <div class="d-flex flex-1 px-2">
        <i class="iconfont mr-2 d-flex ai-center" :class="icon"></i>
        <div class="text-black fs-lg flex-1">{{ title }}</div>
        <i class="iconfont mr-2 d-flex ai-center" :class="icon"></i>
      </div>
    </div>
    <div class="card-body">
      <Card-list :categories="categories">
        <template v-slot:items="category">
           <div>我是一个小插槽{{category}}</div>
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
      </Card-list>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import Tab from "components/common/Tab";
import CardList from "components/common/card/CardList";
export default {
  filters: {
    date(val) {
      return dayjs(val).format("MM/DD");
    },
  },
  props: {
    icon: {
      require: true,
      type: String,
    },
    title: {
      require: true,
      type: String,
    },
    categories: { type: Array, required: true },
  },
  components: {
    Tab,
    CardList,
  },
  data() {
    return {};
  },
  created() {
    console.log(this.categories);
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/css/variables";
.card {
  border-bottom: 1px solid $border-color;
}
</style>

