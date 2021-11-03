<template>
  <a-form-model
    id="loginForm"
    layout="horizontal"
    class="form"
    :model="form"
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
import { message } from 'antd';
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "luohao",
        password: "12345",
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
      this.$store.dispatch('LoginAction', {
        username: this.form.username,
        password: this.form.password,
      }).then((resp) => {
        window.location.href = `index.html#/home?userId=${resp.id}`;
      }).catch((err) => {
        message.error(err.message);
      });
    },
    handleRegister() {
      this.$router.replace({
        name: "Register",
      });
    },
  },
  created() {
    this.form.username = this.$route.query.username || 'luohao';
  }
};
</script>
<style lang="less" scoped>
.form {
}
</style>