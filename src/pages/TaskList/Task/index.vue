<template>
  <div class="editable-cell">
    <div v-show="!isEdit" class="editable-cell-text">
      <span>{{ taskData.name }}</span>
      <a-icon
        type="edit"
        @click="isEdit = !isEdit"
        class="editable-cell-icon-edit"
      ></a-icon>
    </div>
    <div v-show="isEdit" class="editable-cell-input">
      <a-input
        size="small"
        :value="value"
        @change="handleChange"
        @pressEnter="changeTaskName(taskData.key)"
      ></a-input>
      <a-icon type="check" class="editable-cell-icon-check" @click="changeTaskName(taskData.key)"></a-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: "Task",
  props:['taskData'],
  data() {
    return {
      isEdit:false,
      value:"",
    }
  },
  methods:{
    // 输入框的值发生变化的时候执行
    handleChange(e){
      this.value=e.target.value
    },
    changeTaskName(key){
      this.isEdit=false;
      this.$store.dispatch("TaskStore/changeTaskName",{key:key,name:this.value})
      this.value=" "
    }
  }
}
</script>

<style scoped>

.editable-cell {
  position: relative;
}
.editable-cell-input,
.editable-cell-text {
  padding-right: 24px;
}
.editable-cell-text {
  padding: 5px 24px 5px 5px;
}

.editable-cell-icon-edit,
.editable-cell-icon-check {
  position: absolute;
  right: 0;
  width: 20px;
  cursor: pointer;
  transition: all 0.3s;
}
.editable-cell-icon-edit {
  opacity: 0;
  line-height: 18px;
}
.editable-cell-icon-check {
  line-height: 25px;
}
.editable-cell-icon-edit:hover,
.editable-cell-icon-check:hover {
  color: #108ee9;
}
.editable-cell:hover .editable-cell-icon-edit {
  opacity: 1;
}
</style>