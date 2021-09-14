<template>
  <div class="home">
    <a-button-group style="padding: 10px 0px">
      <a-button @click="visible = true">新增</a-button>
    </a-button-group>
    <a-table
      :columns="columns"
      :data-source="source"
      rowKey="id"
      bordered
      :scroll="{ y: 600 }"
    >
      <span slot="index" slot-scope="index">
        {{ index }}
      </span>
      <span slot="name" slot-scope="row">
        <span class="indent" style="display: inline-block;"  :style="{width: (row.level * 20) + 'px'}"></span>
        <span v-if="row.hasChild" class="collapse">
          <a-icon type="right" v-if="row.collapse" @click="onCollapse(row, false)"/>
          <a-icon type="down" v-else @click="onCollapse(row, true)"/>
        </span>
        <label>{{ row.title }}</label>
      </span>
      <span slot="parent" slot-scope="parent">
        {{ (parent && parent.title) || "" }}
      </span>
      <span slot="create" slot-scope="create">
        {{ create | dateFormatter }}
      </span>
      <span slot="update" slot-scope="update">
        {{ update | dateFormatter }}
      </span>
      <span slot="operation" slot-scope="id">
        <a-button type="primary" @click="handleView(id)">查看</a-button>
        <a-button type="danger" @click="handleDelete(id)">删除</a-button>
        <a-button type="default" @click="handleEdit(id)">编辑</a-button>
      </span>
    </a-table>
    <a-drawer
      :visible="visible"
      title="新增任"
      width="80%"
      :closable="true"
      @close="onCancel"
      class="add-drawer"
    >
      <a-row :gutter="[10, 20]">
        <a-col span="6"><span>任务名称</span></a-col>
        <a-col span="18"> <a-input v-model="form.title"> </a-input> </a-col>
      </a-row>
      <a-row :gutter="[10, 20]">
        <a-col span="6"> <span>父级节点</span> </a-col>
        <a-col span="18">
          <a-select v-model="form.parent" style="width: 100%">
            <a-select-option
              v-for="(item, index) in source"
              :key="index"
              :value="item.id"
            >
              {{ item.title }}
            </a-select-option>
          </a-select>
        </a-col>
      </a-row>
      <a-row class="action" justify="end">
        <a-button type="default" @click="onCancel">取消</a-button>
        <a-button type="primary" @click="onConfirm">确定</a-button>
      </a-row>
    </a-drawer>
  </div>
</template>
<script>
import { CreateTask, GetAllTask, DeleteTask } from "../apis/index";
import moment from "moment";
import Tree from "../../libs";
export default {
  name: "Home",
  filters: {
    dateFormatter(value) {
      return (value && moment(value).format("YYYY-MM-DD HH:mm")) || "";
    },
  },
  data() {
    return {
      visible: false,
      form: {
        title: "",
        parent: "",
      },
      columns: [
        {
          title: "序号",
          dataIndex: "index",
          key: "seq",
          fixed: 'left',
          width: 80,
          align: 'center',
          scopedSlots: { customRender: "index" },
        },
        {
          title: "任务名称",
          key: "name",
          width: 200,
          ellipsis: true,
          scopedSlots: { customRender: "name" },
        },
        {
          title: "父任务",
          dataIndex: "parent",
          key: "parent",
          width: 150,
          ellipsis: true,
          scopedSlots: { customRender: "parent" },
        },
        {
          title: "创建时间",
          dataIndex: "createdAt",
          key: "create",
          width: 200,
          scopedSlots: { customRender: "create" },
        },
        {
          title: "修改时间",
          dataIndex: "updatedAt",
          key: "update",
          width: 200,
          scopedSlots: { customRender: "update" },
        },
        {
          title: "任务操作",
          key: "operation",
          dataIndex: "id",
          scopedSlots: { customRender: "operation" },
        },
      ],
      source: [],
      tree: null,
    };
  },
  methods: {
    getAllTask() {
      GetAllTask()
        .then((res) => {
          this.formatData(res.data);
        })
        .catch((error) => {
          console.error(error.message);
        });
    },
    onConfirm() {
      CreateTask(this.form)
        .then(() => {
          this.getAllTask();
        })
        .catch((error) => {
          console.error(error.message);
        })
        .finally(() => {
          this.visible = false;
          this.clearForm();
        });
    },
    onCancel() {
      this.visible = false;
      this.clearForm();
    },
    clearForm() {
      this.form.title = "";
      this.form.parent = "";
    },
    handleView(id) {},
    handleDelete(id) {
      DeleteTask(id)
        .then(() => {
          this.getAllTask();
        })
        .catch((err) => {
          console.error(err.message);
        });
    },
    handleEdit(id) {},
    formatData(data) {
      const list = data.map((elem, index) => ({
        objectId: elem.id,
        parentId: elem.parent_id,
        ...elem,
      }));
      this.tree = new Tree(list);
      this.source = this.tree.getFlatData();
      console.table(this.source);
    },
    onCollapse(node, collapsed) {
      this.tree.setCollapse(node, collapsed);
      this.source = this.tree.getFlatData();
      console.table(this.source);
    }
  },
  mounted() {
    this.getAllTask();
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
</style>
<style lang="less" scoped>
.home {
  .collapse {
    font-size: 12px;
    transform: scale(0.5, 0.5);
    cursor: pointer;
  }
}
</style>