<template>
  <div class="wrapper">
    <div id="wishList-heading">
      <h1>Favorites</h1>
    </div>
    <div class="card">
      <b-card-group deck v-for="product in wishList" :key="product.id">
        <b-card
          no-body
          class="card overflow-hidden shadow-sm p-3 mb-5 bg-white rounded"
        >
          <b-row no-gutters>
            <b-col md="5">
              <b-card-img
                :src="product.img[0]"
                :alt="product.name"
                class="rounded-0"
              ></b-card-img>
            </b-col>
            <b-col md="5">
              <b-card-body>
                <b-card-title>{{ product.name }}</b-card-title>
                <b-card-text>Kortare information om produkten</b-card-text>
              </b-card-body>
            </b-col>
            <b-col md="2" align-self="center">
              <b-button
                pill
                class="add-to-cart-btn"
                @click="addToCart(product)"
                variant="card-btn-bg"
              >
                Lägg till i kundvagn
              </b-button>
              <br />
              <b-button
                pill
                class="remove-btn"
                @click="removeFromWishList(product)"
                variant="delete"
              >
                <b-icon icon="trash" font-scale="1.3"></b-icon>
              </b-button>
            </b-col>
          </b-row>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'WishList',
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
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    padding-top: 100px;
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
</style>
