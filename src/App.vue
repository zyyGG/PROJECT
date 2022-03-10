<template>
  <div>
    <a-row type="flex" justify="center">
      <a-col :span="18">
        <a-layout>
          <a-layout>
            <a-layout-sider><SideNav></SideNav></a-layout-sider>
            <a-layout>
              <a-layout-header>
                <TasksHeader></TasksHeader>
              </a-layout-header>
              <a-layout-content><router-view></router-view></a-layout-content>
            </a-layout>
          </a-layout>
        </a-layout>
      </a-col>
    </a-row>
    <!-- 测试用，可以删除 -->
    <a-row>
      <a-col :span="1"> 测试 </a-col>
      <a-col :span="1">
        <router-link to="/home">主页</router-link>
      </a-col>
      <a-col :span="1">
        <router-link to="/login">登录</router-link>
      </a-col>
      <a-col :span="1">
        <router-link to="/register">注册</router-link>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import SideNav from "./components/SideNav"
import TasksFooter from "./components/TasksFooter"
import TasksHeader from "./components/TasksHeader"
export default {
  name: "App",
  components: { SideNav, TasksFooter, TasksHeader }
}
</script>

<style>
</style>