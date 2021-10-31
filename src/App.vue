<template>
  <div class="app">
    <header>
      <a-icon type="zhihu" />
      <label>古生物指南</label>
      <a-badge :count="1">
        <a-popover trigger="hover" placement="bottomLeft">
          <template slot="title">
            <label>{{ userInfo.username }}</label>
          </template>
          <template slot="content">
            <p>Content</p>
            <p>Content</p>
          </template>
          <a-avatar shape="square" icon="user" style="cursor:pointer;"/>
        </a-popover>
      </a-badge>
    </header>
    <router-view></router-view>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: "App",
  computed: mapState({
    userInfo: (state) => state.userInfo
  })
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