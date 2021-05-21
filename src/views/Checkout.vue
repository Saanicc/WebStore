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
              <th>Antal</th>
              <th>Pris</th>
            </tr>
          </thead>
          <tbody>
            <!--- Hårdkokdad data, ska ändras --->
            <tr class="table-item">
              <td>Samsung Galaxy S21 Ultra 5G</td>
              <td>1</td>
              <td>13490kr</td>
            </tr>
            <tr class="table-item">
              <td>iPhone X</td>
              <td>1</td>
              <td>8490kr</td>
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
    <div class="buttons">
      <router-link to="/" class="cancel-btn" tag="button">Avbryt</router-link>
      <button class="checkout-btn" @click="finishCheckout()">
        Slutför betalning
      </button>
    </div>
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
  background-color: #FFFFFF;
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

.cancel-btn, .checkout-btn {
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
