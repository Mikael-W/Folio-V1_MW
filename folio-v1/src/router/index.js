import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Home_en',
    component: () => import('../views/Home_en.vue')
  },
  {
    path: '/fr',
    name: 'Home_fr',
    component: () => import('../views/Home_fr.vue')
  }
]

const router = createRouter({
  mode:'history',
  history: createWebHistory(),
  routes
})

export default router
