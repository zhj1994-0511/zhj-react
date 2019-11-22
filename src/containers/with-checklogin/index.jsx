import {connect} from 'react-redux';
import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

//创建函数时候需要传参数  
const checkLogin=(Wappered)=>{
  return  connect (state=>({token:state.user.token}),null)(class extends Component{

    static displayName = `CheckLogin(${Wappered.displayName ||
     Wappered.name ||
      "Component"})`;

    render(){
     const { 
       token ,//?
       location,
       ...rest
      }=this.props
     
       if(location.pathname ==='/login'){
         //是否在登录界面
          if(token){
          return    <Redirect  to='/'/>
          }
          //注意点 这里要return 出去 避免下方代码执行
       }else{
         //不在登录页面
         //没有token
         if(!token){
         return  <Redirect  to='/login'/>
         }
       }

       return  <Wappered  {...rest} location={location}/>
    }
   
 }

  )
}

export default checkLogin;