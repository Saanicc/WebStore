import Vue from 'vue'
import Vuex from 'vuex'
import Data from '../../public/data.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    filteredProducts: [],
    filteredProducts2: [],
    products: Data.products.map((product) => {
      product.f = () => {}
      return product
    }),
    searchQuery: null,
    sortBy: null,
    price: 20000
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
      state.filteredProducts2 = state.products
    },
    priceFilter(state) {
      if (state.filteredProducts2.length > 0) {
        state.products = state.filteredProducts2.filter(
          (product) => product.price < state.price
        )
      } else {
        state.products = Data.products.filter(
          (product) => product.price < state.price
        )
      }
    },
    sortDropDown(state, sortBy) {
      state.sortBy = sortBy
      if (state.filteredProducts2.length > 0) {
        state.products = state.filteredProducts2.sort((a, b) => {
          if (typeof a[sortBy] !== 'string') {
            return a[sortBy] > b[sortBy] ? 1 : -1
          } else {
            return a[sortBy].toLowerCase() > b[sortBy].toLowerCase() ? 1 : -1
          }
        })
      } else {
        state.products = Data.products.sort((a, b) => {
          if (typeof a[sortBy] !== 'string') {
            return a[sortBy] > b[sortBy] ? 1 : -1
          } else {
            return a[sortBy].toLowerCase() > b[sortBy].toLowerCase() ? 1 : -1
          }
        })
      }
      this.commit('priceFilter')
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
        state.filteredProducts2 = []
      }
      this.commit('sortDropDown', state.sortBy)
    },
    addToCart(state, product) {
      const cartItem = state.cart.find(
        (cartItem) =>
          product.id === cartItem.id && product.color === cartItem.color
      )

      if (cartItem) {
        cartItem.quantity++
      } else {
        product.quantity = 1
        state.cart.push({ ...product })
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
    },
    addReview(state, product) {
      for (let i = 0; i < state.products.length; i++) {
        var checkProduct = state.products[i]
        if (checkProduct.id === product.id) {
          checkProduct.reviews.push(product.reviews[product.reviews.length - 1])
        }
      }
    }
  },
  actions: {},
  modules: {}
})
