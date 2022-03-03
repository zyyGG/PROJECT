<template>
  <!-- 侧边导航栏 2 -->
  <div class="tdl-sideMenu">
    <ul class="list-unstyled">
      <li class="text-center"><a href="###">个人中心</a></li>
      <li class="text-center"><a href="###">任务列表</a></li>
      <li class="text-center"><a href="###">更多任务</a></li>
      <li class="text-center"><a href="###">测试</a></li>
      <li class="text-center"><a href="###">测试</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SideMenu",
}
</script>

<style scoped>
/* 侧边导航栏 */
a{
  color:black;
  text-decoration: none;
}
li:hover{
  background: #ddd;
}
.tdl-sideMenu{
  color:black;
}
li{
  padding:10px 0;
  border-radius:10px 0 0 10px;
  transition: all 0.3s ease-in-out;
}
</style>