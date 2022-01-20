<template>
<div class="">
 <Navbar />
<div class="container">
 <div class="card-body">
            <router-link to="/" class="card-link  ">
            <img src="../assets/fondos/backbutton_120674.png" style="width:50px; " class="me-5">
            </router-link>
        </div>
    <h1 class="fw-bold text-center my-2 ">grados</h1>
<div class="btn-group py-5" role="group" aria-label="Basic example">
  <router-link class="btn btn-primary me-2" to="/grados">Agregar Grado</router-link>
      

</div> 
<BuscarGrado />
  <table class="table table-striped">
   <thead>
    <tr>
      <!--<th scope="col">ID</th>-->
      <th scope="col">NOMBRE GRADO</th>
      <th scope="col"></th>
      <th scope="col"></th>
       
       
       
    </tr>
  </thead>
  <tbody>
    <tr v-for="item of grados" :key="item._id">
       
      <!--<td>{{item._id}}</td>-->
      <td>{{item.nombreGrado}}</td>
      <td  > <button class="btn btn-danger btn-sm mr-2" @click="eliminarGrados(item._id)">Eliminar</button></td>
      <td>  
        <router-link class="btn btn-warning btn-sm mr-2" 
      :to="{
        name: 'EditarGrado',
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
 import BuscarGrado from '../components/BuscarGrado'
 import {useStore, mapState, mapActions} from 'vuex'
import { computed, onMounted, Vue } from 'vue'
  

 
export default {
    components:{
        Navbar,
        BuscarGrado
    },
     
    methods: {
	  
      ...mapActions(['eliminarGrados','cargarGrado' ])
	},
     setup() {
       const store = useStore()
       const grados = computed(() => store.state.gradosFiltrados)

       onMounted(async() => {
         await store.dispatch('cargarGrado')
       })

       return{ grados   }
     },
     created() {
       this.cargarGrado()
     },
  
     
}

</script>

<style>

</style>