<template>
<div class="">
 <Navbar />
<div class="container" >
 <div class="card-body">
            <router-link to="/" class="card-link  ">
            <img src="../assets/fondos/backbutton_120674.png" style="width:50px; "  >
            </router-link>
        </div>
    <h1 class="fw-bold text-center my-2 ">Reportes</h1>
<div class="btn-group py-5" role="group" aria-label="Basic example">
  <router-link class="btn btn-primary" to="/reportes">Nuevo Reporte</router-link>
   
</div> 
<input type="text" placeholder="Buscar..." class="form-control rouded mb-2" >
  <table class="table table-striped" >
   <thead>
    <tr>
      <th scope="col">NOMBRE</th>
      <th scope="col">APELLIDO</th>
      <th scope="col">EDAD</th>
      <th scope="col">TELEFONO</th>
      <th scope="col">DESCRIPCION</th>
      <th scope="col">FECHA</th>
       <th scope="col"></th>
       <th scope="col"></th>
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
      <td> {{moment(item.fecha).format('MM/DD/YYYY')}}</td>
      <td><button class="btn btn-danger btn-sm mr-2" @click="eliminarReportes(item._id)">Eliminar</button></td>
      <td><router-link class="btn btn-warning btn-sm mr-2" 
      :to="{
        name: 'EditarReportes',
         params: {
           _id: item._id
         } 
         }">
        Editar
      </router-link></td>
      <td><router-link class="btn btn-success btn-sm mr-2" :to="{
        name: 'GenerarReporte',
         params: {
           _id: item._id
         } 
         }">Generar Reporte</router-link></td>
       
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
import moment from 'moment' 
// import jsPDF from 'jspdf'
// import html2canvas from 'html2canvas'
export default {
    components:{
        Navbar
    },
    methods: {
      ...mapActions(['cargarReportes','eliminarReportes']),
      moment,
       
    },
    setup() {
      const store = useStore()
      const reportes = computed(() => store.state.reportes)

      // onMounted(async() => {
      //   await store.dispatch('cargarReportes')
      // })

      return{reportes}
    },
    created() {
      this.cargarReportes()
    },
}
</script>

<style>

</style>