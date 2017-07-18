// import 'babel-polyfill'
import Vue from 'vue'
import App from './script/App'
import router from './router'
import {Menu, MenuItem} from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Menu)
Vue.use(MenuItem)

Vue.config.productionTip = false

// Vue.component('async-com', (resolve, reject) => {
//   import('./components/Button.vue')
//     .then(AsynButton => {
//       resolve(AsynButton.default);
//     })
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
