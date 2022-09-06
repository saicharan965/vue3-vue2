import Vue from 'vue'
import VueCompositionAPI, { createApp, h } from '@vue/composition-api'
import { createPinia, PiniaVuePlugin } from 'pinia'
//@ts-ignore
import App from '../src/App.vue';
import router from './router'

Vue.use(VueCompositionAPI)

const app = createApp({
  router,
  pinia: createPinia(),
  render: () => h(App)
})
app.use(PiniaVuePlugin)

app.mount('#app')
