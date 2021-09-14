import Vue from 'vue';
import App from './App.vue';
import router from './route';
import store from './store';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { message } from 'ant-design-vue';

Vue.use(Antd);

Vue.prototype.$bus = new Vue();

Vue.prototype.$message = message;

const app = new Vue({
  el: '#app',
  router,
  store,
  render(h) {
    return h(App);
  }
});

export default app;