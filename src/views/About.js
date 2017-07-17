export default {
  name: 'About',
  template: `<div id="">
    <h2>{{title}}</h2>
    <ul>
      <li v-for="item in lists">
        {{ item }}
      </li>
    </ul>
  </div>`,
  data () {
    return {
      title: 'About page!!',
      lists: [
        'james', 'wade', 'pop'
      ]
    }
  }
}
