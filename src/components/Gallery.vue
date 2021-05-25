<template>
  <div class="container">
    <div class="cards">
      <b-card-group deck v-for="product in products" :key="product.id">
        <b-card
          :img-src="product.img"
          img-top
          border-variant="light"
          class="shadow-sm p-3 mb-4 bg-white rounded"
        >
          <b-card-body>
            <!-- <b-card-img :src="product.img" :alt="product.name"></b-card-img> -->
            <b-card-title>{{ product.name }}</b-card-title>
            <b-card-sub-title>{{ product.price }}</b-card-sub-title>
            <b-card-text>Info</b-card-text>
            <b-button class="add-btn" @click="addToCart(product)">Add to cart</b-button>
          </b-card-body>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<!-- Hårdkodad data -->
<script>

export default {
  name: "Gallery",
  computed:{
    products(){
      return this.$store.state.products
    }
  },
  methods: {
    addToCart(product) {
      this.$store.commit("addToCart", product)
    },
  },
};
</script>

<style scoped>
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