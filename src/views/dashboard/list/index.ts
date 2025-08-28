import router from '@/router'
import { BASE_ADMIN_PATH } from '@/utils/const'

router.addRoute({
  path: `/${BASE_ADMIN_PATH}/dashboard/list`,
  name: 'DashboardList',
  // meta: { requiresAuth: true },
  component: () => import('./View.vue'),
})
