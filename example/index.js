import Vue from 'vue';
import App from './App';
import '../mocks/index';
import axios from './utils/fetch';
import TreeList from 'luohao-tree-list';

Vue.prototype.$axios = axios;

Vue.use(TreeList);

new Vue({
  el: '#app',
  render(h) {
    return h(App)
  }
});