import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Users from '../views/Users.vue'
import Postings from '../views/Postings.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
	name: 'home',
  	redirect: '/users'
  },
  {
    path: '/login',
    name: 'login',
	component: Login
  },
  {
    path: '/users',
    name: 'users',
    component: Users
  },
  {
    path: '/users/:userId',
    name: 'user',
    component: Users
  },
  {
    path: '/postings',
    name: 'postings',
	component: Postings
  },
  {
    path: '/postings/:postingId',
    name: 'posting',
	component: Postings
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
