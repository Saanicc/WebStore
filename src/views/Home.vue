<template>
  <div class="home">
    <Products />
    <Gallery />
  </div>
</template>

<script>
// @ is an alias to /src
import Products from "@/components/Products.vue";
import Gallery from "@/components/Gallery";

export default {
  name: "Home",
  components: {
    Products,
    Gallery,
  },
};
</script>
