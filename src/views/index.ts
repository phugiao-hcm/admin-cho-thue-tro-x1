export const initRouter = async function () {
  // Thêm parent route
  //   router.addRoute({
  //     name: 'hotels',
  //     path: '/hotel/sadmin',
  //     redirect: '/hotel/sadmin/product-type-mgt',
  //     component: routerView,
  //     meta: { requiresAuth: true },
  //   })

  // Import các module child route
  await import('./dashboard')
  await import('./projects')
}
await initRouter()
