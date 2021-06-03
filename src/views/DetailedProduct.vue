<template>
  <div class="wrapper">
    <b-carousel
      id="carousel-1"
      style="text-shadow: 0px 0px 2px #000"
      controls
      indicators
      :interval="0"
      background="white"
    >
      <b-carousel-slide :img-src="product.img[0]"></b-carousel-slide>
      <b-carousel-slide :img-src="product.img[1]"></b-carousel-slide>
      <b-carousel-slide :img-src="product.img[2]"></b-carousel-slide>
    </b-carousel>
    <div class="product-info">
      <b-icon
        class="favorite-btn"
        icon="heart-fill"
        font-scale="2"
        style="color: #db0d0d;"
        @click="addToFavorites()"
        v-if="favorited"
      ></b-icon>
      <b-icon
        class="favorite-btn"
        @click="addToFavorites()"
        icon="heart"
        font-scale="2"
        color="black"
        v-else
      ></b-icon>
      <h3>{{ product.name }}</h3>
      <h4>{{ product.price }} kr</h4>
      <p v-if="product.inStock" id="in-stock">Finns i lager</p>
      <p v-else id="out-of-stock">Slut i lager</p>
      <p>{{ product.description }}</p>
      <div class="colorAndAddToCart">
        <p id="color-picker">Välj färg</p>
        <b-dropdown
          id="dropdown-1"
          :text="color"
          class="m-md-2 p-3"
          variant="outline-dark"
        >
          <b-dropdown-item @click="changeProductColor('BLACK')"
            >Svart</b-dropdown-item
          >
          <b-dropdown-item @click="changeProductColor('WHITE')"
            >Vit</b-dropdown-item
          >
        </b-dropdown>
        <button
          class="add-btn"
          :class="{ added: product.addedToCart }"
          @click="addToCart(product)"
        >
          <p v-if="!product.addedToCart">Lägg till i kundvagnen</p>
          <p v-if="product.addedToCart">Tillagd i kundvagnen</p>
        </button>
      </div>
    </div>
    <br />
    <br />
    <h3>Recensioner</h3>
    <b-container class="mb-3">
      <b-card
        bg-variant="card-bg"
        v-for="review in product.reviews"
        :key="review.id"
      >
        <b-row deck>
          <b-col cols="12">
            <b>
              {{ review.name }}
              <div class="rating-view">
                <form>
                  <b-form-rating
                    precision="1"
                    inline
                    :value="review.ratings"
                    variant="favorite"
                    readonly
                    no-border
                    class="rating"
                  ></b-form-rating>
                </form>
              </div>
            </b>
            {{ review.message }}
          </b-col>
        </b-row>
      </b-card>
    </b-container>
    <Footer />
  </div>
</template>

<script>
  import Footer from '../components/Footer.vue'
  // @ is an alias to /src

  export default {
    components: { Footer },
    name: 'DetailedProduct',
    created() {},
    data() {
      return {
        product: this.$route.query.item,
        favorited: false,
        rating: 0,
        color: 'Svart'
      }
    },
    methods: {
      addToCart(product) {
        switch (this.color) {
          case 'Svart':
            product.color = 'Svart'
            break
          case 'Vit':
            product.color = 'Vit'
            break
        }
        product.addedToCart = true
        setTimeout(() => {
          product.addedToCart = false
        }, 2500)
        this.$store.commit('addToCart', product)
      },
      addToFavorites() {
        // if (product.addToFavorites) {
        //   !product.addToFavorites
        // } else {
        //   product.addedToFavorites = true
        //   this.$store.commit('addToFavorites', product)
        // }

        this.favorited = !this.favorited
      },
      changeProductColor(color) {
        switch (color) {
          case 'BLACK':
            this.color = 'Svart'
            break
          case 'WHITE':
            this.color = 'Vit'
            break
        }
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    padding-top: 84px;
    display: grid;
  }

  .product {
    width: 100%;
  }

  .wrapper #carousel-1 {
    width: 100%;
    max-width: 400px;
  }

  .product-info {
    width: 90%;
    display: block;
    text-align: left;
    margin: 1.2em auto 0 auto;
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

  .favorite-btn {
    float: right;
    margin-top: -0.3em;
    margin-right: -0.25em;
    background-color: #e3e3e3;
    padding: 10px 0 4px 0;
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }

  .favorite-btn:hover {
    background-color: #dadada;
  }

  .colorAndAddToCart {
    display: block;
    margin: 0 auto;
    text-align: center;
  }

  #color-picker {
    margin: 2em 0 0 0;
    font-weight: 600;
  }

  #dropdown-1 {
    padding: 1em 0 1em 0 !important;
  }

  .add-btn {
    outline: none;
    border: none;
    padding: 1em;
    border-radius: 5px;
    background-color: #bfcc94;
    box-shadow: #00000050 1px 2px 4px;
    width: 100%;
    height: 56px;
  }

  .add-btn > p {
    padding: 0;
    margin: 0;
    color: #212529;
  }

  .add-btn:hover {
    background-color: #b0c07a;
  }

  .added {
    background-color: #b0c07a;
  }

  .added:focus-within,
  added:focus-visible,
  added:focus {
    background-color: #b0c07a;
  }

  .rating {
    box-shadow: none !important;
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
