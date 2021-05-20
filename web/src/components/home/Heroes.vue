<template>
  <div>
    <m-card-list
      class="news-card"
      :categories="heroesCats"
      :icon="'icon-Menu'"
      :title="'英雄列表'"
    >
      <template #items="{ category }">
        <div class="d-flex flex-wrap" style="margin: 0 -0.5rem">
          <router-link
            tag="div"
            :to="`/heroes/${hero._id}`"
            class="p-2 text-center"
            style="width: 20%"
            v-for="(hero, i) in category.heroList"
            :key="i"
          >
            <img :src="hero.avatar" class="w-100" />
            <div>{{ hero.name }}</div>
          </router-link>
        </div>
      </template>
    </m-card-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heroesCats: [],
    };
  },
  methods: {
    async fechheroesCats() {
      let res = await this.$http.get("heroes/list");
      this.heroesCats = res.data;
    },
  },
  created() {
    this.fechheroesCats();
  },
};
</script>

<style lang="scss" scoped>
</style>
