<template>
  <div class="login">
    <a-form-model :model="form" layout="horizontal" class="login-form">
      <a-form-model-item
        label="用户"
        :labelCol="{ span: 4 }"
        :wrapperCol="{ span: 18 }"
      >
        <a-select v-model="form.name" :options="users" size="large"></a-select>
      </a-form-model-item>
      <a-form-model-item
        label="角色"
        :labelCol="{ span: 4 }"
        :wrapperCol="{ span: 18 }"
      >
        <a-select v-model="form.role" :options="roles" size="large"></a-select>
      </a-form-model-item>
      <a-form-model-item
        label="操作"
        :labelCol="{ span: 4 }"
        :wrapperCol="{ span: 18 }"
      >
        <a-button-group style="width:100%" size="large">
          <a-button @click="handleLogin" type="primary" style="width:50%;">登录</a-button>
          <a-button @click="handleRegister" style="width:50%;">注册</a-button>
        </a-button-group>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      users: [
        {
          label: "章鱼先生",
          value: "000001",
        },
        {
          label: "鳄鱼先生",
          value: "000002",
        },
      ],
      roles: [
        {
          label: "普通用户",
          value: "user",
        },
        {
          label: "管理员",
          value: "admin",
        },
      ],
      form: {
        name: "",
        role: "",
      },
    };
  },
  methods: {
    handleLogin() {

    },
    handleRegister() {
      
    },
  },
};
</script>
<style lang="less" scoped>
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
  .login-form {
    border: 1px solid #eee;
    border-radius: 24px solid #eee;
    box-shadow: 0 0 4px #ccc;
    margin: 0 auto;
    padding-top: 50px;
    width: 80%;
    height: 80%;
    font-size: 24px;
  }
}
</style>