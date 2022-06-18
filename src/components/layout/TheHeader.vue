<template>
  <el-header class="main-header">
    <div class="header-logo">
      <icon-logo></icon-logo>
      <p class="header-title">呼和浩特园林 GIS 信息系统</p>
    </div>
    <div class="header-avatar">
      <el-dropdown @command="handleItemClick">
        <div class="user-icon">
          <icon-avatar></icon-avatar>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="logout">退出登陆</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <p class="user-name">{{ username }}</p>
    </div>
  </el-header>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { isLogin } from "../../state";
import IconAvatar from "../icons/IconAvatar.vue";
import IconLogo from "../icons/IconLogo.vue";

const username = ref("admin");

const router = useRouter();

const handleItemClick = (command) => {
  if (command == "logout") {
    isLogin.value = false;
    sessionStorage.setItem("isLogin", false);
    router.replace({ name: "login" });
  }
};
</script>

<style scoped>
.main-header {
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: var(--theme-color);
  color: #fff;
}

.header-logo {
  display: flex;
  align-items: center;
}
.header-title {
  margin-left: 12px;
  font-size: 24px;
  line-height: 48px;
}

.header-avatar {
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  align-items: center;
}

.user-icon {
  width: 24px;
  height: 24px;
  padding: 6px;
  border-radius: 50%;
  background-color: #fff;
  margin-right: 8px;
}
</style>