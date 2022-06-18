<template>
  <el-aside class="main-aside">
    <el-menu
      default-active="map-manage"
      :router = "true"
    >
      <el-menu-item index="map-manage">
          <el-icon><map-location /></el-icon>
        <span>地图管理</span>
      </el-menu-item>
      <el-sub-menu index="vegetation">
        <template #title>
          <el-icon><school /></el-icon>
          <span>园林绿地</span>
        </template>
        <el-menu-item index="vegetation-query" style="margin-left:24px">信息查询</el-menu-item>
        <el-menu-item index="vegetation-edit" style="margin-left:24px">信息编辑</el-menu-item>
        <el-menu-item index="vegetation-update" style="margin-left:24px">信息更新</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="drawing-manage">
        <el-icon><edit /></el-icon>
        <span>专题制图</span>
      </el-menu-item>
      <el-menu-item index="planning-manage">
        <el-icon><postcard /></el-icon>
        <span>规划管理</span>
      </el-menu-item>
      <el-menu-item index="evaluate-manage">
        <el-icon><coin /></el-icon>
        <span>量化评估</span>
      </el-menu-item>
      <el-menu-item index="ecology-manage">
        <el-icon><moon-night /></el-icon>
        <span>生态环境</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script setup>
</script>

<style scoped>
.main-aside {
  width: 160px;
  height: calc(100vh - 60px);
  border-right: solid 1px var(--el-menu-border-color);
  box-sizing: border-box;
  overflow: hidden;
}
</style>

<style>
.main-aside .el-menu {
  border-right: none;
}
</style>