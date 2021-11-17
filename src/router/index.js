import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/other',
    name: 'Other',
    component: () => import('@/views/Other.vue'),
  },
  {
    path: '/atoms',
    name: 'Atoms',
    component: () => import('@/views/Atoms.vue'),
  },
];

const router = new VueRouter({
  mode: 'history', // Убираем хэш
  routes,
});

export default router;
