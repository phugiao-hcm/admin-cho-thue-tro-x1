// src/composables/usePage.ts
import { ref, onMounted } from 'vue'
import { PROJECT_STATUS } from './const'

export function usePage() {
  const setStatus = (status: number) => {
    switch (status) {
      case PROJECT_STATUS.PENDING:
        return 'Đang chờ xử lý'
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
