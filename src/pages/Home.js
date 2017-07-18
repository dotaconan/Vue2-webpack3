export default {
  name: 'About',
  template: `<div class="home">
    <home-btn></home-btn>
    <h1>{{ msg }}</h1>
    <h2 class="welcome-text">Home Page!</h2>
  </div>`,
  components: {
    'home-btn': () => import('../components/ButtonHome.vue')
  },
  data () {
    return {
      msg: 'Welcome to home page!'
    }
  }
}
