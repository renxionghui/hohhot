<template>
  <el-aside class="main-aside">
    <el-menu :default-active="defaultActive" :router="true">
      <el-menu-item index="/vegetation-manage/query">
        <el-icon>
          <map-location />
        </el-icon>
        <span>园林绿地</span>
      </el-menu-item>
      <el-menu-item index="/drawing-manage">
        <el-icon>
          <edit />
        </el-icon>
        <span>专题制图</span>
      </el-menu-item>
      <el-menu-item index="/planning-manage">
        <el-icon>
          <postcard />
        </el-icon>
        <span>规划管理</span>
      </el-menu-item>
      <el-menu-item index="/evaluate-manage">
        <el-icon>
          <coin />
        </el-icon>
        <span>量化评估</span>
      </el-menu-item>
      <el-menu-item index="/ecology-manage">
        <el-icon>
          <moon-night />
        </el-icon>
        <span>生态环境</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute();
const defaultActive = ref(route.path)

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