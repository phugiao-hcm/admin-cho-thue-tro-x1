import router from '@/router'

router.addRoute({
  path: '/projects/detail',
  name: 'ProjectDetail',
  meta: { requiresAuth: true },
  component: () => import('./View.vue'),
})
