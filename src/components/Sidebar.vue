<template>
  <el-col :class="{sidebar: true, 'state-close': appStateClose}">
    <switcher @changeSidebarState="changeSidebarState" :switcherClose="appStateClose"></switcher>
    <el-menu theme="dark" default-active="1" router>
      <el-menu-item index="1" :route="{path: '/'}"><i class="el-icon-setting"></i>仪表盘</el-menu-item>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-message"></i>矿场监控</template>
        <el-menu-item-group>
          <el-menu-item index="2-1" :route="{path: '/kcgk'}"><i class="el-icon-warning"></i>矿场概况</el-menu-item>
          <el-menu-item index="2-2" :route="{path: '/allkj'}"><i class="el-icon-setting"></i>全部矿机</el-menu-item>
          <el-menu-item index="2-3" :route="{path: '/inlinekj'}"><i class="el-icon-warning"></i>在线矿机</el-menu-item>
          <el-menu-item index="2-4" :route="{path: '/outlinekj'}"><i class="el-icon-setting"></i>掉线矿机</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="3" :route="{path: '/jjmanage'}"><i class="el-icon-menu"></i>机架管理</el-menu-item>
      <el-menu-item index="4" :route="{path: '/kcmanage'}"><i class="el-icon-setting"></i>矿场管理</el-menu-item>
      <el-submenu index="5">
        <template slot="title"><i class="el-icon-message"></i>个人中心</template>
        <el-menu-item-group>
          <el-menu-item index="5-1" :route="{path: '/kgmanage'}"><i class="el-icon-warning"></i>矿工管理</el-menu-item>
          <el-menu-item index="5-2" :route="{path: '/yjfk'}"><i class="el-icon-setting"></i>意见反馈</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
</template>
<script>
import Switcher from './Switcher.vue';
export default {
  name: "Sidebar",
  props: ["changeAppState", "appStateClose"],
  components: {
    switcher: Switcher
  },
  methods: {
    changeSidebarState() {
      this.$emit('changeAppState')
    }
  }
}
</script>
<style lang="less" scoped>
@import '../style/variable/index.less';
@import './sidebar.less';
</style>
