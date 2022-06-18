<template>
  <div class="login-container">
    <div class="login-wrap">
      <p class="login-title">登陆</p>
      <el-input v-model="username" placeholder="请输入账号"></el-input>
      <el-input
        v-model="password"
        type="password"
        placeholder="请输入密码"
        style="margin: 24px 0"
      ></el-input>
      <el-button type="primary" class="btn-login" @click="handleLogin"
        >登陆</el-button
      >
      <div class="login-footer">
        <el-button type="text">注册</el-button>
        <el-button type="text">忘记密码</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { isLogin } from "../../state";
import { ElMessage } from "element-plus";
const router = useRouter();
const handleLogin = () => {
  if (username.value == "") {
    ElMessage.warning("请输入账号");
    return;
  } else if (password.value == "") {
    ElMessage.warning("请输入密码");
  } else if (username.value == "admin" && password.value == "123456") {
    isLogin.value = true;
    router.push({ name: "index" });
    sessionStorage.setItem("isLogin", true);
  } else {
    ElMessage.error("输入的账号密码有误");
  }
};

const username = ref("");
const password = ref("");
</script>

<style scoped>
.login-container {
  width: 100vw;
  height: 100vh;
  background-image: url("../../assets/image/bg.png");
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-wrap {
  width: 320px;
  padding: 36px;
  border-radius: 24px;
  background-color: rgba(103, 194, 58, 0.2);
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 12px #fff;
}

.login-title {
  font-size: 32px;
  font-weight: bolder;
  color: #fff;
  margin-bottom: 28px;
  text-align: center;
}

.login-footer {
  margin-top: 6px;
  display: flex;
  justify-content: space-between;
}
</style>