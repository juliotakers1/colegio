<template>
  <div class="editar"> <!--inicio div general-->
    
    <Navbar />
    <div class="container py-2">
  <!--      Editar {{ $route.params._id}} - {{inscripcion}}-->
         <form  @submit.prevent="updateInscripciones(inscripcion)">
             <FormA :inscripcion="inscripcion" />
         </form>
    </div>
    
</div>
</template>

<script>
import Navbar from '../components/Navbar'
import FormA from '../components/FormA'
import { mapActions, mapState } from 'vuex'
export default {
    components:{
        Navbar,
        FormA
    },
    computed:{
        ...mapState(['inscripcion'])
    },
    methods: {
        ...mapActions(['setInscripcion','updateInscripciones'])
    },
    created() {
        this.setInscripcion(this.$route.params._id)
    },
}
</script>

<style>

</style>