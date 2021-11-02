<template>
  <div class="row text-center">
  <h1 class="fw-bold mb-2 text-center mb-5">Reporte</h1>
  
  <div class="col-6 card "> <!--inicio div alumno-->
   

  <div class=" mb-3 input-group py-3">
    <span  class="input-group-text">Nombre</span>
    <input type="text" class="form-control" id="nombre"  >
  </div>

   <div class="mb-3 input-group">
    <span  class="input-group-text">Apellido</span>
    <input type="text" class="form-control" id="apellido"  >
  </div>

  <div class="mb-3 input-group">
    <span  class="input-group-text">Edad</span>
    <input type="text" class="form-control" id="edad"  >

     <div class="mb-3 input-group py-2">
            <span  class="input-group-text">Telefono</span>
            <input type="number" class="form-control" id="telefono"  >
        </div>
  </div> <!--fin div alumno-->

  </div>
<div class="col-6 card "><!--inicio div encargado-->
 
  
  <div class="mb-3 input-group py-3">
    <span  class="input-group-text">Descripción Reporte</span>
    <textarea class="form-control" placeholder="Descripción" id="descripcion"></textarea>
    
  </div>

  <div class="mb-3 input-group">
    <span  class="input-group-text">Fecha</span>
    <input type="datetime-local" class="form-control" id="fecha"  >
  </div>

  

</div> <!--fin div encargado-->
    
    <div class="btn-group col-12 py-2  " role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary">Guardar</button>
   
</div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>