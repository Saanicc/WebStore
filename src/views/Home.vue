<template>
  <div class="home">
    <Products />
    <Searchbar/>
    <Gallery />
  </div>
</template>

<script>
// @ is an alias to /src
import Products from "@/components/Products.vue";
import Gallery from "@/components/Gallery";
import Searchbar from "@/components/Searchbar"

export default {
  name: "Home",
  components: {
    Products,
    Gallery,
    Searchbar,
  },
};
</script>
