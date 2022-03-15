<template>
  <!-- 主任务区域 -->
  <div>
    <!-- <TaskTool></TaskTool> -->
    <!-- :data-source="$store.state.TaskStore.taskDatas" -->
    <div>
      <!-- 当点击的时候弹出添加框 -->
      <a-button @click="visible = true"
        >添加任务<a-icon type="plus"></a-icon
      ></a-button>
      <!-- <a-button @click="upData">保存数据</a-button> -->
    </div>
    <a-modal
      title="添加任务"
      :visible="visible"
      okText="确定"
      cancelText="取消"
      :destroyOnClose="true"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <a-form
        :label-col="{ span: 4 }"
        :wrapper-col="{ span: 14 }"
        layout="horizontal"
      >
        <a-form-item label="任务名称">
          <a-input
            v-decorator="[
              'note',
              {
                rules: [
                  { required: true, message: 'Please input your TaskName!' },
                ],
              },
            ]"
          v-model="newTaskName"></a-input>
        </a-form-item>
        <a-form-item label="添加标签">
          <a-select
            mode="tags"
            :allowClear="true"
            :token-separators="[',']"
            @change="handleChange"
          >
            <a-select-option
              v-for="tag in filteredOptions"
              :key="tag.toString()"
              :disabled="isMaxLength"
              >{{ tag }}</a-select-option
            >
          </a-select>
        </a-form-item>
      </a-form>
    </a-modal>
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
      <a-table-column key="taskName" title="任务名称">
        <template slot-scope="taskData">
          <Task :taskData="taskData"></Task>
        </template>
      </a-table-column>
      <a-table-column key="tags" title="标签">
        <template slot-scope="taskData">
          <a-tag v-for="(tag,index) in taskData.tags" :key="index" :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'">{{tag}}</a-tag>
        </template>
        
      </a-table-column>
      <a-table-column
        key="createTime"
        data-index="createDate"
        title="创建时间"
      ></a-table-column>
      <a-table-column key="action" title="选项">
        <template slot-scope="taskData">
          <a-popconfirm title="确认删除本条任务吗？" ok-text="确定" cancel-text="取消" @confirm="deleteTask(taskData.key)">
            <a-button type="link"><a-icon type="delete"/></a-button>
          </a-popconfirm>
          
        </template>
      </a-table-column>
    </a-table>
  </div>
</template>

<script>
import Task from './Task'
import FlagButton from './FlagButton'
import mixin from '/src/mixins'

//axios
import axios from "axios"

const OPTIONS = ["美食", "游戏", "电影", "娱乐", "more1", "more2", "more3", "more4"]

export default {
  name: "TaskList",
  mixins: [mixin],
  components: { Task, FlagButton },
  data () {
    return {
      selectedRowKeys: [],//记录了所有选中的元素
      visible: false,
      selectItems: [],
      isMaxLength: false,//是否到达最大值  默认是3
      newTaskName:""
    }
  },
  methods: {
    // 删除一个任务
    deleteTask (key) {
      this.$store.dispatch("TaskStore/deleteTaskById", key)
    },
    // 添加任务框，确认提交时
    handleOk (e) {
      this.$store.dispatch("TaskStore/addTask",{name:this.newTaskName,tags:this.selectItems})
      this.visible=false;//关闭显示框
      this.newTaskName=""//重置输入框的内容
      this.selectItems= []//重置tags选择框的内容
    },
    //取消添加任务框
    handleCancel (e) {
      this.visible = false//关闭输入框
      this.newTaskName=""//重置输入框的内容
      this.selectItems= []//重置tags选择框的内容
    },
    //添加新的tags时 ，最多的值默认是3个
    handleChange (value) {
      this.selectItems = value
      if (value.length >= 3) {
        this.isMaxLength = true
      } else {
        this.isMaxLength = false
      }
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

    },
    //tag选择的动态值
    filteredOptions () {
      return OPTIONS.filter((ele) => {
        //   如果selectItems里面不包含本个ele就返回它
        return !this.selectItems.includes(ele)
      })
    },
  },
  mounted () {
    //TaskList组件被选中的时候，(进入代办事项)，载入taskList.json文件
    // axios("../data/taskList.json").then((value)=>{console.log("获取成功",value)})
    axios({
      url: "http://localhost:10002/api/get",
      method: "get",
      timeout: 1000
    }).then((response) => {
      this.$store.dispatch("TaskStore/initData", response.data)
    }).catch((err) => {
      this.$store.dispatch("TaskStore/initData", JSON.parse(localStorage.getItem("data")))

    })
  },
  //深度监听state.taskStore的值
  watch: {
    "$store.state.TaskStore.taskDatas": {
      deep: true,//深度监听
      handler () {
        this.debounce(() => {
          axios({
            url: "http://localhost:10002/api/set/",
            method: "post",
            params: JSON.stringify(this.$store.state.TaskStore.taskDatas),
            timeout: 1000,
          }).catch(() => {
            //如果保存失败，就将数据保存在本地
            localStorage.setItem("data", JSON.stringify(this.$store.state.TaskStore.taskDatas).toString())
          })
        }, 300)//防抖，0.3s
      }
    }
  }
}
</script>

<style scoped>
</style>