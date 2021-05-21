<template>
  <div id="searchbar">
    <input v-model="searchQuery" placeholder="Search product">
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