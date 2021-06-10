<template>
  <div class="back-btn">
    <router-link to="/" id="back-btn">Tillbaka</router-link>
  </div>
</template>

<script>
  export default {
    name: 'BackButton'
  }
</script>

<style>
  #back-btn {
    display: flex;
    text-align: left;
    margin-left: 2.5em;
    color: #157a6e;
  }
</style>
