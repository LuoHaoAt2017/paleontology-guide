import Vue from 'vue';
import App from './App.vue';
import router from './route';
import store from './store';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { message } from 'ant-design-vue';
import './styles/fontawesome.css';
import loginAuth from './utils/auth';

Vue.use(Antd);

Vue.prototype.$bus = new Vue();

Vue.prototype.$message = message;

(async () => {
  const loggined = await loginAuth();
  if (loggined) {
    const app = new Vue({
      router,
      store,
      render(h) {
        return h(App);
      }
    });
    app.$mount('#app');
  } else {
    window.location.replace('/login.html');
  }
})();