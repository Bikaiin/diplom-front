import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'

import Buefy from 'buefy'
Vue.use(Buefy)
import Router from 'vue-router'
Vue.use(Router);

import 'normalize.css'
import "buefy/dist/buefy.css";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
