<template>
  <div id="searchbar" style="display: flex;">
    <div id="searchfield">
      <input v-model="searchQuery" placeholder="Search product">
    </div>
    <filter-drop-down />
  </div>
</template>

<script>
import FilterDropDown from './FilterDropDown.vue';

export default {
  name: "Searchbar",
  components:{
    FilterDropDown
  },
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
.searchbar{
  position: absolute;
}
.searchfield{
  height: 20px;
}
</style>