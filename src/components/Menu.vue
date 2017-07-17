<template>
  <el-menu theme="dark" :default-active="activeIndex" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1"><router-link to="/" exact>Home</router-link></el-menu-item>
    <el-menu-item index="2"><router-link to="/about" exact>About</router-link></el-menu-item>
    <el-menu-item index="3"><router-link to="/shop" exact>Shop</router-link></el-menu-item>
  </el-menu>
</template>
<script>
export default {
    data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>
</style>
