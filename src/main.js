import { Buttons, Tooltip, Toast } from 'bootstrap';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/_custom.scss'
import './assets/scss/docs.scss'

const app = createApp(App).use(router).mount('#app')