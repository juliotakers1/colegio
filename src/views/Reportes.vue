<template>
<div class="todo"> <!--inicio div general-->
    
    <Navbar />
    <div class="container py-2">
        <div class="card-body">
            <router-link to="/todosreportes" class="card-link  ">
            <img src="../assets/fondos/backbutton_120674.png" style="width:50px; "  >
            </router-link>
        </div>
         <form  @submit.prevent="procesarFormulario">
             <FormR :reporte="reporte" />
         </form>
    </div>
    
</div><!--fin div general-->
</template>

<script>
import Navbar from '../components/Navbar'
import FormR from '../components/FormR'
import { mapActions } from 'vuex'
 
export default {
    components: {
        Navbar,
        FormR
    },
    data() {
        return {
            reporte:{
            nombreMaestro:"",
            apellidoMaestro:"",
            edadMaestro:0,
            telefonoMaestro:0,
            descripcion:""
        }
        }
    },
    methods: {
        ...mapActions(['setReportes']),
        procesarFormulario(){
            console.log(this.reporte)
            if(this.reporte.nombreMaestro.trim() === ""){
                console.log('vacio')
                return
            }
            
            this.setReportes(this.reporte)
            this.reporte = {
                nombreMaestro:"",
                apellidoMaestro:"",
                edadMaestro:0,
                telefonoMaestro:0,
                descripcion:""
                }
        }
    },
}
</script>

<style>

</style>