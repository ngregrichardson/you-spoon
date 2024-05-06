import 'floating-vue/style.css'
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import FloatingVue from 'floating-vue'

const app = createApp(App)

app.use(router)
app.use(FloatingVue, {
  themes: {
    'menu-dropdown': {
      $extend: 'dropdown',
      triggers: ['click']
    }
  }
})

app.mount('#app')
