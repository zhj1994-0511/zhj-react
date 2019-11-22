import codeMessage from '../config/code-message.jsx'
import axios  from 'axios'
import {message} from 'antd'
import store from '../redux/store.jsx'
import {remove} from '../redux/action-creaters/usermessage';
import {removeItem} from '../utils/storage';
import history from '../utils/history'
//axios 的实例对象
const axiosInstance =axios.create({
  //设置公共的请求地址
  baseURL: 'http://localhost:5000/api',
   //设置超时
     timeout :10000,
   //设置公共的请求头参数
   headers:{

   }  
})
//针对的额是请求 request
axiosInstance.interceptors.request.use(
  (config)=>{
          //此处判断需要根据实际需求加载
    //  if(config.method==='post'){//post请求的情况下 请求头要更改 参数也要更改
    //      config.headers['content-type']='application/x-www-form-urlencoded';
    //      // Object.keys(config.data)
    //       config.data= Object.keys(config.data).reduce((prev,key)=>{
    //        const value=config.data[key];
    //       return  prev +`&${key}=${value}`;
    //      },'').substring(1)
    //      //substring()  去除头部部分
    //  }


    //  获取state 数据   存储在redux上 
    const{user:{token}} =store.getState()||''

    console.log(token)
  
     if(token){
         config.headers.authorization ='Bearer '+token
       }
     return config
     }
)


//针对的是返回值  response
axiosInstance.interceptors.response.use(
  //此处可以对response 解构 获取data 

  ({data})=>{
    if(data.status===0){
      message.success('登录成功');
      return data.data;
      
    }else{
      message.error(data.msg);
      return  Promise.reject(data.msg);
      
    }
    },

    (error)=>{
       /*
       服务器没开 Network Error ---> error.message
       请求超时 timeout of 1000ms exceeded
       没网 Network Error
       error.response 如果有值，服务器返回了响应 / 如果没有值，服务器没有返回响应
       error.response.status 401 没有携带token
       401 token过期或无效
       404 资源找不到
       403 禁止访问
       500 服务器内部错误
     */
    let errorMessage='';
     if(error.rensponse){
         //存在返回值意味着响应了有状态码
      errorMessage=codeMessage[error.response.status] ||'weizhi'
     //清理家的数据   //重定向到登录
      if(error.rensponse.status===401){
            removeItem();
            store.dispatch(remove());
            history.push('/login')

      }
     }else{
       //检查错误信息是否包含特殊字段
       if (error.message.indexOf('Network Error') !== -1) {
         errorMessage = '请检查网络连接';
       } else if (error.message.indexOf('timeout') !== -1) {
         errorMessage = '网络太卡了，请连上wifi重试';
       } else {
         errorMessage = '未知错误';
       }
     }
      message.error(errorMessage);
      return  Promise.reject(errorMessage);
   }
)

//将这个实例对象暴露到外界
export default axiosInstance;