<template>
  <div id="searchbar">
    <input v-model="searchQuery" placeholder="Sök efter produkter...">
  </div>
</template>

<script>

export default {
  name: "Searchbar",
  computed: {
    searchQuery: {
      get(){
        return this.$store.state.searchQuery
      },
      set(searchQuery){
        this.$store.commit('searchQuery', searchQuery)
      }
    },
    products() {
        return this.$store.state.products
    },
  },
};
</script>

<style scoped>
#searchbar > input {
  border: none;
  box-shadow: #00000030 1px 2px 4px;
  padding: 8px 10px;
  width: 90%;
}

@media screen and (min-width: 575px) {
  #searchbar > input {
    width: 500px;
  }
}
</style>