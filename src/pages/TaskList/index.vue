<template>
  <!-- 主任务区域 -->
  <div>
    <!-- <TaskTool></TaskTool> -->
    <!-- :data-source="$store.state.TaskStore.taskDatas" -->
    <a-table
      :columns="columns"
      :data-source="$store.state.TaskStore.taskDatas"
      bordered
      :row-selection="rowSelection"
    >
      <!-- 修改任务名称 -->
      <div slot="name" slot-scope="taskData" class="editable-cell">
        <!-- 常态下显示字符 -->
        <div v-show="!taskData.onEdit" class="editable-cell-text">
          {{ taskData.name || " " }}
          <a-icon type="edit" class="editable-cell-icon-edit" @click="enterEdit(taskData.key)"></a-icon>
        </div>
        
        <!-- 编辑模式下显示输入框 -->
        <div v-show="taskData.onEdit" class="editable-cell-input">
          <a-input></a-input>
          <a-icon type="check" class="editable-cell-icon-check"></a-icon>
        </div>
      </div>
      <!-- 功能列表 -->
      <span slot="action" slot-scope="taskData">
        <a>检查-{{ taskData.name }}</a>
        <a-divider type="vertical" />
        <a>delete</a>
      </span>
    </a-table>
  </div>
</template>

<script>
import Task from './Task'
import TaskTurnPage from './TaskTurnPage'
import TaskTool from './TaskTool'

const columns = [
  // TaskName
  {
    key: "TaskName",
    //dataIndex: "name",//任务名称数据来源，必须和taskDatas里的数据名称一致
    title: "任务名",
    scopedSlots: { customRender: "name" } //使用这个属性，不能添加dataIndex属性
  },
  // CreateData 创建时间
  {
    key: "CreateTime",
    dataIndex: "createTime",//展示出来的数据来源
    title: "创建时间"
  },
  //actions 操作
  {
    key: "Action",
    title: "操作",
    scopedSlots: { customRender: 'action' }
  }
]
// 选中的操作
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
  },
  onSelect: (record, selected, selectedRows) => {
    // console.log("4444onSelect",record, selected, selectedRows)
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log("demo-onSelectAll", selected, selectedRows, changeRows)
  },
}

export default {
  name: "TaskList",
  components: { Task, TaskTurnPage, TaskTool },
  data () {
    return {
      rowSelection,
      columns,
    }
  },
  methods: {
    // 删除一个任务
    deleteTask (id) {
      this.$store.dispatch("TaskStore/deleteTaskById", id)
    },
    //选中/取消选中
    checkedTask (id, isCheck) {
      this.$store.dispatch("TaskStore/changeTaskIsCheck", { id: id, checked: !isCheck })
    },
    //标记/取消标记
    flagTask (id, isFlag) {
      this.$store.dispatch("TaskStore/changeTaskIsFlag", { id: id, flag: !isFlag })
    },
    //进入编辑模式
    enterEdit(id){
      this.$store.dispatch("TaskStore/changeTaskOnEdit", id)
    }
  },
}
</script>

<style scoped>
.editable-cell{
  position:relative;
  max-width:200px;
}
.editable-cell-input,
.editable-cell-text{
  padding-right:24px
}
.editable-cell-text{
  padding: 5px 24px 5px 5px;
}

.editable-cell-icon-edit,
.editable-cell-icon-check{
  position:absolute;
  right:0;
  width:20px;
  cursor:pointer;
  transition:all .3s
}
.editable-cell-icon-edit{
  opacity:0;
  line-height:18px;
}
.editable-cell-icon-check{
  line-height:28px
}
.editable-cell-icon-edit:hover,
.editable-cell-icon-check:hover
{
color:#108ee9;
}
.editable-cell:hover .editable-cell-icon-edit{
  opacity:1
}


</style>