import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/register',
      name: 'Register',
      meta: {
        title: '注册'
      },
      component: () => import('../pages/register.vue'),
    },
    {
      // 开发环境下模拟登录
      path: '/login',
      name: 'Login',
      meta: {
        title: '登录'
      },
      component: () => import('../pages/login.vue')
    },
    {
      path: '/',
      redirect: '/login'
    }
  ]
});

router.beforeEach(function(to, from, next) {
  document.title = to.meta.title;
  next();
});

export default router;