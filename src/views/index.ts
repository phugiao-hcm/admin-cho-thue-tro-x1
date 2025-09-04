export const initRouter = async function () {
  await import('./dashboard')
  await import('./posts')
  await import('./reviews')
  await import('./services')
  await import('./users')
}
