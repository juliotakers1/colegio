import axios from 'axios'
import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {
    user:null,
    inscripciones:[],
    inscripcion:{
      nombreAlumno: "",
      apellidoAlumno:"",
      grado:"",
      nombreEncargado:"",
      apellidoEncargado:"",
      dpi:0,
      telefono:0
    },
    grados:[],
    grado:{
      nombreGrado:""
    },
    pagos:[],
    pago:{
      nombreEstudiante:"",
      tipoPago:"",
      descripcion:"",
      total:""
    },
    tipoPagos:[],
    tipoPago:{
      nombrePago: "",
      totalPago:0
  }, 
  reportes:[],
  reporte:{
    nombreMaestro:"",
    apellidoMaestro:"",
    edadMaestro:0,
    telefonoMaestro:0,
    descripcion:""
  }
  },
  mutations: {
    setUser(state,payload){
      state.user = payload
    },
    setInscripcion(state,payload){
      state.inscripciones = payload
      router.push('/inscripciones')
    },
    cargarInscripcion(state,payload){
      state.inscripciones = payload
    },
    eliminarInscripcion(state,payload){
      state.inscripciones = state.inscripciones.filter(item => item.id !== payload)
      router.push('/inscripcion')
    },
    setGrado(state,payload){
      state.grados = payload
      router.push('/todosGrados')
    },
    cargarGrado(state,payload){
      state.grados = payload
    },
    eliminarGrado(state,payload){
      state.grados = state.grados.filter(item => item.id !== payload)
      router.push('/inscripciones')
    },
    setPago(state,payload){
      state.pagos = payload
      router.push('/pagos')
    },
    cargarPago(state,payload){
      state.pagos = payload
    },
    eliminarPago(state,payload){
      state.pagos = state.pagos.filter(item => item.id !== payload)
      router.push('/pagos')
    },
    setTipoPago(state,payload){
      state.tipoPagos = payload
      router.push('/todosTipoPago')
    },

    cargarTipoPago(state,payload){
      state.tipoPagos = payload
    },
    eliminarTipoPago(state,payload){
      state.tipoPagos = state.tipoPagos.filter(item => item.id !== payload)
      router.push('/tipoPago')
    },
    cargarReporte(state,payload){
      state.reportes = payload
    },
    setReporte(state,payload){
      state.reportes = payload
    }
  },
  actions: {
    async ingresoUsuario({commit},usuario){ 
      try {
        const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDOaskbOhfrxQWjzTsQ49xksYv3YlkUgyI',{
          method:'POST',
          
          body: JSON.stringify({
            email: usuario.email,
            password: usuario.password,
            returnSecureToken: true
          })
        })
        const userDB = await res.json()
        if(userDB.error){
          return console.log(userDB.error)
        }
        commit('setUser',userDB)

        router.push('/')
        localStorage.setItem('usuario',JSON.stringify(userDB))
      } catch (error) {
        console.log(error)
      }
    },
    async registrarUsuario({commit},usuario){
      //este url es global, solo se le cambia lo que va despues de key= AIzaSyBLt0_UFNbEJZTQVmXJY_WNAIwv-yOFL98

      try {
        const respuesta = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDOaskbOhfrxQWjzTsQ49xksYv3YlkUgyI',{
          method: 'POST',
          body: JSON.stringify({
            email: usuario.email,
            password: usuario.password,
            returnSecureToken: true
          })
        })
        const userDB = await respuesta.json()
        console.log(userDB)
        if(userDB.error){
          console.log(userDB.error)
          return
        }
        commit('setUser', userDB)
        router.push('/')
        localStorage.setItem('usuario',JSON.stringify(userDB))

      } catch (error) {
        console.log(error)
      }
    },
    cerrarSesion(){
      this.commit('setUser',null)
      router.push('/ingresar')
      localStorage.removeItem('usuario')
    },
    async cargarLocalStorage({commit,state}){
      if(localStorage.getItem('usuario')){
        commit('setUser',JSON.parse(localStorage.getItem('usuario')))
      }else{
        return commit('setUser', null)
      }
      
    },
      async setInscripciones({commit}, inscripcion){
      console.log(inscripcion.proxy,"INDEX")
        const respuesta =  await axios
        .post('http://localhost:3000/inscripcion/',inscripcion)
        commit('setInscripcion',inscripcion)
        console.log(respuesta.data,"respuesta")
         
         
    },
    async cargarInscripcion({commit}){
      const resultado = await axios
      .get('http://localhost:3000/inscripcion/')
      .then(res =>{
        const datos = res.data.inscripciones
        console.log(datos)
        commit('cargarInscripcion',datos)
      })
       
    },
    async eliminarInscripciones({commit},id){
      const resultado = await axios
      .delete('http://localhost:3000/inscripcion/_id/'+   id)
      .catch(err =>{
        console.log(err)
      })
      commit('eliminarInscripcion',id)
    },
    async cargarGrado({commit}){
      const resultado = await axios
      .get('http://localhost:3000/grado/')
      .then(res =>{
        const datos = res.data.grados
        console.log(datos)
        commit('cargarGrado',datos)
      })
    },
    async setGrados({commit}, grado){
      const respuesta = await axios
      .post('http://localhost:3000/grado/',grado)
      commit('setGrado',grado)
    },
    async eliminarGrados({commit},id){
      const resultado = await axios
      .delete('http://localhost:3000/grado/_id/'+   id)
      .catch(err =>{
        console.log(err)
      })
      commit('eliminarGrado',id)
    },
    async cargarPago({commit},pago){
      const resultado = await axios
      .get('http://localhost:3000/pago/')
      .then(res =>{
        const datos = res.data.pagos
        commit('cargarPago',datos)
      })
    },
    async setPago({commit},pago){
      const resultado = await axios
      .post('http://localhost:3000/pago/',pago)
      commit('setPago',pago)
    },
    async eliminarPagos({commit},id){
      const resultado = await axios
      .delete('http://localhost:3000/pago/_id/'+   id)
      .catch(err =>{
        console.log(err)
      })
      commit('eliminarPago',id)
    },
    async cargarTipoPago({commit},tipoPago){
      const resultado = await axios
      .get('http://localhost:3000/tipoPago/')
      .then(res =>{
        const datos = res.data.tipoPagos
        commit('cargarTipoPago',datos)
      })
    },
    async setTipoPagos({commit},tipoPago){
      const resultado = await axios
      .post('http://localhost:3000/tipoPago/',tipoPago)
      commit('setTipoPago',tipoPago)
    },
    async eliminarTipoPagos({commit},id){
      const resultado = await axios
      .delete('http://localhost:3000/tipoPago/_id/'+   id)
      .catch(err =>{
        console.log(err)
      })
      commit('eliminarTipoPago',id)
    },
    async cargarReportes({commit},reporte){
      const resultado = await axios
      .get('http://localhost:3000/reporte/')
      .then(res =>{
        const datos = res.data.reportes
        commit('cargarReporte',datos)
      })
    }
  },
  modules: {
  },
  getters: {
    usuarioAutenticado(state){
      return !!state.user
    }
  }
})
