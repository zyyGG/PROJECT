<template>
  <div>
    <a-icon
      type="flag"
      :theme="taskData.isFlag ?'twoTone': 'outlined' "
      @click="changeFlag"
    ></a-icon>
  </div>
</template>

<script>
export default {
  name: "FlagButton",
  props: ["taskData"],
  methods: {
    changeFlag () {
      this.$store.dispatch("TaskStore/changeTaskIsFlag", this.taskData.key)
    }
  }
}
</script>

<style>
</style>