<template>
  <div class="home">
    <Products />
    <Searchbar />
    <Gallery />
    <Footer />
  </div>
</template>

<script>
  // @ is an alias to /src
  import Products from '@/components/Products.vue'
  import Gallery from '@/components/Gallery'
  import Searchbar from '@/components/Searchbar'
  import Footer from '../components/Footer.vue'

  export default {
    name: 'Home',
    components: {
      Products,
      Gallery,
      Searchbar,
      Footer
    }
  }
</script>
