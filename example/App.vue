<template>
  <div class="app">
    <hello-world :table_cols="grid_cols" :table_data="grid_data"></hello-world>
  </div>
</template>
<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      grid_cols: [],
      grid_data: [],
    };
  },
  methods: {
    getGanttData() {
      this.$axios
        .request({
          url: "/getTreeCols",
          method: "GET",
        })
        .then((res) => {
          this.grid_cols = res;
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
      this.$axios
        .request({
          url: "/getTreeData",
          method: "GET",
        })
        .then((res) => {
          this.grid_data = res;
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  mounted() {
    this.getGanttData();
  },
};
</script>