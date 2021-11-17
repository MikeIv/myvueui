import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('@/views/Demo.vue'),
  },
  {
    path: '/atoms',
    name: 'atoms',
    component: () => import('@/views/Atoms.vue'),
  },
];

const router = new VueRouter({
  mode: 'history', // Убираем хэш
  routes,
});

export default router;
