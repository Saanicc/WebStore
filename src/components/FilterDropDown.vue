<template>
  <div>
    <div class="filter" @click="isOpen = !isOpen">
      <svg viewBox="0 0 1030 638" width="25">
        <path
          d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z"
          fill="#777"
        ></path>
      </svg>
    </div>
    <div class="sub-menu" v-if="isOpen">
      <div v-for="(product, i) in products" :key="i">
        {{ product.name }}
        <input
          type="checkbox"
          :value="product.name"
          v-model="filteredProducts"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import Data from '../../public/data.json'

  export default {
    name: 'FilterDropDOwn',
    computed: {
      filteredProducts: {
        get() {
          return this.$store.state.filteredProducts
        },
        set(filteredProducts) {
          this.$store.commit('filterProductsByCategory', filteredProducts)
        }
      }
    },
    data() {
      Data
      return {
        isOpen: false,
        products: Data.phones
      }
    }
  }
</script>

<style scoped>
  .subMenu {
    position: absolute;
    background-color: #444;
    top: calc(100% - 18px);
    left: 50%;
    transform: translateX(50);
    width: max-content;
  }

  svg:hover {
    background: #ccc;
  }
</style>
