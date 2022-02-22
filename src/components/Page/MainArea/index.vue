<template>
  <!-- 主区域 6 -->
  <div class="tdl-mainArea col-md-6 col-xs-12 text-center">
    <!-- 排序与筛选菜单 -->
    <div class="tdl-mainArea-menu row">
      <ul class="list-unstyled">
        <!-- 全选 -->
        <li class="sdl-checkout col-md-1 text-left">
          <input type="checkbox" name="" id="checkboxAll" @click="checkAll(isCheck)" v-model="isCheck">
          <label for="checkboxAll">全选</label>
        </li>
        <!-- 选择菜单 -->
        <li class="sdl-checkoutMenu col-md-2 btn-toolbar" role="toolbar">
          <div class="btn-group btn-group-xs" role="group">
            <button class="btn btn-default" :disabled="!editMode" >删除</button>
            <div class="btn-group btn-group-xs" role="group">
              <button type="button" class="btn btn-default" @click="isShowMenu=!isShowMenu">
                标记为
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu" v-show="isShowMenu" :class="{show:isShowMenu}">
                <li @click="toggleAll(true)"><a href="#">已完成</a></li>
                <li @click="toggleAll(false)"><a href="#">未完成</a></li>
              </ul>
            </div>
          </div>
        </li>
        <li class="tdl-sort col-md-4">
          <span>排序:</span>
          <select>
            <option>名称: A-Z</option>
            <option>名称: Z-A</option>
            <option>添加时间: ↑-↓</option>
            <option>添加时间: ↓-↑</option>
          </select>
        </li>
        <li class="sdl-filt col-md-4">
          <span>筛选:</span>
          <select>
            <option>所有</option>
            <option>1小时内</option>
            <option>1天内</option>
            <option>7天内</option>
            <option>30天内</option>
          </select>
        </li>
      </ul>
    </div>
    <Tasks></Tasks>
  </div>
</template>

<script>
import Tasks from './Tasks'
export default {
  name: "MainArea",
  components: { Tasks },
  data() {
    return {
      isCheck:false,
      isShowMenu:false,//是否展示标记菜单
    }
  },
  computed:{
    editMode(){
      let disabled;
      for(let i=0;i<this.$store.state.listDatas.length;i++){
        if(this.$store.state.listDatas[i].isCheck===true) return disabled=true
      }
      return disabled=false
    }
  },
  methods:{
    // 全选所有任务
    checkAll(value){
      // 因为取值存在延迟，所有采用反向取值
      this.$store.dispatch('checkAll',!value);
    },
    // 将所有被选中的任务添加标记
    toggleAll(value){
      this.$store.dispatch("toggleAll",value)
      this.isShowMenu=false;
    }
  }
  

}
</script>

<style scoped>
/* 排序与筛选菜单 */
.tdl-mainArea-menu{
    padding-bottom:15px;
}

#checkboxAll{
  margin-right:10px;
}
/* 标记下拉菜单是否展示 */
.show{
  display:block
}
</style>