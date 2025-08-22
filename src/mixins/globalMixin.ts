// src/plugins/globalPlugin.ts
import { reactive } from 'vue'
import type { App } from 'vue'

export function createGlobalPlugin() {
  return {
    install(app: App) {
      // reactive state toàn cục
      const ui = reactive({
        isFixedRight: null as null | boolean,
        isFixedLeft: null as null | boolean,
        isResponsiveMobile: false,
        windowWidth: window.innerWidth,
      })

      // hàm format
      const formatPrice = (value?: number | null): string => {
        if (typeof value !== 'number') return ''
        return value.toLocaleString('vi-VN') + ' ₫'
      }

      // cập nhật khi resize
      const handleResize = () => {
        ui.windowWidth = window.innerWidth
        ui.isResponsiveMobile = ui.windowWidth < 768
      }

      window.addEventListener('resize', handleResize)
      handleResize()

      // provide global
      app.config.globalProperties.$ui = ui
      app.config.globalProperties.$formatPrice = formatPrice
    },
  }
}
