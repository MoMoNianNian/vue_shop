<template>
  <div class="home">
    home
    <el-button type="info" @click="logout">退出</el-button>
  </div>
</template>

<script>
// import { getLoginMsg } from "../api/login";

export default {
  methods: {
    logout() {
      // 清空token
      window.sessionStorage.clear();
      // 跳转登录页
      this.$router.push('/login');
    },
  },
};
</script>

<style lang="less" scoped>
</style>