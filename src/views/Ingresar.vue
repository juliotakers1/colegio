<template>
  <div class="formu" id="ingreso">
    <form class="p-3 form card" @submit.prevent="procesarFormulario">
     <center>
        <img src="../assets/fondos/Imagen1.png" alt="Avatar"    id="avatar"  >
        </center>
        <h2 class="titulo fw-bold text-center  ">INGRESAR</h2>
        <input type="email"
        placeholder="Email"
        class="form-control my-2"
        v-model.trim="email"
        >
        <input type="password" 
        placeholder="Contraseña"
        class="form-control my-2"
        v-model.trim="pass1"
        >
        <button type="submit" class="btn btn-block fw-bold boton" :disabled="bloquear">Ingresar</button>
        <div class="text-center mt-2">
            <span>
                <router-link to="/registro" class="text-secondary">
                ¿No tienes Cuenta?
                </router-link>
            </span>
        </div>
    </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
name: 'Ingreso',
data() {
    return {
        email:'',
        pass1:''
    }
},
computed:{
    bloquear(){
        if(!this.email.includes('@')){
            return true
        }
        if(this.pass1.length > 5){
            return false
        }
        return true
    }
},
methods: {
    ...mapActions(['ingresoUsuario']),
    procesarFormulario(){
       this.ingresoUsuario({email: this.email, password: this.pass1})
       this.email = '';
       this.pass1 = '';
    }
},
}
</script>

<style>
h2{
    color: blue;
}
.formu{
   display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh; 
}
.form{
    width: 450px;
    background: rgb(255, 255, 255); 
    border-style: solid;
  border-color: red;
  opacity: 0.8;
} 
#ingreso {
    background: url('../assets/fondos/fondo.jpg');
    

}
input[type="email"]{
   background:transparent;
   color: red;
}
input[type="email"]::placeholder{
   background:transparent;
   color: blue;
}
input[type="password"]::placeholder{
   background:transparent;
   color: blue;
}
input[type="password"]{
   background:transparent;
   color: red;
}
input[type="email"]:hover{
   background:transparent;
   color: blue;
}
  input[type="password"]:hover{
   background:transparent;
   color: red;
}
.boton{
    background: blue;
    color: white;
}
.boton:hover{
    background: red;
    color: white;
}
#avatar{
    width: 90px;
    display: flex;
    justify-content: center;
    
}
</style>