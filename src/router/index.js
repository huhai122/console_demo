/*
 * @Version: 1.0
 * @Autor: Eleven.Yi
 * @Date: 2019-12-08 10:31:09
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2020-01-16 17:14:49
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/:code',
    name: 'home',
    component: () => import('../views/activity.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
