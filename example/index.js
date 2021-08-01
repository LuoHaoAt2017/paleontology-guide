import Vue from 'vue';
import Antd from 'ant-design-vue';
import App from './App';
import '../mocks/index';
import axios from './utils/fetch';
import TreeList from 'luohao-tree-list';
import "ant-design-vue/dist/antd.css";

Vue.prototype.$axios = axios;
Vue.use(Antd);
Vue.use(TreeList);

new Vue({
  el: '#app',
  render(h) {
    return h(App)
  }
});