<template>
  <div>
    <!-- 菜单栏 -->
    <div>
      <MenuBar></MenuBar>
    </div>

    <!-- 任务栏 展示全部任务-->
    <div>
      <Tasks></Tasks>
    </div>

    <!-- 底部区域 -->
    <TasksFooter></TasksFooter>
  </div>
</template>

<script>
import MenuBar from './MenuBar'
import Tasks from './Tasks'
import TasksFooter from './TasksFooter'

export default {
  name: "MainPage",
  components: { MenuBar, Tasks ,TasksFooter},
}
</script>

<style>
</style>