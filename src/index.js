import Vue from 'vue';
import App from './App.vue';
import router from './route';
import store from './store';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);

Vue.prototype.$bus = new Vue();

const app = new Vue({
  el: '#app',
  router,
  store,
  render(h) {
    return h(App);
  }
});

export default app;