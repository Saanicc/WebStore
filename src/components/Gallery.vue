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
            <b-card-title>{{ product.name }}</b-card-title>
            <b-card-sub-title>{{ product.price }}</b-card-sub-title>
            <b-card-text>Kortare information om produkten</b-card-text>
            <b-button class="add-btn" @click="addToCart(product)"
              >Add to cart</b-button
            >
          </b-card-body>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  data() {
    return {
      addedToWishList: null,
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    addToCart(product) {
      this.$store.commit("addToCart", product);
    },
    addToWishList(product) {
      if (!this.$store.state.wishList.includes(product)) {
        this.$store.commit("addToWishList", product);
        this.addedToWishList = true;
      } else {
        this.addedToWishList = false;
      }
    },
  },
};
</script>

<style scoped>
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