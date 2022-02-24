<template>
  <div class="row" style="">
    <div class="btn-group">
      <button class="btn btn-link" title="上一页" @click="ChangePage(-1)">
        <i class="fa-solid fa-angle-left"></i>
      </button>
      <button
        class="btn btn-link"
        title="第一页"
        @click="ChangePage(-localPage + 1)"
      >
        <i class="fa-solid fa-angles-left"></i>
      </button>
      <div class="btn btn-link">
        <span>{{ localPage }}/{{ pageAll }}</span>
      </div>
      <button
        class="btn btn-link"
        title="最后一页"
        @click="ChangePage(pageAll - localPage)"
      >
        <i class="fa-solid fa-angles-right"></i>
      </button>
      <button class="btn btn-link" title="下一页" @click="ChangePage(1)">
        <i class="fa-solid fa-angle-right"></i>
      </button>
    </div>
    <div class="text-left">
      <select v-model="options">
        <option value="4">4个/页</option>
        <option value="8">8个/页</option>
        <option value="16">16个/页</option>
        <option value="32">32个/页</option>
        <option value="64">64个/页</option>
        <option value="128">128个/页</option>
      </select>
    </div>
  </div>
</template>

<script>

export default {
  name: "TaskFooter",
  data () {
    return {
      options: 4,
    }
  },
  computed: {
    //  总页码数量
    pageAll () {
      return Math.ceil(this.$store.state.listDatas.length / this.pagination)
    },
    //每页显示几个
    pagination () {
      return this.$store.state.pagination
    },
    //当前页面的位置
    localPage () {
      return this.$store.state.localPage
    },
  },
  methods: {
    // 翻页
    ChangePage (value) {
      this.$store.dispatch("ChangePage", value)
    },
  },
  watch:{
    options(){
      this.$store.state.pagination=this.options;
      this.$store.state.localPage=1;
      this.$store.dispatch("sortArr")
    }
  }
}
</script>

<style>
</style>