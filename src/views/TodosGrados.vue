<template>
<div class="">
 <Navbar />
<div class="container">
 
    <h1 class="fw-bold text-center my-2 ">grados</h1>
<div class="btn-group py-5" role="group" aria-label="Basic example">
  <router-link class="btn btn-primary me-2" to="/grados">Agregar Grado</router-link>
      

</div> 
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
      <td> <button class="btn btn-danger btn-sm mr-2" @click="eliminarGrados(item._id)">Eliminar</button></td>
      <td>  
        Editar
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
 import {useStore, mapState, mapActions} from 'vuex'
import { computed, onMounted, Vue } from 'vue'
  

 
export default {
    components:{
        Navbar
    },
    computed:{
        
    },
    methods: {
	  
      ...mapActions(['eliminarGrados'])
	},
     setup() {
       const store = useStore()
       const grados = computed(() => store.state.grados)

       onMounted(async() => {
         await store.dispatch('cargarGrado')
       })

       return{ grados   }
     },
     
     
}

</script>

<style>

</style>