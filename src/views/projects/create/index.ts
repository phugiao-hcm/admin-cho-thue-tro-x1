import router from '@/router'
import { useBreadcrumb } from '@/router/breadcrumb'
const { project } = useBreadcrumb()

router.addRoute({
  path: '/projects/create',
  name: 'ProjectCreate',
  meta: { requiresAuth: true },
  beforeEnter(to, from, next) {
    to.meta.breadcrumb = project.create()
    next()
  },
  component: () => import('./View.vue'),
})
