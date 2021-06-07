<template>
  <div class="sort" style="margin-bottom: 5px;">
    <p style="font-size: 1em;">
      Sortera
    </p>
    <select v-model="sortBy">
      <option value="price">Price</option>
      <option value="name">Name</option>
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
