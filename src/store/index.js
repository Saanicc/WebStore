import Vue from 'vue'
import Vuex from 'vuex'
import Data from '../../public/data.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    filteredProducts: [],
    products: Data.phones,
    searchQuery: null,
    wishList: []
  },
  mutations: {
    filterProductsByCategory(state, filteredProducts) {
      state.filteredProducts = filteredProducts
      if (state.filteredProducts.length > 0 && !state.searchQuery) {
        this.commit('checkboxFilter')
      } else {
        if (!state.searchQuery) {
          state.products = Data.phones
        } else {
          this.commit('lettersFilter')
        }
      }
    },
    searchQuery(state, searchQuery) {
      state.searchQuery = searchQuery
      if (state.searchQuery) {
        this.commit('lettersFilter')
      } else {
        if (state.filteredProducts.length < 1) {
          state.products = Data.phones
        } else {
          this.commit('checkboxFilter')
        }
      }
    },
    checkboxFilter(state) {
      state.products = Data.phones.filter((product) => {
        return state.filteredProducts.find((c) => product.name.match(c))
      })
    },
    lettersFilter(state) {
      state.products = Data.phones.filter((product) => {
        return state.searchQuery
          .toLowerCase()
          .split(' ')
          .every((c) => product.name.toLowerCase().includes(c))
      })
    },
    addToCart(state, product) {
      if (state.cart.includes(product)) {
        product.quantity += 1
      } else {
        product.quantity = 1
        state.cart.push(product)
      }
    },
    removeFromCart(state, product) {
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id === product.id) {
          state.cart.splice(i, 1)
          break
        }
      }
    },
    clearCart(state) {
      state.cart = []
    },
    addToWishList(state, product) {
      state.wishList.push(product)
    },
    removeFromWishList(state, product) {
      console.log(state.wishList)
      for (let i = 0; i < state.wishList.length; i++) {
        if (state.wishList[i].id === product.id) {
          state.wishList.splice(i, 1)
        }
      }
    }
  },
  actions: {},
  modules: {}
})
