import { createApp } from 'vue'
import { pinia } from './pinia.ts'
import App from './App.vue'

createApp(App).use(pinia).mount('#app')
