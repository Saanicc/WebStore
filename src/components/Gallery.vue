<template>
  <div class="container">
    <div class="cards">
      <b-card-group deck v-for="product in products" :key="product.id">
        <b-card
          border-variant="light"
          class="shadow-sm p-3 mb-4 bg-white rounded"
        >
          <router-link
            :to="{
              path: '/product/' + product.name,
              query: {
                item: product
              }
            }"
          >
            <div class="wish">
              <a href="#">
                <b-icon
                  class="wish-icon"
                  icon="star-fill"
                  @click="addToWishList(product)"
                ></b-icon>
              </a>
            </div>
            <b-card-body>
              <img :src="product.img" />
              <b-card-title>{{ product.name }}</b-card-title>
              <b-card-sub-title>{{ product.price }}</b-card-sub-title>
              <b-card-text>Kortare information om produkten</b-card-text>
            </b-card-body>
          </router-link>
          <b-button
            class="add-btn"
            :class="{ added: product.addedToCart }"
            @click="addToCart(product)"
          >
            <p v-if="!product.addedToCart">Lägg till i kundvagnen</p>
            <p v-if="product.addedToCart">Tillagd i kundvagnen</p>
          </b-button>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Gallery',
    data() {
      return {
        addedToWishList: null
      }
    },
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
        }, 2500)
        this.$store.commit('addToCart', product)
      },
      addToWishList(product) {
        if (!this.$store.state.wishList.includes(product)) {
          this.$store.commit('addToWishList', product)
          this.addedToWishList = true
        } else {
          this.addedToWishList = false
        }
      }
    }
  }
</script>

<style scoped>
  .add-btn {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    outline: none;
  }

  .add-btn > p {
    padding: 5px 0;
    margin: 0;
  }

  .added {
    background-color: #42b983;
    outline: none;
  }

  .added:focus-within,
  added:focus-visible,
  added:focus {
    background-color: #42b983;
    outline: none;
  }

  .wish {
    position: absolute;
    top: 1%;
    left: 0;
    z-index: 99;
    right: 5px;
    text-align: right;
    padding-top: 0;
  }
  .wish .wish-icon {
    color: grey;
    font-size: 32px;
  }
  .wish .wish-icon:hover {
    color: #fdc56b;
  }

  .container {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .cards {
    display: block;
    width: 90%;
  }

  .cards:first-child {
    margin-top: 2rem;
  }

  .card-body {
    padding: 0 0 1.25rem 0;
  }

  .card-body > a {
    color: #000000;
    text-decoration: none;
  }

  .card-body > img {
    width: 100%;
    height: 125px;
  }

  .card-title {
    margin-top: 0.75rem;
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
