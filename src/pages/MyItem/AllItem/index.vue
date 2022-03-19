<template>
<div>
  <ItemSearch></ItemSearch>
  <a-table :columns="columns" :data-source="demo" :row-selection="rowSelection"> 
    <span slot="action">
      <a-dropdown>
        <span><a>Edit <a-icon type="down" /></a></span>
        <a-menu slot="overlay">
          <a-menu-item>Item</a-menu-item>
          <a-menu-item>Item2</a-menu-item>
        </a-menu>
      </a-dropdown>
    </span>
    <span slot="price" slot-scope="item">
      {{item.price}}元/个
    </span>
    <span slot="stock" slot-scope="item">
      {{item.stock}}个/{{item.maxStock}}个
    </span>
    <span slot="sellCount" slot-scope="item">
      {{item.sellCount}}个
    </span>
  </a-table>
</div>
  
  
</template>

<script>
//数据的配置表
const columns=[
  {
    key:"name",
    title:"商品名称",
    dataIndex:"name"
  },
  {
    key:"price",
    title:"价格",
    scopedSlots: { customRender: 'price' },
  },
  {
    key:"stock",
    title:"库存",
    scopedSlots: { customRender: 'stock' },
  },
  {
    key:"sellCount",
    title:"销量/一天内  ",
    scopedSlots: { customRender: 'sellCount' },
  },
  {
    key:"createTime",
    title:"创建时间",
    dataIndex:"createTime"
  },
  {
    key:"actions",
    title:"操作",
    scopedSlots: { customRender: 'action' },
  },
]
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    //当发生改变的时候
  },
  onSelect: (record, selected, selectedRows) => {
    //当选中的时候
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    //所有选项都被选中的时候
  },
};

import ItemSearch from "/src/components/ItemSearch"
//商品列表
import demo from "/src/assets/demoITemList.json"

export default {
name:"AllItem",
components:{ItemSearch},
data() {
  return {
    columns,
    demo,
    rowSelection
  }
},
}
</script>

<style>

</style>