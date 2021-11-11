<template>
<div class="">
 <Navbar />
<div class="container">
 
    <h1 class="fw-bold text-center my-2 ">Reportes</h1>
<div class="btn-group py-5" role="group" aria-label="Basic example">
  <router-link class="btn btn-primary" to="/nuevoreporte">Nuevo Reporte</router-link>
   
</div> 
  <table class="table table-striped">
   <thead>
    <tr>
      <th scope="col">NOMBRE</th>
      <th scope="col">APELLIDO</th>
      <th scope="col">EDAD</th>
      <th scope="col">TELEFONO</th>
      <th scope="col">DESCRIPCION</th>
      <th scope="col">FECHA</th>
       <th scope="col"></th>
    </tr>
  </thead>
  <tbody>

    <tr v-for="item in reportes" :key="item._id">
      
      <td> {{item.nombreMaestro}}</td>
      <td> {{item.apellidoMaestro}}</td>
      <td> {{item.edadMaestro}}</td>
      <td> {{item.telefonoMaestro}}</td>
      <td> {{item.descripcion}}</td>
      <td> {{item.fecha}}</td>
      <td><button class="btn btn-success">Generar Reporte</button></td>
    </tr>
     
     
  </tbody>
</table>
</div>
</div>
</template>

<script>
 import Navbar from '../components/Navbar'
import {useStore, mapState, mapActions} from 'vuex'
import { computed, onMounted, Vue } from 'vue'

export default {
    components:{
        Navbar
    },
    methods: {
      
    },
    setup() {
      const store = useStore()
      const reportes = computed(() => store.state.reportes)

      onMounted(async() => {
        await store.dispatch('cargarReportes')
      })

      return{reportes}
    }
}
</script>

<style>

</style>