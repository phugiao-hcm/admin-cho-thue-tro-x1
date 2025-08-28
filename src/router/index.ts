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
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: DashboardList,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
