import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/tool/:type',
      name: 'tool',
      component: () => import('./views/Tool.vue')
    }
  ]
})

export default router