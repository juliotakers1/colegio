<template>
  <div class="  text-center py-1 mr-2" >
  
  <div class="  col-12 card  justify-center   float-start" id="appo"> <!--inicio div alumno-->
   
  <h2 class="fw-bold mb-2 text-center mb-2 text-dark ">Reporte</h2>

  <div class=" mb-3 input-group py-3 px-5">
    <span  class="input-group-text">Nombre</span>
    <input type="text" class="form-control" id="nombre" v-model.trim="reporte.nombreMaestro" >
  </div>

   <div class="mb-3 input-group py-2 px-5">
    <span  class="input-group-text">Apellido</span>
    <input type="text" class="form-control" id="apellido"  v-model.trim="reporte.apellidoMaestro">
  </div>

  <div class="mb-3 input-group py-4 px-5">
    <span  class="input-group-text">Edad</span>
    <input type="number" class="form-control" id="edad" v-model.trim="reporte.edadMaestro" >

     <div class="mb-2 input-group py-5 px-1">
            <span  class="input-group-text">Telefono</span>
            <input type="number" class="form-control" id="telefono" v-model.trim="reporte.telefonoMaestro">
        </div>

        <div class="mb-2 input-group px-2">
    <span  class="input-group-text">Descripción Reporte</span>
    <textarea class="form-control" placeholder="Descripción" id="descripcion" v-model.trim="reporte.descripcion"></textarea>
    
  </div>
  </div> <!--fin div alumno-->

  </div>
 
 
  
  

    
  

 
    
    <div class="btn-group col-6  py-2  " role="group" aria-label="Basic example">
    <button class="btn btn-primary float-end me-2" type="submit" :disabled="bloquear">
    Guardar
    </button>
      
  </div>
  </div>
</template>

<script>
 
export default {
props:{
    reporte: Object
  },
  computed: {
    bloquear(){
      return this.reporte.nombreMaestro.trim() === "" ? true : false
    }
  },
  methods: {
    
  },
}
</script>

<style>
 
</style>