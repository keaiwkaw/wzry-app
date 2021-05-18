<template>
  <div class="py-2 pb-2" :class="{ 'bg-primary': isPrimary }">
    <div
      class="nav jc-around"
      :class="{ 'nav-inverse': isPrimary, 'text-black': isPrimary }"
    >
      <div
        class="nav-item pb-1"
        v-for="(item, idx) in dataList"
        :key="idx"
        :class="{ active: idx === 0 }"
      >
        <router-link to="/" tag="div" class="nav-link">{{
          item.name
        }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["isPrimary", "dataList"],
};
</script>

<style lang="scss" scoped>
</style>
