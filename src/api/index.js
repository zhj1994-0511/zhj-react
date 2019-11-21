//定义请求方法 

import axiosInstance from './request';

  const reqLogin =(username,password)=>{
 return  axiosInstance({
    method:'POST',
    url:'/login',
    data:{
      username:username,
      password:password
    }
  })
}
  export default reqLogin


//  export const reqLogin =(username,password)=>axiosInstance({
//        method:'POST',
//        url:'/login',
//        data:{
//          username:username,
//          password:password
//        }
//      })
  //此种暴露对应接受方式不同 注意不要混用
    