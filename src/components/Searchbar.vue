<template>
  <div id="searchbar">
    <div id="searchfield">
      <input v-model="searchQuery" placeholder="Sök efter produkter..." />
    </div>
    <filter-drop-down />
  </div>
</template>

<script>
import FilterDropDown from "./FilterDropDown.vue";

export default {
  name: "Searchbar",
  components: {
    FilterDropDown,
  },
  computed: {
    searchQuery: {
      get() {
        return this.$store.state.searchQuery;
      },
      set(searchQuery) {
        this.$store.commit("searchQuery", searchQuery);
      },
    },
  },
};
</script>

<style scoped>
#searchfield {
  margin-top: 60px;
}

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
