import Vue from 'vue'
import Vuex from 'vuex'

//导入其他的modules文件
import TaskStore from './modules/taskStore'
import onlineItemList from './modules/onlineItemList'
import userInfor from './modules/userInfo'

Vue.use(Vuex)
export default new Vuex.Store({
    //严格模式防止出现mutation以外的方法修改state
    // strict: process.env.NODE_ENV !== 'production',//在开发模式中启用严格模式
    modules:{
        TaskStore,
        onlineItemList,
        userInfor
    }
})