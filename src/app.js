// import 'whatwg-fetch';
import Vue from 'vue'
import App from './script/App'
import router from './router'

import './style/index.less'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
