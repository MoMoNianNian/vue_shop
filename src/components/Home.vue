<template>
  <el-container>
    <!-- 头部区 -->
    <el-header>
      <div>
        <i class="el-icon-platform-eleme"></i>
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!-- 页面主题 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse?'64px':'200px'">
        <div class="toggel_button" @click="toggleColl">||||</div>
        <!-- 侧边栏导航区 -->
        <el-menu
          router
          :collapse-transition='false'
          :collapse='isCollapse'
          unique-opened
          background-color="#313743"
          text-color="#fff"
          active-text-color="#367dc1"
          :default-active="activePath"
        >
          <!-- 一级菜单 -->
          <el-submenu
            :index="item.id + ''"
            v-for="item in menuList"
            :key="item.id"
          >
            <!-- 一级菜单模板区 -->
            <template slot="title">
              <i :class="iconList[item.id]"></i>
              <span>{{ item.authName }}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item
              :index="'/'+subItem.path"
              v-for="subItem in item.children"
              :key="subItem.id"
              @click="saveNavState('/'+subItem.path)"
            >
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{ subItem.authName }}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { getMenuList } from "../api/login";

export default {
  data() {
    return {
      // 左侧菜单数据
      menuList: [],
      iconList: {
        101: "el-icon-s-custom",
        102: "el-icon-lock",
        103: "el-icon-goods",
        104: "el-icon-tickets",
        105: "el-icon-data-line",
        106: "el-icon-shopping-cart-full",
        107: "el-icon-present",
      },
      // 是否折叠
      isCollapse:false,
      // 被激活的链接地址
      activePath:''
    };
  },
  created() {
    this.getMenuList();
    this.activePath = window.sessionStorage.getItem('activePath')
  },
  methods: {
    logout() {
      // 清空token
      window.sessionStorage.clear();
      // 跳转登录页
      this.$router.push("/login");
    },
    // 获取所有菜单
    async getMenuList() {
      const { data: res } = await getMenuList();
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg);
      this.menuList = res.data;
      console.log(res);
    },
    toggleColl() {
      this.isCollapse= !this.isCollapse
    },
    // 保存链接的激活状态
    saveNavState(activePath){
      window.sessionStorage.setItem('activePath',activePath)
      this.activePath = activePath
    }
  },
};
</script>
  
<style lang="less" scoped>
.el-container {
  height: 100%;
}
.el-header {
  background-color: #363d40;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: 16px;
  .el-icon-platform-eleme {
    margin-right: 10px;
  }
}
.el-aside {
  background-color: #313743;
  .toggel_button {
    background-color: #313743;
    color: #fff;
    line-height: 24px;
    font-size: 10px;
    text-align: center;
    letter-spacing: 2px;
    cursor: pointer;
  }
  .el-menu {
    border-right: none;
  }
}
.el-main {
  background-color: #e9edf1;
}
.iconfont {
  margin-right: 10px;
}
</style>