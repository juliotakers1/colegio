<template>
  <div class="buscador">
  <input type="text" 
  placeholder="Buscar..."
   class="form-control my-3" 
   v-model="texto" @keyup="procesarInput"
   >
  </div>
</template>

<script>
import {ref} from 'vue'
import { useStore } from 'vuex'

export default {
    
setup() {
    const texto = ref('')
    const grado = useStore()
    const procesarInput = () =>{
       grado.dispatch('filtroBuscarGrado',texto.value)
    }
    return {texto, procesarInput}
}
}
</script>