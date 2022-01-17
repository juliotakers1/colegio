<template>
<div class="">
 <Navbar />
<div class="container">
 <div class="card-body">
            <router-link to="/" class="card-link  ">
            <img src="../assets/fondos/backbutton_120674.png" style="width:50px; "  >
            </router-link>
        </div>
    <h1 class="fw-bold text-center my-2 ">Pagos</h1>
<div class="btn-group py-5" role="group" aria-label="Basic example">
  <router-link class="btn btn-primary me-2" to="/pagos">Agregar Pago</router-link>
      <router-link class="btn btn-success me-2" to="/tipoPago">Agregar Tipo Pago</router-link>
    <router-link class="btn btn-secondary me-2" to="/todosTipoPago"> Tipo Pago</router-link>
</div> 
<input type="text" placeholder="Buscar..." class="form-control rouded mb-2" >
  <table class="table table-striped">
   <thead>
    <tr>
      <!--<th scope="col">ID</th>-->
      <th scope="col">NOMBRE ALUMNO</th>
      <th scope="col">TIPO PAGO</th>
      <th scope="col">DESCRIPCIÓN</th>
      <th scope="col">TOTAL</th>
       <th scope="col"> </th>
       
    </tr>
  </thead>
  <tbody>
    <tr v-for="item of pagos" :key="item._id">
       
      <!--<td>{{item._id}}</td>-->
      <td>{{item.nombreEstudiante}}</td>
      <td>{{item.tipoPago}}</td>
      <td>{{item.descripcion}}</td>
      <td>Q {{item.total}}</td>
       <td><button class="btn btn-danger btn-sm mr-2" @click="eliminarPagos(item._id)">Eliminar</button></td>
       
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
       ...mapActions(['eliminarPagos']),
	  moment
	},
     setup() {
       const store = useStore()
       const pagos = computed(() => store.state.pagos)

       onMounted(async() => {
         await store.dispatch('cargarPago')
       })

       return{ pagos   }
     },
     
     
}

</script>

<style>

</style>