import Vue from 'vue'
import Vuex from 'vuex'
import Data from "../../public/data.json"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart:[],
    searchQuery: null,
    products: Data.phones,
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
    addToCart(state, product){
      if (state.cart.includes(product)){
        console.log("producten finns redan")
      }
      else{
        state.cart.push(product);
      }
    },
    removeFromCart(state,product){
      for (let i = 0; i<state.cart.length;i++){
        if (state.cart[i].id === product.id){
          state.cart.splice(i,1)
          break;
        }
      }
    }
  },
  actions: {
  },
  modules: {
  }
})