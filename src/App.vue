<template>
  <div id="app">
    <div id="nav">
      <b-button v-b-toggle.sidebar-backdrop id="menu">
        <b-icon icon="menu-button" color="#FFFFFF" font-scale="1.9"></b-icon>
      </b-button>

      <b-sidebar id="sidebar-backdrop" backdrop-variant="dark" backdrop shadow>
        <div class="px-2 mt-3">
          <router-link
            to="/"
            style="margin: 1em 0 1em 0; font-size: 1.8em; font-weight: 600; color: #000000;"
            >Webstore</router-link
          >
          <div>
            <br />
            <Searchbar />
            <p
              style="margin: 1em 0 0.2em 0; font-size: 1.2em; font-weight: 600;"
            >
              Filtrera
            </p>
            <FilterDropDown />
          </div>
        </div>
      </b-sidebar>

      <router-link to="/" id="icon">Webstore</router-link>
      <div id="menu-items">
        <FilterDropDown />
        <Searchbar />
      </div>
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

<script>
  import Searchbar from '@/components/Searchbar'
  import FilterDropDown from '@/components/FilterDropDown.vue'

  export default {
    name: 'App',
    components: {
      Searchbar,
      FilterDropDown
    }
  }
</script>

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
    height: 80px;
  }

  #nav a {
    font-weight: bold;
    color: #f0f4ef;
  }

  #nav a.router-link-exact-active {
    color: #3c6e71;
  }

  #menu {
    position: absolute;
    left: 1.1em;
    top: 18px;
    border: none;
    box-shadow: none !important;
    background-color: #353535;
  }

  #menu-items {
    display: none;
  }

  #icon {
    display: none;
  }

  #icon:hover {
    text-decoration: none;
  }

  #icon.router-link-exact-active {
    color: #ffffff !important;
  }

  #checkout {
    position: absolute;
    right: 25px;
    top: 25px;
  }

  #wishlist {
    position: absolute;
    top: 28px;
    right: 80px;
    width: 1rem;
    height: 1rem;
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

  @media screen and (min-width: 500px) {
    #icon {
      display: initial;
      position: absolute;
      left: 2.5em;
      top: 18px;
      color: #ffffff;
      font-size: 1.8em;
      z-index: 10;
    }
  }

  @media screen and (min-width: 650px) {
    #menu {
      display: none;
    }

    #icon {
      left: 1em;
    }

    #menu-items {
      position: absolute;
      left: 0;
      top: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }

    #menu-items {
    }
  }
</style>
