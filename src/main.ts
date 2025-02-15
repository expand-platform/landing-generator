/* bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'

import "@scss/all.scss"

import { createApp } from 'vue'

import App from './App.vue'
const app = createApp(App)

app.mount('#app')
