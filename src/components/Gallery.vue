<template>
  <div id="wrapper">
    <div class="container">
      <div class="cards">
        <b-card-group deck v-for="product in products" :key="product.id">
          <b-card class="shadow-sm p-3 mb-4 rounded" bg-variant="card-bg">
            <div class="wish">
              <a href="#">
                <div>
                  <b-icon
                    class="wish-icon"
                    :icon="product.addedToWishList ? 'heart-fill' : 'heart'"
                    :color="product.addedToWishList ? '#db0d0d' : 'grey'"
                    font-scale="1.6"
                    @click="changeWishList(product)"
                  ></b-icon>
                </div>
              </a>
            </div>
            <router-link
              :to="{
                path: '/product/' + product.name,
                query: {
                  item: product
                }
              }"
            >
              <b-card-body>
                <img :src="product.img[0]" />
                <div id="rating-wrapper">
                  <b-form-rating
                    precision="1"
                    inline
                    :value="productRating(product.reviews)"
                    variant="favorite"
                    readonly
                    no-border
                    class="rating"
                  ></b-form-rating>
                </div>
                <b-card-title>{{ product.name }}</b-card-title>
                <b-card-sub-title>{{ product.price }}</b-card-sub-title>
                <b-card-text>{{ product.short }}</b-card-text>
              </b-card-body>
            </router-link>
            <b-button
              class="add-btn"
              :class="{ added: product.addedToCart }"
              variant="card-btn-bg"
              @click="addToCart(product)"
            >
              <p v-if="!product.addedToCart">Lägg till i kundvagnen</p>
              <p v-if="product.addedToCart">Tillagd i kundvagnen</p>
            </b-button>
          </b-card>
        </b-card-group>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Gallery',
    computed: {
      products() {
        return this.$store.state.products
      }
    },
    methods: {
      addToCart(product) {
        product.addedToCart = true
        setTimeout(() => {
          product.addedToCart = false
        }, 1000)
        this.$store.commit('addToCart', product)
      },
      changeWishList(product) {
        this.$store.commit('isAddedToWishList', product)
      },
      productRating(rating) {
        var sumOfRating = 0
        for (let i = 0; i < rating.length; i++) {
          sumOfRating += rating[i].ratings
        }
        return sumOfRating / rating.length
      }
    }
  }
</script>

<style scoped>
  #wrapper {
    min-height: 100vh;
  }
  .add-btn {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    box-shadow: none !important;
    border: none !important;
  }

  .add-btn > p {
    padding: 5px 0;
    margin: 0;
  }

  .added {
    background-color: #bfcc94;
    border: none !important;
  }

  #rating-wrapper {
    width: 100%;
  }

  .rating {
    background-color: #ffffff00;
    box-shadow: none !important;
    width: 150px !important;
    margin: 0 auto;
  }

  .wish {
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 100;
    text-align: right;
    padding-top: 0;
  }

  .wish-icon {
    z-index: 100;
  }

  .wish .wish-icon {
    font-size: 32px;
    z-index: 100;
  }
  .wish .wish-icon:hover {
    color: #db0d0d;
  }

  .container {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 80px;
  }

  .card {
    border: none;
  }

  .cards {
    display: block;
    width: 90%;
  }

  .cards:first-child {
    margin-top: 1rem;
  }

  .card-body {
    padding: 0 0 1.25rem 0;
  }

  .card-body > a {
    color: #000000;
    text-decoration: none;
  }

  .card-body > img {
    max-width: 100%;
    height: 125px;
  }

  .card-title {
    margin-top: 0;
  }

  @media screen and (min-width: 575px) {
    .cards {
      display: grid;
      grid-template-columns: auto auto;
      grid-gap: 10px;
      width: 100%;
    }
  }

  @media screen and (min-width: 990px) {
    .cards {
      grid-template-columns: auto auto auto;
    }
  }

  @media screen and (min-width: 1200px) {
    .cards {
      grid-template-columns: auto auto auto auto;
    }
  }
</style>
