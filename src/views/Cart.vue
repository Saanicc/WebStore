<template>
  <div class="cart-page">
    <h1 class="title">Din kundvagn</h1>
    <p>Du har '{{ products.length }}' produkter i din kundvagn</p>
    <div class="cart">
      <table class="table is-striped">
        <thead>
          <tr>
            <th>Namn</th>
            <th>Antal</th>
            <th>Pris (kr)</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-item" v-for="product in products" :key="product.id">
            <td>{{ product.name }}</td>
            <td>
              <input type="number" :value="product.quantity" width="75px" />
            </td>
            <td>{{ product.price }}</td>
            <td>
              <button class="remove-btn" @click="removeFromCart(product)">
                x
              </button>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td colspan="4">Totala summan: {{ totalSum }}kr</td>
          </tr>
        </tbody>
      </table>
    </div>
    <router-link to="/cart/checkout" class="checkout"
      >Fortsätt till kassan</router-link
    >
    <br />
    <br />
    <br />
  </div>
</template>

<script>
export default {
  name: "Cart",
  created() {
    this.products = this.$store.state.cart;
  },
  data() {
    return {
      products: null,
    };
  },
  methods: {
    removeFromCart(product) {
      this.$store.commit("removeFromCart", product);
    },
  },
  computed: {
    totalSum() {
      var sum = 0;
      for (let i = 0; i < this.products.length; i++) {
        sum += this.products[i].price;
      }
      return sum;
    },
  },
};
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
  background-color: rgba(107, 107, 107, 0.24);
}

.table-item > td > input {
  width: 60px;
  border: none;
  padding: 5px 5px 5px 10px;
  border-radius: 5px;
  box-shadow: #00000050 0px 0px 2px;
}

.remove-btn {
  border: none;
  padding: 5px 15px;
  border-radius: 5px;
  background-color: #ff0000e5;
}

.remove-btn:hover,
.remove-btn:focus {
  background-color: #c00404e5;
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

.checkout:hover,
.checkout:focus {
  text-decoration: none;
  background-color: #289061;
}

@media screen and (min-width: 513px) and (max-width: 899px) {
  .cart {
    display: block;
    margin: auto;
    width: 512px;
  }

  .checkout {
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

  .checkout {
    width: 200px;
  }
}
</style>
