import Vue from 'vue';
import App from './App.vue';
import router from './routes';
import store from './store';
import loginAuth from './utils/auth';
import andt from "antd";

Vue.use(andt);

Vue.prototype.$bus = new Vue();

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