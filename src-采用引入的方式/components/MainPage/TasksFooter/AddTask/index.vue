<template>
  <div>
    <!-- 添加一个任务"无名字" -->
    <button class="btn btn-info form-control" @click="addTask">+</button>
  </div>
</template>

<script>
export default {
  name: "AddTask",
  methods: {
    //   添加一个任务
    addTask () {
      this.$store.dispatch("addTask", ' ')
    }
  }
}
</script>

<style>
</style>