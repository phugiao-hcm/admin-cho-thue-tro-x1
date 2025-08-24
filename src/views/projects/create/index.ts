import router from '@/router'

router.addRoute({
  path: '/projects/create',
  name: 'ProjectCreate',
  meta: { requiresAuth: true },
  component: () => import('./View.vue'),
})
