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
        <div
          class="grid-item item1"
          :class="{
            error: $v.firstName.$error
          }"
        >
          <label>Förnamn</label><br />
          <input name="firstName" type="text" v-model="$v.firstName.$model" />
          <div class="error-label" v-if="!$v.firstName.required">
            Fyll i ditt namn
          </div>
          <div class="error-label" v-if="!$v.firstName.minLength">
            Måste ha {{ $v.firstName.$params.minLength.min }} bokstäver
          </div>
        </div>
        <div
          class="grid-item item2"
          :class="{
            error: $v.lastName.$error
          }"
        >
          <label>Efternamn</label><br />
          <input name="lastName" type="text" v-model="$v.lastName.$model" />
          <div class="error-label" v-if="!$v.lastName.required">
            Fyll i ditt efternamn
          </div>
          <div class="error-label" v-if="!$v.lastName.minLength">
            Måste ha {{ $v.firstName.$params.minLength.min }} bokstäver
          </div>
        </div>
        <div
          class="grid-item item3"
          :class="{
            error: $v.streetAdress.$error
          }"
        >
          <label>Gatuadress</label><br />
          <input
            name="streetAdress"
            type="text"
            v-model="$v.streetAdress.$model"
          />
          <div class="error" v-if="!$v.streetAdress.required">
            Du måste fylla i din adress
          </div>
        </div>
        <div class="grid-item item4" :class="{ error: $v.zipCode.$error }">
          <label>Postnummer</label><br />
          <input type="text" v-model="$v.zipCode.$model" />
          <div class="error-label" v-if="!$v.zipCode.required.numeric">
            Fyll i ditt postnummer
          </div>
          <div class="error-label" v-if="!$v.zipCode.minLength">
            Postnumret måste innehålla
            {{ $v.zipCode.$params.minLength.min }} siffror
          </div>
        </div>
        <div class="grid-item item5" :class="{ error: $v.county.$error }">
          <label>Ort</label><br />
          <input type="text" v-model="$v.county.$model" />
          <div class="error" v-if="!$v.county.required">
            Du måste fylla i din ort
          </div>
        </div>
        <div
          class="grid-item item6"
          :class="{
            error: $v.mail.$error
          }"
        >
          <label>Email</label><br />
          <input name="user_email" type="text" v-model="$v.mail.$model" />
          <div class="error" v-if="!$v.mail.required.email">
            Fyll i din email
          </div>
          <div class="error" v-if="!$v.mail"></div>
        </div>
        <div
          class="grid-item item7"
          :class="{
            error: $v.phoneNumber.$error
          }"
        >
          <label>Telefonnummer</label><br />
          <input type="text" v-model="$v.phoneNumber.$model" />
          <div class="error" v-if="!$v.phoneNumber.required.numeric">
            Fyll i ditt nummer
          </div>
          <div class="error" v-if="!$v.phoneNumber.minLength">
            Måste ha {{ $v.phoneNumber.$params.minLength.min }} siffror
          </div>
        </div>
      </div>
    </div>
    <div class="payment-header">
      <h6>Betalning</h6>

      <div>
        <b-dropdown
          id="dropdown-1"
          :text="payment"
          class="m-md-2"
          variant="outline-dark"
        >
          <b-dropdown-item dropdown-item="false" @click="cardPayment()"
            >Kortbetalning</b-dropdown-item
          >
          <b-dropdown-item @click="swishPayment()">Swish</b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
    <div class="input-wrapper">
      <div class="payment-inputs" v-if="paymentMethod === 'CARDPAYMENT'">
        <div
          class="grid-item item8"
          :class="{
            error: $v.cardNumber.$error
          }"
        >
          <label>Kortnummer</label><br />
          <input type="text" v-model="$v.cardNumber.$model" />
          <div class="error" v-if="!$v.cardNumber.numeric">
            Måste innehålla siffror
          </div>
          <div class="error" v-if="!$v.cardNumber.minLength">
            Måste ha {{ $v.cardNumber.$params.minLength.min }} siffror
          </div>
          <div class="error" v-if="!$v.cardNumber.maxLength">
            Får max {{ $v.cardNumber.$params.maxLength.max }} siffror
          </div>
        </div>
        <div
          class="grid-item item9"
          :class="{
            error: $v.cardMonth.$error
          }"
        >
          <label>Månad</label><br />
          <input type="text" v-model="$v.cardMonth.$model" />
          <div class="error" v-if="!$v.cardMonth.numeric">
            Måste innehålla siffror
          </div>
          <div class="error" v-if="!$v.cardMonth.maxLength">
            Får max ha {{ $v.cardMonth.$params.maxLength.max }} siffror
          </div>
        </div>
        <div
          class="grid-item item10"
          :class="{
            error: $v.cardYear.$error
          }"
        >
          <label>År</label><br />
          <input type="text" v-model="$v.cardYear.$model" />
          <div class="error" v-if="!$v.cardYear.numeric">
            Måste innehålla siffror
          </div>
          <div class="error" v-if="!$v.cardYear.minLength">
            Måste ha minst {{ $v.cardYear.$params.minLength.min }} siffror
          </div>
          <div class="error" v-if="!$v.cardYear.maxLength">
            Får max ha {{ $v.cardYear.$params.maxLength.max }} siffror
          </div>
        </div>
        <div
          class="grid-item item11"
          :class="{
            error: $v.cvc.$error
          }"
        >
          <label>CVC2</label><br />
          <input type="text" v-model="$v.cvc.$model" />
          <div class="error" v-if="!$v.cvc.numeric">
            Måste innehålla siffror
          </div>
          <div class="error" v-if="!$v.cvc.minLength">
            Måste ha minst {{ $v.cvc.$params.minLength.min }} siffror
          </div>
          <div class="error" v-if="!$v.cvc.maxLength">
            Får max ha {{ $v.cvc.$params.maxLength.max }} siffror
          </div>
        </div>
        <div
          class="grid-item item12"
          :class="{
            error: $v.cardHolder.$error
          }"
        >
          <label>Kortinnehavare</label><br />
          <input type="text" v-model="$v.cardHolder.$model" />
          <div class="error" v-if="!$v.cardHolder.numeric">
            Skriv ditt namn
          </div>
        </div>
      </div>
      <div class="payment-inputs" v-if="paymentMethod === 'SWISH'">
        <div
          class="grid-item item8"
          :class="{
            error: $v.swishNumber.$error
          }"
        >
          <label>Telefonnummer</label><br />
          <input type="text" v-model="$v.swishNumber.$model" />
          <div class="error" v-if="!$v.swishNumber.numeric">
            Måste innehålla siffror
          </div>
          <div class="error" v-if="!$v.swishNumber.minLength">
            Måste innehålla {{ $v.swishNumber.$params.minLength.min }} siffror
          </div>
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

  import {
    required,
    minLength,
    numeric,
    maxLength,
    email
  } from 'vuelidate/lib/validators'

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
        mail: '',
        phoneNumber: '',
        paymentMethod: '',
        cardNumber: '',
        showCartInfo: false,
        payment: 'Välj betalningsalternativ',
        swishNumber: '',
        cardMonth: '',
        cardYear: '',
        cvc: '',
        cardHolder: ''
      }
    },
    validations: {
      firstName: {
        required,
        minLength: minLength(2)
      },
      lastName: {
        required,
        minLength: minLength(2)
      },
      cardNumber: {
        required,
        numeric,
        minLength: minLength(16),
        maxLength: maxLength(16)
      },
      mail: {
        required,
        email
      },
      phoneNumber: {
        required,
        numeric,
        minLength: minLength(10)
      },
      streetAdress: {
        required
      },
      county: {
        required
      },
      zipCode: {
        required,
        numeric,
        minLength: minLength(5)
      },
      cardMonth: {
        required,
        numeric,
        maxLength: maxLength(2)
      },
      cardYear: {
        required,
        numeric,
        minLength: minLength(2),
        maxLength: maxLength(4)
      },
      cvc: {
        required,
        numeric,
        minLength: minLength(3),
        maxLength: maxLength(3)
      },
      cardHolder: {
        required
      },
      swishNumber: {
        required,
        numeric,
        minLength: minLength(10)
      }
    },

    methods: {
      cardPayment() {
        this.paymentMethod = 'CARDPAYMENT'
        this.payment = 'Kortbetalning'
      },
      swishPayment() {
        this.paymentMethod = 'SWISH'
        this.payment = 'Swish'
      },

      showCart() {
        this.showCartInfo = !this.showCartInfo
      },
      finishCheckout() {
        var templateParams = {
          fullName: this.fullName,
          userEmail: this.mail,
          products: this.productsOrdered,
          price: this.totalSum,
          streetAdress: this.streetAdress,
          zipCode: this.zipCode,
          city: this.county,
          phoneNumber: this.phoneNumber,
          cardNumber: this.hiddenCardNumber,
          paymentMethod: this.payment,
          orderNr: this.randomizedOrderNumber,
          swishNumber: this.swishNumber
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
        this.mail = ''
        this.products = this.$store.state.cart
        this.streetAdress = ''
        this.zipCode = ''
        this.county = ''
        this.phoneNumber = ''
        this.cardNumber = ''
        this.swishNumber = ''
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
        var payment = null
        if (this.paymentMethod === 'SWISH') {
          payment = this.swishNumber
        } else if (this.paymentMethod === 'CARDPAYMENT') {
          var shortCcNum = 'Kortet slutar med '
          for (
            var i = this.cardNumber.length - 4;
            i < this.cardNumber.length;
            i++
          ) {
            shortCcNum += this.cardNumber.charAt(i)
          }
          payment = shortCcNum
        }
        return payment
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
    box-shadow: #00000010 1px 2px 4px;
    background-color: #f3eff5;
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
    background-color: #00000015;
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
  }
  .error > label {
    color: #db0d0d;
  }
  .error > div {
    color: #db0d0d;
  }
  .error > input {
    border: none;
    border: 1px solid #db0d0d !important;
  }
  .error-input {
    outline: 1px solid #db0d0d;
  }

  .payment-header {
    display: block;
    margin: 20px auto;
  }

  .payment-header h6 {
    font-size: 1.4rem;
  }

  .payment {
    color: #000000;
    background-color: #ffffff;
    border-color: #157a6e;
  }
  ::v-deep .dropdown-item:hover,
  .dropdown-item.hover {
    color: #000000;
    text-decoration: none;
    background-color: #00000020 !important;
  }

  .payment-inputs {
    display: grid;
    grid-template-columns: auto;
    width: 90%;
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
    background-color: #f3eff5;
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
    background-color: #db0d0d;
    color: #000000;
    text-shadow: #ffffff50 1px 1px 2px;
  }

  .cancel-btn:hover,
  .cancel-btn:focus {
    text-decoration: none;
    background-color: rgba(197, 8, 8, 0.787);
  }

  .checkout-btn {
    background-color: #bfcc94;
  }

  .checkout-btn:hover,
  .checkout-btn:focus {
    background-color: #b0c07a;
  }

  @media screen and (min-width: 513px) {
    .cart-info {
      width: 480px;
    }

    .inputs,
    .payment-inputs {
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
    .payment-inputs {
      display: grid;
      grid-template-columns: auto auto auto;
    }
    .item8 {
      grid-column: 1 / span 3;
      grid-row: 1;
    }
    .item9 {
      grid-column: 1;
      grid-row: 2;
    }
    .item12 {
      grid-column: 1 / span 3;
      grid-row: 3;
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
    .payment-inputs {
      width: 500px;
    }
  }
</style>
