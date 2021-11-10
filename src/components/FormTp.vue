<template >
  <div class=" text-center ">
  <h1 class="fw-bold mb-2 text-center mb-5">Tipo Pago</h1>
  
  <div class="col-12   "> <!--inicio div alumno-->
  
  <div class=" mb-3 input-group ">
    <span  class="input-group-text">Nombre Pago</span>
    <input type="text" class="form-control" id="nombrePago" v-model.trim="tipoPago.nombrePago" >
  </div>
  <div class=" mb-3 input-group ">
    <span  class="input-group-text">Total</span>
    <input type="text" class="form-control" id="totalPago" v-model.trim="tipoPago.totalPago" >
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
        tipoPago: Object
    },
    computed:{
        bloquear(){
            return this.tipoPago.nombrePago.trim() === "" ? true : false
        }
    }
}
</script>

<style>

</style>