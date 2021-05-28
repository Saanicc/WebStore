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
        ><b-icon icon="star" font-scale="1.9"></b-icon
      ></router-link>
    </div>
    <router-view />
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
  width: 100%;
  z-index: 1000;
  padding: 30px;
  background-color: #0d1821;
}

#nav a {
  font-weight: bold;
  color: #f0f4ef;
}

#nav a.router-link-exact-active {
  color: #42b983;
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
  right: 0;
  top: 0;
  background-color: rgb(0, 140, 255);
  border-radius: 10px;
  width: 1.1rem;
  height: 1.1rem;
}

#cart > div > p {
  color: #ffffff;
  font-size: 0.8rem;
}
</style>
