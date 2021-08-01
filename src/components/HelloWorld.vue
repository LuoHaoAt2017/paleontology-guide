<template>
  <div class="gantt-body">
    <header>
      <div class="table_head">
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
            v-for="(value, key) in row"
            :key="key"
            class="table_body__row__cell"
            :class="{ show_ellipsis: show_overflow === 'ellipsis' }"
            :style="{ width: getColWidth(key) }"
          >
            <div class="table_body__row__cell_before" v-if="key === 'title'">
              <label class="seq">{{ i + 1 }}</label>
            </div>
            <div class="table_body__row__cell_content">{{ value }}</div>
            <div class="table_body__row__cell_menu" v-if="key === 'title'">
              <a-popover placement="bottomLeft" :mouseLeaveDelay="0.25">
                <template slot="content">
                  <a-list size="small">
                    <a-list-item>新增数据</a-list-item>
                    <a-list-item>新增子数据</a-list-item>
                    <a-list-item>标记为里程碑</a-list-item>
                    <a-list-item>升级</a-list-item>
                    <a-list-item>降级</a-list-item>
                    <a-list-item>删除</a-list-item>
                  </a-list>
                </template>
                <i class="h3yun_All ellipsis-o"></i>
              </a-popover>
            </div>
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
import { Tooltip, List, Popover, Button } from "ant-design-vue";
export default {
  name: "HelloWorld",
  components: {
    AButton: Button,
    AList: List,
    AListItem: List.Item,
    ATooltip: Tooltip,
    APopover: Popover,
  },
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
  data() {
    return {
      icons: [
        {
          src: require("@/assets/svg/more-o.svg"),
          alt: "more",
        },
      ],
    };
  },
  methods: {
    getColWidth(field) {
      const cols = this.table_cols;
      const col = cols.find((col) => col.field === field);
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
      display: flex;
      align-items: center;
      height: 100%;
      font-size: 14px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      overflow-x: auto;
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
    //   width: 400px;
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
      overflow: auto;
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
          &_before {
            .seq {
            }
            margin-right: 10px;
          }
          &_content {
            white-space: nowrap;
            overflow-x: hidden;
            text-overflow: ellipsis;
            margin-right: 10px;
          }
          &_menu {
            margin: 0 5px;
            cursor: pointer;
            position: absolute;
            right: 2px;
            i {
              transform: rotate(90deg);
              -ms-transform: rotate(90deg);
              -webkit-transform: rotate(90deg);
            }
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
          &:last-child {
            border-right: none;
          }
        }
      }
    }
    // .chart_body {
    //   width: 400px;
    //   border-left: 1px solid #eee;
    //   background-color: aquamarine;
    // }
    .divider {
      position: absolute;
    }
  }
  .divider {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 2px;
    background: red;
    z-index: 3;
  }
}
</style>