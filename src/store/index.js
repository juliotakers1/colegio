import { createStore } from 'vuex'
import router from '../router'
import axios from 'axios'
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
      state.inscripciones = state.inscripciones.filter(item => item._id !== payload)
      // router.push('/inscripcion')
    },
    inscripcion(state, payload){
      if(!state.inscripciones.find(item => item._id === payload)){
        router.push('/inscripciones')
        return
      }
      state.inscripcion = state.inscripciones.find(item => item._id === payload)
    },
    updateInscripcion(state,payload){
      state.inscripciones = state.inscripciones.map(item => item._id === payload._id ? payload : item)
      router.push('/inscripciones')
    },

    setGrado(state,payload){
      state.grados = payload
      router.push('/todosGrados')
    },
    cargarGrado(state,payload){
      state.grados = payload
    },
    eliminarGrado(state,payload){
      state.grados = state.grados.filter(item => item._id !== payload)
      //router.push('/inscripciones')
    },
    grado(state,payload){
      if(!state.grados.find(item => item._id === payload)){
        router.push('/todosGrados')
        return
      }
      state.grado = state.grados.find(item => item._id === payload)
    },
    updateGrado(state,payload){
      state.grados = state.grados.map(item => item._id === payload._id ? payload : item)
      router.push('/todosGrados')
    },
    setPago(state,payload){
      state.pagos = payload
      router.push('/todospagos')
    },
    cargarPago(state,payload){
      state.pagos = payload
    },
    eliminarPago(state,payload){
      state.pagos = state.pagos.filter(item => item._id !== payload)
      // router.push('/pagos')
    },
    setTipoPago(state,payload){
      state.tipoPagos = payload
      router.push('/todosTipoPago')
    },

    cargarTipoPago(state,payload){
      state.tipoPagos = payload
    },
    eliminarTipoPago(state,payload){
      state.tipoPagos = state.tipoPagos.filter(item => item._id !== payload)
      // router.push('/tipoPago')
    },
    cargarReporte(state,payload){
      state.reportes = payload
    },
    setReporte(state,payload){
      state.reportes = payload
      router.push('/todosreportes')
    },
    reporte(state,payload){
      if(!state.reportes.find(item => item._id === payload)){
        router.push('/todosreportes')
        return
      }
      state.reporte = state.reportes.find(item => item._id === payload)
    },
    updateReporte(state,payload){
      state.reportes = state.reportes.map(item => item._id === payload._id ? payload : item)
      router.push('/todosreportes')
    },
    eliminarReporte(state,payload){
      state.reportes = state.reportes.filter(item => item._id !== payload)
    },
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
    async eliminarInscripciones({commit},_id){
      const resultado = await axios
      .delete('http://localhost:3000/inscripcion/_id/'+   _id)
      .catch(err =>{
        console.log(err)
      })
      commit('eliminarInscripcion',_id)
    },
    setInscripcion({commit},_id){
        commit('inscripcion',_id)
    },
    async updateInscripciones({commit},inscripcion,_id){
      const id = inscripcion._id
      const ins = await axios
      .put('http://localhost:3000/inscripcion/_id/'+id,inscripcion)
      .catch(err => {
        console.log(err)
      })
      commit('updateInscripcion',inscripcion)
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
      .catch(err =>{
        console.log(err)
      })
      commit('setGrado',grado)
    },
    async eliminarGrados({commit},_id){
      const resultado = await axios
      .delete('http://localhost:3000/grado/_id/'+   _id)
      .catch(err =>{
        console.log(err)
      })
      commit('eliminarGrado',_id)
    },
    setGrado({commit},_id){
      commit('grado',_id)
  },
  async updateGrados({commit},grado,_id){
    const id = grado._id
    const ins = await axios
    .put('http://localhost:3000/grado/_id/'+id,grado)
    .catch(err => {
      console.log(err)
    })
    commit('updateGrado',grado)
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
    async eliminarPagos({commit},_id){
      const resultado = await axios
      .delete('http://localhost:3000/pago/_id/'+   _id)
      .catch(err =>{
        console.log(err)
      })
      commit('eliminarPago',_id)
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
    async eliminarTipoPagos({commit},_id){
      const resultado = await axios
      .delete('http://localhost:3000/tipoPago/_id/'+   _id)
      .catch(err =>{
        console.log(err)
      })
      commit('eliminarTipoPago',_id)
    },
    async cargarReportes({commit},reporte){
      const resultado = await axios
      .get('http://localhost:3000/reporte/')
      .then(res =>{
        const datos = res.data.reportes
        commit('cargarReporte',datos)
      })
    },
    async setReportes({commit},reporte){
      const rest = await axios
      .post('http://localhost:3000/reporte/',reporte)
      commit('setReporte',reporte)
    },
    setReporte({commit},_id){
      commit('reporte',_id)
  },
  async updateReportes({commit},reporte,_id){
    const id = reporte._id
    const ins = await axios
    .put('http://localhost:3000/reporte/_id/'+id,reporte)
    .catch(err => {
      console.log(err)
    })
    commit('updateReporte',reporte)
  },
  async eliminarReportes({commit},_id){
    const resultado = await axios
    .delete('http://localhost:3000/reporte/_id/'+_id)
    commit('eliminarReporte',_id)
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
