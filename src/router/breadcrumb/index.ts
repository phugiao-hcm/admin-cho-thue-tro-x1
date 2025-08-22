import { useProjectBreadcrumb } from './projects'
import { useUserBreadcrumb } from './users'

export const useBreadcrumb = () => {
  return {
    project: useProjectBreadcrumb(),
    user: useUserBreadcrumb(),
    // sau này thêm order, blog, v.v...
  }
}
