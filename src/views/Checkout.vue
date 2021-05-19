<template>
  <div class="cart-page">
    <h1 class="title">Checkout</h1>
    <button @click="showCart()" class="show-cart-btn">
      <p v-if="showCartInfo">Dölj kundvagnen</p>
      <p v-else>Visa kundvagnen</p>
      </button>
    <div v-if="showCartInfo" class="cart-info">
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
              <td>0</td>
            </tr>
            <!--- Hårdkokdad data, ska ändras --->
          </tbody>
      </table>
    </div>
    <div class="input-wrapper">
      <div class="inputs">
        <div class="grid-item item1">
          <label>Förnamn</label><br>
          <input type="text" v-model="firstName" />
        </div>
        <div class="grid-item item2">
          <label>Efternamn</label><br>
          <input type="text" v-model="lastName" />
        </div>
        <div class="grid-item item3">
          <label>Gatuadress</label><br>
          <input type="text" v-model="streetAdress" />
        </div>
        <div class="grid-item item4">
          <label>Postnummer</label><br>
          <input type="text" v-model="zipCode" />
        </div>
        <div class="grid-item item5">
          <label>Ort</label><br>
          <input type="text" v-model="county" />
        </div>
        <div class="grid-item item6">
          <label>Email</label><br>
          <input type="text" v-model="email" />
        </div>
        <div class="grid-item item7">
          <label>Telefonnummer</label><br>
          <input type="text" v-model="phoneNumber" />
        </div>
      </div>
    </div>
    <p class="price-total">Totala summan är: {{ 0 }}kr</p>
    <router-link to="/" class="cancel-btn">Avbryt</router-link>
    <button class="checkout-btn" @click="finishCheckout()">
      Slutför betalning
    </button>
  </div>
</template>

<script>
export default {
  name: "Checkout",
  data() {
    var Email = { 
      send: function (a) { 
        return new Promise(function (n) { 
          a.nocache = Math.floor(1e6 * Math.random() + 1), 
          a.Action = "Send"; 
          var t = JSON.stringify(a); 
          Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { 
            n(e) 
          }) 
        }) 
      }, 
      ajaxPost: function (e, n, t) {
        var a = Email.createCORSRequest("POST", e); 
        a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), 
        a.onload = function () { 
          var e = a.responseText; 
          null != t && t(e) 
        }, 
        a.send(n) 
      }, 
      ajax: function (e, n) {
        var t = Email.createCORSRequest("GET", e); 
        t.onload = function () { 
          var e = t.responseText; 
          null != n && n(e) 
        }, 
        t.send() 
      }, 
      createCORSRequest: function (e, n) { 
        var t = new XMLHttpRequest; 
        return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new this.XDomainRequest).open(e, n) : t = null, t 
      } 
    }
    return {
      products: [],
      firstName: "",
      lastName: "",
      streetAdress: "",
      zipCode: "",
      county: "",
      email: "",
      phoneNumber: "",
      Email,
      showCartInfo: false
    };
  },
  methods: {
    showCart() {
      this.showCartInfo = !this.showCartInfo
    },
    finishCheckout() {
      let message = this.fullName +
      "\n" +
      this.adress +
      "\n" +
      this.email +
      "\n" +
      this.phoneNumber
      this.sendEmail(this.email, message, this.fullName)
    },
    sendEmail(email, msg, name) {
      this.Email.send({
        Host : "mail.gmx.com",
        Username : "webstore496@gmx.com",
        Password : "&KX*3aFz8vzo",
        To : email,
        From : "webstore496@gmx.com",
        Subject : "Important message for Mr. "+name+"!",
        Body : msg,
      }).then(alert(msg));
    },
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
    adress() {
      return this.streetAdress + "\n" + this.zipCode + " " + this.county;
    },
  },
};
</script>

<style scoped>

.show-cart-btn {
  margin-top: 10px;
  padding: 5px 10px 5px 10px;
  border-radius: 5px;
  border: none;
  background-color: #00000025;
}

.show-cart-btn p {
  margin: 0;
}

.show-cart-btn:hover {
  background-color: #00000030;
}

.cart-info {
  box-shadow: #00000050 1px 2px 4px;
  background-color: #FFFFFF;
  display: block;
  margin: 0 auto;
  width: 500px;
  border-radius: 5px;
}

.table {
  margin: 20px 0 50px 0;
  color: #000;
}

.input-wrapper {
  display: flex;
  justify-content: center;
  width: 500px;
  margin: 20px auto 0 auto;
  /* border: 1px solid black */
}

.inputs {
  display: grid;
  grid-template-columns: auto auto;
  /* border: 1px red solid; */
  width: 100%;
  justify-items: start;
}

.grid-item {
  position: relative;
  /* border: 1px blue solid; */
  width: 100%;
  padding: 0 10px;
  margin-bottom: 10px;
}

.grid-item > label {
  position: absolute;
  left: 10px;
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

.grid-item > input {
  border: none;
  margin: 0 0 5px 0px;
  padding: 5px 10px;
  border-radius: 5px;
  width: 100%;
  box-shadow: #0000001f 1px 2px 4px;
}

.price-total {
  margin-top: 20px;
}

.cancel-btn, .checkout-btn {
  border: none;
  margin-top: 0;
  padding: 10px 25px;
  font-size: 1.2em;
  border-radius: 5px; 
}

.cancel-btn {
  background-color: rgba(245, 21, 21, 0.815);
  color: #000000;
  margin-right: 20px;
  padding: 14px 25px;
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
</style>
