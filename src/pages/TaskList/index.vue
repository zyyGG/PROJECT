<template>
  <!-- 主任务区域 -->
  <div>
    <!-- <TaskTool></TaskTool> -->
    <!-- :data-source="$store.state.TaskStore.taskDatas" -->
    <a-table
      :data-source="$store.state.TaskStore.taskDatas"
      tableLayout="fixed"
      :row-selection="rowSelection"
    >
    <a-table-column key="flag" title="标记">
      <template slot-scope="taskData">
        <FlagButton :isFlag="taskData.isFlag" :taskKey="taskData.key"></FlagButton>
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
  components: { Task, TaskTurnPage, TaskTool,FlagButton },
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
  }
}
</script>

<style scoped>
</style>