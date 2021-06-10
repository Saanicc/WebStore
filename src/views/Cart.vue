<template>
  <div>
    <div class="cart-page">
      <BackButton />
      <h1 class="title">Kundvagn</h1>
      <div class="cart">
        <table class="table is-striped">
          <thead>
            <tr>
              <th>Produkt</th>
              <th>Antal</th>
              <th>Pris</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="table-item"
              v-for="product in products"
              :key="product.id"
            >
              <td class="product-column">
                <div>
                  <img :src="product.img[0]" width="100px" />
                  <p style="font-size: 1em;">{{ product.name }}</p>
                  <p style="font-size: 0.8em;">Färg: {{ product.color }}</p>
                </div>
              </td>
              <td>
                <div class="product-quantity">
                  <button @click="decreaseQuantity(product)">-</button>
                  <p>{{ product.quantity }}</p>
                  <button @click="increaseQuantity(product)">+</button>
                </div>
              </td>
              <td>
                <div v-if="product.sale">
                  <p style="font-size: 1em; margin: 1em 0 0 0; color: #db0d0d;">
                    {{ product.salePrice }} kr
                  </p>
                  <p style="font-size: 0.8em; text-decoration: line-through;">
                    {{ product.price }} kr
                  </p>
                </div>
                <div v-else>
                  <p style="font-size: 1em; margin: 0 0 0 0;">
                    {{ product.price }} kr
                  </p>
                </div>
              </td>
              <td>
                <button class="remove-btn" @click="removeFromCart(product)">
                  <b-icon icon="trash" font-scale="1.3"></b-icon>
                </button>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td colspan="5" v-if="this.products.length !== 0">
                Totala summan: {{ totalSum }}kr
              </td>
              <td colspan="5" v-else>Kundvagnen är tom</td>
            </tr>
          </tbody>
        </table>
      </div>
      <router-link
        to="/checkout"
        tag="button"
        class="checkout"
        v-if="this.products.length !== 0"
      >
        Fortsätt till kassan
      </router-link>
      <button class="checkout-disabled" v-else disabled>
        Fortsätt till kassan
      </button>
      <br />
      <br />
      <br />
    </div>
    <Footer />
  </div>
</template>

<script>
  import Footer from '../components/Footer.vue'
  import BackButton from '../components/BackButton.vue'
  export default {
    components: { Footer, BackButton },
    name: 'Cart',
    created() {
      this.products = this.$store.state.cart
    },
    data() {
      return {
        products: null
      }
    },
    methods: {
      increaseQuantity(product) {
        product.quantity++
      },
      decreaseQuantity(product) {
        if (product.quantity !== 0) {
          product.quantity--
        }
        if (product.quantity === 0) {
          this.removeFromCart(product)
        }
      },
      removeFromCart(product) {
        this.$store.commit('removeFromCart', product)
      }
    },
    computed: {
      totalSum() {
        var sum = 0
        for (let i = 0; i < this.products.length; i++) {
          if (this.products[i].sale) {
            sum += this.products[i].salePrice * this.products[i].quantity
          } else {
            sum += this.products[i].price * this.products[i].quantity
          }
        }
        return sum
      }
    }
  }
</script>

<style scoped>
  .cart-page {
    padding-top: 100px;
    width: 100%;
    min-height: 100vh;
  }

  .cart {
    overflow-x: auto;
    margin: auto;
    width: 100%;
  }

  .table {
    width: 90%;
    margin: 10px auto 20px auto;
    color: #000000;
    box-shadow: #00000050 1px 2px 4px;
    border-radius: 5px;
    background-color: #ffffff;
  }

  .table > thead {
    background-color: #0000001a;
  }

  .table td {
    vertical-align: middle;
  }

  .product-column p {
    margin: 0;
  }

  .table-item:hover {
    background-color: rgba(202, 202, 202, 0.24);
  }

  .product-column > div > img {
    display: none;
  }

  .product-quantity {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .product-quantity p {
    margin: 0;
    padding: 0 10px;
    align-items: center;
  }

  .product-quantity > button {
    border: 1px solid black;
    border-radius: 0.25rem;
    width: 1.6em;
    height: 1.6em;
    background-color: #ffffff;
  }

  .product-quantity > button:hover {
    background-color: rgb(233, 233, 233);
  }

  .remove-btn {
    border: 1px solid black;
    padding: 5px 0 0 0;
    width: 2em;
    height: 2em;
    border-radius: 0.25rem;
    background-color: #ffffff;
  }

  .remove-btn:hover,
  .remove-btn:focus {
    background-color: #db0d0d;
    color: #ffffff;
  }

  .checkout {
    position: absolute;
    left: 50%;
    width: 90%;
    transform: translateX(-50%);
    border: none;
    color: #212529;
    padding: 1em;
    border-radius: 5px;
    background-color: #bfcc94;
    box-shadow: #00000050 1px 2px 4px;
  }

  .checkout-disabled {
    position: absolute;
    left: 50%;
    width: 90%;
    transform: translateX(-50%);
    border: none;
    color: #212529;
    padding: 1em;
    border-radius: 5px;
    background-color: #bfcc94;
    opacity: 0.65;
    box-shadow: #00000050 1px 2px 4px;
  }

  .checkout:hover,
  .checkout:focus {
    text-decoration: none;
    background-color: #b0c07a;
  }

  @media screen and (min-width: 513px) and (max-width: 900px) {
    .cart {
      display: block;
      margin: auto;
      width: 513px;
    }

    .product-column > div > img {
      display: inline;
      height: 100%;
      margin: 0;
    }

    .product-column {
      padding: 1em 1em 0.4em 1em;
    }

    .product-column p {
      margin: 0.5em 0 0 0;
      word-wrap: none;
    }

    .checkout,
    .checkout-disabled {
      display: flex;
      justify-content: center;
      position: relative;
      width: 200px;
    }
  }

  @media screen and (min-width: 900px) {
    .cart {
      width: 700px;
    }

    .product-column > div > img {
      display: inline;
    }

    .product-column {
      padding: 1em 1em 0.4em 1em;
    }

    .checkout,
    .checkout-disabled {
      width: 200px;
    }
  }
</style>
