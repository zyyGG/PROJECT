<template>
  <!-- 主任务区域 -->
  <div>
    <!-- <TaskTool></TaskTool> -->
    <!-- :data-source="$store.state.TaskStore.taskDatas" -->
    <div>
      <a-button>添加任务<a-icon type="plus"></a-icon></a-button>
      <!-- <a-button @click="upData">保存数据</a-button> -->
    </div>
    <a-table
      :data-source="$store.state.TaskStore.taskDatas"
      tableLayout="fixed"
      :row-selection="rowSelection"
    >
      <a-table-column key="flag" title="标记">
        <template slot-scope="taskData">
          <FlagButton :taskData="taskData" :taskKey="taskData.key"></FlagButton>
        </template>
      </a-table-column>
      <a-table-column key="taskName" title="TaskName">
        <template slot-scope="taskData">
          <Task :taskData="taskData"></Task>
        </template>
      </a-table-column>
      <a-table-column
        key="createTime"
        data-index="createDate"
        title="CreateTime"
      ></a-table-column>
      <a-table-column key="action" title="Action">
        <template slot-scope="taskData">
          <a-icon type="delete" @click="deleteTask(taskData.key)" />
        </template>
      </a-table-column>
    </a-table>
  </div>
</template>

<script>
import Task from './Task'
import TaskTurnPage from './TaskTurnPage'
import TaskTool from './TaskTool'
import FlagButton from './FlagButton'
import mixin from '/src/mixins'

//axios
import axios from "axios"
// // 选中的操作
// const rowSelection = {
//   onChange: (selectedRowKeys, selectedRows) => {
//     // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
//   },
//   onSelect: (record, selected, selectedRows) => {
//     // console.log("onSelect",record, selected, selectedRows)
//   },
//   onSelectAll: (selected, selectedRows, changeRows) => {
//     // console.log("demo-onSelectAll", selected, selectedRows, changeRows)
//   },
// }

export default {
  name: "TaskList",
  mixins: [mixin],
  components: { Task, TaskTurnPage, TaskTool, FlagButton },
  data () {
    return {
      selectedRowKeys: [],//记录了所有选中的元素
    }
  },
  methods: {
    // 删除一个任务
    deleteTask (key) {
      this.$store.dispatch("TaskStore/deleteTaskById", key)
    },
    // //上传数据
    // upData () {
    //   axios({
    //     url: "http://localhost:10002/api/set/",
    //     method: "post",
    //     params: JSON.stringify(this.$store.state.TaskStore.taskDatas)
    //   })
    // }
  },
  computed: {
    rowSelection () {
      const { selectedRowKeys } = this
      return {
        selectedRowKeys,
        hideDefaultSelections: true,//隐藏默认的两个选项
        //数据发生变化时执行
        onChange: (selectedRowKeys) => {
          this.selectedRowKeys = selectedRowKeys
        },
        selections: [
          {
            key: 'delete',
            text: "删除",
            onSelect: () => {
              // 执行删除
              if (this.selectedRowKeys != undefined) {
                this.selectedRowKeys.forEach(key => {
                  // 这里的element=key
                  this.$store.dispatch("TaskStore/deleteTaskById", key)
                })
              }
            },
          },
          {
            // 菜单，选中所有
            key: "seleteAll",
            text: "全选(所有)",
            onSelect: () => {
              let allTaskKey = []
              this.$store.state.TaskStore.taskDatas.forEach(element => {
                allTaskKey.push(element.key)
              })
              this.selectedRowKeys = allTaskKey
            }
          },
        ],
      }

    }
  },
  mounted () {
    //TaskList组件被选中的时候，(进入代办事项)，载入taskList.json文件
    // axios("../data/taskList.json").then((value)=>{console.log("获取成功",value)})
    axios("http://localhost:10002/api/get").then((response) => {
      //成功读取时调用 response.data  ,开始初始化数据
      // console.log(response.data)
      this.$store.dispatch("TaskStore/initData", response.data)
    }).catch((err)=>{
      console.log("远程服务器连接失败")
      this.$store.dispatch("TaskStore/initData", JSON.parse(localStorage.getItem("data")))
      
    })
  },
  //深度监听值
  watch: {
    "$store.state.TaskStore.taskDatas": {
      deep: true,//深度监听
      handler() {
        this.debounce(()=>{
          axios({
            url: "http://localhost:10002/api/set/",
            method: "post",
            params: JSON.stringify(this.$store.state.TaskStore.taskDatas),
            timeout:1000,
          }).catch(()=>{
            //如果保存失败，就将数据保存在本地
            localStorage.setItem("data",JSON.stringify(this.$store.state.TaskStore.taskDatas).toString())
          })
        }, 300)//防抖，0.3s
      }
    }
  }
}
</script>

<style scoped>
</style>