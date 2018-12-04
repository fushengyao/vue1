// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import crypto from './utils/cryptoUtils'


Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.prototype.$crypto = crypto;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
