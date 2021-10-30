import Vue from 'vue';
import App from './App.vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { message } from 'ant-design-vue';
import router from './route/index';

Vue.use(Antd);

Vue.prototype.$message = message;

export default new Vue({
  el: '#app',
  router: router,
  render(h) {
    return h(App);
  }
});