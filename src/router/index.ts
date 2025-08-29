// // export default router
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

// Base routes
const baseRoutes: RouteRecordRaw[] = [
  { path: '/', redirect: `/dashboard/list` }, // default route]
]

const router = createRouter({
  history: createWebHistory('/admin-cho-thue-tro-x1/'),
  routes: baseRoutes,
})

export default router
