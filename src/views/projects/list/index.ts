import router from '@/router'
import { useBreadcrumb } from '@/router/breadcrumb'
const { project } = useBreadcrumb()

router.addRoute({
  path: `/projects/list`,
  name: 'ProjectList',
  meta: { requiresAuth: true },
  beforeEnter(to, from, next) {
    to.meta.breadcrumb = project.list()
    next()
  },
  component: () => import('./View.vue'),
})
