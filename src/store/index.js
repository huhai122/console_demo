import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    show: false,
  },
  mutations: {
    changeShow(state, param) {
      state.show = param;
    },
  },
  actions: {
  },
  modules: {
  },
});
