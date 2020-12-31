import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () =>
        import(/* webpackChunkName: "projects" */ '../views/Projects.vue')
  },
  {
    path: '/vuetorrent',
    name: 'Vuetorrent',
    component: () =>
        import(/* webpackChunkName: "vuetorrent" */ '../views/Vuetorrent.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
