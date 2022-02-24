<template>
  <!-- 侧边导航栏 2 -->
  <div class="tdl-sideNav col-md-2 col-xs-12">
    <ul class="list-unstyled">
      <li class="text-center"><a>TO DO LIST</a></li>
      <li class="text-center"><a href="###">个人中心</a></li>
      <li class="text-center"><a href="###">任务列表</a></li>
      <li class="text-center"><a href="###">更多任务</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SideNav",
}
</script>

<style scoped>
/* 侧边导航栏 */
.tdl-sideNav li{
    padding:15px;
    border-radius:10px;
    cursor:pointer;
}
.tdl-sideNav li a{
    color:bisque;
    text-decoration: none;
}
.tdl-sideNav li:first-child{
    background-color: coral;
    border-radius: 0;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}
.tdl-sideNav li:hover{
    background-color:white;
}
.tdl-sideNav li:first-child:hover{
    background:transparent;
}
.tdl-sideNav li:hover a{
    color:gray;
}

</style>