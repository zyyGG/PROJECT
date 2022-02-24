<template>
  <div>
    <!-- 任务栏 -->
    <Task
      v-for="listData in listDatas"
      :key="listData.id"
      :listData="listData"
      v-show="listData.isShow"
    ></Task>
  </div>
</template>

<script>
import Task from './Task'

export default {

  name: "Tasks",
  components: { Task },

  computed: {
    listDatas () {
      return this.$store.state.listDatas
    }
  }
}
</script>

<style>
</style>