<template>
  <div class="turnPage btn-group">
      <!-- 上一页 -->
    <button class="btn btn-link" @click="ChangePage(-1)">
      <i class="fa-solid fa-angle-left"></i>
    </button>
    <!-- 第一页 -->
    <button class="btn btn-link" @click="ChangePage(-(localPage-1))">
      <i class="fa-solid fa-angles-left"></i>
    </button>
    <div class="btn btn-link">{{ localPage }}/{{ allPage }}</div>
    <!-- 最后一页 -->
    <button class="btn btn-link">
      <i class="fa-solid fa-angles-right" @click="ChangePage(allPage-localPage)"></i>
    </button>
    <!-- 下一页 -->
    <button class="btn btn-link" @click="ChangePage(1)">
      <i class="fa-solid fa-angle-right"></i>
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "TurnPage",
  computed: {
    ...mapState(["listDatas", "localPage", "pagination"]),
    //总共页码数量
    allPage () {
      return Math.ceil(this.listDatas.length / this.pagination)
    }
  },
  methods:{
      ChangePage(value){
          this.$store.dispatch("ChangePage",value);
      }
  },
  watch:{
      allPage(){
          if(this.localPage>this.allPage){
              this.ChangePage(-1)
          }
      }
  }
}
</script>

<style scoped>
.turnPage{
  float:right;
}
</style>