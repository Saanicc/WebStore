<template>
  <div class="wrapper">
    <BackButton />
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
        @click="addToFavorites(product)"
        v-if="favorited"
      ></b-icon>
      <b-icon
        class="favorite-btn"
        @click="addToFavorites(product)"
        icon="heart"
        font-scale="2"
        color="black"
        v-else
      ></b-icon>
      <h3>{{ product.name }}</h3>
      <b-card-sub-title v-if="product.sale">
        <p style="font-size: 1.3em; margin: 0.9em 0 0 0; color: #db0d0d;">
          {{ product.salePrice }} kr
        </p>
        <p style="font-size: 1em; text-decoration: line-through;">
          {{ product.price }} kr
        </p>
      </b-card-sub-title>
      <b-card-sub-title v-else>
        <p style="font-size: 1.3em;">{{ product.price }} kr</p>
      </b-card-sub-title>
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
          <b-dropdown-item @click="changeProductColor('BLACK', product)"
            >Svart</b-dropdown-item
          >
          <b-dropdown-item @click="changeProductColor('WHITE', product)"
            >Vit</b-dropdown-item
          >
        </b-dropdown>
        <button
          class="add-btn"
          :class="{ added: product.addedToCart }"
          @click="addToCart(product)"
          v-if="product.inStock"
        >
          <p v-if="!product.addedToCart">Lägg till i kundvagnen</p>
          <p v-if="product.addedToCart">Tillagd i kundvagnen</p>
        </button>
        <button class="add-btn-disabled" v-else disabled>
          <p>Slut i lager</p>
        </button>
        <p class="delivery">Leverans inom 3-5 arbetsdagar</p>
      </div>
    </div>
    <br />
    <br />
    <h4>Skriv en recension</h4>
    <b-container class="mb-3" id="review-container">
      <div class="add-review">
        <label>Ditt namn</label>
        <b-form-input type="text" v-model="name" />
        <label>Ditt betyg</label>
        <b-form-rating
          precision="1"
          inline
          v-model="rating"
          variant="favorite"
          no-border
          class="rating"
          change
          @change="rating"
        ></b-form-rating>
        <label>Din recension</label>
        <b-form-textarea type="text" v-model="message" />
        <b-button
          variant="card-btn-bg"
          class="send-review-btn"
          @click="sendReview()"
          v-if="isValid"
          >Skicka</b-button
        >
        <b-button variant="card-btn-bg" class="send-review-btn-disabled" v-else
          >Skicka</b-button
        >
      </div>
      <h4>Recensioner</h4>
      <b-card
        bg-variant="card-bg"
        v-for="review in product.reviews"
        :key="review.id"
      >
        <b-row deck>
          <b-col cols="12" class="test">
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
            <p class="review-text">{{ review.message }}</p>
          </b-col>
        </b-row>
      </b-card>
    </b-container>
    <Footer />
  </div>
</template>

<script>
  import Footer from '../components/Footer.vue'
  import BackButton from '../components/BackButton.vue'

  export default {
    components: { Footer, BackButton },
    name: 'DetailedProduct',
    created() {},
    data() {
      return {
        product: this.$route.query.item,
        favorited: this.$route.query.item.addedToWishList,
        color: 'Svart',
        name: '',
        rating: 0,
        message: ''
      }
    },
    methods: {
      addToCart(product) {
        product.addedToCart = true
        setTimeout(() => {
          product.addedToCart = false
        }, 1500)
        this.$store.commit('addToCart', product)
      },
      addToFavorites(product) {
        if (product.addToFavorites) {
          !product.addToFavorites
        } else {
          product.addedToFavorites = true
          this.$store.commit('isAddedToWishList', product)
        }
        this.favorited = !this.favorited
      },
      changeProductColor(color, product) {
        switch (color) {
          case 'BLACK':
            this.color = 'Svart'
            product.color = this.color
            break
          case 'WHITE':
            this.color = 'Vit'
            product.color = this.color
            break
        }
      },
      sendReview() {
        var review = {
          id: 4,
          name: this.name,
          message: this.message,
          ratings: this.rating
        }
        this.product.reviews.push(review)
        this.$store.commit('addReview', this.product)
        this.name = ''
        this.rating = 0
        this.message = ''
      }
    },
    computed: {
      isValid() {
        var isValid = false
        if (
          this.name.length > 0 &&
          this.rating > 0 &&
          this.message.length > 0
        ) {
          isValid = true
        }
        return isValid
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    padding-top: 84px;
    display: grid;
    max-width: 100%;
  }

  .wrapper #carousel-1 {
    width: 100%;
    max-width: 520px;
    margin: 0 auto;
  }

  .wrapper > h4 {
    margin: 0 auto;
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

  .add-btn,
  .add-btn-disabled {
    outline: none;
    border: none;
    padding: 1em;
    border-radius: 5px;
    background-color: #bfcc94;
    box-shadow: #00000050 1px 2px 4px;
    width: 100%;
    height: 56px;
  }

  .add-btn-disabled {
    opacity: 0.65;
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

  .delivery {
    margin-top: 0.25em;
    font-size: 0.8em;
    color: #000000ad;
  }

  .add-review {
    background-color: #e3e3e3;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .add-review > input,
  .b-rating,
  textarea {
    margin: 0 0 10px 0;
    border: none;
  }

  .add-review > .send-review-btn,
  .send-review-btn-disabled {
    padding: 10px;
    margin: 0 0 20px 0;
    border: none;
    box-shadow: none !important;
  }

  .send-review-btn-disabled {
    opacity: 0.65;
  }

  .add-review > label {
    margin: 0;
    text-align: left;
  }

  .add-review > input,
  textarea {
    box-shadow: none !important;
  }

  .review-text {
    max-width: 200px;
    margin: 0 auto;
  }

  .rating {
    box-shadow: none !important;
  }

  @media screen and (min-width: 380px) {
    .review-text {
      max-width: 300px;
    }
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

    #review-container {
      max-width: 520px;
    }
  }

  @media screen and (min-width: 1366px) {
    .wrapper > * {
      width: 700px;
    }

    #carousel-1 {
      max-width: 700px !important;
    }

    .colorAndAddToCart {
      width: 300px;
    }

    .wrapper h3 {
      margin: 0 auto 0.5em auto;
    }

    #review-container {
      max-width: 700px !important;
      padding: 0;
    }

    .wrapper > :last-child {
      width: 100%;
    }
  }
</style>
