<template>
  <div id="wrapper">
    <div class="filter" @click="isOpen = !isOpen">
      <svg viewBox="0 0 1030 638" width="25">
        <path
          d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z"
          fill="#777"
        ></path>
      </svg>
    </div>
    <div class="sub-menu" v-if="isOpen">
      <div class="items">
        <div v-for="(brand, i) in brands" :key="i">
          {{ brand }}
          <input type="checkbox" :value="brand" v-model="filteredProducts" />
        </div>
      </div>
      <div>
        <price-slider />
        <Sort />
      </div>
    </div>
    <div class="sub-menu-mobile">
      <div class="items">
        <div v-for="(brand, i) in brands" :key="i">
          {{ brand }}
          <input type="checkbox" :value="brand" v-model="filteredProducts" />
        </div>
      </div>
      <div>
        <price-slider />
        <Sort />
      </div>
    </div>
  </div>
</template>

<script>
  import PriceSlider from './PriceSlider.vue'
  import Sort from '@/components/Sort.vue'

  export default {
    name: 'FilterDropDOwn',
    components: {
      PriceSlider,
      Sort
    },
    data() {
      return {
        isOpen: false,
        phone: false,
        brands: ['Apple', 'Motorola', 'Oneplus', 'Samsung', 'Sony', 'Xiaomi']
      }
    },
    computed: {
      filteredProducts: {
        get() {
          return this.$store.state.filteredProducts
        },
        set(filteredProducts) {
          this.$store.commit('filterProductsByCategory', filteredProducts)
        }
      }
    }
  }
</script>

<style scoped>
  .filter {
    display: none;
  }

  .sub-menu {
    display: none;
  }

  .sub-menu > div {
    padding: 0 10px;
  }

  svg:hover {
    cursor: pointer;
  }

  svg:hover path {
    fill: #ccc;
  }

  @media screen and (min-width: 650px) {
    .filter {
      width: 50px;
      display: block;
      margin: 0 auto;
    }

    .sub-menu-mobile {
      display: none;
    }

    .sub-menu {
      position: absolute;
      top: 60px;
      left: 0;
      padding: 5px;
      background-color: #494949cc;
      display: flex;
      flex-direction: row;
      color: #ffffff;
      width: 100%;
    }

    .sub-menu p {
      margin: 0.75em 0 0 0;
    }

    .sub-menu > .items {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
    }

    .items > div {
      margin: 0 1em 0 0;
    }

    .sub-menu > div:nth-last-child(1) {
      position: absolute;
      left: 0;
      top: 34px;
      width: 100%;
      background-color: #494949cc;
    }
  }
</style>
