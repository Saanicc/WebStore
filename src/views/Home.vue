<template>
  <div class="home">
    <Searchbar />
    <Sort />
    <Gallery />
    <Footer />
  </div>
</template>

<script>
  // @ is an alias to /src
  import Gallery from '@/components/Gallery'
  import Searchbar from '@/components/Searchbar'
  import Footer from '../components/Footer.vue'
  import Sort from '../components/Sort.vue'

  export default {
    name: 'Home',
    components: {
      Gallery,
      Searchbar,
      Sort,
      Footer
    }
  }
</script>
