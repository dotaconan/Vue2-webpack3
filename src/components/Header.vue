<template>
  <div class="Header">
    <div class="logo"><a href="/"></a></div>
    <el-menu theme="dark" mode="horizontal">
      <el-menu-item index="1"><router-link to="/kuangchi" exact>矿 池</router-link></el-menu-item>
      <el-menu-item index="2"><router-link to="/suppor" exact>支 持</router-link></el-menu-item>
      <el-menu-item index="3"><router-link to="/" exact>简体中文</router-link></el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "Header",
  data: () => ({

  })
}
</script>
<style lang="less" scoped>
@import '../style/variable/index.less';
@import './Header.less';
</style>
