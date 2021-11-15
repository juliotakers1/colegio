<template>
  <div class="todo" > <!--inicio div general-->
    
    <Navbar />
    <div class="container py-2">
        
         <form  @submit.prevent="updateReportes(reporte)">
             <FormR :reporte="reporte" />
         </form>
    </div>
    
</div>
</template>

<script>
import Navbar from '../components/Navbar'
import FormR from '../components/FormR'
import { mapState, mapActions } from 'vuex'
export default {
        components: {
        Navbar,
        FormR
    },
    computed:{
        ...mapState(['reporte'])
    },
    methods: {
        ...mapActions(['setReporte','updateReportes']),
        
    },
    created() {
        this.setReporte(this.$route.params._id)
    },
}
</script>

<style>

</style>