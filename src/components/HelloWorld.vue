<template>
  <div class="gantt-body">
    <header>
      <div class="table_head">
        <div class="table_head__cell" style="width: 60px; text-align: center">
          序号
        </div>
        <div
          v-for="(item, index) of table_cols"
          :key="index"
          class="table_head__cell"
          :class="{ show_ellipsis: show_overflow === 'ellipsis' }"
          :style="{ width: getColWidth(item.field) }"
        >
          <div class="table_head__cell_column">{{ item.title }}</div>
          <div class="table_head__cell_suffix"></div>
          <div class="table_head__cell_handle"></div>
        </div>
      </div>
      <div class="chart_head"></div>
    </header>
    <main>
      <div class="table_body">
        <div v-for="(row, i) of table_data" :key="i" class="table_body__row">
          <div
            class="table_body__row__cell"
            style="width: 60px; text-align: center"
          >
            <span>{{ i + 1 }}</span>
          </div>
          <div
            v-for="(value, key) in row"
            :key="key"
            class="table_body__row__cell"
            :class="{ show_ellipsis: show_overflow === 'ellipsis' }"
            :style="{ width: getColWidth(key) }"
            v-if="table_cols.find((col) => col.field === key)"
          >
            <div
              class="table_body__row__cell_before"
              v-if="key === 'seq'"
            ></div>
            <div class="table_body__row__cell_content">{{ value }}</div>
            <div class="table_body__row__cell_menu"></div>
            <div class="table_body__row__cell_handle"></div>
          </div>
        </div>
      </div>
      <div class="chart_body"></div>
    </main>
    <div class="divider"></div>
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  props: {
    table_cols: {
      required: true,
      default: () => [],
    },
    table_data: {
      required: true,
      default: () => [],
    },
    show_overflow: {
      required: false,
      default: "ellipsis",
    },
    col_width: {
      required: false,
      default: "120px",
    },
    min_width: {
      required: false,
      default: "60px",
    },
    max_width: {
      required: false,
      default: "320px",
    },
  },
  computed: {
    displayRow(key) {
      return !!this.table_cols.find((col) => col.field === key);
    },
  },
  methods: {
    getColWidth(field) {
      const cols = this.table_cols;
      // console.log('field', field);
      // console.log('cols', cols);
      const col = cols.find((col) => col.field === field);
      if (field === "title") {
        console.log("title cols", col);
      }
      return col && col.width ? col.width + "px" : "120px";
    },
  },
};
</script>
<style lang="less" scoped>
.gantt-body {
  height: 100%;
  padding: 0px;
  position: relative;
  border: 1px solid #eee;
  border-radius: 4px;
  header {
    width: 100%;
    height: 56px;
    top: 0px;
    position: sticky;
    display: flex;
    align-items: center;
    background: #ffffff;
    opacity: 1;
    z-index: 2;
    border-bottom: 1px solid #eee;
    .table_head {
      flex-grow: 1;
      display: flex;
      align-items: center;
      height: 100%;
      font-size: 14px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      &__cell {
        height: 100%;
        display: flex;
        align-items: center;
        color: #304265;
        line-height: 22px;
        padding-left: 12px;
        padding-right: 12px;
        box-sizing: border-box;
        border-right: 1px solid #eee;
        position: relative;
        &:last-child {
          border-right: none;
        }
        &_column {
        }
        &_suffix {
        }
        &_handle {
          width: 1px;
          height: 100%;
          cursor: col-resize;
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0px;
        }
      }
    }
    // .chart_head {
    //   min-width: 400px;
    //   height: 100%;
    //   border-left: 1px solid #eee;
    //   background-color: aquamarine;
    // }
  }
  main {
    overflow-x: hidden;
    overflow-y: auto;
    position: relative;
    display: flex;
    width: 100%;
    .table_body {
      width: 100%;
      overflow-x: auto;
      &__row {
        width: auto;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: stretch;
        border-bottom: 1px solid #eee;
        &:last-child {
          border-bottom: none;
        }
        &__cell {
          display: flex;
          align-items: center;
          border-right: 1px solid #eee;
          padding: 12px 12px;
          max-width: 320px;
          box-sizing: border-box;
          position: relative;
          &.show_ellipsis {
          }
          &_content {
            white-space: nowrap;
            overflow-x: hidden;
            text-overflow: ellipsis;
          }
          &:last-child {
            border-right: none;
          }
          &_handle {
            width: 1px;
            height: 100%;
            cursor: col-resize;
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0px;
          }
        }
      }
    }
    // .chart_body {
    //   min-width: 400px;
    //   border-left: 1px solid #eee;
    //   background-color: aquamarine;
    // }
    .divider {
      position: absolute;
    }
  }
}
</style>