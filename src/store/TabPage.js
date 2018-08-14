/* eslint no-shadow: ["error", { "allow": ["state"] }] */

const state = {
  type: 'file',
};
const getter = {};
const mutations = {
  getType(state, type) {
    return state.type === type;
  },
  setType(state, type) {
    state.type = type;
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
