import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: () => import('../pages/home.vue'),
      children: [
        {
          path: 'listview',
          name: 'ListView',
          meta: {
            title: '列表视图',
            roles: ['user', 'admin'],
          },
          component: () => import('../views/list.vue'),
        },
        {
          path: 'treeview',
          name: 'TreeView',
          meta: {
            title: '树形视图',
            roles: ['admin']
          },
          component: () => import('../views/tree.vue'),
        },
        {
          path: 'timeview',
          name: 'TimeView',
          meta: {
            title: '时间视图',
            roles: ['admin']
          },
          component: () => import('../views/time.vue'),
        },
        {
          path: '',
          redirect: 'listview'
        }
      ]
    },
    {
      path: '/about',
      name: 'About',
      meta: {
        title: '关于'
      },
      component: () => import('../pages/about.vue')
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
      redirect: '/home'
    }
  ]
});

router.beforeEach(function(to, from, next) {
  document.title = to.meta.title;
  next();
});

export default router;