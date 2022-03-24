<template>
  <div>
    <a-form>
      <a-row :gutter="[30, 20]">
        <a-col :span="6">
          <a-input addon-before="商品名称"> </a-input>
        </a-col>
        <a-col :span="6">
          <a-input addon-before="商品ID"> </a-input>
        </a-col>
        <a-col :span="6">
          <span
            >价格区间<a-input
              placeholder="最低"
              style="max-width: 70px"
            ></a-input
            >至<a-input placeholder="最高" style="max-width: 70px"></a-input
          ></span>
        </a-col>
        <a-col :span="6">
          <a-select placeholder="审核状态">
            <a-select-option value="none"> 无 </a-select-option>
            <a-select-option value="pendind"> 审核中 </a-select-option>
            <a-select-option value="done"> 审核通过 </a-select-option>
            <a-select-option value="faild"> 审核失败 </a-select-option>
          </a-select>
        </a-col>
        <a-col :span="6">
          <a-space>
            <a-button shaped="round">搜索</a-button>
            <a><a-icon type="plus"></a-icon>清除条件</a>
          </a-space>
        </a-col>
      </a-row>
      <a-row>
        <a-button type="primary"
          ><router-link to="/myItem/addItem">发布商品</router-link></a-button
        >
        <span> 已选 </span>
        <span style="min-width: 50px; display: inline-block"></span>
        <a-button @click="deleteChooseData">批量删除</a-button>
        <a-dropdown>
          <a-button>更多批量操作<a-icon type="down" /></a-button>
          <a-menu slot="overlay">
            <a-menu-item>
              <span>批量设置运费</span>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </a-row>
    </a-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  //物品搜索组件
  name: "ItemSearch",
  methods: {
    ...mapActions({ deleteData: "onlineItemList/deleteData" }),
    deleteChooseData () {
      this.deleteData()
    }
  }
}
</script>

<style scoped>
</style>