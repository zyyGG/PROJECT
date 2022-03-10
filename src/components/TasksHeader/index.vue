<template>
  <div>
    <a-row type="flex" align="middle" justify="space-between">
      <!-- 主页 -->
      <a-col :span="1" type="flex">
        <router-link to="/home"><a-avatar icon="home" shape="square" size="large"></a-avatar></router-link>
      </a-col>
      <!-- 登录 -->
      <a-col>
        <a-form layout="inline">
          <a-form-item>
            <a-input
              type="text"
              placeholder="UserName"
              v-decorator="[
                '',
                { rules: [{ required: true, message: 'input your username' }] },
              ]"
            >
              <a-icon
                slot="prefix"
                type="user"
                style="color: rgba(0, 0, 0, 0.25)"
              />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              type="password"
              v-decorator="[
                '',
                { rules: [{ required: true, message: 'input your password' }] },
              ]"
            >
              <a-icon
                slot="prefix"
                type="lock"
                style="color: rgba(0, 0, 0, 0.25)"
              />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-space>
              <a-button type="primary" html-type="submit">Log in</a-button>
              <a-button type="primary" @click="$router.push('/register')">Register Now</a-button>
            </a-space>
          </a-form-item>
        </a-form>
      </a-col>
      <!--
      <a-col :span="2">
        <a-checkbox style="color: white">全选</a-checkbox>
      </a-col>
      <a-col :span="2">
        <a-dropdown :trigger="['click']">
          <a-menu slot="overlay">
            <a-sub-menu title="按名称：">
              <a-menu-item>A->Z</a-menu-item>
              <a-menu-item>Z->A</a-menu-item>
            </a-sub-menu>
            <a-sub-menu title="按添加时间：">
              <a-menu-item>升序</a-menu-item>
              <a-menu-item>降序</a-menu-item>
            </a-sub-menu>
          </a-menu>
          <span
            ><a>排序<a-icon type="down" /></a
          ></span>
        </a-dropdown>
      </a-col>
      <a-col :span="2">
        <a-dropdown :trigger="['click']">
          <span
            ><a>筛选<a-icon type="down" /></a
          ></span>
          <a-menu slot="overlay">
            <a-menu-item>7天内添加</a-menu-item>
            <a-menu-item>30天内添加</a-menu-item>
            <a-menu-item>60天内添加</a-menu-item>
          </a-menu>
        </a-dropdown>
      </a-col>
    
    -->
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