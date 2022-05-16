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
                { rules: [{ required: true, message: '请输入账户名' }] },
              ]"
              placeholder="UserName"
              v-model="username"
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
              v-model="password"
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
                <a-button
                  type="primary"
                  html-type="submit"
                  @click="login"
                  :loading="isloading"
                >
                  登录
                </a-button>
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
import axios from "axios"
import { response } from "express"
export default {
  name: "Login",
  data () {
    return {
      username: "",
      password: "",
      isloading: false,//是否处于预载中
    }
  },
  methods: {
    //向后台服务器提供用户填写的账号和密码
    login () {


      // console.log(this.username,this.password)
      
      // 增加用户名称和密码的判断
      if (this.username !== "" && this.password !== "") {
        // 名称不为空
        this.isloading = true
        setTimeout(() => {
          axios.post('http://localhost:10002/api/login', {
            username: this.username,
            password: this.password
          }).then(res => {
            if (res.data === "accped") {
              // 登录成功
              console.log("登录成功")
              this.$store.state.userInfor.userName = this.username//修改用户名称
              this.$router.push("/home")
            } 
          }).catch(err => console.log(err))
          this.isloading = false
        }, 1000)
      }else{
        alert("账号/密码不能为空")

      }


    }
  }
}
</script>

<style>
</style>