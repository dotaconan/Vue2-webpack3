export default {
  name: 'About',
  template: `<div>
    <h2>{{title}}</h2>
    <about-btn></about-btn>
    <ul>
      <li v-for="item in lists">
        {{ item }}
      </li>
    </ul>
  </div>`,
  components: {
    'about-btn': () => import('../components/ButtonAbout.vue')
  },
  data () {
    return {
      title: 'About page!!',
      lists: [
        'james', 'wade', 'pop'
      ]
    }
  }
}
