<template>
  <div>
    <div class="wrapper">
      <BackButton />
      <div id="wishList-heading">
        <h1>Önskelista</h1>
      </div>
      <div>
        <b-card-group deck v-for="product in wishList" :key="product.id">
          <b-card
            no-body
            class="overflow-hidden shadow-sm p-3 mb-5 bg-white rounded"
          >
            <b-row no-gutters>
              <b-col sm="4">
                <router-link
                  :to="{
                    path: '/product/' + product.name,
                    query: {
                      item: product
                    }
                  }"
                >
                  <b-card-img
                    :src="product.img[0]"
                    :alt="product.name"
                    class="rounded-0"
                  >
                  </b-card-img>
                </router-link>
              </b-col>
              <b-col sm="4">
                <b-card-body>
                  <b-card-title>{{ product.name }}</b-card-title>
                </b-card-body>
              </b-col>
              <b-col sm="2" align-self="center">
                <b-button
                  pill
                  class="add-to-cart-btn"
                  @click="addToCart(product)"
                  variant="submit"
                >
                  <b-icon icon="cart4" font-scale="1.3"></b-icon>
                </b-button>
              </b-col>
              <b-col sm="2" align-self="center">
                <b-button
                  pill
                  class="remove-btn"
                  @click="removeFromWishList(product)"
                  variant="danger"
                >
                  <b-icon icon="trash" font-scale="1.3"></b-icon>
                </b-button>
              </b-col>
            </b-row>
          </b-card>
        </b-card-group>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
  import BackButton from '../components/BackButton.vue'
  import Footer from '../components/Footer.vue'
  export default {
    name: 'WishList',
    components: { Footer, BackButton },
    created() {
      this.products = this.$store.state.products
    },
    data() {
      return {
        products: null
      }
    },
    computed: {
      wishList() {
        return this.products.filter((product) => product.addedToWishList)
      }
    },
    methods: {
      removeFromWishList(product) {
        this.$store.commit('isAddedToWishList', product)
      },
      addToCart(product) {
        this.$store.commit('addToCart', product)
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    padding-top: 100px;
    min-height: 100vh;
    max-width: 600px;
    margin: 0 auto;
  }

  #favorites-heading {
    margin: 12px;
  }

  .card {
    display: flex;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 20px;
  }

  .rm-btn {
    align-items: center;
    justify-content: center;
    display: flex;
  }

  @media screen and (min-width: 575px) {
    .button {
      display: grid;
      grid-template-columns: auto auto;
    }
  }
</style>
