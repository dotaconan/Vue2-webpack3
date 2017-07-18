<template>
  <div><button @click="handleClick">ButtonClick!!</button></div>
</template>
<script>
  export default {
    methods: {
      handleClick() {
        console.log('ButtonClick!!');
      }
    }
  }
</script>
<style scoped>
</style>
