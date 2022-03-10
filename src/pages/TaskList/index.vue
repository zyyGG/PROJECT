<template>
  <!-- 主任务区域 -->
  <div>
    <TaskTool></TaskTool>
    <Task v-for="(taskData,index) in $store.state.TaskStore.taskDatas" :key="index" :taskData="taskData"></Task>
    <TaskTurnPage></TaskTurnPage>
  </div>
</template>

<script>
import Task from './Task'
import TaskTurnPage from './TaskTurnPage'
import TaskTool from './TaskTool'
export default {

  name: "TaskList",
  components: { Task, TaskTurnPage, TaskTool }
}
</script>

<style>
</style>