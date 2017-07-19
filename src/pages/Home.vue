<template>
  <div class="home">
    <home-btn></home-btn>
    <h1>{{ msg }}</h1>
    <h2 class="welcome-text">Home Page!</h2>
    <button type="button" name="button" @click="handleClick">click请求！</button>
    <h3>{{resMsg}}</h3>
  </div>
</template>
<script>
export default {
  name: "Home",
  components: {
    'home-btn': resolve => require(['../components/ButtonHome.vue'], resolve)
  },
  methods: {
    handleClick() {
      this.$http.get('http://localhost:3001/').then(response => {
        this.resMsg = JSON.parse(response.bodyText).test;
      }, reject => {
        console.log('reject', reject);
      });
    }
  },
  data () {
    return {
      msg: 'Welcome to home page!',
      resMsg: ''
    }
  }
}
</script>
<style lang="less" scoped>
</style>
