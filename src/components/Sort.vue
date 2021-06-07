<template>
  <div class="sort" style="margin-bottom: 5px;">
    <p style="font-size: 1em;">
      Sortera
    </p>
    <select v-model="sortBy">
      <option value="price">Pris</option>
      <option value="name">Namn</option>
    </select>
  </div>
</template>

<script>
  export default {
    name: 'Sort',
    computed: {
      sortBy: {
        get() {
          return this.$store.state.sortBy
        },
        set(sortBy) {
          this.$store.commit('sortPrice', sortBy)
        }
      }
    }
  }
</script>
