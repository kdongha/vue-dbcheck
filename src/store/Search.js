import axios from 'axios';

const server = 'http://106.246.247.116';
const port = '3100';

const state = {
  result: '',
  isLoading: false,
};
const getter = {};
const mutations = {
  parseJson(state, json) {
    state.result = json;
  },
};
const actions = {
  sendFile({ state, commit }, file) {
    const url = `${server}:${port}/file`;
    const formData = new FormData();
    formData.append('file', file);
    state.isLoading = true;
    axios({
      method: 'post',
      url,
      data: formData,
      config: { headers: { 'Content-Type': 'multipart/form-data' } },
    })
      .then((response) => {
        commit('parseJson', response.data);
        state.isLoading = false;
      })
      .catch(error => console.log(`error: ${error}`));
  },
  sendHash({ commit }, key) {
    const url = `${server}:${port}/hash`;
    axios
      .get(url, { params: { key } })
      .then((response) => {
        commit('parseJson', response.data);
      })
      .catch(error => console.log(`error: ${error}`));
  },
  sendUrl({ commit }, key) {
    const url = `${server}:${port}/url`;
    axios
      .get(url, { params: { key } })
      .then((response) => {
        commit('parseJson', response.data);
      })
      .catch(error => console.log(`error: ${error}`));
  },
};
export default {
  namespaced: true,
  state,
  getter,
  mutations,
  actions,
};
