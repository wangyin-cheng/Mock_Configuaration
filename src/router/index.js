import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@views/AboutView.vue')
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: () => import(/* webpackChunkName: "Welcome" */ '@views/Welcome.vue')
  },
  {
    path: '/',
    redirect: '/welcome'
  }
]

const router = new VueRouter({
  routes
})

export default router
