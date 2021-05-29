<template>
  <div class="cart-page">
    <h1 class="title">Checkout</h1>
    <button @click="showCart()" class="show-cart-btn">
      <p v-if="showCartInfo">Dölj kundvagnen</p>
      <p v-else>Visa kundvagnen</p>
    </button>
    <div v-show-slide="showCartInfo" class="cart-info">
      <table class="table is-striped">
        <thead>
          <tr>
            <th>Produkt</th>
            <th>Antal</th>
            <th>Pris</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-item" v-for="product in products" :key="product.id">
            <td>{{ product.name }}</td>
            <td>{{ product.quantity }}</td>
            <td>{{ product.price }} kr</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="input-wrapper">
      <div class="inputs">
        <div class="grid-item item1">
          <label>Förnamn</label><br />
          <input name="firstName" type="text" v-model="firstName" />
        </div>
        <div class="grid-item item2">
          <label>Efternamn</label><br />
          <input name="lastName" type="text" v-model="lastName" />
        </div>
        <div class="grid-item item3">
          <label>Gatuadress</label><br />
          <input type="text" v-model="streetAdress" />
        </div>
        <div class="grid-item item4">
          <label>Postnummer</label><br />
          <input type="text" v-model="zipCode" />
        </div>
        <div class="grid-item item5">
          <label>Ort</label><br />
          <input type="text" v-model="county" />
        </div>
        <div class="grid-item item6">
          <label>Email</label><br />
          <input name="user_email" type="text" v-model="email" />
        </div>
        <div class="grid-item item7">
          <label>Telefonnummer</label><br />
          <input type="text" v-model="phoneNumber" />
        </div>
        <div class="payment-header">
          <h6>Kortbetalning</h6>
        </div>
        <div class="grid-item item8">
          <label>Kortnummer</label><br />
          <input type="text" v-model="cardNumber" />
        </div>
        <div class="grid-item item9">
          <label>Månad</label><br />
          <input type="text" />
        </div>
        <div class="grid-item item10">
          <label>År</label><br />
          <input type="text" />
        </div>
        <div class="grid-item item11">
          <label>CVC2</label><br />
          <input type="text" />
        </div>
        <div class="grid-item item12">
          <label>Kortinnehavare</label><br />
          <input type="text" />
        </div>
      </div>
    </div>

    <p class="price-total">Totala summan är: {{ totalSum }}kr</p>
    <div class="buttons">
      <router-link to="/" class="cancel-btn" tag="button">Avbryt</router-link>
      <input
        class="checkout-btn"
        type="button"
        @click="finishCheckout()"
        value="Slutför betalning"
      />
    </div>
  </div>
</template>

<script>
  import emailjs from 'emailjs-com'

  import { init } from 'emailjs-com'
  init('user_TiTSwezkNDuf6XB9cHtHU')

  export default {
    name: 'Checkout',
    created() {
      this.products = this.$store.state.cart
    },
    data() {
      return {
        products: null,
        firstName: '',
        lastName: '',
        streetAdress: '',
        zipCode: '',
        county: '',
        email: '',
        phoneNumber: '',
        paymentMethod: 'Kortbetalning',
        cardNumber: '',
        showCartInfo: false
      }
    },
    methods: {
      showCart() {
        this.showCartInfo = !this.showCartInfo
      },
      finishCheckout() {
        var templateParams = {
          fullName: this.fullName,
          userEmail: this.email,
          products: this.productsOrdered,
          price: this.totalSum,
          streetAdress: this.streetAdress,
          zipCode: this.zipCode,
          city: this.county,
          phoneNumber: this.phoneNumber,
          cardNumber: this.hiddenCardNumber,
          paymentMethod: this.paymentMethod,
          orderNr: this.randomizedOrderNumber
        }
        emailjs
          .send('service_c3b8enq', 'template_35snhib', templateParams)
          .then(
            function(response) {
              console.log('SUCCESS!', response.status, response.text)
            },
            function(error) {
              console.log('FAILED...', error)
            }
          )
        this.clearInputsAndCart()
      },
      clearInputsAndCart() {
        this.$store.commit('clearCart')
        this.firstName = ''
        this.lastName = ''
        this.email = ''
        this.products = this.$store.state.cart
        this.streetAdress = ''
        this.zipCode = ''
        this.county = ''
        this.phoneNumber = ''
        this.cardNumber = ''
      }
    },
    computed: {
      fullName() {
        return this.firstName + ' ' + this.lastName
      },
      adress() {
        return this.streetAdress + '\n' + this.zipCode + ' ' + this.county
      },
      totalSum() {
        var sum = 0
        for (let i = 0; i < this.products.length; i++) {
          sum += this.products[i].price * this.products[i].quantity
        }
        return sum
      },
      randomizedOrderNumber() {
        return Math.floor(100000 + Math.random() * 900000)
      },
      hiddenCardNumber() {
        var shortCcNum = ''
        for (
          var i = this.cardNumber.length - 4;
          i < this.cardNumber.length;
          i++
        ) {
          shortCcNum += this.cardNumber.charAt(i)
        }
        return shortCcNum
      },
      productsOrdered() {
        var orderedProductsHTML = []
        for (let i = 0; i < this.products.length; i++) {
          orderedProductsHTML.push(
            '<tr style="height: 24px;">' +
              '<td style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px;" align="left" width="75%">' +
              this.products[i].name +
              ' x' +
              this.products[i].quantity +
              '</td>' +
              '<td style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px;" align="left" width="25%">' +
              this.products[i].price +
              ' kr' +
              '</td>' +
              '<tr>'
          )
        }
        return orderedProductsHTML.join('\n')
      }
    }
  }
