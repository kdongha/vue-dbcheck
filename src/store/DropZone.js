const state = {
  file: null,
};
const getter = {};
const mutations = {
  setFile(state, file) {
    state.file = file;
    console.log(state.file);
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
