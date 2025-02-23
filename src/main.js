import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { NIcon } from 'naive-ui'

const app = createApp(App)

app.component('n-icon', NIcon)
app.use(router)
app.mount('#app')