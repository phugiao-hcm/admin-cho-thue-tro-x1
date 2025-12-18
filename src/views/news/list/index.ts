import router from '@/router'
import { useBreadcrumb } from '@/router/breadcrumb'
const { news } = useBreadcrumb()

router.addRoute({
  path: `/news/list`,
  name: 'NewsList',
  beforeEnter(to, from, next) {
    to.meta.breadcrumb = news.list()
    next()
  },
  component: () => import('./View.vue'),
})
