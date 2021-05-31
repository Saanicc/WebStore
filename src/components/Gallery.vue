<template>
  <div class="container">
    <div class="cards">
      <b-card-group deck v-for="product in products" :key="product.id">
        <b-card class="shadow-sm p-3 mb-4 rounded" bg-variant="card-bg">
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
              <img :src="product.img[0]" />
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
        }, 1000)
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
    border: none;
  }

  .add-btn > p {
    padding: 5px 0;
    margin: 0;
  }

  .added {
    background-color: #bfcc94;
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
    color: #f4ce00;
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
  max-width: 100%;
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
