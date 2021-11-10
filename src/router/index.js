import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {rutaProtegida: true}
  },
  {
    path: '/inscripcion',
    name: 'Inscripcion',
    component: () => import(/* webpackChunkName: "about" */ '../views/Inscripcion.vue'),
    meta: {rutaProtegida: true}
  },
  {
    path: '/inscripciones',
    name: 'Inscripciones',
    component: () => import(/* webpackChunkName: "about" */ '../views/Inscripciones.vue'),
    meta: {rutaProtegida: true}
  },
  {
    path: '/pagos',
    name: 'Pagos',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pagos.vue'),
    meta: {rutaProtegida: true}
  },
  {
    path: '/todospagos',
    name: 'TodosPagos',
    component: () => import(/* webpackChunkName: "about" */ '../views/TodosPagos.vue'),
    meta: {rutaProtegida: true}
  },
  {
    path: '/todosreportes',
    name: 'TodosReportes',
    component: () => import(/* webpackChunkName: "about" */ '../views/TodosReportes.vue'),
    meta: {rutaProtegida: true}
  },
  {
    path: '/nuevoreporte',
    name: 'NuevoReporte',
    component: () => import(/* webpackChunkName: "about" */ '../views/NuevoReporte.vue'),
    meta: {rutaProtegida: true}
  },
  {
    path: '/grados',
    name: 'Grados',
    component: () => import(/* webpackChunkName: "about" */ '../views/Grados.vue'),
    meta: {rutaProtegida: true}
  },
  
  {
    path: '/todosGrados',
    name: 'TodosGrados',
    component: () => import(/* webpackChunkName: "about" */ '../views/TodosGrados.vue'),
    meta: {rutaProtegida: true}
  },
  {
    path: '/tipoPago',
    name: 'TipoPago',
    component: () => import(/* webpackChunkName: "about" */ '../views/TipoPago.vue'),
    meta: {rutaProtegida: true}
  },
  {
    path: '/todosTipoPago',
    name: 'TodosTipoPago',
    component: () => import(/* webpackChunkName: "about" */ '../views/TodosTipoPago.vue'),
    meta: {rutaProtegida: true}
  },
  {
    path: '/ingresar',
    name: 'Ingresar',
    component: () => import(/* webpackChunkName: "about" */ '../views/Ingresar.vue')
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import(/* webpackChunkName: "about" */ '../views/Registro.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next) =>{
  if(to.meta.rutaProtegida){ 
    if(store.getters.usuarioAutenticado){
      next()
    }else{
      next('/ingresar') 
    }
  }else{
    next()
  }
}) 

export default router
