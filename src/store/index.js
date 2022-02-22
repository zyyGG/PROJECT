import Vue from 'vue'
import Vuex from 'vuex'
import { v4 as uuidv4 } from 'uuid'

Vue.use(Vuex)

// 格式化时间
function formatTime(){
    let baseTime = new Date()
    let time=baseTime.getFullYear()+"-"+(baseTime.getMonth()+1)+"-"+baseTime.getDate()+" "+baseTime.getHours()+":"+baseTime.getMinutes()+":"+baseTime.getSeconds();
    return time;
}


export default new Vuex.Store({
    state:{
        listDatas:[
            {
                id:uuidv4(),
                name:'我的任务',//任务名称
                addTime:"2022-2-16 00:00",//添加时间
                lastChangeTime:"2022-2-16 12:00",//最后修改时间
                position:1,
                isShow:true,//是否显示
                isCheck:false,//是否选中
                isToggle:false,//是否被标记
            },
        ],
        editMode:false,//是否进入编辑模式
    },
    actions:{
        // actions 处理删除任务请求
        deleteTask(context,value){
            const listDatas=context.state.listDatas
            for (const index in listDatas) {
                if(listDatas[index].id === value){
                    context.commit("DELETETASK",listDatas[index].id)
                }
            }
            // 重新整理所有的位置信息
            let length=context.state.listDatas.length-1;
            context.state.listDatas.forEach(listData => {
                listData.position = context.state.listDatas.length-length;
                length-=1;
            });
            
        },
        // actions 执行添加任务请求
        addTask(context,value){
            if(value){
                const newDatas={
                    id:uuidv4(),
                    name:value,
                    addTime:formatTime(),
                    lastChangeTime:formatTime(),
                    position:context.state.listDatas.length+1,
                    isShow:true,
                    isCheck:false,
                    isToggle:false,
                };
                context.commit("ADDTASK",newDatas)
            }else{
                alert("请输入有效的任务名称")
            }
        },
        // 显示位置上移
        moveUp(context,value){
            if(value.position!==1){
                context.commit("MOVEUP",{moveData:value,beMoveData:context.state.listDatas[value.position-2]})
            }else{
                console.log("无法移动")
            }
        },
        // 全选所有的任务
        checkAll(context,value){
            context.commit("CHECKALL",value);
        },
        // 更改标记符号
        changeToggle(context,id){
            for(let i=0;i<context.state.listDatas.length;i++){
                if(context.state.listDatas[i].id===id){
                    context.commit("CHANGETOGGLE",context.state.listDatas[i])
                }
            }
            
        },
        // 为所有被选中的元素添加标记
        toggleAll(context,value){
            context.commit("TOGGLEALL",value)
        },
        // 为所有被选中的元素移除标记
    },
    mutations:{
        // mutations 执行删除任务请求
        DELETETASK(state,value){
            state.listDatas=state.listDatas.filter((p)=>{
                return p.id!==value;
            })
        },
        // mutations 执行添加任务请求
        ADDTASK(state,value){
            state.listDatas.push(value)
        },
        // 根据position的值重新排列
        RESORT(state,listDatas){

        },
        // 更改所有的isCheck 的值 value:boolearn
        CHECKALL(state,value){
            for(let i = 0; i < state.listDatas.length;i++){
                state.listDatas[i].isCheck=value;
            }
        },
        // 修改isToggle
        CHANGETOGGLE(state,value){
            value.isToggle=!value.isToggle;
        },
        TOGGLEALL(state,value){
            for(let i=0;i<state.listDatas.length;i++){
                if(state.listDatas[i].isCheck===true){
                    state.listDatas[i].isToggle=value;
                }
            }
        }
    },
    getters:{},
})


