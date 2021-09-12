import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/home',
      meta: {
        title: 'Home'
      },
      component: () => import('../pages/home.vue')
    },
    {
      path: '/about',
      meta: {
        title: 'About'
      },
      component: () => import('../pages/about.vue')
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