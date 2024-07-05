import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'
import quasarUserOptions from '@/plugins/quasar-user-options'
import { getEnvConfig } from '@/plugins/env'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-symbols-outlined/material-symbols-outlined.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

import '@/assets/styles/index.less'

const app = createApp(App)

;(async () => {
  const config = await getEnvConfig()
  app.provide('$config', config)
  app.use(createPinia())
  app.use(router)
  app.use(Quasar, quasarUserOptions)
  app.mount('#app')
})()
