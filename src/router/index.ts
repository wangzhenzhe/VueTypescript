import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

// Containers
import TheContainer from '../containers/TheContainer.vue'

// Views
import Dashboard from '../views/Dashboard.vue'
import Forms from '../views/Forms.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/dashboard',
    name: 'Home',
    component: TheContainer,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'input',
        name: 'Input',
        component: Forms
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = new VueRouter({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  routes
})

export default router
