import Vue from 'vue';
import App from './App.vue';
import router from './route/index';
import andt from "antd";
Vue.use(andt);
export default new Vue({
  el: '#app',
  router: router,
  render(h) {
    return h(App);
  }
});