import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/index.js'
import i18n from './locales/index.js';
import api from './api/index'
import './assets/css/default.css'
// import 'amfe-flexible/index.js'

console.log(import.meta.env)
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(i18n)
app.config.globalProperties.$api = api
app.mount('#app')
