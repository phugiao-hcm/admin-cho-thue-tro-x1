export const initRouter = async function () {
  await import('./dashboard')
  await import('./projects')
  await import('./reviews')
  await import('./services')
  await import('./users')
}
await initRouter()
