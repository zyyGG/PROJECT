<template>
  <!-- 任务列表 -->
  <div class="tdl-task row">
    <ul class="list-unstyled">
      <SingelTask v-for="listData in listDatas" :key="listData.id" :listData="listData" v-show="listData.isShow"></SingelTask>
    </ul>
  </div>
</template>

<script>
import SingelTask from './SingelTask'

export default {
  name: "Task",
  components: { SingelTask },
  computed:{
    listDatas(){
      return this.$store.state.listDatas
    }
  },
  
}
</script>

<style scoped>
.tdl-task li {
  padding: 20px 0px;
  cursor: pointer;
}
</style>