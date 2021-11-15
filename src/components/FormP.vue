<template >
  <div class=" text-center ">
  <h1 class="fw-bold mb-2 text-center mb-5">Pagos</h1>
  
  <div class="col-12   "> <!--inicio div alumno-->
  

  <div class="mb-3 input-group">
    <span  class="input-group-text">Estudiante</span>
    <select class="form-select" aria-label=" " v-model.trim="pago.nombreEstudiante">
    <option selected v-for="estudiante in inscripciones" :key="estudiante._id" :value="estudiante.nombreAlumno + ' '+estudiante.apellidoAlumno">{{estudiante.nombreAlumno+" "+estudiante.apellidoAlumno}}</option>
     >
    </select>
  </div>

   <!--<div class="mb-3 input-group">
    <span  class="input-group-text">Tipo Pago</span>
    <select class="form-select" aria-label=" " v-model.trim="pago.tipoPago">
    <option selected value="Inscripción Colegio">Inscripción Colegio</option>
    <option value="Inscripción IGA">Inscripción IGA</option>
    <option value="Colegiatura">Colegiatura </option>
    <option value="Colegiatura IGA">Colegiatura IGA</option>
    </select>
  </div>-->
  <div class="mb-3 input-group">
    <span  class="input-group-text">Tipo Pago</span>
    <select class="form-select" aria-label=" " v-model.trim="pago.tipoPago">
    <option selected  v-for=" tipos in tipoPagos" :key="tipos._id" :value="tipos.nombrePago">{{tipos.nombrePago}}</option>
    </select>
  </div>
 
  <div class="mb-3 input-group">
    <span  class="input-group-text">Descripción</span>
    <input type="text" class="form-control" id="descripcion"  v-model.trim="pago.descripcion">

     

         
  </div> <!--fin div alumno-->
<div class="mb-3 input-group">
    <span  class="input-group-text">Tipo Pago</span>
    <select class="form-select" aria-label=" " v-model.trim="pago.total">
    <option selected  v-for=" tipo in tipoPagos" :key="tipo._id" :value="tipo.totalPago">{{tipo.nombrePago+" - "+ "Q "+tipo.totalPago}}</option>
    </select>
  </div>
  </div>
 
    
    <div class="btn-group col-12 py-2  " role="group" aria-label="Basic example">
    <button class="btn btn-primary float-end" type="submit" :disabled="bloquear">
    Guardar
    </button>
  </div>
   
  </div>
</template>

<script>
import {  computed, onMounted, Vue  } from 'vue'
import {useStore} from 'vuex'
export default {
  props:{
    pago: Object
  },
  computed:{
     bloquear(){
            return this.pago.nombreEstudiante.trim() === "" ? true : false
        }
  },
  setup() {
    const store = useStore()
    const inscripciones = computed(() => store.state.inscripciones)
    const tipoPagos = computed(() => store.state.tipoPagos)

    onMounted(async() =>{
      await store.dispatch('cargarInscripcion'),
      await store.dispatch('cargarTipoPago')
    })
    return{
      inscripciones, tipoPagos
    }
  }
}
</script>

<style>

</style>