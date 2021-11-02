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
      dpi:"",
      telefono:"",
      fechaInscripcion:""
    }
  },
  mutations: {
    setUser(state,payload){
      state.user = payload
    },
    setInscripcion(state,payload){
      state.inscripciones = payload
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
      
        try {
          const respuesta = await fetch('http://localhost:3400/add_I',  {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(inscripcion)
          })
           return respuesta.json()
        } catch (error) {
          console.log(error)
        }
        commit('setInscripcion',inscripcion)
    },
    async cargarInscripcion({commit}){
      try {
         const res = await fetch('http://localhost:3400/inscripcion')
         const dataDB = await res.json()
         const arrayInscripciones = []

         for(let Id in dataDB){
           arrayInscripciones.push(dataDB[Id])
         }
         console.log(arrayInscripciones)
         commit('cargarInscripcion',arrayInscripciones)
      } catch (error) {
        console.log(error)
      }
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
