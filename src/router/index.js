// 引入VueRouter
import VueRouter from "vue-router";

// 引入路由组件
import NONES from "../pages/NONES"
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import TaskList from "../pages/TaskList";
import MyItem from "../pages/MyItem";
import AddItem from "../pages/AddItem";
import AllItem from "../pages/MyItem/AllItem";
import OnSell from "../pages/MyItem/OnSell";
import Others from "../pages/MyItem/Others";

const router = new VueRouter({
  routes: [
    // 第一页面
    {
      name:"NONES",
      path:"/",
      component:NONES,
    },
    // 主页组件
    {
      name: "Home",
      path: "/home",
      component: Home,
      // Home的子组件
      children: [],
    },
    // 登录组件
    {
      name: "Login",
      path: "/login",
      component: Login,
    },
    //注册组件
    {
      name: "Register",
      path: "/register",
      component: Register,
    },
    //任务列表
    {
      name: "TaskList",
      path: "/taskList",
      component: TaskList,
    },
    //添加商品
    {
      name: "AddItem",
      path: "/addItem",
      component: AddItem,
    },
    //我的商品
    {
        name: "MyItem",
        path: "/myItem",
        component: MyItem,
        children:[
          {
            name:"AllItem",
            path: "/myItem/allItem",
            component: AllItem,
          },
          {
            name:"OnSell",
            path: "/myItem/onSell",
            component: OnSell,
          },
          {
            name:"Others",
            path: "/myItem/others",
            component: Others,
          },
        ]
      },
  ],
});

export default router;
