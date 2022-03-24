<template>
  <div>
    <ItemSearch></ItemSearch>
    <a-table
      :columns="columns"
      :data-source="demo"
      :row-selection="rowSelection"
    >
      <span slot="actions">
        <a-dropdown>
          <span
            ><a>Edit <a-icon type="down" /></a
          ></span>
          <a-menu slot="overlay">
            <a-menu-item>Item</a-menu-item>
            <a-menu-item>Item2</a-menu-item>
          </a-menu>
        </a-dropdown>
      </span>
      <span slot="price" slot-scope="item"> {{ item.price }}元/个 </span>
      <span slot="stock" slot-scope="item">
        {{ item.stock }}个/{{ item.maxStock }}个
      </span>
      <span slot="sellCount" slot-scope="item"> {{ item.sellCount }}个 </span>
      <span slot="transformPrice" slot-scope="item">
        {{ item.transformPrice }}元/公里
      </span>
      <span slot="createTime" slot-scope="item">
        {{
          `${item.createTime.year}-${item.createTime.month}-${item.createTime.day}-${item.createTime.hour}:${item.createTime.min}:${item.createTime.sec}`
        }}
      </span>
    </a-table>
  </div>
</template>

<script>
import ItemSearch from "/src/components/ItemSearch"
//商品列表
import demoList from "/src/assets/demoItemList.json"

import { mapActions, mapState } from "vuex"

export default {
  name: "AllItem",
  components: { ItemSearch },
  // 挂载时执行
  mounted () {
    // 初始化数据
    this.initData(demoList)
  },
  methods: {
    ...mapActions({
      initData: "onlineItemList/initData",
      changeSelectedRows: "onlineItemList/changeSelectedRows"
    }),
  },
  computed: {
    ...mapState({ demo: state => state.onlineItemList.onlineItemData }),
    rowSelection () {
      return {
        onChange: (selectedRowKeys, selectedRows) => {
          //当发生改变的时候
          this.changeSelectedRows(selectedRows)
          
        },
        onSelect: (record, selected, selectedRows) => {
          //当选中的时候
        },
        onSelectAll: (selected, selectedRows, changeRows) => {
          //所有选项都被选中的时候
        },
      }
    },
    columns () {
      return [
        {
          key: "name",
          title: "商品名称",
          dataIndex: "name"
        },
        {
          key: "price",
          title: "价格",
          scopedSlots: { customRender: 'price' },
          defaultSortOrder: "scend",
          sorter: (a, b) => a.price - b.price,
        },
        {
          key: "stock",
          title: "库存",
          scopedSlots: { customRender: 'stock' },
        },
        {
          key: "sellCount",
          title: "销量/一天内  ",
          scopedSlots: { customRender: 'sellCount' },
        },
        {
          key: "createTime",
          title: "创建时间",
          scopedSlots: { customRender: 'createTime' },
          defaultSortOrder: "scend",
          sorter: (a, b) => a.createTime.year - b.createTime.year,
        },
        {
          key: "transformPrice",
          title: "运输费用",
          scopedSlots: { customRender: 'transformPrice' },
        },
        {
          key: "actions",
          title: "操作",
          scopedSlots: { customRender: 'actions' },
        },
      ]
    }
  }

}
</script>

<style>
</style>