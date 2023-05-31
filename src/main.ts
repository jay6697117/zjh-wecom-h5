import { createApp } from 'vue'
import { store } from '@/store'
// normalize.css
import 'normalize.css/normalize.css'
// 全局样式
import '@/styles/index.less'
// svg icon
import 'virtual:svg-icons-register'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(store)
app.use(router)
app.config.globalProperties.name = '沐华'

app.mount('#app')
