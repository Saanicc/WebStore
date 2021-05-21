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
          <b-button class="add-btn" @click="addToCart(product)">Add to cart</b-button>
        </b-card-body>
      </b-card>
    </b-card-group>
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
.cards {
  display: flex;
  align-content: center;
}
</style>