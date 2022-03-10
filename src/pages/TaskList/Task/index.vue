<template>
  <!-- 单个任务 -->
  <div style="padding:10px 0;margin:5px 0">
    <a-row>
      <a-col :span="1" type="flex" align="center">
          <a-checkbox></a-checkbox>
      </a-col>
      <a-col :span="3">
        <a-icon type="flag"></a-icon>
      </a-col>
      <a-col :span="11">
        <span>{{taskData.name}}</span>
      </a-col>
      <a-col :span="2">
        <span>{{taskData.createDate}}</span>
      </a-col>
      <a-col>
        <a-icon type="delete" />
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: "Task",
  props:["taskData"],
  computed:{
    ...mapState({})
  }
}
</script>

<style>
</style>