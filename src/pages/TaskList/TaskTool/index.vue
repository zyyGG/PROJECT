<template>
  <!-- 任务工具栏 -->
  <div>
    <a-row type="flex" align="middle">
      <!-- 全选 -->
      <a-col :span="1" type="flex" align="center">
        <a-checkbox v-model="checked"></a-checkbox>
      </a-col>
      <!-- 标记工具 -->
      <a-col :span="3">
        <a-button-group>
          <a-button>删除</a-button>
          <a-dropdown :trigger="['click']">
            <a-menu slot="overlay">
              <a-menu-item
                ><a-icon type="flag" theme="twoTone" />已完成</a-menu-item
              >
              <a-menu-item><a-icon type="flag" />未完成</a-menu-item>
            </a-menu>
            <a-button>标记为<a-icon type="down" /></a-button>
          </a-dropdown>
        </a-button-group>
      </a-col>
      <!-- 添加工具 -->
      <a-col :span="5" :offset="14">
        <a-input-search v-model="value" @search="addNewTask()">
          <a-button slot="enterButton" type="primary">
            <a-icon type="plus"></a-icon>
            添加任务
          </a-button>
        </a-input-search>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "TaskTool",
  data () {
    return {
      value: "",
      // checked: false,
    }
  },
  methods: {
   
    // 添加一个新任务
    addNewTask () {
      let day = new Date()
      let node = day.getFullYear().toString() + '/' + (day.getMonth() + 1).toString() + '/' + day.getDate().toString() + '/' + day.getHours().toString() + ':' + day.getMinutes().toString()
      this.$store.dispatch("TaskStore/addTask", { name: this.value, time: node })
    },
  },
  computed:{
    // 替代使用mapState
    taskDatas(){
      return this.$store.state.TaskStore.taskDatas
    },
    // 根据列表中的每个任务是否被选中来判断全选按钮的状态
    checked:{
      set(value){
        this.$store.dispatch("TaskStore/checkAllTask",value)
      },
      // 根据element.isCheck的状态来调整
      get(){
        let node=true;
        this.taskDatas.forEach(element => {
          // console.log(element.isCheck===false)
          if(element.isCheck===false){
            node=false;
          }
        });
        // 如果列表为空，返回的值依然是false
        if(this.taskDatas[0]===undefined){
          node=false;
        }
        return node;
      }
    }
  },
}

</script>

<style>
</style>