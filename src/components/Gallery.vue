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
export default {
  name: "Gallery",
  data() {
    return {
      products: [
        {
          id: "001",
          name: "Mobil1",
          price: "7999 kr",
          img: require("../assets/logo.png"),
        },
        {
          id: "002",
          name: "Mobil2",
          price: "5999 kr",
          img: require("../assets/drink.png"),
        },
        {
          id: "003",
          name: "Mobil3",
          price: "8999 kr",
          img: "https://picsum.photos/600/300/?image=25",
        },
        {
          id: "004",
          name: "Mobil4",
          price: "10999 kr",
          img: "https://picsum.photos/600/300/?image=25",
        },
        {
          id: "005",
          name: "Mobil5",
          price: "9999 kr",
          img: "https://picsum.photos/600/300/?image=25",
        },
      ],
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

