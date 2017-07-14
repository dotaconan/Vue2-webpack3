<template>
  <div id="">
    <h2>{{title}}</h2>
    <ul>
      <li v-for="item in lists">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "About",
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

<style scoped>
</style>
