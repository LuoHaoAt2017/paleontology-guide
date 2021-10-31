<template>
  <div class="home">
    home
  </div>
</template>
<script>
export default {
  name: "Home",
  mounted() {
    const userId = this.$route.query.userId;
    if (userId) {
      this.$store.dispatch('GetUserAction', userId);
    }
  }
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