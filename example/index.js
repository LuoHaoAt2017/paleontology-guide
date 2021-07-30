import Vue from 'vue';
import App from './App';
import TreeList from 'luohao-tree-list';
Vue.use(TreeList);
new Vue({
  el: '#app',
  render(h) {
    return h(App)
  }
});