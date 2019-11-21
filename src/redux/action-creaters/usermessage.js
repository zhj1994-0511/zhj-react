import regLogin from '../../api/index'
//登录请求成功 数据要进行存储 所以引入了登录的函数
import {USER_MESSAGE}  from '../action-types/usermessage'
const getuser=(user)=>({
   type:USER_MESSAGE,
   data:user
})

//这里创建了type 最好归类于 types 管理
//action-creater  创建后 reduce要同步r

export const usermeassageAsync=(username,password)=>{
  return (dispatch)=>{
     return regLogin(username,password)
    //由于relogin 是实例axios的函数，所以这里的返回值是经过实例处理过的 实际上是包含token ,user的那个data
    //这里进入then 代表成功登录
    .then((response)=>{
      //创建action  调用dispatch  这个函数要暴露给外界使用的
       const action=getuser(response);
       dispatch(action)
       return response //需要返回
    })
     
  }
}

//此处 action.data 实际上就是  {type:,,,,data:{response}}, 且 response ;{token,users}...