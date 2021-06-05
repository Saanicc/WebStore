<template>
  <div class="sort" style="margin-bottom: 5px;">
    <select v-model="sortBy">
      <option value="price">Price</option>
      <option value="name">Name</option>
    </select>
    {{ sortBy }}
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
