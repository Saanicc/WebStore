<template>
  <div class="wrapper">
    <div id="wishList-heading">
      <h1>Favorites</h1>
    </div>
    <div class="card">
      <b-card-group deck v-for="product in products" :key="product.id">
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
              <b-button class="remove-btn" @click="removeFromWishList(product)"
                >Ta bort</b-button
              >
            </b-col>
          </b-row>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "WishList",
  created() {
    this.products = this.$store.state.wishList;
  },
  data() {
    return {
      products: null,
    };
  },
  methods: {
    removeFromWishList(product) {
      this.$store.commit("removeFromWishList", product);
    },
  },
};
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
