<template>
  <div class="app">
    <header>古生物漫游指南</header>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style lang="less" scoped>
.app {
  height: 100%;
  padding: 0px;
}
header {
  height: 54px;
  line-height: 54px;
  text-align: center;
  font-size: 24px;
  border-bottom: 1px solid #ddd;
}
.home {
  height: calc(100% - 54px);
  padding: 0 20px;
}
</style>