<template>
  <!-- 正文 -->
  <div class="tdl-page row">
    <SideNav></SideNav>
    <MainArea></MainArea>
    <Menu></Menu>
  </div>
</template>

<script>
import SideNav from './SideNav'
import MainArea from './MainArea'
import Menu from './Menu'

export default {
  name: "Page",
  components: { SideNav, MainArea, Menu }
}
</script>

<style>
</style>