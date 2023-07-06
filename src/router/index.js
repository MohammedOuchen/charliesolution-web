import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CharlieView from '../views/CharlieView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/charlie',
    name: 'charlie',
    component: CharlieView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
