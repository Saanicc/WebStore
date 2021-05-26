<template>
  <div>
    <div id="wishList-heading">
      <h1>Favorites</h1>
    </div>
    <div class="wished-products">
      <b-card-group deck v-for="product in products" :key="product.id">
        <b-card
          no-body
          class="card overflow-hidden shadow-sm p-3 mb-5 bg-white rounded"
          style="max-width: 460px"
        >
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img
                :src="products.img"
                alt="Image"
                class="rounded-0"
              ></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body :title="products.name">
                <b-card-text>
                  This is a wider card with supporting text as a natural lead-in
                  to additional content. This content is a little bit longer.
                </b-card-text>
              </b-card-body>
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
};
</script>

<style scoped>
#favorites-heading {
  margin: 12px;
}

.card {
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
}
</style>