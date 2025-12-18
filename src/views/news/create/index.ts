import router from '@/router'
import { useBreadcrumb } from '@/router/breadcrumb'
const { news } = useBreadcrumb()

router.addRoute({
  path: `/news/create`,
  name: 'NewsCreate',
  meta: { requiresAuth: true },
  beforeEnter(to, from, next) {
    to.meta.breadcrumb = news.create()
    next()
  },
  component: () => import('./View.vue'),
})
