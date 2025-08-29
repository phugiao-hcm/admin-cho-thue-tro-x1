// // export default router

// import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
// import { h } from 'vue'

// // routerView dùng làm parent container
// export const routerView = {
//   render() {
//     return h('router-view')
//   },
// }

// // Routes cơ bản
// const routes: RouteRecordRaw[] = [
//   { path: '/', redirect: `/dashboard/list` }, // default route
// ]

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes,
// })

// export default router

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
