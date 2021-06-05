<template>
  <div class="home">
    <Gallery />
    <Footer />
  </div>
</template>

<script>
  // @ is an alias to /src
  import Gallery from '@/components/Gallery'
  import Footer from '../components/Footer.vue'

  export default {
    name: 'Home',
    components: {
      Gallery,
      Footer
    }
  }
</script>
