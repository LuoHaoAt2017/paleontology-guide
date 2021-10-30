<template>
  <div class="login">
    <header>古生物指南</header>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>
<style lang="less">
.login {
  height: 100%;
  header {
    height: 54px;
    line-height: 54px;
    padding: 0 20px;
    font-size: 24px;
    font-family: "Courier New", Courier, monospace;
    text-align: center;
  }
  .ant-form-item-control {
    text-align: center;
  }
  .form {
    border: 1px solid #eee;
    border-radius: 4px;
    box-shadow: 0 0 4px #ccc;
    margin: 0 auto;
    width: 80%;
    padding: 20px;
  }
}
</style>