import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// 路由
import router from './router'

// Pinia 状态管理
import { createPinia } from 'pinia'

// Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

// 注册插件
app.use(router)
app.use(createPinia())
app.use(ElementPlus)

app.mount('#app')
