import Vue from 'vue'
import VueRouter from 'vue-router'
import Discovery from '../views/Discovery.vue'
import Index from '../components/index/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/discovery',
    component: Index,
    children: [
      {
        path: '/discovery',
        component: Discovery
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
