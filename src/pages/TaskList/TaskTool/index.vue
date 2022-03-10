<template>
  <!-- 任务工具栏 -->
  <div>
    <a-row type="flex" align="middle">
      <!-- 全选 -->
      <a-col :span="1" type="flex" align="center">
        <a-checkbox></a-checkbox>
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
        <a-input-search>
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
export default {
  name: "TaskTool"
}
</script>

<style>
</style>