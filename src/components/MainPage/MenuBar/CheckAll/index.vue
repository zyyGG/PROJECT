<template>
  <div>
    <input type="checkbox" id="checkAllInput" v-model="isCheck" />
    <label for="checkAllInput">CheckAll</label>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: "CheckAll",
  computed:{
    // 检查所有任务是否被选中了，全部都选中了就自动把全选框标记上
    isCheck:{
      get(){
        for(let i=0;i<this.listDatas.length;i++){
          // 检查isCheck
          if(this.listDatas[i].isCheck==false){
            return false;
          }
        }
        // 循环完毕说明全部都选中了 isCheck = true;
        return true;
      },
      set(value){
        // 把所有isCheck设置为value
        for(let i =0;i<this.listDatas.length;i++){
          this.listDatas[i].isCheck=value;
        }
      }
    },
    // => return this.$store.state.listDatas
    ...mapState(["listDatas"])

  },
  
}
</script>

<style>
</style>