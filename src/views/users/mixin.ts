// src/composables/usePage.ts
import { PROJECT_STATUS } from './const'

export function usePage() {
  const setStatus = (status: number) => {
    switch (status) {
      case PROJECT_STATUS.PENDING:
        return 'Chờ duyệt'
      case PROJECT_STATUS.PENDING:
        return 'Chờ duyệt'
      case PROJECT_STATUS.APPROVED:
        return 'Đã duyệt'
      case PROJECT_STATUS.REJECTED:
        return 'Bị từ chối'
      default:
        return ''
    }
  }

  const setTypeStatus = (status: number) => {
    switch (status) {
      case PROJECT_STATUS.PENDING:
        return 'warning'
      case PROJECT_STATUS.APPROVED:
        return 'success'
      case PROJECT_STATUS.REJECTED:
        return 'danger'
      default:
        return ''
    }
  }

  return {
    setStatus,
    setTypeStatus,
  }
}
