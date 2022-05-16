<template>
  
</template>

<script>
export default {
  name: "NONES",
  mounted(){
    //   挂载的时候检测本地是否有注册的信息
    let userInfor = this.$store.state.userInfor
    if(userInfor.registerUserInfo = {} || userInfor.userName===""){
        // 没有注册过，以及没有登录过
        this.$router.push("/login")
    }else{
        this.$router.push("/home")
    }
    
  }
}
</script>

<style>
</style>