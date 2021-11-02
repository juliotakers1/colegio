<template >
  <div class=" text-center ">
  <h1 class="fw-bold mb-2 text-center mb-5">Pagos</h1>
  
  <div class="col-12   "> <!--inicio div alumno-->
  

  <div class=" mb-3 input-group ">
    <span  class="input-group-text">Estudiante</span>
    <input type="text" class="form-control" id="estudiante"  >
  </div>

   <div class="mb-3 input-group">
    <span  class="input-group-text">Tipo Pago</span>
    <select class="form-select" aria-label=" ">
    <option selected value="Inscripción Colegio">Inscripción Colegio</option>
    <option value="Inscripción IGA">Inscripción IGA</option>
    <option value="Colegiatura">Colegiatura </option>
    <option value="Colegiatura IGA">Colegiatura IGA</option>
    </select>
  </div>

  <div class="mb-3 input-group">
    <span  class="input-group-text">Descripción</span>
    <input type="text" class="form-control" id="descripcion"  >

     <div class="mb-3 input-group py-2">
            <span  class="input-group-text">Fecha Inscripcion</span>
            <input type="datetime-local" class="form-control" id="fecha"  >
        </div>

        <div class="mb-3 input-group py-2">
            <span  class="input-group-text">Total</span>
            <input type="datetime-local" class="form-control" id="total"  >
        </div>
  </div> <!--fin div alumno-->

  </div>
 
    
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