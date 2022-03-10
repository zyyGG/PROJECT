<template>
  <!-- 登录页面 pages -->
  <div id="Login">
    <a-row>
      <a-col :span="12" type="flex" :offset="6">
        <a-form>
          <a-form-item>
            <a-input
              v-decorator="[
                'username',
                { rules: [{ required: true, message: '请输入姓名' }] },
              ]"
              placeholder="UserName"
            >
              <a-icon slot="prefix" type="user" />
            </a-input>
          </a-form-item>
          <a-form-item help="请输入6-16位密码">
            <a-input
              v-decorator="[
                'password',
                {
                  rules: [
                    {
                      required: true,
                      message: '请输入密码',
                      whitespace: true,
                      min: 6,
                      max: 16,
                    },
                  ],
                },
              ]"
              type="password"
            >
              <a-icon slot="prefix" type="lock" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-row type="flex" justify="space-between">
              <a-col>
                <a-checkbox
                  v-decorator="[
                    'rember',
                    { valuePropName: 'checked', initialValue: true },
                  ]"
                >
                  Remember me
                </a-checkbox>
              </a-col>
              <a-col>
                <!-- 忘记密码 -->
                <a> Forgot Password </a>
              </a-col>
            </a-row>
            <a-row type="flex" justify="center">
              <a-col>
                <a-button type="primary" html-type="submit"> 登录 </a-button>
                或者 <router-link to="/register">注册</router-link>
              </a-col>
            </a-row>
          </a-form-item>
        </a-form>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: "Login"
}
</script>

<style>
</style>