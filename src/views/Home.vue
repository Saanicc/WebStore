<template>
  <div class="home">
    <Searchbar />
    <Gallery />
    <Footer />
  </div>
</template>

<script>
  // @ is an alias to /src
  import Gallery from '@/components/Gallery'
  import Searchbar from '@/components/Searchbar'
  import Footer from '../components/Footer.vue'

  export default {
    name: 'Home',
    components: {
      Gallery,
      Searchbar,
      Footer
    }
  }
</script>
