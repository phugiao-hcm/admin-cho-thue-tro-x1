// // export default router

// import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
// import { h } from 'vue'
// import DashboardList from '@/views/dashboard/list/View.vue'

// // routerView dùng làm parent container
// export const routerView = {
//   render() {
//     return h('router-view')
//   },
// }

// // Routes cơ bản
// const routes: RouteRecordRaw[] = [
//   {
//     path: '/',
//     component: DashboardList,
//   },
// ]

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes,
// })

// export default router

// router.ts
import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import DashboardList from '../views/dashboard/list/View.vue'

const router = createRouter({
  history: createWebHistory('/admin-cho-thue-tro-x1/'), // 👈 Quan trọng
  routes: [
    { path: '/', redirect: '/dashboard/list' },
    {
      path: '/dashboard',
      component: DefaultLayout,
      children: [{ path: 'list', component: DashboardList }],
    },
  ],
})

export default router
