import axios from 'axios';

const server = 'http://106.246.247.116';
const port = '3100';

const state = {
  isLoading: false,
  showDB: '',
  hsb: null,
  mdb: null,
  pdb: null,
  environments: [
    'Win',
    'Doc',
    'Java',
    'Andr',
    'Multios',
    'Txt',
    'Xls',
    'Osx',
    'Html',
    'Unix',
    'Pdf',
    'Email',
    'Swf',
    'Rtf',
    'Php',
    'Xml',
    'Archive',
    'Img',
    'Js',
    'Ppt',
    'Gif',
    'Mp4',
    'W32S',
    'Legacy',
  ],
  categories: [
    'Trojan',
    'Adware',
    'Dropper',
    'Malware',
    'Virus',
    'Downloader',
    'Spyware',
    'Packed',
    'Worm',
    'Tool',
    'Ransomware',
    'keylogger',
    'Phishing',
    'Exploit',
    'Proxy',
    'Joke',
  ],
  params: {},
  lineData: {},
  doughnutData: {},
};
const getter = {};
const mutations = {
  resetData(state) {
    state.lineData = { db: {}, category: {}, environment: {} };
    state.doughnutData = { db: {}, category: {}, environment: {} };
  },
  parseStatistic(state, json) {
    Object.keys(json.db).forEach((element) => {
      if (json.db[element].total > 0) {
        state.doughnutData.db[element] = json.db[element].total;
        state.lineData.db[element] = json.db[element].detail;
      }
    });
    Object.keys(json.category).forEach((element) => {
      if (json.category[element].total > 0) {
        state.doughnutData.category[element] = json.category[element].total;
        state.lineData.category[element] = json.category[element].detail;
      }
    });
    Object.keys(json.environment).forEach((element) => {
      if (json.environment[element].total > 0) {
        state.doughnutData.environment[element] =
          json.environment[element].total;
        state.lineData.environment[element] = json.environment[element].detail;
      }
    });
  },
  setParams(state, payload) {
    state.params = payload;
  },
  parsePage(state, payload) {
    state[payload.db] = payload.json[payload.db];
  },
  setShowDB(state, db) {
    state.showDB = db;
  },
};
const actions = {
  sendScanDB({ state, commit, dispatch }, payload) {
    state.isLoading = true;
    const url = `${server}:${port}/statistic`;
    const params = {
      env: '',
      category: '',
      startDate: '2018-07-05',
      endDate: new Date(),
    };
    payload.environments.forEach((element) => {
      if (params.env !== '') {
        params.env += ':';
      }
      params.env += element;
    });
    payload.categories.forEach((element) => {
      if (params.category !== '') {
        params.category += ':';
      }
      params.category += element;
    });
    if (payload.startDate) {
      params.startDate = payload.startDate;
    }
    if (payload.endDate) {
      params.endDate = payload.endDate;
    }
    commit('setParams', params);
    axios
      .get(url, {
        params,
      })
      .then((response) => {
        commit('resetData');
        commit('parseStatistic', response.data);
        Object.keys(state.doughnutData.db).forEach((element) => {
          if (state.doughnutData.db[element] > 0) {
            dispatch('sendPage', { db: element, page: 1 });
          }
        });
      })
      .catch(error => console.log(`error: ${error}`));
  },
  sendPage({ state, commit }, payload) {
    const url = `${server}:${port}/${payload.db}`;
    axios
      .get(url, {
        params: {
          ...state.params,
          page: payload.page,
        },
      })
      .then((response) => {
        commit('parsePage', { db: payload.db, json: response.data });
        state.isLoading = false;
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
