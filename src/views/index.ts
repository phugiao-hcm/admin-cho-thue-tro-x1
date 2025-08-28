export const initRouter = async function () {
  // Import các module child route
  await import('./dashboard')
  await import('./projects')
  await import('./reviews')
  await import('./services')
  await import('./users')
}
await initRouter()
