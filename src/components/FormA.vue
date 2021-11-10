<template>
  <div class="row text-center">
  <h1 class="fw-bold mb-2 text-center mb-5">inscripciones</h1>
  
  <div class="col-6 card "> <!--inicio div alumno-->
  <h5 class="fw-bold py-2">Datos Estudiante</h5>

  <div class=" mb-3 input-group ">
    <span  class="input-group-text">Nombre</span>
    <input type="text" class="form-control" id="nombreAlumno"  v-model.trim="inscripcion.nombreAlumno">
  </div>

   <div class="mb-3 input-group">
    <span  class="input-group-text">Apellido</span>
    <input type="text" class="form-control" id="apellidoAlumno"  v-model.trim="inscripcion.apellidoAlumno">
  </div>

   <div class="mb-3 input-group">
    <span  class="input-group-text">Grado</span>
    <select class="form-select"   v-model="inscripcion.grado" >
    <option   v-for="gradito in grados" :key="gradito._id" :value="gradito.nombreGrado">{{gradito.nombreGrado}}</option>
    
    </select>
  </div>

  </div>
<div class="col-6 card "><!--inicio div encargado-->
 
<h5 class="fw-bold py-2">Datos Encargado</h5>
 
  <div class="mb-3 input-group">
    <span  class="input-group-text">Nombre Encargado</span>
    <input type="text" class="form-control" id="nombreEncargado"  v-model.trim="inscripcion.nombreEncargado">
  </div>

  <div class="mb-3 input-group">
    <span  class="input-group-text">Apellido Encargado</span>
    <input type="text" class="form-control" id="apellidoEncargado"  v-model.trim="inscripcion.apellidoEncargado">
  </div>

  <div class="mb-3 input-group">
    <span  class="input-group-text">DPI</span>
    <input type="number" class="form-control" id="dpi"  v-model.trim="inscripcion.dpi">
  </div>

  <div class="mb-3 input-group">
    <span  class="input-group-text">Telefono</span>
    <input type="number" class="form-control" id="telefono"  v-model.trim="inscripcion.telefono">
  </div>

</div> <!--fin div encargado-->
    
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
    inscripcion: Object
  },
  computed:{
    bloquear(){
      return this.inscripcion.nombreAlumno.trim() === "" ? true : false
    }
  },
  setup() {
    const store = useStore()
    const grados = computed(() => store.state.grados)

    onMounted(async() => {
      await store.dispatch('cargarGrado')
    })

    return{
      grados
    }
  }
  
}
</script>

<style>

</style>