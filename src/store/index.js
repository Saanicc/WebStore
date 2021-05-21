import Vue from 'vue'
import Vuex from 'vuex'
import Data from "../../public/data.json"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchQuery: null,
    products: Data.phones
  },
  mutations: {
    searchQuery(state, searchQuery){
      state.searchQuery = searchQuery
      if (state.searchQuery) {
        state.products = Data.phones.filter(product => {
          return state.searchQuery
            .toLowerCase()
            .split(" ")
            .every(c => product.name.toLowerCase().includes(c));
        });
      } else {
        state.products = Data.phones;
      }
    },
  },
  actions: {
  },
  modules: {
  }
})
