<template>
<div class="todo"> <!--inicio div general-->
    
    <Navbar />
    <div class="container py-2">
        <div class="card-body">
            <router-link to="/todosGrados" class="card-link  ">
            <img src="../assets/fondos/backbutton_120674.png" style="width:50px; "  >
            </router-link>
        </div>
         <form  @submit.prevent="procesarFormulario">
             <FormG :grado="grado" />
         </form>
    </div>
    
</div><!--fin div general-->
</template>

<script>
import Navbar from '../components/Navbar'
import FormG from '../components/FormG'
import { mapActions } from 'vuex'
 
export default {
    components: {
        Navbar,
        FormG
    },
    data() {
        return {
            grado:{
                nombreGrado: ""     
            }
        }
    },
    methods: {
        ...mapActions(['setGrados']),
        procesarFormulario(){
            console.log(this.grado)
            if(this.grado.nombreGrado.trim() === ""){
                console.log('vacio')
                return
            }
            
            this.setGrados(this.grado)
            this.grado = {
                nombreGrado: ""
            }
        }
    },
}
</script>

<style>

</style>