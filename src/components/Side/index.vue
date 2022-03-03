<template>
  <div class="side"> 
    <Title></Title>
    <SideMenu></SideMenu>
  </div>
</template>

<script>
import Title from "./Title"
import SideMenu from "./SideMenu"

export default {
  name: "Side",
  components:{
    Title,SideMenu
  }
}
</script>

<style scoped>
</style>