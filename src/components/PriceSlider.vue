<template>
  <div>
    <input type="range" min="0" max="20000" step="100" v-model="price" />
    <br />
    {{ price }}
  </div>
</template>

<script>
  export default {
    name: 'PriceSlider',
    data() {
      return {}
    },
    computed: {
      price: {
        get() {
          return this.$store.state.price
        },
        set(price) {
          this.$store.commit('price', price)
        }
      }
    }
  }
</script>

<style></style>
