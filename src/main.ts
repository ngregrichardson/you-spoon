import 'floating-vue/style.css'
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import FloatingVue from 'floating-vue'
import { init } from '@aptabase/web'

init('A-SH-1168607924', {
  host: 'https://stats.iamnoah.dev'
})

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
