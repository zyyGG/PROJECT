import {v4 as uuid} from 'uuid'
// uuidv4()

const state={
    taskDatas:[
        {
            key:0,
            name:"任务名111",//任务名
            createDate:"2022-1-1",//创建时间
            isCheck:true,//是否checked 选中
            isFlag:false,//是否flag 标记
            onEdit:false,//是否处于编辑状态
        },
        {
            key:1,
            name:"name2",
            createDate:"2022-1-1",//创建时间
            isCheck:false,
            isFlag:true,
            onEdit:false,//是否处于编辑状态
        }

    ]
}

const actions={
    //添加一个任务 payload :[name,time]
    addTask({commit},payload){
        // 添加新的任务格式--在这里修改
        commit("ADDTASK",{
            id:uuid(),//id
            name:payload.name,//任务名
            createDate:payload.time,//添加的时间
            isCheck:false,//是否选中
            isFlag:false,//是否标记
            onEdit:false,//是否处于编辑状态
        })
    },
    // 删除一个任务，通过id
    deleteTaskById({commit},id){
        commit("DELETETASKBYID",id)
    },
    //全选所有任务
    checkAllTask({commit},checked){
        commit("CHECKALLTASK",checked)
    },
    //修改isCheck payload=[id,checked]
    changeTaskIsCheck({commit},payload){
        commit("CHANGETASKISCHECK",payload)
    },
    //修改isFlag payload=[id,flag]
    changeTaskIsFlag({commit},payload){
        commit("CHANGETASKISFLAG",payload)
    },
    // 进入编辑模式
    changeTaskOnEdit({commit},id){
        commit("CHANGETASKONEDIT",id)
    }
}
const mutations={
    // 添加一个任务,obj：新的任务对象
    ADDTASK(state,obj){
        state.taskDatas.push(obj)
    },
    // id:string 通过id删除一个任务
    DELETETASKBYID(state,id){
        state.taskDatas=state.taskDatas.filter(obj=>{
            return obj.id!==id;
        })
    },
    //全选所有任务，修改所有的isCheck
    CHECKALLTASK(state,checked){
        state.taskDatas.forEach(element => {
            element.isCheck=checked;
        });
    },
    //通过id修改isCheck
    CHANGETASKISCHECK(state,payload){
        state.taskDatas.forEach(element => {
            if(element.key===payload.id){
                element.isCheck=payload.checked
            }
        });
    },
    //通过id修改isFlag
    CHANGETASKISFLAG(state,payload){
        state.taskDatas.forEach(element => {
            if(element.key===payload.id){
                element.isFlag=payload.flag
            }
        });
    },
    //修改onedit
    CHANGETASKONEDIT(state,id){
        state.taskDatas.forEach(element => {
            if(element.key===id){
                element.onEdit=true
            }
        });
    }
}
const getters={

}

export default {
    namespaced:true,
    state,
    actions,
    mutations,
    getters
}