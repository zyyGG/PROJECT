<template>
  <li class="row taskbar">
    <div class="col-md-2">
      <!-- 是否被选中 -->
      <input type="checkbox" name="" id="check" v-model="listData.isCheck">
      
      <!-- 菜单图标按钮 -->
      <i class="fa-solid fa-align-justify"></i>
      
      <!-- 标记 -->
      <i class="fa-solid fa-flag" :class="{flagActive:listData.isToggle}" @click="changeToggle(listData.id)"></i>
    </div>
    <!-- 菜单 -->
    <div class="col-md-4 text-center">
      <!-- 任务名称 -->
      <span>{{listData.name}}</span>
    </div>
    <div class="col-md-2">
      <span>{{listData.addTime}}</span>
    </div>
    <div class="col-md-1 text-center moveBar">
      <i class="fa-solid fa-angles-up row" title="上移" @click="moveUP(listData)"></i>
      <i class="fa-solid fa-angles-down row" title="下移"></i>
    </div>
    <div class="col-md-1">
      <i class="fa-solid fa-trash-can" @click="deleteTask(listData.id)"></i>
    </div>
  </li>
</template>

<script>
export default {
  name: "SingelTask",
  props:["listData"],
  methods:{
    // 删除本条任务
    deleteTask(id){
      this.$store.dispatch('deleteTask',id)
    },
    // 上移
    moveUP(listData){
      this.$store.dispatch("moveUp",listData)
    },
    // 更改旗帜标记
    changeToggle(id){
      this.$store.dispatch("changeToggle",id)
    }
  }
}
</script>

<style scoped>
.taskbar div:first-child * {
  margin-right:10px;
}
.flagActive{
  color:red;
}
</style>