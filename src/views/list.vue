<template>
  <div class="list-view">
    <a-table
      rowKey="id"
      :columns="columns"
      :data-source="source"
      :pagination="false"
      :bordered="true"
      :scroll="{
        y: scrollY,
      }"
    >
      <span slot="index" slot-scope="index">
        {{ index + 1 }}
      </span>
      <span slot="name" slot-scope="row">
        <span
          class="indent"
          style="display: inline-block"
          :style="{ width: row.level * 20 + 'px' }"
        ></span>
        <span v-if="row.hasChild" class="collapse">
          <a-icon
            type="caret-right"
            v-if="row.collapse"
            @click="onCollapse(row, false)"
          />
          <a-icon type="caret-down" v-else @click="onCollapse(row, true)" />
        </span>
        <a-button
          type="link"
          @click="handleDetail(row.id)"
          style="margin-right: 10px"
          >{{ row.title }}</a-button
        >
      </span>
      <span slot="parent" slot-scope="parent">
        <a-button type="link" @click="handleDetail(parent.id)">{{
          (parent && parent.title) || ""
        }}</a-button>
      </span>
      <span slot="create" slot-scope="create">
        {{ create | dateFormatter }}
      </span>
      <span slot="update" slot-scope="update">
        {{ update | dateFormatter }}
      </span>
      <span slot="operation" slot-scope="id">
        <a-popconfirm
          title="你确定要删除这条数据吗"
          ok-text="确定"
          cancel-text="取消"
          @confirm="handleDelete(id)"
        >
          <a-button type="danger" style="margin-right: 5px">删除</a-button>
        </a-popconfirm>
        <a-button
          type="primary"
          style="margin-right: 5px"
          @click="handleUpdate(id)"
          >编辑</a-button
        >
        <!-- <a-button
          type="default"
          style="margin-right: 5px"
          @click="handleCreate(id)"
          >新增子节点</a-button
        >
        <a-button
          type="default"
          style="margin-right: 5px"
          @click="handleUpgrade(id)"
          >升级</a-button
        >
        <a-button type="default" @click="handleDemote(id)">降级</a-button> -->
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
        <a-col span="18">
          <a-input :disabled="disabled" v-model="form.title"> </a-input>
        </a-col>
      </a-row>
      <a-row :gutter="[10, 20]">
        <a-col span="6"> <span>父级节点</span> </a-col>
        <a-col span="18">
          <a-select
            v-model="form.parentId"
            style="width: 100%"
            :disabled="disabled"
          >
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
import {
  CreateTask,
  GetAllTask,
  DeleteTask,
  UpdateTask,
  GetTaskById,
} from "../apis/index";
import moment from "moment";
import Tree from "../../libs";
export default {
  name: "ListView",
  filters: {
    dateFormatter(value) {
      return (value && moment(value).format("YYYY-MM-DD HH:mm")) || "";
    },
  },
  data() {
    return {
      visible: false,
      form: {
        id: "",
        title: "",
        parentId: "",
      },
      columns: [
        {
          title: "序号",
          dataIndex: "index",
          key: "seq",
          fixed: "left",
          width: 80,
          align: "center",
          scopedSlots: { customRender: "index" },
        },
        {
          title: "任务名称",
          key: "name",
          width: 240,
          ellipsis: true,
          scopedSlots: { customRender: "name" },
        },
        {
          title: "父任务",
          dataIndex: "parent",
          key: "parent",
          width: 200,
          ellipsis: true,
          scopedSlots: { customRender: "parent" },
        },
        {
          title: "创建时间",
          dataIndex: "createdAt",
          key: "create",
          width: 180,
          scopedSlots: { customRender: "create" },
        },
        {
          title: "修改时间",
          dataIndex: "updatedAt",
          key: "update",
          width: 180,
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
      mode: 0, // 新增,
      disabled: false,
      viewmode: 0,
      scrollY: 640
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
      if (this.mode === 0) {
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
      } else if (this.mode === 1) {
        const task = this.form;
        UpdateTask(task)
          .then(() => {
            this.getAllTask();
          })
          .catch(() => {
            this.$message.error("修改失败");
          })
          .finally(() => {
            this.visible = false;
            this.clearForm();
          });
      } else if (this.mode === 2) {
        GetAllTask()
          .then((res) => {
            this.formatData(res.data);
          })
          .catch((error) => {
            console.error(error.message);
          });
      }
    },
    onCancel() {
      this.visible = false;
      this.clearForm();
    },
    clearForm() {
      this.form.title = "";
      this.form.parentId = "";
    },
    handleDetail(id) {
      this.visible = true;
      this.mode = 2;
      this.disabled = true;
      GetTaskById(id)
        .then((res) => {
          this.form.title = res.data.title;
          this.form.parentId = res.data.parent_id;
        })
        .catch((err) => {
          this.$message.error("获取任务失败");
        });
    },
    handleDelete(id) {
      DeleteTask(id)
        .then(() => {
          this.getAllTask();
        })
        .catch((err) => {
          console.error(err.message);
        });
    },
    handleUpdate(id) {
      this.visible = true;
      this.mode = 1;
      this.disabled = false;
      GetTaskById(id)
        .then((res) => {
          this.form.id = res.data.id;
          this.form.title = res.data.title;
          this.form.parentId = res.data.parent_id;
        })
        .catch((err) => {
          this.$message.error("获取任务失败");
        });
    },
    handleCreate(id) {
      this.mode = 0;
      this.visible = true;
      this.disabled = false;
      this.form.parentId = id;
    },
    handleUpgrade(id) {
      const task = this.source.find((elem) => elem.id === id);
      if (!task) {
        return;
      }
      const parent = this.source.find(
        (elem) => elem.objectId === task.parentId
      );
      task.parentId = (parent && parent.parentId) || "";
      UpdateTask(task)
        .then(() => {
          this.getAllTask();
        })
        .catch(() => {
          this.$message.error("升级失败");
        });
    },
    handleDemote(id) {
      const index = this.source.findIndex((elem) => elem.id === id);
      if (index === -1) {
        return;
      }
      if (index === 0) {
        return;
      }
      const brother = this.source[index - 1];
      const current = this.source[index];
      if (brother.parentId === current.parentId) {
        current.parentId = brother.objectId;
        UpdateTask(current)
          .then(() => {
            this.getAllTask();
          })
          .catch(() => {
            this.$message.error("升级失败");
          });
      } else {
        this.$message.error("当前节点不允许降级");
      }
    },
    formatData(data) {
      const list = data.map((elem, index) => ({
        objectId: elem.id,
        parentId: elem.parent_id,
        ...elem,
      }));
      this.tree = new Tree(list);
      this.source = this.tree.getFlatData();
      // console.table(this.source);
    },
    onCollapse(node, collapsed) {
      this.tree.setCollapse(node, collapsed);
      this.source = this.tree.getFlatData();
      console.table(this.source);
    },
    setScrollY() {
      const height = document.querySelector(".home").getBoundingClientRect().height;
      this.scrollY = height - 54 - 54 - 20;
      window.addEventListener("resize", () => {
        const height = document.querySelector(".home").getBoundingClientRect().height;
        this.scrollY = height - 54 - 54 - 20;
      });
    },
  },
  created() {
    this.getAllTask();
  },
  mounted() {
    this.setScrollY();
  },
};
</script>
<style lang="less" scoped>
</style>