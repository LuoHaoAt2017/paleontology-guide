<template>
  <div class="home">
    <div class="action">
      <a-button-group style="padding: 10px 0px">
        <a-button @click="handleCreate" type="primary" icon="plus"
          >新增</a-button
        >
        <a-button @click="handleRefresh" type="default" icon="reload"
          >刷新</a-button
        >
      </a-button-group>
      <a-button-group>
        <a-button :class="{ active: viewmode === 0 }" @click="viewmode = 0"
          >列表视图</a-button
        >
        <a-button :class="{ active: viewmode === 1 }" @click="viewmode = 1"
          >树状视图</a-button
        >
        <a-button :class="{ active: viewmode === 2 }" @click="viewmode = 2"
          >时间视图</a-button
        >
      </a-button-group>
    </div>
    <div class="views">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  watch: {
    viewmode(value) {
      switch (value) {
        case 0:
          this.$router.push({
            name: "ListView",
          });
          break;
        case 1:
          this.$router.push({
            name: "TreeView",
          });
          break;
        case 2:
          this.$router.push({
            name: "TimeView",
          });
          break;
        default:
          this.$router.push({
            name: "ListView",
          });
      }
    },
  },
  data() {
    return {
      viewmode: 0,
    };
  },
  methods: {
    handleCreate() {},
    handleRefresh() {},
  },
};
</script>
<style lang="less">
.add-drawer {
  .ant-drawer-body {
    height: calc(100% - 55px);
    .action {
      position: absolute;
      bottom: 20px;
      right: 20px;
    }
  }
}
.home {
  .ant-table-tbody > tr > td {
    padding: 8px 16px;
  }
}
</style>
<style lang="less" scoped>
.home {
  .action {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .collapse {
    font-size: 12px;
    transform: scale(0.5, 0.5);
    cursor: pointer;
  }
}
</style>