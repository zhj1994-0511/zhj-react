//定义请求方法 

import axiosInstance from './request';

 export const reqLogin =(username,password)=>{
 return  axiosInstance({
    method:'POST',
    url:'/login',
    data:{
      username:username,
      password:password
    }
  })
}
  
 export const GetCategories = () => axiosInstance({
  method: 'GET',
  url: '/category/get',
})


 