<template>
  <!-- 注册组件 -->
  <div>
      <a-form :label-col="{span:5}" :wrapper-col="{ span: 12 }">
          <a-form-item label="UserName">
              <a-input v-decorator="['reg-username',{rules:[{required:true,message:'请输入用户名'}]}]" placeholder="UserName"></a-input>
          </a-form-item>
          <a-form-item label="E-mail">
              <a-input v-decorator="['reg-email',{rules:[{required:false,message:'请输入你的邮箱地址'}]}]" placeholder="mailname@mailbox.com"></a-input>
          </a-form-item>
          <a-form-item label="Gender">
              <a-radio>M</a-radio>
              <a-radio>W</a-radio>
          </a-form-item>
          <a-form-item label="PassWord">
              <a-input type="password" v-decorator="['reg-password',{rules:[{required:true,message:'请输入正确的6-16位密码'}]}]"></a-input>
          </a-form-item>
          <a-form-item label="PassWord-again">
              <a-input type="password" v-decorator="['reg-password',{rules:[{required:true,message:'密码不一致'}]}]"></a-input>
          </a-form-item>
          <a-row type="flex" justify="center">
              <a-form-item>
                  <a-button html-type="submit" type="primary">注册</a-button>
          </a-form-item>
              
          </a-row>
          
      </a-form>
  </div>
</template>

<script>
export default {
name:"Register"
}
</script>

<style>

</style>