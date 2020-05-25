import Vue from 'vue'
import App from './App.vue'
import CoreuiVue from '@coreui/vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { iconsSet as icons } from './assets/icons'

Vue.config.productionTip = false
Vue.config.performance = true
Vue.use(CoreuiVue)

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
