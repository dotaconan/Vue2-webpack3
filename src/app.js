// import 'babel-polyfill'

import Vue from 'vue'
import App from './script/App'
import router from './router'
// import ElementUI from 'element-ui'
import {Menu, MenuItem} from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

// Vue.use(ElementUI)
Vue.use(Menu)
Vue.use(MenuItem)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
