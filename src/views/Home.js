export default {
  name: 'About',
  template: `<div class="home">
    <h1>{{ msg }}</h1>
    <h2 class="welcome-text">Home Page!</h2>
  </div>`,
  data () {
    return {
      msg: 'Welcome to home page!'
    }
  }
}
