<template>
  <div>
    <h2>{{title}}</h2>
    <about-btn></about-btn>
    <ul>
      <li v-for="item in lists">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'About',
  components: {
    'about-btn': resolve => require(['../components/ButtonAbout.vue'], resolve)
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
</script>
<style lang="less" scoped>
</style>
