import router from '@/router'
import { useBreadcrumb } from '@/router/breadcrumb'
import { BASE_ADMIN_PATH } from '@/utils/const'
const { project } = useBreadcrumb()

router.addRoute({
  path: `/${BASE_ADMIN_PATH}/projects/create`,
  name: 'ProjectCreate',
  meta: { requiresAuth: true },
  beforeEnter(to, from, next) {
    to.meta.breadcrumb = project.create()
    next()
  },
  component: () => import('./View.vue'),
})
