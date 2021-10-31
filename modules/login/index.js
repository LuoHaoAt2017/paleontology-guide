import Vue from 'vue';
import App from './App.vue';
import router from './route';
import store from './store';
import andt from "antd";
Vue.use(andt);
export default new Vue({
  el: '#app',
  store: store,
  router: router,
  render(h) {
    return h(App);
  }
});