<template>
    <!-- 标题 -->
    <div class="title animate__animated" :class="{animate__shakeX:titleAnimate}" @mouseenter="titleAnimate=true" @mouseleave="titleAnimate=false">
      <p class="text-center">MY LIST</p>
    </div>
</template>

<script>
export default {
  name: "Title",
  data() {
    return {
      titleAnimate:false,
    }
  },
}
</script>

<style scoped>
.title{
  font-size:x-large;
  background-color:gray;
  color:white;
  border: 3px dashed white;
  padding:4px 0;
  margin-bottom: 5px;
}
</style>