import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/views/Home.js')
const About = () => import('@/views/About.js')
const Shop = () => import('@/views/Shop.js')

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
    }
  ]
})
