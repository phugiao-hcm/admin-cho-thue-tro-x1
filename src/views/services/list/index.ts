import router from '@/router'
import { useBreadcrumb } from '@/router/breadcrumb'
import { BASE_ADMIN_PATH } from '@/utils/const'
const { project } = useBreadcrumb()

router.addRoute({
  path: `/${BASE_ADMIN_PATH}/service/list`,
  name: 'ServiceList',
  meta: { requiresAuth: true },
  beforeEnter(to, from, next) {
    to.meta.breadcrumb = project.list()
    next()
  },
  component: () => import('./View.vue'),
})
