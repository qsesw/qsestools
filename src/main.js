import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { NIcon } from 'naive-ui'
import { createPinia } from 'pinia'
import naive from 'naive-ui'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(naive)
app.use(router)
app.mount('#app')