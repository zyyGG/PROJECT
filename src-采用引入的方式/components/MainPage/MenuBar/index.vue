<template>
  <div class="row text-center">
    <!-- 全选 -->
    <div class="col-md-1 text-nowrap">
      <CheckAll></CheckAll>
    </div>

    <!-- 菜单 -->
    <div class="col-md-2">
      <CheckMenu></CheckMenu>
    </div>

    <!-- 筛选 -->
    <div class="col-md-2 text-nowrap">
      <FilterMenu></FilterMenu>
    </div>

    <!-- 排序 -->
    <div class="col-md-2 text-nowrap">
      <SortMenu></SortMenu>
    </div>

  <!-- 每页任务显示数量 -->
  <div class="col-md-2">
    <ShowNum></ShowNum>
  </div>

  </div>
</template>

<script>
import CheckAll from './CheckAll'
import CheckMenu from './CheckMenu'
import FilterMenu from './FilterMenu'
import SortMenu from './SortMenu'
import ShowNum from './ShowNum'

export default {
  name: "MenuBar",
  components: { CheckAll, CheckMenu ,FilterMenu,SortMenu,ShowNum}
}
</script>

<style>
</style>