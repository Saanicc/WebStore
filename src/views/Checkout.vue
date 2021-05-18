<template>
  <div class="cart-page">
    <h1 class="title">Checkout</h1>
    <div class="input-wrapper">
      <div class="inputs">
        <input type="text" placeholder="Förnamn" v-model="firstName" />
        <input type="text" placeholder="Efternamn" v-model="lastName" />
        <input type="text" placeholder="Gatuadress" v-model="streetAdress" />
        <input type="text" placeholder="Postnummer" v-model="zipCode" />
        <input type="text" placeholder="Ort" v-model="county" />
        <input type="text" placeholder="Email" v-model="email" />
        <input type="text" placeholder="Telefonnummer" v-model="phoneNumber" />
      </div>
    </div>
    <button class="checkout-btn" @click="finishCheckout()">
      Finish checkout
    </button>
  </div>
</template>

<script>
export default {
  name: "Checkout",
  data() {
    return {
      products: [],
      firstName: "",
      lastName: "",
      streetAdress: "",
      zipCode: "",
      county: "",
      email: "",
      phoneNumber: "",
    };
  },
  methods: {
    finishCheckout() {
      alert(
        this.fullName +
          "\n" +
          this.adress +
          "\n" +
          this.email +
          "\n" +
          this.phoneNumber
      );
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
.input-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.inputs {
  width: 250px;
}
.inputs > input {
  border: none;
  margin: 0 0 5px 0;
  padding: 5px 10px;
  border-radius: 5px;
}

.checkout-btn {
  border: none;
  margin-top: 25px;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #42b983;
}

.checkout-btn:hover,
.checkout-btn:focus {
  background-color: #289061;
}
</style>
