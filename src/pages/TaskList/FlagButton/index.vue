<template>
  <div>
    <a-icon
      type="flag"
      :theme="isFlag ? 'twoTone' : 'outlined'"
      @click="changeFlag"
    ></a-icon>
  </div>
</template>

<script>
export default {
  name: "FlagButton",
  props: ["isFlag", "taskKey"],
  methods: {
    changeFlag () {
      this.$store.dispatch("TaskStore/changeTaskIsFlag", this.taskKey)
    }
  }
}
</script>

<style>
</style>