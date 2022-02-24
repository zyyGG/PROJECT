<template>
  <div>
    <select v-model="paginationNum">
      <option :value="4">4/页</option>
      <option :value="10">10/页</option>
      <option :value="50">50/页</option>
      <option :value="100">100/页</option>
    </select>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "ShowNum",
  data () {
    return {
        paginationNum:4 // 默认每页可以显示几个
    }
  },
  computed: {
    ...mapState(["localPage", "pagination"])
  },
  watch:{
      paginationNum(){
          this.$store.dispatch("changePagination",this.paginationNum)
      }
  }
}
</script>

<style>
</style>