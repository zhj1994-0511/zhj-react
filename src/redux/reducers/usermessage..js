
import {getItem} from '../../utils/storage.js'
//引入获取本地存储数据的方法
import {USER_MESSAGE,REMOVE} from '../action-types/usermessage'
//这里的action 为 action-creator 内异步函数调用的dispatch 出过来的action 即{，{data{response}}},
//data 数据便是需要获取的内容信息，所以reduce的处理只要将其解析出去

const object=getItem('user')||{}
//设定初始化的 state  



function user(prevState=object,action){
  switch (action.type){
    case REMOVE:
      return {}
    case USER_MESSAGE:
      return action.data
    default :
    return prevState
  }
}

export default user;