import 'floating-vue/style.css'
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import FloatingVue from 'floating-vue'
import { init, trackEvent } from '@aptabase/web'

if (import.meta.env.VITE_APTABASE_APP_KEY) {
  init(import.meta.env.VITE_APTABASE_APP_KEY, {
    host: 'https://stats.iamnoah.dev'
  })

  trackEvent('view', {
    path: '/'
  })
}

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
