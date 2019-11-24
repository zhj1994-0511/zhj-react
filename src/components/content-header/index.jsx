import React, { Component } from 'react'
import './index.less'
import {Button,Icon,Modal} from 'antd'
//下包并引入全屏的方法  
import screenfull from 'screenfull'
//引入connect 以及删除二人组
import {connect} from 'react-redux'
import {removeItem} from '../../utils/storage'
import {remove} from '../../redux/action-creaters/usermessage'
import {withRouter} from 'react-router-dom'
import menus from '../../config/menus'


@withRouter
//里面的参数 用prop接收
// @connect((state=>({username:state.user.user.username})),{remove})
@connect(({user})=>({
  username:user.user.username
}),{remove})


 class Head extends Component {

//获取时间 

formatdate=(date)=>{
  //对date 的处理
  date= new Date(date)
 const year = date.getFullYear();
 const month =this.add(date.getMonth()+1);
 const day =this.add(date.getDate());
 const hour=this.add(date.getHours());
 const minute=this.add(date.getMinutes());
 const second=this.add(date.getSeconds());
 return `${year}-${month}-${day}  ${hour}:${minute}:${second}`
}

add=(num)=>{
  if(num<10) return '0'+num;
  //注意 上述的函数只返回小于10的数字
  return num
}

  state={
    isfullscreen:false,
    date:this.formatdate(Date.now()),
    pathname:'',
    title:'',

  }


//调用全屏的函数方法
  togglescreen=()=>{
    screenfull.toggle()
  }
//全屏后更改state 为了更改图标
  change=()=>{
   this.setState({
     isfullscreen:!this.state.isfullscreen
   })
  }

logout=()=>{
  //登出需要做的事情 删除loacl user 数据 清除redux 回退到登录界面
  Modal.confirm({
    title: 'Do you Want to delete these items?',
    content: 'Some descriptions',
    onOk() {
      //这里用的是connect 处理过了 不要用dispatch 再处理一下子了
      removeItem('user');
      this.props.remove()
      //这里的三大属性 通过withrouter的高阶组件传递过来
      this.props.history.replace("/login");
    }
  });
}



//在挂载阶段绑定全屏判断事件
  componentDidMount(){
        screenfull.on('change',this.change)
        //加载定时器
        this.timer=setInterval(()=>{
           this.setState({
             date:this.formatdate(Date.now())
           })
        },1000)
  }
  //组件卸载前的操作
 componentWillUnmount(){
     clearInterval(this.timer)
 }

//挂载要反复调用的函数
static getDerivedStateFromProps(nextProps,prevState){
  const {pathname}=nextProps.location
  
   if(pathname===prevState.pathname){
     return prevState
   }
   let title='';
  for(var i=0;i<menus.length;i++){
    const menu=menus[i]
    if(menu.children){
      const cmenu=menu.children.find(cmenu=>cmenu.path===pathname);
      if(cmenu){
       title=cmenu.title;
       break
      }
    }else{
      if(menu.path===pathname){
        title=menu.title;
        break
      }
    }
  }

   return {
     pathname,
     title,
   }
}

  render() {
    const {isfullscreen,date,title}=this.state;
    const {username} =this.props
    return (
      <div className='content-head'>
        <div className='head-top'>
         <Button size='small' onClick={this.togglescreen}>
           <Icon type={isfullscreen?"fullscreen-exit":"fullscreen"} />
          </Button>
        <Button size="small">
          English
        </Button>
         <span>欢迎，{username}</span>
        <Button type="link" onClick={this.logout}>
          退 出
        </Button>
        </div>
        <div className='head-foot'>
          <h3>{title}</h3>
          <span>{date}</span>
        </div>
      </div>
    )
  }
}
export default Head;