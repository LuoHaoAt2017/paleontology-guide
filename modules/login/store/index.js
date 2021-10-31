import Vue from 'vue';
import Vuex from 'vuex';
import { SET_USER_INFO } from './types';
import { Login, Register } from '../service';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: {}
  },
  getters: {},
  mutations: {
    [SET_USER_INFO](state, payload) {
      state.user = payload;
    }
  },
  actions: {
    async LoginAction({ commit }, payload) {
      try {
        const res = await Login(payload);
        return Promise.resolve(res.data);
      } catch(error) {
        return Promise.reject(error);
      }
    },
    async RegisterAction({ commit }, payload) {
      try {
        const res = await Register(payload);
        return Promise.resolve(res.data);
      } catch(error) {
        return Promise.reject(error);
      }
    }
  }
});

export default store;