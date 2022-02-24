<template>
  <div class="btn-group btn-group-xs">
    <button class="btn btn-default dropdown-toggle" @click="menuShow=menuShow=='block'?'none':'block'">
      as to<span class="caret"></span>
    </button>
      <ul class="dropdown-menu" :style="{display:menuShow}" @click="closeMenu">
        <li @click="deleteCheck"><a href="#">删除</a></li>
        <li @click="markTask(true)"><a href="#">已完成</a></li>
        <li @click="markTask(false)"><a href="#">未完成</a></li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "CheckMenu",
  data() {
    return {
      menuShow:'none'
    }
  },
  methods:{
    closeMenu(){
      this.menuShow='none'
    },
    // 删除选中的任务
    deleteCheck(){
      this.$store.dispatch("deleteCheck")
    },
    //标记选中的任务
    markTask(value){
      this.$store.dispatch("toggleAll",value)
    }
  }
}
</script>

<style>
</style>