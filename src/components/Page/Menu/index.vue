<template>
  <!-- 菜单区域 -->
  <div class="tdl-menu col-md-4 col-xs-12 text-center">
    <div class="form-group form-inline">
      <label class="control-label sr-only" for="add1">add</label>
      <input
        type="text"
        name=""
        id="add1"
        class="form-control"
        placeholder="Task Name"
        v-model="addValue"
        @keydown.enter="addTask(addValue)"
      />
      <input type="button" value="添加" class="btn btn-primary" @click="addTask(addValue)" />
    </div>
    <div class="form-group form-inline">
      <label class="control-label sr-only">search</label>
      <input
        type="text"
        name=""
        id="add1"
        class="form-control"
        placeholder="Task Name"
      />
      <input type="button" value="搜索" class="btn btn-primary" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      addValue:'',
      searchValue:'',
    }
  },
  methods:{
    // 添加一个任务
    addTask(value){
      this.addValue="";//将输入的内容置空
      this.$store.dispatch("addTask",value)
    }
  }
}
</script>

<style>
</style>