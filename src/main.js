import Vue from 'vue'
import App from './App.vue'

//引入Vuex仓库
import store from './store'

//引入ant-design-vue ui组件
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(Antd)

//引入VueRouter
import VueRouter from "vue-router"
import router from "./router"
Vue.use(VueRouter)



// 关闭生产提示
Vue.config.productionTip = false

new Vue({
    render :h => h(App),
    store,
    router,
}).$mount("#app")


