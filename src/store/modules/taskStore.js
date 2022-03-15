import { v4 as uuid } from "uuid";

const state = {
  taskDatas: [],
};

const actions = {
  //添加一个任务 payload :[name,time]
  addTask({ commit }, payload) {
    if (!payload.time) {
      let node = new Date();
      payload.time = `${node.getFullYear()}/${node.getMonth()}/${node.getDate()}/${node.getHours()}:${node.getMinutes()}`;
    }
    if(!payload.tags){
      payload.tags=[]
    }

    // 添加新的任务格式--在这里修改
    commit("ADDTASK", {
      key: uuid(), //id
      name: payload.name, //任务名
      createDate: payload.time, //添加的时间
      tags:payload.tags,//任务的标签
      isFlag: false, //是否标记
    });
  },
  // 删除一个任务，通过id
  deleteTaskById({ commit }, key) {
    commit("DELETETASKBYID", key);
  },
  //全选所有任务
  checkAllTask({ commit }, checked) {
    commit("CHECKALLTASK", checked);
  },
  //修改isCheck payload=[key,checked]
  changeTaskIsCheck({ commit }, payload) {
    commit("CHANGETASKISCHECK", payload);
  },
  //修改isFlag payload=[key,flag]
  changeTaskIsFlag({ commit }, key) {
    commit("CHANGETASKISFLAG", key);
  },
  //修改taskName
  changeTaskName({ commit }, payload) {
    commit("CHANGETASKNAME", payload);
  },
  //初始化数据
  initData({ commit }, data) {
    commit("INITDATA", data);
  },
};
const mutations = {
  // 添加一个任务,obj：新的任务对象
  ADDTASK(state, obj) {
    state.taskDatas.push(obj);
  },
  // id:string 通过id删除一个任务
  DELETETASKBYID(state, key) {
    state.taskDatas = state.taskDatas.filter((obj) => {
      return obj.key !== key;
    });
  },
  //全选所有任务，修改所有的isCheck
  CHECKALLTASK(state, checked) {
    state.taskDatas.forEach((element) => {
      element.isCheck = checked;
    });
  },
  //通过id修改isCheck
  CHANGETASKISCHECK(state, payload) {
    state.taskDatas.forEach((element) => {
      if (element.key === payload.id) {
        element.isCheck = payload.checked;
      }
    });
  },
  //通过id修改isFlag
  CHANGETASKISFLAG(state, key) {
    state.taskDatas.forEach((element) => {
      if (element.key === key) {
        element.isFlag = !element.isFlag;
      }
    });
  },
  //通过key值修改TaskName的值
  CHANGETASKNAME(state, payload) {
    state.taskDatas.forEach((element) => {
      if (element.key === payload.key) {
        element.name = payload.name;
      }
    });
  },
  //初始化数据
  INITDATA(state, data) {
    if (!data == null) {
      
      state.taskDatas = data;
    } else {
      state.taskDatas=[]
    }
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
