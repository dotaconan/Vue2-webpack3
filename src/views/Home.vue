<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <h2 class="welcome-text">Home Page!</h2>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to home page!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .home {
    .welcome-text{
      color: #42b983;
    }
  }
</style>
