import Vue from 'vue'
import App from './App.vue'
import FirebaseVue from './firebase'
import './assets/scss/app.scss'

Vue.use(FirebaseVue)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
