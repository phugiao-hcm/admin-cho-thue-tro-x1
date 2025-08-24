import router from '@/router'

router.addRoute({
  path: '/dashboard/list',
  name: 'DashboardList',
  // meta: { requiresAuth: true },
  component: () => import('./View.vue'),
})
