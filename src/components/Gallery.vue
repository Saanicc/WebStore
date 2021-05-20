<template>
  <div class="cards">
    <b-card-group deck v-for="product in products" :key="product.id">
      <b-card
        :img-src="product.img"
        img-top
        border-variant="light"
        align="center"
        style="max-width: 15rem"
      >
        <b-card-body>
          <!-- <b-card-img :src="product.img" :alt="product.name"></b-card-img> -->
          <b-card-title>{{ product.name }}</b-card-title>
          <b-card-sub-title>{{ product.price }}</b-card-sub-title>

          <b-card-text>Info</b-card-text>
          <b-button class="add-btn" @click="addToCart()">Add to cart</b-button>
        </b-card-body>
      </b-card>
    </b-card-group>
  </div>
</template>

<!-- Hårdkodad data -->
<script>
import Data from "../../public/data.json";

export default {
  name: "Gallery",
  data() {
    return {
      products: Data.phones,
    };
  },
  methods: {
    addToCart() {},
  },
};
</script>


<style scoped>
.cards {
  display: flex;
  align-content: center;
}
</style>

