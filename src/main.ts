import '@/assets/main.css'
import router from '@/router'

import { createApp } from 'vue'
import App from './App.vue'
import '@/views/index'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { useUI } from '@/mixins/globalMixin'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(useUI)

app.mount('#app')
