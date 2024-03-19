// store.js
//状态管理
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 在这里定义全局状态
    lastButtonId: null,
    lastPlayermp3: null,
  },
  mutations: {
    // 在这里定义修改状态的方法
    setLastButtonId(state, buttonId) {
      state.lastButtonId = buttonId;
    },
    setPlayermp3(state, playermp3) {
      state.lastPlayermp3 = playermp3;
    },
  },

});
