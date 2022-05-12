<template>
  <div>
    <a-row>
      <a-col>
        <a-layout>
          <a-layout>
            <a-layout-sider>
              <SideNav></SideNav>
              
            </a-layout-sider>
            <a-layout>
              <a-layout-header>
                <TasksHeader></TasksHeader>
              </a-layout-header>
              <!-- 页面主要内容 -->
              <a-layout-content>
                <div class="content">
                  <router-view></router-view>
                </div>
                
                </a-layout-content>
            </a-layout>
          </a-layout>
          <a-layout-footer>Footer</a-layout-footer>
        </a-layout>
      </a-col>
    </a-row>
    <!-- 测试用，可以删除 -->
    <a-row>
      <a-col :span="1"> 测试 </a-col>
      <a-col :span="2">
        <a-dropdown :trigger="['click']">
          <a-button>router-link<a-icon type="down"></a-icon></a-button>
          <a-menu slot="overlay">
            <a-menu-item><router-link to="/home">主页</router-link></a-menu-item>
            <a-menu-item><router-link to="/login">登录</router-link></a-menu-item>
            <a-menu-item><router-link to="/register">注册</router-link></a-menu-item>
            <a-menu-item><router-link to="/taskList">任务</router-link></a-menu-item>
          </a-menu>
        </a-dropdown>
      </a-col>
      <a-col :span="2">
        <a-dropdown :trigger="['click']">
          <a-button>添加新任务<a-icon type="plus"/></a-button>
          <a-menu slot="overlay">
            <a-menu-item @click="addManyTask(10)">添加10个</a-menu-item>
            <a-menu-item @click="addManyTask(20)">添加20个</a-menu-item>
            <a-menu-item @click="addManyTask(50)">添加50个</a-menu-item>
            <a-menu-item @click="addManyTask(200)">添加200个</a-menu-item>
            <a-menu-item @click="addManyTask(2000)">添加2000个</a-menu-item>
          </a-menu>
        </a-dropdown>
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
  components: { SideNav, TasksFooter, TasksHeader },

  // 测试用-可以删除
  methods:{
    // 添加新任务
    addManyTask(titck){
      for(let i=0;i<titck;i++){
        this.$store.dispatch("TaskStore/addTask",{name:"demo",time:"demo-time"})
      }
      
    },
  }
}
</script>

<style>
.content{
  margin:10px;
}
</style>