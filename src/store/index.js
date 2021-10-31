import Vue from 'vue';
import Vuex from 'vuex';
import { GetUserInfo } from '../apis';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {}
  },
  getters: {},
  mutations: {
    SetUserInfo(state, payload) {
      state.userInfo = payload;
    }
  },
  actions: {
    async GetUserAction({commit}, payload) {
      try {
        const res = await GetUserInfo(payload);
        commit('SetUserInfo', res.data);
        return Promise.resolve(res.data);
      } catch(error) {
        return Promise.reject(error);
      }
    }
  }
});