<template>
  <div>
  <Navbar />
  <div class="container py-2">
      
  <form >
    <FormR />
  </form>
  </div>
  
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import FormR from '../components/FormR'
export default {
    components: {
        Navbar,
        FormR
    }
}
</script>

<style>

</style>