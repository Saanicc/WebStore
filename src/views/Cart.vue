<template>
  <div class="cart-page">
    <div class="cart-wrapper">
      <div class="cart">
        <h1 class="title">Your cart</h1>
        <p>"0" products</p>
        <table class="table is-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <!--- Hårdkokdad data, ska ändras --->
            <tr class="table-item">
              <td>Product name</td>
              <td>Product Description</td>
              <td>Product Price</td>
              <td><button class="remove-btn">x</button></td>
            </tr>
            <!--- Hårdkokdad data, ska ändras --->
          </tbody>
      </table>
      </div>
    </div>
    <router-link to="/cart/checkout" class="checkout">Continue to checkout</router-link>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data() {
    return {
      products: []
    }
  },
}
</script>

<style scoped>
  .cart-wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 25px;
  }

  .cart {
    margin: 0 20px;
  }

  .table {
    color: #000000;
    box-shadow: #00000075 1px 2px 5px;
  }

  .table-item:hover {
    background-color: rgba(107, 107, 107, 0.24);
  }

  .remove-btn {
    border: none;
    padding: 0 10px;
    border-radius: 5px;
    background-color: #d82e2ee5;
  }

  .remove-btn:hover, .remove-btn:focus {
    background-color: #a01919e5;
  }

  .checkout {
    border: none;
    color: #FFFFFF;
    padding: 10px 15px;
    border-radius: 5px;
    background-color: #42b983;
  }

  .checkout:hover, .checkout:focus {
    text-decoration: none;
    background-color: #289061;
  }

  @media screen and (min-width: 512px) {
    .cart {
      margin: 0 10%;
    }
  }
</style>
