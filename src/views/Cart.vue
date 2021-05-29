<template>
  <div class="cart-page">
    <h1 class="title">Kundvagn</h1>
    <!-- <p>Du har '{{ products.length }}' produkter i kundvagnen</p> -->
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
          <tr class="table-item" v-for="product in products" :key="product.id">
            <td>
              <img
                :src="product.img"
                width="100px"
                style="margin-right: 0.5rem;"
              />
              {{ product.name }}
            </td>
            <td>
              <div class="product-quantity">
                <button @click="decreaseQuantity(product)">-</button>
                <p>{{ product.quantity }}</p>
                <button @click="increaseQuantity(product)">+</button>
              </div>
            </td>
            <td>{{ product.price }} kr</td>
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
</template>

<script>
  export default {
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
          sum += this.products[i].price * this.products[i].quantity
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

  .table-item:hover {
    background-color: rgba(202, 202, 202, 0.24);
  }

  .table-item > td > img {
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
    color: #ffffff;
    padding: 1em;
    border-radius: 5px;
    background-color: #42b983;
    box-shadow: #00000050 1px 2px 4px;
  }

  .checkout-disabled {
    position: absolute;
    left: 50%;
    width: 90%;
    transform: translateX(-50%);
    border: none;
    color: #ffffff;
    padding: 1em;
    border-radius: 5px;
    background-color: #42b9835d;
    box-shadow: #00000050 1px 2px 4px;
  }

  .checkout:hover,
  .checkout:focus {
    text-decoration: none;
    background-color: #289061;
  }

  @media screen and (min-width: 513px) and (max-width: 900px) {
    .cart {
      display: block;
      margin: auto;
      width: 512px;
    }

    .table-item > td > img {
      display: inline;
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

    .table-item > td > img {
      display: inline;
    }

    .checkout,
    .checkout-disabled {
      width: 200px;
    }
  }
</style>
