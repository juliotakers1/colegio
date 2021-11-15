<template>
  <div class="todo"> <!--inicio div general-->
    
    <Navbar />
    <div class="container py-2">
        
         <form  @submit.prevent="updateGrados(grado)">
             <FormG :grado="grado" />
         </form>
    </div>
    
</div><!--fin div general-->
</template>

<script>
import Navbar from '../components/Navbar'
import FormG from '../components/FormG'
import { mapActions, mapState } from 'vuex'
export default {
components: {
        Navbar,
        FormG
    },
    computed:{
        ...mapState(['grado'])
    },
    methods: {
        ...mapActions(['setGrado','updateGrados'])
    },
    created() {
        this.setGrado(this.$route.params._id)
    },
}
</script>

<style>

</style>