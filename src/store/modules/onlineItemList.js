const state = {
  onlineItemData: [],
  // 被选中的条目
  selectedRows: [],
};

const actions = {
  // 初始化数据
  initData(context, value) {
    context.commit("INITDATA", value);
  },
  //修改selectedRows的值
  changeSelectedRows(context, newVal) {
    context.commit("CHANGESELECTEDROWS", newVal);
  },
  //删除数据
  deleteData(context) {
      context.commit("DELETEDATA");
  },
};

const mutations = {
  INITDATA(state, value) {
    state.onlineItemData = value;
  },
  CHANGESELECTEDROWS(state, newVal) {
    state.selectedRows = newVal;
  },
  DELETEDATA(state) {
      //比对次数
    let node = new Array()
    for(let i=0;i<state.onlineItemData.length;i++){
        node.push(state.onlineItemData[i])
        for(let j=0;j<state.selectedRows.length;j++){
            if(state.onlineItemData[i].key === state.selectedRows[j].key){
                node.pop(state.onlineItemData[i])
            }
        }
    }
    state.onlineItemData = node;
    // console.log(state.selectedRows,state.onlineItemData)
    // console.log(node)
    state.selectedRows=[]
  },
};

const getters = {};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
