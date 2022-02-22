import Vue from 'vue'
import App from './App.vue'

// vuex 仓库
import store from './store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,//注册vuex仓库
}).$mount('#app')
