<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Products</router-link>
      <router-link to="/cart" id="checkout">
        <div id="cart">
          <b-icon icon="cart4" font-scale="1.9"></b-icon>
          <div v-if="this.$store.state.cart.length > 0">
            <p>
              {{ this.$store.state.cart.length }}
            </p>
          </div>
        </div>
      </router-link>
      <router-link to="/wishlist" id="wishlist"
        ><b-icon icon="heart" font-scale="1.9"></b-icon
      ></router-link>
    </div>
    <router-view />
    <Footer />
  </div>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #000000;
  }

  #nav {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    padding: 30px;
    background-color: #353535;
  }

  #nav a {
    font-weight: bold;
    color: #f0f4ef;
  }

  #nav a.router-link-exact-active {
    color: #3c6e71;
  }

  #checkout {
    position: absolute;
    right: 25px;
    top: 25px;
  }

  #wishlist {
    position: absolute;
    right: 65px;
    top: 25px;
  }

  #cart > div {
    position: absolute;
    right: -5px;
    top: -2px;
    background-color: #f4ce00;
    border-radius: 10px;
    width: 1.1rem;
    height: 1.1rem;
  }

  #cart > div > p {
    color: #000000;
    font-size: 0.8rem;
  }
</style>
