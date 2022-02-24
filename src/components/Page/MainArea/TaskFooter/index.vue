<template>
  <div class="row" style="">
    <div class="btn-group">
      <button class="btn btn-link" title="上一页" @click="ChangePage(-1)">
        <i class="fa-solid fa-angle-left"></i>
      </button>
      <button class="btn btn-link" title="第一页" @click="ChangePage(-localPage+1)">
        <i class="fa-solid fa-angles-left"></i>
      </button>
      <div class="btn btn-link"><span>{{localPage}}/{{pageAll}}</span></div>
      <button class="btn btn-link" title="最后一页" @click="ChangePage(pageAll-localPage)">
        <i class="fa-solid fa-angles-right"></i>
      </button>
      <button class="btn btn-link" title="下一页" @click="ChangePage(1)">
        <i class="fa-solid fa-angle-right"></i>
      </button>
    </div>
    <div class="text-left">
        <select>
            <option>4个/页</option>
            <option>8个/页</option>
            <option>16个/页</option>
            <option>32个/页</option>
            <option>64个/页</option>
            <option>128个/页</option>
        </select>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex"

export default {
  name: "TaskFooter",
  computed:{
    //  总页码数量
      pageAll(){
          return Math.ceil(this.$store.state.listDatas.length/this.pagination);
      },
      //每页显示几个
      pagination(){
          return this.$store.state.pagination;
      },
      //当前页面的位置
      localPage(){
          return this.$store.state.localPage
      },
  },
methods:{
    // 翻页
    ChangePage(value){
        this.$store.dispatch("ChangePage",value);
    }
}
}
</script>

<style>
</style>