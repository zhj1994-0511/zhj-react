import React, { Component } from 'react';
import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom'
import {unauthroutes,authroutes} from './config/routes'
import BaseLayout from './components/layout'
import './index.less'
import history from "./utils/history";
export default class App extends Component {
  render() {
    return (
      <Router history={history}>  
          <Switch>
            {
              //登录界面不需要被管理
               unauthroutes.map((route,index)=>{
                return  <Route   {...route} key ={index}/>
                })
            }
            <BaseLayout>
            <Switch>
           {
             authroutes.map((route,index)=>{
             return  <Route   {...route} key ={index}/>
             })
           }
           </Switch>
            </BaseLayout>
            </Switch>
           
      </Router>
    )
  }
}
