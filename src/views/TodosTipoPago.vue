<template>
<div class="">
 <Navbar />
<div class="container">
 <div class="card-body">
            <router-link to="/" class="card-link  ">
            <img src="../assets/fondos/backbutton_120674.png" style="width:50px; "  >
            </router-link>
        </div>
    <h1 class="fw-bold text-center my-2 ">Tipos de Pago</h1>
<div class="btn-group py-5" role="group" aria-label="Basic example">
  <router-link class="btn btn-primary me-2" to="/tipoPago">Agregar Tipo Pago</router-link>
      

</div> 
<input type="text" placeholder="Buscar..." class="form-control rouded mb-2" >
  <table class="table table-striped">
   <thead>
    <tr>
      <!--<th scope="col">ID</th>-->
      <th scope="col">NOMBRE PAGO</th>
      <th scope="col">TOTAL</th>
      <th scope="col"></th>
        
       
       
    </tr>
  </thead>
  <tbody>
    <tr v-for="item of tipoPagos" :key="item._id">
       
      <!--<td>{{item._id}}</td>-->
      <td>{{item.nombrePago}}</td>
      <td>{{item.totalPago}}</td>
      <td> <button class="btn btn-danger btn-sm mr-2" @click="eliminarTipoPagos(item._id)">Eliminar</button></td>
       
       
       
       
    </tr>
     
  </tbody>
</table>
</div>
</div>
</template>

<script>
import moment from 'moment'
 import Navbar from '../components/Navbar'
 import {useStore, mapState, mapActions} from 'vuex'
import { computed, onMounted, Vue } from 'vue'
  

 
export default {
    components:{
        Navbar
    },
    computed:{
        
    },
    methods: {
	  
      ...mapActions(['eliminarTipoPagos'])
	},
     setup() {
       const store = useStore()
       const tipoPagos = computed(() => store.state.tipoPagos)

       onMounted(async() => {
         await store.dispatch('cargarTipoPago')
       })

       return{ tipoPagos   }
     },
     
     
}

</script>

<style>

</style>