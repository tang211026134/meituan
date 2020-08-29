import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import Vuex from 'vuex'
import App from './App.vue'
import VueRouter from 'vue-router'
import ui from './assets/css/resetui.css'

Vue.use(MintUI)
Vue.use(VueRouter)
Vue.use(Vuex)
import router from '../src/assets/js/router.js'
import store from '../src/assets/js/data.js'
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
