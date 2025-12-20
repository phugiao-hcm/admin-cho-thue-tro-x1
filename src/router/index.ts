// // export default router
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

// Paths that should be allowed without PIN (e.g. sign-in, pin page itself)
const ALLOW_PATH_PREFIXES = ['/pin', '/sign-in', '/auth']

// Base routes
const baseRoutes: RouteRecordRaw[] = [
  { path: '/', redirect: `/dashboard/list` }, // default route]
  {
    path: '/pin',
    name: 'PinUnlock',
    component: () => import('../views/pin/PinUnlock.vue'),
    meta: { allowWithoutPin: true },
  },
]

const router = createRouter({
  history: createWebHistory('/admin-cho-thue-tro-x1/'),
  routes: baseRoutes,
})

// Global guard: require unlock by PIN for protected routes
router.beforeEach((to, from, next) => {
  // allow routes that explicitly set allowWithoutPin
  if (to.meta && (to.meta as { allowWithoutPin?: boolean }).allowWithoutPin) return next()

  // allow known prefixes
  if (ALLOW_PATH_PREFIXES.some(p => to.path.startsWith(p))) return next()

  // already unlocked in this session?
  const unlocked = sessionStorage.getItem('pinUnlocked') === 'true'
  if (unlocked) return next()

  // otherwise redirect to /pin, preserve destination in query
  if (to.path !== '/pin') {
    return next({ path: '/pin', query: { redirect: to.fullPath } })
  }

  return next()
})

export default router
