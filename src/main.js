import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/css/global.css'
import VueResource from 'vue-resource'


// import axios from 'axios'
// axios.defaults.baseURL = 'http://http://localhost:8080/#/'
// Vue.prototype.$http = axios

Vue.use(VueResource)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
