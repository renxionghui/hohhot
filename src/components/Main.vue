<template>
  <div class="main-container">
    <the-header />
    <el-container>
      <the-aside />
      <router-view />
    </el-container>
  </div>
</template>

<script setup>
import TheHeader from "./layout/TheHeader.vue";
import TheAside from "./layout/TheAside.vue";
</script>

<style scoped>
.main-container {
  width: 100vw;
  height: 100vh;
}
</style>
