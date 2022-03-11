<template>
  <!-- 单个任务-弃用2022-3-11 -->
  <div style="padding:10px 0;margin:5px 0">
    <a-row type="flex" align="middle">
      <a-col :span="1" type="flex" align="center">
        <!-- 通过v-model绑定此任务的isCheck的值 -->
          <a-checkbox :checked="taskData.isCheck" @click="checkedTask(taskData.id)"></a-checkbox>
      </a-col>
      <a-col :span="3">
          <a-icon type="flag" :theme="taskData.isFlag?'twoTone':'outlined'" @click="flagTask(taskData.id)" />
        
      </a-col>
      <a-col :span="11">
        <span>{{taskData.name}}</span>
      </a-col>
      <a-col :span="5">
        <span>{{taskData.createDate}}</span>
      </a-col>
      <a-col>
        <a-button type="link" @click="deleteTask(taskData.id)"><a-icon type="delete" /></a-button>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: "Task",
  data() {
    return {
      taskFlag:this.taskData.isFlag,
    }
  },
  props:["taskData"],
  methods:{
    // 删除一个任务
    deleteTask(id){
      this.$store.dispatch("TaskStore/deleteTaskById",id)
    },
    //选中/取消选中
    checkedTask(id){
      this.$store.dispatch("TaskStore/changeTaskIsCheck",{id:this.taskData.id,checked:!this.taskData.isCheck})
    },
    //标记/取消标记
    flagTask(id){
      this.$store.dispatch("TaskStore/changeTaskIsFlag",{id:this.taskData.id,flag:!this.taskData.isFlag})
    }
  },
}
</script>

<style>
</style>