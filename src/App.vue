<template>
  <div class="app">
    <header>
      <label>古生物指南</label>
      <a-badge :count="1">
        <a-avatar shape="square" icon="user" />
      </a-badge>
    </header>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>
<style lang="less" scoped>
.app {
  height: 100%;
  padding: 0px;
}
header {
  height: 54px;
  padding: 0 20px;
  font-size: 24px;
  font-family: "Courier New", Courier, monospace;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    height: 54px;
    width: auto;
  }
}
.home {
  height: calc(100% - 54px);
  padding: 0 20px;
}
</style>