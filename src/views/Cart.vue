<template>
  <div class="cart-page">
    <div class="cart-wrapper">
      <div class="cart">
        <h1 class="title">Your cart</h1>
        <p>"0" products</p>
        <table class="table is-striped">
          <thead>
            <tr>
              <th>Namn</th>
              <th>Beskrivning</th>
              <th>Pris</th>
              <th>Antal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <!--- Hårdkokdad data, ska ändras --->
            <tr class="table-item">
              <td>Produkt namn</td>
              <td>Produkt beskriving</td>
              <td>Produkt Pris</td>
              <td><input type="number" value="0" width="75px" /></td>
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
    border-radius: 5px;
    background-color: #FFFFFF;
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
    padding: 0 10px;
    border-radius: 5px;
    background-color: #ff0000e5;
  }

  .remove-btn:hover, .remove-btn:focus {
    background-color: #c00404e5;
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
