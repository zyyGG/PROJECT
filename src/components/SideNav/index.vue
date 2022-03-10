<template>
  <!-- 侧边栏导航 -->
  <div class="sidenav">
    <div class="logo">L<router-link to="/home"><a-icon spin type="loading-3-quarters" /></router-link>GO</div>>
    <!-- 用户导航菜单 -->
    <a-menu mode="inline" theme="dark">
      <a-sub-menu>
        <span slot="title"
          ><a-icon type="user"></a-icon><span>个人中心</span></span
        >
        <a-menu-item-group>
          <a-menu-item
            ><a-icon type="stop" theme="twoTone" /><span
              >Item1</span
            ></a-menu-item
          >
          <a-menu-item
            ><a-icon type="stop" theme="twoTone" /><span
              >Item2</span
            ></a-menu-item
          >
          <a-menu-item
            ><a-icon type="stop" theme="twoTone" /><span
              >Item3</span
            ></a-menu-item
          >
          <a-menu-item
            ><a-icon type="stop" theme="twoTone" /><span
              >Item4</span
            ></a-menu-item
          >
        </a-menu-item-group>
      </a-sub-menu>
      <a-sub-menu>
        <span slot="title"
          ><a-icon type="pause-circle" theme="twoTone" /><span
            >任务中心</span
          ></span
        >
        <a-menu-item-group>
          <a-menu-item
            ><a-icon type="stop" theme="twoTone" /><span
              >Item1</span
            ></a-menu-item
          >
          <a-menu-item
            ><a-icon type="stop" theme="twoTone" /><span
              >Item1</span
            ></a-menu-item
          >
        </a-menu-item-group>
      </a-sub-menu>
      <a-menu-item>
        <a-icon type="profile" theme="filled" /><span>待办事项</span>
        <router-link to="/taskList"></router-link>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
export default {
  name: "SideNav",
};
</script>

<style scoped>
.logo{
  display:flex;
  color:white;
  justify-content: center;
  background-color:rgba(255, 255, 255, 0.2);
  margin:16px;
  font-size:25px
}
</style>