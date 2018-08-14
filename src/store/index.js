import Vue from 'vue';
import Vuex from 'vuex';
import TabPage from './TabPage';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    TabPage,
  },
});
