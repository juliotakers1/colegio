<template >
  <div class=" text-center ">
  <h1 class="fw-bold mb-2 text-center mb-5">Grados</h1>
  
  <div class="col-12   "> <!--inicio div alumno-->
  
  <div class=" mb-3 input-group ">
    <span  class="input-group-text">Nombre Grado</span>
    <input type="text" class="form-control" id="grado" v-model.trim="grado.nombreGrado" >
  </div>
  </div>
 

    <div class="btn-group col-12 py-2  " role="group" aria-label="Basic example">
    <button class="btn btn-primary float-end" type="submit" :disabled="bloquear">
    Guardar
    </button>
  </div>
  
  </div>
</template>

<script>
export default {
    props:{
        grado: Object
    },
    computed:{
        bloquear(){
            return this.grado.nombreGrado.trim() === "" ? true : false
        }
    }
}
</script>

<style>

</style>