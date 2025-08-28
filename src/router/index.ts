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
// const routes: RouteRecordRaw[] = [
//   { path: '/', redirect: `/dashboard/list` }, // default route
// ]
const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/dashboard/list' },
  {
    path: '/dashboard',
    component: routerView,
    children: [{ path: 'list', component: () => import('@/views/dashboard/list/View.vue') }],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
