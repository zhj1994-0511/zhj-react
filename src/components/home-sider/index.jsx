import React, { Component } from 'react'
import logo from '../imgs/logo.png';
import menus from '../../config/menus.jsx'
import {  Menu,Icon} from 'antd';
import { Link ,withRouter} from "react-router-dom";
import './index.less'
import propTypes from 'prop-types'
const { SubMenu } = Menu;


@withRouter //这个高阶组件能够给非路由组件传递 路由组件的三大属性  loaction  match   history
class LeftNav extends Component {

  static propTypes={
    isDisplay:propTypes.bool.isRequired
  }
  state ={
    menu:[]
  }

  createMenu=(menu)=>{
    return (
    <Menu.Item key={menu.path}>
    <Link to ={menu.path} >
   <Icon type={menu.icon} />
   <span>{menu.title}</span>
   </Link>
    </Menu.Item>
    )
   
 }

  createMenus=(menus)=>{
     return menus.map((menu)=>{
       if(menu.children){
         return (
          <SubMenu
          key={menu.path}
          title={
            <span>
              <Icon type={menu.icon} />
              <span>{menu.title}</span>
            </span>
          }
        >
          {

            // console.log(menu.children)
             menu.children.map((cmenu)=>{
            return  this.createMenu(cmenu)
            })

          }
        </SubMenu>
         )
       
       }else{
        return  this.createMenu(menu)
       }
      
     })
   }
  
   findopenkey=(menus,pathname)=>{
        
       for (let i=0;i<menus.length;i++){
          const menu =menus[i];

          if(menu.children){
           const cmenu=menu.children.find(cmenu=>cmenu.path===pathname)
           if(cmenu){
            return menu.path
          }
          }
          
       }
   }
   
  //  findOpenKey = (menus, pathname) => {
  //   for (let index = 0; index < menus.length; index++) {
  //     const menu = menus[index];
  //     if (menu.children) {
  //       const cmenu = menu.children.find(cmenu => cmenu.path === pathname);
  //       if (cmenu) {
  //         return menu.path;
  //       }
  //     }
  //   }
  // };

  
    

componentDidMount(){
  this.setState({
    menu:this.createMenus(menus)
  })
}
  
  
  render() {
    const {pathname}=this.props.location;
     //遍历查询
    const openkey=this.findopenkey(menus,pathname)
      console.log(openkey)
    return (
      <div>
      <header className='sider'>
        <img src={logo} alt="logo" />
        <h1  style={{display:this.props.isDisplay?'block':'none'}}>GUIGU</h1>
      </header>
           <Menu theme="dark" defaultSelectedKeys={[pathname]} mode="inline"  defaultOpenKeys={[openkey]}>
            {
             this.state.menu
            }
          </Menu>
      </div>
    )
  }
}
 
export default LeftNav

//defaultopenkeys