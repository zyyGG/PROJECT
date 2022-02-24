import Vue from "vue";
import Vuex from "vuex";
import { v4 as uuidv4 } from "uuid";

Vue.use(Vuex);

// 格式化时间
function formatTime() {
  let baseTime = new Date();
  let time =
    baseTime.getFullYear() +
    "-" +
    (baseTime.getMonth() + 1) +
    "-" +
    baseTime.getDate() +
    " " +
    baseTime.getHours() +
    ":" +
    baseTime.getMinutes() +
    ":" +
    baseTime.getSeconds();
  return time;
}

export default new Vuex.Store({
  state: {
    listDatas: [
      {
        id: uuidv4(),
        name: "我的任务", //任务名称
        addTime: "2022-2-16 00:00", //添加时间
        lastChangeTime: "2022-2-16 12:00", //最后修改时间
        position: 1,
        isShow: true, //是否显示
        isCheck: false, //是否选中
        isToggle: false, //是否被标记
      },
    ],
    editMode: false, //是否进入编辑模式
    pagination: 4, //每页显示几个任务
    localPage: 1, //当前位于第几页
  },
  actions: {
    // 整理数据
    sortArr(context) {
      // 将当前位于的页面中的任务展示出来 isShow=ture
      // context.state.localPage 当前页 *   context.state.pagination 个/页
      let max = context.state.localPage * context.state.pagination;
      let min = (context.state.localPage - 1) * context.state.pagination;

      // 重新整理所有的位置信息 并将isShow变为false
      let length = context.state.listDatas.length - 1;
      context.state.listDatas.forEach((listData) => {
        listData.position = context.state.listDatas.length - length;
        // 检测是否在显示范围内,是就显示，否则隐藏
        if (listData.position > min && listData.position <= max) {
          listData.isShow = true;
        } else {
          listData.isShow = false;
        }
        length -= 1;
      });
    },
    // actions 处理删除任务请求
    deleteTask(context, value) {
      const listDatas = context.state.listDatas;
      for (const index in listDatas) {
        // 找到需要删除的任务，并删除
        if (listDatas[index].id === value) {
          context.commit("DELETETASK", listDatas[index].id);
        }
      }
      context.dispatch("sortArr"); //整理数据
    },
    // actions 执行添加任务请求
    addTask(context, value) {
      if (value) {
        const newDatas = {
          id: uuidv4(),
          name: value,
          addTime: formatTime(),
          lastChangeTime: formatTime(),
          position: context.state.listDatas.length + 1,
          isShow: true,
          isCheck: false,
          isToggle: false,
        };
        // 如果添加的新任务超出页码显示的范围，那就隐藏起来
        if (
          newDatas.position >
          context.state.localPage * context.state.pagination
        )
          newDatas.isShow = false;
        context.commit("ADDTASK", newDatas);
      } else {
        alert("请输入有效的任务名称");
      }
    },
    // 显示位置上移
    moveUp(context, value) {
      if (value.position !== 1) {
        context.commit("MOVEUP", {
          moveData: value,
          beMoveData: context.state.listDatas[value.position - 2],
        });
      } else {
        console.log("无法移动");
      }
    },
    // 全选所有的任务
    checkAll(context, value) {
      context.commit("CHECKALL", value);
    },
    // 更改标记符号
    changeToggle(context, id) {
      for (let i = 0; i < context.state.listDatas.length; i++) {
        if (context.state.listDatas[i].id === id) {
          context.commit("CHANGETOGGLE", context.state.listDatas[i]);
        }
      }
    },
    // 为所有被选中的元素添加或移除标记
    toggleAll(context, value) {
      context.commit("TOGGLEALL", value);
    },
    // 翻页 1是一页,-1是上翻一页
    ChangePage(context, value) {
      // 如果翻页没有超出上限 那就可以增加
      if (
        context.state.localPage + value <=
          Math.ceil(
            context.state.listDatas.length / context.state.pagination
          ) &&
        context.state.localPage + value > 0
      ) {
        context.commit("CHANGEPAGE", value);
      }
      context.dispatch("sortArr");
    },
    //删除选中状态的项目 
    deleteCheck(context){
      let node = context.state.listDatas
      for(let i=0;i<node.length;i++){
        if(node[i].isCheck==true){
          //执行删除任务
          context.commit("DELETETASK",node[i].id)
        }
      }
      //整理列表
      context.dispatch("sortArr");
    },
    //更改pagination每页个数的值
    changePagination(context,value){
      context.commit("CHANGEPAGINATION",value)
      // 重置当前页
      context.state.localPage=1;
      // 重新排序
      context.dispatch("sortArr")
    }
  },
  mutations: {
    // mutations 执行删除任务请求
    DELETETASK(state, value) {
      state.listDatas = state.listDatas.filter((p) => {
        return p.id !== value;
      });
    },
    // mutations 执行添加任务请求
    ADDTASK(state, value) {
      state.listDatas.push(value);
    },
    // 根据position的值重新排列
    RESORT(state, listDatas) {},
    // 更改所有的isCheck 的值 value:boolearn
    CHECKALL(state, value) {
      for (let i = 0; i < state.listDatas.length; i++) {
        state.listDatas[i].isCheck = value;
      }
    },
    // 修改isToggle
    CHANGETOGGLE(state, value) {
      value.isToggle = !value.isToggle;
    },
    // 修改所有的被选中的isToggle
    TOGGLEALL(state, value) {
      for (let i = 0; i < state.listDatas.length; i++) {
        if (state.listDatas[i].isCheck === true) {
          state.listDatas[i].isToggle = value;
        }
      }
    },
    // 更改localPage的页数
    CHANGEPAGE(state, value) {
      state.localPage += value;
    },
    //修改Pagination的值
    CHANGEPAGINATION(state,value){
      state.pagination=value;
    }
  },
  getters: {},
});
