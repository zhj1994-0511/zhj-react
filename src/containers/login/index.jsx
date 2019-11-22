import React, { Component } from 'react'
import logo from '../../components/imgs/logo.png';
import {Form ,Icon,Button,Input} from 'antd';
//引入工厂函数  必须、
import  {usermeassageAsync} from '../../redux/action-creaters/usermessage'
//引入connect 接收 action 工厂内的函数
import {connect} from 'react-redux';
//引入存储数据方法
import {setItem} from '../../utils/storage.js'
//引入检查token 方法
import  checkLogin from '../with-checklogin'
import './index.less'
const {Item} = Form;

  //装饰器语法写法
  //connect 传参  前面写需要用到的state 参数/null  后面想需要要到的函数对象  第二个内些组件
 @checkLogin
  @connect(null,{usermeassageAsync})
  @Form.create()
 class Login extends Component {
  validator=(rule, value, callback)=>{
    //上来就调用一次 按照文档的额写法， callback()时传入参数就是意味着报错信息，不写就是正确
    //rule 代表的时当前校验的对象是哪一个input
    //value 即当前input  内的内容  是string  所以能获取长度
    //rule.field  代表着 getFieldDecorator 内的第一个调用内的第一个参数  string
    const name= rule.field==='username'? '用户名':'密码'
    if(!value){
      callback('请填写内容')
    }else if(value.length<4){
      callback(`${name}不得短于4位`)
    }else if(value.length>13){
      callback(`${name}不得超过13位`)
    }else if (!/\w/.test(value)){
      callback(`${name}必须由数字字母下划线组成`)
    }
    callback()
  }


   handlesubmit=(event)=>{
     event.preventDefault();
     //获取表单错误与信息的方法  form的属性、、
     //注意点 文档上写的是方法API 使用的时候直接调用传参  避免写成=（参数1，餐数）=>{}  这不是在定义函数
     this.props.form.validateFields((err,values)=>{
       //err  错误的信息
       //values  获取的值 是一个对象  axios 正好需要一个key value 的对象参数

       if(!err){
        //  axios.post(`http://localhost:5000/api/login`,values)
          const {username,password}=values;

           this.props.usermeassageAsync(username,password)
           
          .then((response)=>{
            console.log(response)
              setItem('user',response)
            //登录成功 存储数据
          //  if(response.data.status===0){
           
              //请求发送成功 用户信息正确   登录成功 跳转页面
              // message.success('登陆成功')
              this.props.history.push('/')//跳转到home yemian 
          //  }else{
              //登录失败 message 从antd上获取  引入
            //  message.error(response.data.msg);
             //清空密码栏
            //  this.props.form.resetFields(['password'])
          //  }
         })
         .catch((err)=>{
          //  console.log(err);
          //  alert('网络故障')
           this.props.form.resetFields(['password'])
         })
       }
     })
   }

  render() {
    //这是一个高阶组件  使用时是JS代码 写在{内部}
    const {getFieldDecorator} =this.props.form;
    return (
      <div className='login'>
        <header  className='login-header'>
          <img src={logo} alt="logo" className='login-logo'/>
          <h1>React项目: 后台管理系统</h1>
        </header>
        <section className='login-section'>
         <h3>用户登录</h3>
              <Form  onSubmit={this.handlesubmit}>
               <Item> 
                { getFieldDecorator(
                   'username',{
                      rules:[
                        // {
                        //   required:true,
                        //   message:'请填写用户名'
                        // },
                        // {
                        //   min:4,
                        //   message:'用户名不得少于4字符'
                        // },
                        // {
                        //   max:13,
                        //   message:'用户名不得超过13字节'
                        // },
                        // {
                        //   pattern:/\w/,
                        //   message:'用户名必须由数字 字母 下划线组成'

                        // }
                        {
                          validator:this.validator
                        }
              
                      ]
                   }

                 )(<Input 
                  prefix={<Icon type="user" className="login-icon" />}
                  placeholder="用户名"
                 />)
                  }
               </Item> 
               <Item> 
                 {getFieldDecorator(
                   'password',{
                     //另一种校验方式
                     rules:[
                       {
                         validator:this.validator
                       }
                     ]
                   }
                 )(<Input 
                  prefix={<Icon type="lock" className="login-icon" />}
                  type='password'
                  placeholder="密码"
                 />)}
               </Item> 
               <Item> 
                 <Button type='primary' className='login-btn' htmlType='submit'>登录</Button>
               </Item> 
              </Form>  
        </section>
      </div>
    )
  }
}



//高阶组件普通用法   这个方法会给this.props 添加一个form属性
// export default Form.create()(Login);

//装饰器语法写法  //需要下包及配置   config-overriders.js
//yarn add @babel/plugin-proposal-decorators --dev
export default Login 
