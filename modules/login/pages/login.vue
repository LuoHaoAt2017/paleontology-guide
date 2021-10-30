<template>
  <a-form-model
    :model="form"
    layout="horizontal"
    class="form"
    @submit="handleLogin"
  >
    <a-form-model-item style="margin-top: 24px">
      <a-input v-model="form.username" size="large">
        <a-icon slot="prefix" type="user" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item>
      <a-input v-model="form.password" size="large">
        <a-icon slot="prefix" type="lock" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item>
      <a-button-group size="large">
        <a-button html-type="submit" type="primary" :disabled="disabled"
          >登录</a-button
        >
        <a-button type="default" @click="handleRegister">注册</a-button>
      </a-button-group>
    </a-form-model-item>
  </a-form-model>
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
        username: "",
        password: "",
      },
    };
  },
  computed: {
    disabled() {
      return this.form.username === "" || this.form.password === "";
    },
  },
  methods: {
    handleLogin() {
      window.location.href = "index.html";
    },
    handleRegister() {
      this.$router.replace({
        name: "Register",
      });
    },
  },
};
</script>
<style lang="less" scoped>
form {
}
</style>