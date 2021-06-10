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
  #searchbar > #searchfield > input {
    border: none;
    box-shadow: #00000030 1px 2px 4px;
    padding: 8px 10px;
    border-radius: 5px;
  }

  @media screen and (min-width: 650px) {
    #searchbar > #searchfield > input {
      width: 220px;
    }
  }

  @media screen and (min-width: 750px) {
    #searchbar > #searchfield > input {
      width: 350px;
    }
  }

  @media screen and (min-width: 900px) {
    #searchbar > #searchfield > input {
      width: 450px;
    }
  }

  @media screen and (min-width: 1050px) {
    #searchbar > #searchfield > input {
      width: 550px;
    }
  }
</style>
