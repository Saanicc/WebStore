<template>
  <div class="wrapper">
    <img :src="product.img" />
    <div class="product-info">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
    </div>
    <div id="btn-wrapper">
      <p v-if="product.inStock" id="in-stock">Finns i lager</p>
      <p v-else id="out-of-stock">Slut i lager</p>
      <b-button
        class="add-btn"
        :class="{ added: product.addedToCart }"
        @click="addToCart(product)"
      >
        <p v-if="!product.addedToCart">Lägg till i kundvagnen</p>
        <p v-if="product.addedToCart">Tillagd i kundvagnen</p>
      </b-button>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'DetailedProduct',
    created() {},
    data() {
      return {
        product: this.$route.query.item
      }
    },
    methods: {
      addToCart(product) {
        product.addedToCart = true
        setTimeout(() => {
          product.addedToCart = false
        }, 2500)
        this.$store.commit('addToCart', product)
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    padding-top: 100px;
  }

  .wrapper > img {
    width: 100%;
    max-width: 400px;
  }

  .product-info {
    width: 90%;
    display: block;
    margin: 0 auto;
    margin-top: 1.5rem;
  }

  #btn-wrapper {
    width: 80%;
    max-width: 320px;
    margin: 30px auto 0 auto;
  }

  #in-stock {
    position: initial;
    margin: 0 0 5px 0;
    font-weight: 600;
    color: #42b983;
    text-shadow: #00000010 1px 1px 2px;
  }

  #out-of-stock {
    position: initial;
    margin: 0 0 5px 0;
    font-weight: 600;
    color: rgba(255, 0, 0, 0.616);
    text-shadow: #00000010 1px 1px 2px;
  }

  .add-btn > p {
    padding: 5px 0;
    margin: 0;
  }

  .added {
    background-color: #42b983;
  }

  .added:focus-within,
  added:focus-visible,
  added:focus {
    background-color: #42b983;
  }

  @media screen and (min-width: 520px) {
    .product-info {
      width: 500px;
    }

    #in-stock {
      position: initial;
      margin: 0 0 5px 0;
    }

    #out-of-stock {
      position: initial;
      margin: 0 0 5px 0;
    }

    #btn-wrapper {
      position: relative;
      margin-top: 30px;
    }

    .add-btn {
      height: 50px;
    }
  }

  @media screen and (min-width: 990px) {
  }

  @media screen and (min-width: 1200px) {
  }
</style>
