<template>
  <div><button @click="handleClick">HomeClick!!</button></div>
</template>
<script>
  export default {
    methods: {
      handleClick() {
        console.log('HomeClick!!');
      }
    }
  }
</script>
<style scoped>
</style>
