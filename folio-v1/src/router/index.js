import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Home_en',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home_en.vue')
  },
  {
    path: '/fr',
    name: 'Home_fr',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home_fr.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
