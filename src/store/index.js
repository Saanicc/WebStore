import Vue from 'vue'
import Vuex from 'vuex'
import Data from '../../public/data.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    filteredProducts: [],
    filteredProducts2: [],
    products: Data.products,
    searchQuery: null,
    wishList: []
  },
  mutations: {
    filterProductsByCategory(state, filteredProducts) {
      state.filteredProducts = filteredProducts
      state.lettersFilter2 = filteredProducts
      this.commit('filterOptions')
    },
    searchQuery(state, searchQuery) {
      state.searchQuery = searchQuery
      this.commit('filterOptions')
    },
    checkboxFilter(state) {
      state.products = Data.products.filter((product) => {
        return state.filteredProducts.find((c) => product.brand.match(c))
      })
      state.filteredProducts2 = state.products
    },
    lettersFilter(state) {
      state.products = Data.products.filter((product) => {
        return state.searchQuery
          .toLowerCase()
          .split(' ')
          .every((c) => product.name.toLowerCase().includes(c))
      })
    },
    lettersFilter2(state) {
      this.commit('checkboxFilter')
      state.products = state.filteredProducts2.filter((product) => {
        return state.searchQuery
          .toLowerCase()
          .split(' ')
          .every((c) => product.name.toLowerCase().includes(c))
      })
    },
    filterOptions(state) {
      if (state.filteredProducts.length > 0 && !state.searchQuery) {
        this.commit('checkboxFilter')
      } else if (state.filteredProducts.length < 1 && state.searchQuery) {
        this.commit('lettersFilter')
      } else if (state.filteredProducts.length > 0 && state.searchQuery) {
        this.commit('lettersFilter2')
      } else if (state.filteredProducts.length < 1 && !state.searchQuery) {
        state.products = Data.products
      }
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
