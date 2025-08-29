// import '@/assets/main.css'
// import router from '@/router'

// import { createApp } from 'vue'
// import App from './App.vue'
// import '@/views/index'

// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// import { useUI } from '@/mixins/globalMixin'

// console.log('12312312312312312312312312312')

// const app = createApp(App)

// app.use(router)
// app.use(ElementPlus)
// app.use(useUI)

// app.mount('#app')

// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'

// import '@/assets/main.css'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// import { useUI } from '@/mixins/globalMixin'
// import { initRouter } from './views'

// const app = createApp(App)
// app.use(ElementPlus)
// app.use(useUI)

// async function bootstrap() {
//   await initRouter()
//   const app = createApp(App)
//   app.use(router)
//   app.mount('#app')
// }
// bootstrap()

// app.mount('#app')

import '@/assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/main.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { useUI } from '@/mixins/globalMixin'
import { initRouter } from './views'

async function bootstrap() {
  // init router trước
  await initRouter()

  // chỉ tạo app 1 lần
  const app = createApp(App)
  app.use(ElementPlus)
  app.use(useUI)
  app.use(router)
  app.mount('#app')
}

bootstrap()
