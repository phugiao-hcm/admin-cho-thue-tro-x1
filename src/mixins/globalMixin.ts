import type { ComponentOptions } from 'vue'

const globalMixin: ComponentOptions = {
  data() {
    return {
      ui: {
        isFixedRight: null as null | boolean,
        isFixedLeft: null as null | boolean,
        isResponsiveMobile: false,
        windowWidth: window.innerWidth,
      },
    }
  },
  methods: {
    formatPrice(value: number) {
      return value.toLocaleString('vi-VN') + ' ₫'
    },
  },
  created() {
    console.log('Global mixin created!')
  },
}

export default globalMixin
