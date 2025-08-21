import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import globalMixin from './mixins/globalMixin'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.mixin(globalMixin)

app.mount('#app')
