import Vue from 'vue';
import Vuex from 'vuex';
import TabPage from './TabPage';
import Search from './Search';
import ScanDB from './ScanDB';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    TabPage,
    Search,
    ScanDB,
  },
});
