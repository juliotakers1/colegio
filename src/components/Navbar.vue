<template>
  <div class="navbar navbar-dark  bg-primary p-2 ">
  <router-link to="/" class="navbar-brand rounded-pill">
    <img src="../assets/fondos/fondito.png" alt="" width="45"  >
  San Lorenzo
     
  </router-link>
  <div class="d-flex  ">
  <router-link class="btn btn-light  me-2 rounded-pill"  to="/inscripciones"
   v-if="usuarioAutenticado"
  >
  Inscripcion
  </router-link>
  <router-link class="btn btn-danger  me-2 rounded-pill" to="/todospagos"
   v-if="usuarioAutenticado"
  >
  Pagos
  </router-link>
   <router-link class="btn btn-light  me-2 rounded-pill" to="/todosreportes"
   v-if="usuarioAutenticado"
  >
  Reportes
  </router-link>
   
   <button class="btn btn-danger rounded-pill" 
  v-if="usuarioAutenticado"
  @click="cerrarSesion"
  >Cerrar Sesión</button>
  </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    data() {
        return {
            
        }
    },
    computed:{
        ...mapGetters(['usuarioAutenticado'])
    },
    methods: {
        ...mapActions(['cerrarSesion'])
    },
}
</script>

<style>

</style>