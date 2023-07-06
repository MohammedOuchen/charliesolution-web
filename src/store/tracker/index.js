import axios from 'axios';

export default {
  namespaced: true,
  state: {
    _sensorCounts: null,
    _materials: null
  },
  mutations: {
    setSensorCounts(state, sensorCounts) {
      state._sensorCounts = sensorCounts;
    },
    setMaterials(state, materials) {
      state._materials = materials;
    }
  },
  getters: {
    sensorCounts: state => state._sensorCounts,
    materials: state => state._materials,
  },
  actions: {
    async fetchSensorCounts({ commit }) {
      try {
        const response = await axios.get('/');
        commit('setSensorCounts', response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async fetchMaterial({ commit }) {
      console.log('[fetchMaterial] => ');
      try {
        const response = await axios.get('/');
        console.log('[response] => ', response);
        commit('setMaterials', response.data);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
