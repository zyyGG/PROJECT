// 引入VueRouter
import VueRouter from 'vue-router'

// 引入路由组件
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import TaskList from '../pages/TaskList'

 const router = new VueRouter({
    routes:[
        // 主页组件
        {
            name:"Home",
            path:'/home',
            component:Home,
            // Home的子组件
            children:[
                
            ]
        },
        // 登录组件
        {
            name:"Login",
            path:'/login',
            component:Login,
        },
        //注册组件 
        {
            name:"Register",
            path:'/register',
            component:Register,
        },
        //任务列表
        {
            name:"TaskList",
            path:"/taskList",
            component:TaskList
        }
    ]
})

export default router