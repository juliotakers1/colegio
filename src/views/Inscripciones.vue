<template>
<div class="">
 <Navbar />
<div class="container">
 
    <h1 class="fw-bold text-center my-2 ">Inscripciones</h1>
<div class="btn-group py-5" role="group" aria-label="Basic example">
  <router-link class="btn btn-primary" to="/inscripcion">Agregar</router-link>
   
</div> 
  <table class="table table-striped">
   <thead>
    <tr>
      <!--<th scope="col">ID</th>-->
      <th scope="col">NOMBRE ALUMNO</th>
      <th scope="col">APELLIDO ALUMNO</th>
      <th scope="col">GRADO</th>
      <th scope="col">NOMBRE ENCARGADO</th>
      <th scope="col">APELLIDO ENCARGADO</th>
      <th scope="col">DPI</th>
      <th scope="col">TELEFONO</th>
      <th scope="col">FECHA</th>
       
    </tr>
  </thead>
  <tbody>
    <tr v-for="item of inscripciones" :key="item._id">
       
      <!--<td>{{item._id}}</td>-->
      <td>{{item.nombreAlumno}}</td>
      <td>{{item.apellidoAlumno}}</td>
      <td>{{item.grado}}</td>
      <td>{{item.nombreEncargado}}</td>
      <td>{{item.apellidoEncargado}}</td>
      <td>{{item.dpi}}</td>
      <td>{{item.telefono}}</td>
      <td> {{moment(item.fechaInscripcion ).format('MM/DD/YYYY') }}</td>
       
    </tr>
     
  </tbody>
</table>
</div>
</div>
</template>

<script>
import moment from 'moment'
 import Navbar from '../components/Navbar'
 import {useStore} from 'vuex'
import { computed, onMounted, Vue } from 'vue'
  

 
export default {
    components:{
        Navbar
    },
     setup() {
       const store = useStore()
       const inscripciones = computed(() => store.state.inscripciones)

       onMounted(async() => {
         await store.dispatch('cargarInscripcion')
       })

       return{ inscripciones   }
     },
     methods: {
	  moment
	}
     
}

</script>

<style>

</style>