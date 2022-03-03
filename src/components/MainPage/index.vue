<template>
  <div class="mainPage">
    <!-- 菜单栏 -->
    <div>
      <MenuBar></MenuBar>
    </div>

    <!-- 翻页组件 -->
    <div>
      <TasksHeader></TasksHeader>
    </div>

    <!-- 任务栏 展示全部任务-->
    <div>
      <Tasks></Tasks>
    </div>

    <!-- 任务栏底部区域 翻页和页码显示，添加任务-->
    <TasksFooter></TasksFooter>
  </div>
</template>

<script>
import MenuBar from './MenuBar'
import Tasks from './Tasks'
import TasksFooter from './TasksFooter'
import TasksHeader from './TasksHeader'

export default {
  name: "MainPage",
  components: { MenuBar, Tasks, TasksFooter ,TasksHeader},
}
</script>

<style scoped>
</style>