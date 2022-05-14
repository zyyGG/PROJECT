<template>
  <div>
    <a-row type="flex" justify="space-between" align="middle">
      <!-- 右侧菜单区域 -->
      <a-space>
        <a-input-search></a-input-search>
      </a-space>

      <!-- 左侧菜单区域 -->
      <a-space>
        <a-button type="primary">下载客户端</a-button>
        <a-button-group>
          <a-button type="link" ghost><a-icon type="message" />消息</a-button>
          <a-button type="link" ghost
            ><a-icon type="question-circle" />帮助</a-button
          >
          <a-button type="link" ghost><a-icon type="container" />反馈</a-button>
        </a-button-group>

        <a-dropdown>
          <a>
            <a-space>
              <a-avatar icon="user"></a-avatar>
              <router-link to="/login">登录/注册</router-link>
              <a-icon type="down" />
            </a-space>
          </a>
          <a-menu slot="overlay">
            <a-menu-item><a-icon type="user"></a-icon>账号信息</a-menu-item>
            <a-menu-divider />
            <a-menu-item>退出当前账号</a-menu-item>
          </a-menu>
        </a-dropdown>
      </a-space>
    </a-row>
  </div>
</template>

<script>
export default {
  name: "TasksHeader"
}
</script>

<style scoped>
</style>