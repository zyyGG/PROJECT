import Vue from 'vue'
import Vuex from 'vuex'

//导入其他的modules文件
import TaskStore from './modules/taskStore'

Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        TaskStore,
    }
})