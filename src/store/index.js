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
      const resultado = axios
      .get('http://localhost:3000/inscripcion/')
      .then(res =>{
        const datos = res.data.inscripciones
        console.log(datos)
        commit('cargarInscripcion',datos)
      })
      // try {
      //    const res = await fetch('http://localhost:3000/inscripcion/')
      //    const dataDB = await res.json()
      //    const arrayInscripciones = []

      //    for(let id in dataDB){
      //      arrayInscripciones.push(dataDB[id])
      //    }
      //    console.log(arrayInscripciones)
      //    commit('cargarInscripcion',arrayInscripciones)
      // } catch (error) {
      //   console.log(error)
      // }
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
