<template>
  <div id="searchbar">
    <div id="searchfield">
      <input v-model="searchQuery" placeholder="Sök efter produkter..." />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Searchbar',
    components: {},
    computed: {
      searchQuery: {
        get() {
          return this.$store.state.searchQuery
        },
        set(searchQuery) {
          this.$store.commit('searchQuery', searchQuery)
        }
      }
    }
  }
</script>

<style scoped>
  /* #searchfield {
    margin-top: 84px;
    padding-top: 1.3em;
  } */

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
