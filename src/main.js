/* eslint-disable no-extend-native */
/*
 * @Description:
 * @Author: Eleven.Yi
 * @Date: 2019-12-09 10:04:47
 * @LastEditTime: 2020-03-19 18:52:18
 */
import Vue from 'vue';
import VueLazyload from 'vue-lazyload';
import App from './App.vue';
import router from './router';
import store from './store';
import toastMessage from '@/plugins/ToastMessage'; // message 提示消息插件


Vue.config.productionTip = false;
Vue.use(VueLazyload)
  .use(toastMessage);


String.prototype.myQueryUrlParameter = function myQueryUrlParameter() {
  const reg = /[?&]([^?&=]+)(?:=([^?&=]*))?/g;
  const obj = {};
  this.replace(reg, (...arg) => {
    const [, key, value] = arg;
    obj[key] = decodeURIComponent(value); //= > 此处获取的时候可以进行解码
  });
  return obj;
};

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
