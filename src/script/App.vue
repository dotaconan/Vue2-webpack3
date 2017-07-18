<template>
  <div id="app">
    <menu-nav></menu-nav>
    <h1>{{msg}}</h1>
    <transition name="fade" mode="out-in" appear>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import Menu from '../components/Menu';

export default {
  name: 'App',
  components: {
    'menu-nav': Menu
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="less">
@import '../style/index.less';
@import '../style/app.less';
@import '../style/home-v.less';
</style>
