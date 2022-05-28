import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue'),
  },
  {
    path: '/acount',
    name: 'Acount',
    component: () => import(/* webpackChunkName: "login" */ '../views/CreateAcount.vue'),
  },
  {
    path: '/newpassword',
    name: 'Newpassword',
    component: () => import(/* webpackChunkName: "login" */ '../views/NewPassword.vue'),
  },
  {
    path: '/childbirthday',
    name: 'ChildBirthday',
    component: () => import(/* webpackChunkName: "login" */ '../views/ChildBirthday.vue'),
  },
  {
    path: '/childis',
    name: 'ChildIs',
    component: () => import(/* webpackChunkName: "login" */ '../views/ChildIs.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
