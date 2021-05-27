<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Products</router-link>
      <router-link to="/cart" id="checkout">
        <b-icon icon="cart4" font-scale="1.5"></b-icon>
      </router-link>
      <router-link to="/wishlist" id="wishlist"
        ><b-icon icon="star" font-scale="1.5"></b-icon
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
}

#wishlist {
  position: absolute;
  right: 60px;
}
</style>
