import {v4 as uuid} from 'uuid'
uuidv4()

const state={
    taskDatas:[
        {
            id:0,
            name:"任务名111",//任务名
            createDate:"2022-1-1",//创建时间
            isCheck:false,//是否checked 选中
            isFlag:false,//是否flag 标记
        },
        {
            id:1,
            name:"name2",
            createDate:"2022-1-1",//创建时间
            isCheck:false,
            isFlag:false,
        }

    ]
}
const actions={
    //添加一个任务
}
const mutations={

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