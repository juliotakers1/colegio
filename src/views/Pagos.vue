<template>
<div >
    <Navbar />
    <div class="container py-3">
    <div class="card-body">
            <router-link to="/todospagos" class="card-link  ">
            <img src="../assets/fondos/backbutton_120674.png" style="width:50px; "  >
            </router-link>
        </div>
     <form  @submit.prevent="procesarFormulario">
            <FormP :pago="pago" />
              
         </form>
        
    </div>
</div>
</template> 

<script>
import Navbar from '../components/Navbar'
import FormP from '../components/FormP'
import { mapActions } from 'vuex'
export default {
    components:{
        Navbar,
        FormP
    },
    data() {
        return {
            pago:{
            nombreEstudiante:"",
            tipoPago:"",
            descripcion:"",
            total:""
            }
        }
    },
    methods: {
        ...mapActions(['setPago']),
        procesarFormulario(){
            console.log(this.pago)
            if(this.pago.nombreEstudiante.trim() === ""){
                console.log('vacio')
                return
            }
            
            this.setPago(this.pago)
            this.pago = {
                nombreEstudiante:"",
            tipoPago:"",
            descripcion:"",
            total:""
            }
        }
    },
}
</script>

<style>

</style>