<template>
  <!-- 任务工具栏 -->
  <div>
    <a-row type="flex">
      <!-- 全选 -->
      <a-col :span="1" type="flex" align="center">
        <a-checkbox></a-checkbox>
      </a-col>
      <!-- 标记工具 -->
      <a-col :span="3">
        <a-button-group size="small">
          <a-button>删除</a-button>
          <a-dropdown>
            <a-menu slot="overlay">
              <a-menu-item
                ><a-icon type="flag" theme="twoTone" />已完成</a-menu-item
              >
              <a-menu-item><a-icon type="flag" />未完成</a-menu-item>
            </a-menu>
            <a-button size="small">标记为<a-icon type="down" /></a-button>
          </a-dropdown>
        </a-button-group>
      </a-col>
      <!-- 添加工具 -->
      <a-col>
        <a-form :layout="inline">
          <a-input></a-input>
          <a-button html-type="button">添加</a-button>
        </a-form>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: "TaskTool"
}
</script>

<style>
</style>