<template>
  <div>
    <div class="wrapper">
      <div class="back-btn">
        <router-link to="/" id="back-btn">Tillbaka</router-link>
      </div>
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
              <b-col sm="5">
                <b-card-img
                  :src="product.img[0]"
                  :alt="product.name"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
              <b-col sm="5">
                <b-card-body>
                  <b-card-title>{{ product.name }}</b-card-title>
                </b-card-body>
              </b-col>
              <b-col sm="1" align-self="center">
                <b-button
                  pill
                  class="add-to-cart-btn"
                  @click="addToCart(product)"
                  variant="submit"
                >
                  <b-icon icon="cart4" font-scale="1.3"></b-icon>
                </b-button>
              </b-col>
              <b-col sm="1" align-self="center">
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
  import Footer from '../components/Footer.vue'
  export default {
    name: 'WishList',
    components: { Footer },
    created() {
      this.products = this.$store.state.products
      console.log(this.products)
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
    height: 100vh;
  }

  #favorites-heading {
    margin: 12px;
  }

  #back-btn {
    display: flex;
    text-align: left;
    margin-left: 2.5em;
    color: #157a6e;
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
</style>
