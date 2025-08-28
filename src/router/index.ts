// export default router

import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { h } from 'vue'

// routerView dùng làm parent container
export const routerView = {
  render() {
    return h('router-view')
  },
}

// Routes cơ bản
const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/admin-cho-thue-tro-x1/dashboard/list' }, // default route
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
