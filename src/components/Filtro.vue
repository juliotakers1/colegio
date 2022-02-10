<template>
  

</template>

<script>
import {useStore} from 'vuex'
export default {
    setup() {
        const tienda = useStore()


        const filtro = (_id) => {
            tienda.dispatch('filtrarCodigo',_id)
        }
        return {filtro}
    }
}
</script>

<style>

</style>