<template>
  <a-form-model :model="form" layout="horizontal" class="form" @submit="handleRegister">
    <a-form-model-item style="margin-top: 24px;">
      <a-input v-model="form.username" size="large">
        <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item>
      <a-input v-model="form.password" size="large">
        <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item>
      <a-button-group size="large">
        <a-button html-type="submit" type="primary" :disabled="disabled">注册</a-button>
        <a-button type="default" @click="handleLogin">登录</a-button>
      </a-button-group>
    </a-form-model-item>
  </a-form-model>
</template>
<script>
export default {
  name: "Register",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  computed: {
    disabled() {
      return this.form.username === '' || this.form.password === ''
    }
  },
  methods: {
    handleLogin() {
      this.$router.replace({
        name: 'Login'
      });
    },
    handleRegister() {
      this.$router.replace({
        name: 'Login',
        params: {}
      });
    },
  },
};
</script>
<style lang="less" scoped>
</style>