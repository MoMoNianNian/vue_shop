import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/css/global.css'
import VueResource from 'vue-resource'


import axios from 'axios'
// axios.defaults.baseURL = 'http://http://localhost:8080/#/'
axios.interceptors.request.use(config=>{
  console.log(config);
  // config 预处理
  config.headers.Authorization = window.sessionStorage.getItem('token')
  //  最后必须 return config
  return config
})
Vue.prototype.$http = axios


Vue.use(VueResource)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
