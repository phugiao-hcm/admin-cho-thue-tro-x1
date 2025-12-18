import { usePostBreadcrumb } from './posts'
import { useUserBreadcrumb } from './users'
import { useNewsBreadcrumb } from './news'

export const useBreadcrumb = () => {
  return {
    project: usePostBreadcrumb(),
    user: useUserBreadcrumb(),
    news: useNewsBreadcrumb(),
    // sau này thêm order, blog, v.v...
  }
}
