<template>
<div class="todo"> <!--inicio div general-->
    
    <Navbar />
    <div class="container py-2">
        
         <form  @submit.prevent="procesarFormulario">
             <FormA :inscripcion="inscripcion" />
         </form>
    </div>
    
</div><!--fin div general-->
</template>

<script>
import Navbar from '../components/Navbar'
import FormA from '../components/FormA'
import { mapActions } from 'vuex'
 
export default {
    components: {
        Navbar,
        FormA
    },
    data() {
        return {
            inscripcion:{
                nombreAlumno: "",
                apellidoAlumno:"",
                grado:"",
                nombreEncargado:"",
                apellidoEncargado:"",
                dpi:0,
                telefono:0
                 
    }
        }
    },
    methods: {
        ...mapActions(['setInscripciones']),
        procesarFormulario(){
            console.log(this.inscripcion)
            if(this.inscripcion.nombreAlumno.trim() === ""){
                console.log('vacio')
                return
            }
            
            this.setInscripciones(this.inscripcion)
            this.inscripcion = {
                nombreAlumno: "",
                apellidoAlumno:"",
                grado:"",
                nombreEncargado:"",
                apellidoEncargado:"",
                dpi:0,
                telefono:0
            }
        }
    },
}
</script>

<style>

</style>