</script>

<style scoped>
  .cart-page {
    padding-top: 100px;
  }

  .show-cart-btn {
    margin-top: 10px;
    margin-bottom: 20px;
    padding: 5px 10px 5px 10px;
    width: 150px;
    border-radius: 5px;
    border: none;
    background-color: #00000025;
  }

  .show-cart-btn p {
    margin: 0 auto;
  }

  .show-cart-btn:hover {
    background-color: #00000030;
  }

  .cart-info {
    box-shadow: #0000001f 1px 2px 4px;
    background-color: #ffffff;
    display: block;
    margin: 4px auto 0 auto;
    width: 90%;
    border-radius: 5px;
    overflow-x: auto;
  }

  .table {
    color: #000;
    margin: 0;
  }

  .table > thead {
    background-color: #0000001a;
  }

  .input-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 25px auto 0 auto;
    /* border: 1px solid black */
  }

  .inputs {
    display: grid;
    grid-template-columns: auto;
    /* border: 1px red solid; */
    width: 90%;
    justify-items: start;
  }

  .payment-header {
    display: block;
    margin: 20px auto;
  }
  .payment-header h6 {
    font-size: 1.4rem;
  }

  .grid-item {
    position: relative;
    /* border: 1px blue solid; */
    width: 100%;
    padding: 0;
    margin-bottom: 10px;
  }

  .grid-item > label {
    position: absolute;
    left: 10px;
  }

  .grid-item > input {
    border: none;
    margin: 0 0 5px 0px;
    padding: 10px 15px;
    border-radius: 5px;
    width: 100%;
    box-shadow: #0000001f 1px 2px 4px;
  }

  .price-total {
    margin-top: 10px;
    font-weight: bold;
    font-size: 1.1em;
  }

  .buttons {
    display: inline-block;
    width: 100%;
    margin-bottom: 20px;
  }

  .cancel-btn,
  .checkout-btn {
    border: none;
    height: 100%;
    border-radius: 5px;
    padding: 1em;
    margin: 0 5px;
  }

  .cancel-btn {
    background-color: rgba(245, 21, 21, 0.815);
    color: #000000;
  }

  .cancel-btn:hover,
  .cancel-btn:focus {
    text-decoration: none;
    background-color: rgba(197, 8, 8, 0.787);
  }

  .checkout-btn {
    background-color: #42b983;
  }

  .checkout-btn:hover,
  .checkout-btn:focus {
    background-color: #289061;
  }

  @media screen and (min-width: 513px) {
    .cart-info {
      width: 480px;
    }

    .inputs {
      grid-template-columns: auto auto;
      grid-gap: 10px;
      width: 480px;
    }

    .item1 {
      grid-column: 1;
      grid-row: 1;
    }

    .item2 {
      grid-column: 2;
      grid-row: 1;
    }

    .item3 {
      grid-column: 1 / span 2;
      grid-row: 2;
    }

    .item4 {
      grid-column: 1;
      grid-row: 3;
    }

    .item5 {
      grid-column: 2;
      grid-row: 3;
    }

    .item6 {
      grid-column: 1 / span 2;
      grid-row: 4;
    }

    .item7 {
      grid-column: 1 / span 2;
      grid-row: 5;
    }
    .payment-header {
      grid-column: 1 / span 2;
      grid-row: 6;
    }
    .item8 {
      grid-column: 1 / span 2;
      grid-row: 7;
    }
  }

  @media screen and (min-width: 900px) {
    .cart-info {
      width: 600px;
    }

    .inputs {
      grid-template-columns: auto auto;
      grid-gap: 10px;
      width: 500px;
    }
  }
</style>
