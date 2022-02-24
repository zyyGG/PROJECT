<template>
  <div class="row tdl-task">
    <!-- 标记组 -->
    <div class="col-md-2">
      <!-- 是否被选中 -->
      <input type="checkbox" v-model="listData.isCheck"/>

      <!-- 菜单图标 -->
      <i class="fa-solid fa-align-justify"></i>

      <!-- flag标记 -->
      <!-- @click 更改isToggle的值，来变色 -->
      <i class="fa-solid fa-flag" :class="{active:listData.isToggle}" @click="listData.isToggle=!listData.isToggle"></i>
    </div>
    <!-- 任务名称 -->
    <div class="col-md-4">
      <span>{{listData.name}}</span>
    </div>
    <!-- 删除任务 -->
    <div class="col-md-1">
      <i class="fa-solid fa-trash-can" @click="deleteTask(listData.id)"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Task",
  props:["listData"],
  methods:{
    // 通过id删除任务
    deleteTask(id){
      this.$store.dispatch("deleteTask",id)
    }
  },
}
</script>

<style scope>
.tdl-task{
padding:10px 0;
}
.tdl-task :first-child *{
  margin:0px 10px;
}
.active{
color:brown;
}
</style>