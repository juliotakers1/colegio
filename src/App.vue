<template>
<div class="app  ">
  
  
  <router-view/>
</div>
</template>
<script>

import {mapActions} from 'vuex'
  
export default {
   
  methods: {
    ...mapActions(['cargarLocalStorage'])
  },
  created() {
    this.cargarLocalStorage()
  },
}
</script>
<style>
 
</style>

