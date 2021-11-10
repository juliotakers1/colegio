<template>
<div class="todo"> <!--inicio div general-->
    
    <Navbar />
    <div class="container py-2">
        
         <form  @submit.prevent="procesarFormulario">
             <FormTp :tipoPago="tipoPago" />
         </form>
    </div>
    
</div><!--fin div general-->
</template>

<script>
import Navbar from '../components/Navbar'
import FormTp from '../components/FormTp'
import { mapActions } from 'vuex'
 
export default {
    components: {
        Navbar,
        FormTp
    },
    data() {
        return {
            tipoPago:{
                nombrePago: "",
                totalPago:0
            }
        }
    },
    methods: {
        ...mapActions(['setTipoPagos']),
        procesarFormulario(){
            console.log(this.tipoPago)
            if(this.tipoPago.nombrePago.trim() === ""){
                console.log('vacio')
                return
            }
            
            this.setTipoPagos(this.tipoPago)
            this.tipoPago = {
                 nombrePago: "",
                 totalPago:0
            }
        }
    },
}
</script>

<style>

</style>