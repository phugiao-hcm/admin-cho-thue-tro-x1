import { reactive } from 'vue'
import type { App } from 'vue'

const ui = reactive({
  isFixedRight: null as null | boolean,
  isFixedLeft: null as null | boolean,
  isResponsiveMobile: false,
  windowWidth: window.innerWidth,
})

const formatPrice = (value?: number | null): string => {
  if (typeof value !== 'number') return ''
  return value.toLocaleString('vi-VN') + ' ₫'
}

const handleResize = () => {
  ui.windowWidth = window.innerWidth
  ui.isResponsiveMobile = ui.windowWidth < 768
}

window.addEventListener('resize', handleResize)
handleResize()

export function createGlobalPlugin() {
  return {
    install(app: App) {
      app.config.globalProperties.$ui = ui
      app.config.globalProperties.$formatPrice = formatPrice
    },
  }
}

// ✅ Composable để dùng trong <script setup>
export function useUI() {
  return { ui, formatPrice }
}
