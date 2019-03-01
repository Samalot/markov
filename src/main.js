import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import { http } from "./http.js"

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false

const globals = {
    install () {
      Vue.http = http;
      Vue.prototype.$http = http;
      Vue.prototype.$http.init();
    }
}

Vue.use( globals )
Vue.use(Buefy)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
