<template>
  <div class="row tdl-task">
    <!-- 标记组 -->
    <div class="col-md-2">
      <!-- 是否被选中 -->
      <input type="checkbox" v-model="listData.isCheck" />

      <!-- 菜单图标 -->
      <i class="fa-solid fa-align-justify"></i>

      <!-- flag标记 -->
      <!-- @click 更改isToggle的值，来变色 -->
      <i
        class="fa-solid fa-flag"
        :class="{ active: listData.isToggle }"
        @click="listData.isToggle = !listData.isToggle"
      ></i>
    </div>
    <!-- 修改按钮 -->
    <div class="col-md-1">
      <!-- 当点击后，输入条变为选中状态 -->
      <i
        class="fa-solid fa-square-pen btn-link"
        title="修改"
        @click="beforeChangeName"
      ></i>
    </div>
    <!-- 任务名称 -->
    <div class="col-md-4">
      <span v-show="!isChange">{{ listData.name }}</span>
      <input
        type="text"
        maxlength="11"
        v-show="isChange"
        :value="taskName"
        @blur="changeName($event)"
        @keyup.enter="changeName($event)"
        ref="inputName"
      />
    </div>
    <!-- 删除任务 -->
    <div class="col-md-1">
      <i class="fa-solid fa-trash-can" @click="deleteTask(listData.id)"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Task",
  data () {
    return {
      isChange: false,
    }
  },
  props: ["listData"],
  methods: {
    // 通过id删除任务
    deleteTask (id) {
      this.$store.dispatch("deleteTask", id)
    },
    // 修改名称前的准备
    beforeChangeName () {
      this.isChange = true
      this.$nextTick(() => {
        console.log(this.$refs.inputName.focus())
      })
    },
    // 修改任务名称
    changeName (e) {
      // 输入框关闭
      this.isChange = false
      // 传递需要更改的数据和对比用的id
      this.$store.dispatch("changeName", { "value": e.target.value, "id": this.listData.id })
    }
  },
  computed: {
    taskName: {
      get () {
        return this.listData.name
      }
    }
  },
  // 挂载时存储数据
  mounted () {
    localStorage.setItem("state", JSON.stringify(this.$store.state))
  },
}
</script>

<style scope>
.tdl-task {
  padding: 10px 0;
}
.tdl-task :first-child * {
  margin: 0px 10px;
}
.active {
  color: brown;
}
</style>