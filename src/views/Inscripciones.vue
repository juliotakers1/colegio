<template>
<div class="">
 <Navbar />
<div class="container">
          <div class="card-body">
            <router-link to="/" class="card-link  ">
            <img src="../assets/fondos/backbutton_120674.png" style="width:50px; "  >
            </router-link>
        </div>
    <h1 class="fw-bold text-center my-2 ">Inscripciones</h1>
<div class="btn-group py-5" role="group" aria-label="Basic example">
  <router-link class="btn btn-primary me-2" to="/inscripcion">Agregar Inscripción</router-link>
     <router-link class="btn btn-success me-2" to="/grados">Nuevo Grado</router-link>
<router-link class="btn btn-secondary me-2" to="/todosGrados">  Grados</router-link>
 
</div> 
<input type="text" placeholder="Buscar..." class="form-control rouded mb-2" >
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
       <th scope="col"></th>
       <th scope="col"></th>
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
       <td><button class="btn btn-danger btn-sm mr-2" @click="eliminarInscripciones(item._id)">Eliminar</button></td>
       <td>
       <router-link class="btn btn-warning btn-sm mr-2" 
      :to="{
        name: 'EditarInscripcion',
         params: {
           _id: item._id
         } 
         }">
        Editar
      </router-link>
       </td>
    </tr>
     
      

  </tbody>
</table>
</div>
</div>
</template>

<script>
import moment from 'moment' 
 import Navbar from '../components/Navbar'
 import {useStore, mapActions} from 'vuex'
import { computed, onMounted, Vue } from 'vue'
  

 
export default {
    components:{
        Navbar
    },
    methods: {
       ...mapActions(['eliminarInscripciones','cargarInscripcion']),
	  moment
	},
     setup() {
       const store = useStore()
       const inscripciones = computed(() => store.state.inscripciones)

      //  onMounted(async() => {
      //    await store.dispatch('cargarInscripcion')
      //  })

       return{ inscripciones   }
     },
     created() {
       this.cargarInscripcion()
     },
     
}

</script>

<style>

</style>