<template>
  <div class="home">
  <NavbarA />
   <Cards />
  </div>
</template>

<script>
// @ is an alias to /src

import NavbarA from '../components/NavbarA'
import Cards from '../components/Cards'
export default {
  name: 'Home',
  components: {
   NavbarA,
   Cards
  }
}
</script>
