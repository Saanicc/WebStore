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
    price: 5000
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
    price(state, price) {
      state.price = price
      this.commit('priceFilter')
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
      state.filteredProducts2 = state.products
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
    priceFilter(state) {
      state.products = state.filteredProducts2.filter(
        (product) => product.price < state.price
      )
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
    isAddedToWishList(state, product) {
      for (let i = 0; i < state.products.length; i++) {
        let checkProduct = state.products[i]
        if (checkProduct.id === product.id) {
          if (checkProduct.addedToWishList === false) {
            checkProduct.addedToWishList = true
          } else {
            checkProduct.addedToWishList = false
          }
        }
      }
    }
  },
  actions: {},
  modules: {}
})
