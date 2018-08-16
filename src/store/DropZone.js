import axios from 'axios';

const server = 'http://106.246.247.116';
const port = '3100';

const state = {
  file: null,
};
const getter = {};
const mutations = {};
const actions = {
  sendFile({ commit }, file) {
    const url = `${server}:${port}/file`;
    const formData = new FormData();
    formData.append('file', file);
    axios({
      method: 'post',
      url,
      data: formData,
      config: { headers: { 'Content-Type': 'multipart/form-data' } },
    })
      .then((response) => {
        console.log(response.data);
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
