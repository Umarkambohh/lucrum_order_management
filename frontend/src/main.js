import { createApp } from 'vue'
import App from './App.vue'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'  // Vuetify styles

// Create the Vuetify instance
const vuetify = createVuetify({
  components,
  directives,
})

createApp(App)
  .use(vuetify)  // Use Vuetify
  .mount('#app')
