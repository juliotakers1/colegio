<template>
<div class="">
 <Navbar />
<div class="container">
 
    <h1 class="fw-bold text-center my-2 ">Reportes</h1>
<div class="btn-group py-5" role="group" aria-label="Basic example">
  <router-link class="btn btn-primary" to="/nuevoreporte">Nuevo Reporte</router-link>
   
</div> 
  <table class="table table-striped">
   <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
            <td><button class="btn btn-success">Generar Reporte</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
            <td><button class="btn btn-success">Generar Reporte</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
            <td><button class="btn btn-success">Generar Reporte</button></td>
    </tr>
  </tbody>
</table>
</div>
</div>
</template>

<script>
 import Navbar from '../components/Navbar'
export default {
    components:{
        Navbar
    }
}
</script>

<style>

</style>