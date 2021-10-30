<template>
  <div class="app">
    <header>
      <img :src="photos[0].src" :alt="photos[0].alt">
      <label>古生物指南</label>
      <a-badge :count="1">
        <a-avatar shape="square" :src="photos[1].src" :alt="photos[1].alt" />
      </a-badge>
    </header>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      photos: [
        {
          src: require("@/assets/jpg/timeline-evolution-of-life.jpg").default,
          alt: "timeline-evolution-of-life.jpg",
        },
        {
          src: require("@/assets/jpg/octopus.jpg").default,
          alt: "octopus",
        }
      ],
    };
  },
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