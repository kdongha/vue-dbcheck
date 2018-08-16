import axios from 'axios';

const server = 'http://106.246.247.116';
const port = '3100';

const state = {
  file: null,
};
const getter = {};
const mutations = {
  setFile(state, file) {
    state.file = file;
  },
};
const actions = {};
export default {
  namespaced: true,
  state,
  getter,
  mutations,
  actions,
};
