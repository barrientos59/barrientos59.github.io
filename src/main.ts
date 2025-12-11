import { createApp } from 'vue'
//import { BootstrapVueNext } from 'bootstrap-vue-next'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


// Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import "animate.css";
async function setupApp() {
  console.log('Initializing Contabilizacion app...')

  const app = createApp(App)

  app.use(createPinia())
  app.use(router)

  // ❌ createBootstrap() no existe
  // app.use(createBootstrap())

  // ✅ forma correcta:
  // app.use(BootstrapVueNext)

  app.mount('#app')
}

setupApp()
