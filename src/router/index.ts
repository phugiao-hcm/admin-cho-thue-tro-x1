// export default router

import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { h } from 'vue'
import DashboardList from '@/views/dashboard/list/View.vue'

// routerView dùng làm parent container
export const routerView = {
  render() {
    return h('router-view')
  },
}

// Routes cơ bản
// const routes: RouteRecordRaw[] = [
//   { path: '/', redirect: `/dashboard/list` }, // default route
// ]
const routes: RouteRecordRaw[] = [
  // { path: '/', redirect: '/dashboard/list' },
  {
    path: '/',
    component: DashboardList,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
