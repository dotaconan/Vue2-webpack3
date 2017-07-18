import Vue from 'vue'
import Router from 'vue-router'

// import Home from '@/pages/Home.js'
// import About from '@/pages/About.js'
// import Shop from '@/pages/Shop.js'

const Home = resolve => require(['@/pages/Home.js'], resolve)
const About = resolve => require(['@/pages/About.js'], resolve)
const Shop = resolve => require(['@/pages/Shop.js'], resolve)
const NotFoundComponent = resolve => require(['@/pages/NotFoundComponent.js'], resolve)

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/about',
      name: 'About',
      component: About
    }, {
      path: '/shop',
      name: 'Shop',
      component: Shop
    }, {
      path: '*',
      component: NotFoundComponent
    }
  ]
})
