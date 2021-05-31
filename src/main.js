import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'

import './main.scss'

import { BootstrapVue, IconsPlugin, FormRatingPlugin } from 'bootstrap-vue'

import VShowSlide from 'v-show-slide'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VShowSlide)
Vue.use(FormRatingPlugin)
Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
