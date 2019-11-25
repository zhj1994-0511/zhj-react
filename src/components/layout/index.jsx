import React, { Component } from 'react'
import LeftNav  from '../home-sider'
import Head from '../content-header'
import './index.less'
import  checkLogin from '../../containers/with-checklogin'
import { Layout} from 'antd';

const { Header, Content, Footer ,Sider} = Layout;

@checkLogin
class BaseLayout extends Component {
  state = {
    collapsed: false,
    isDisplay:true
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed ,
    isDisplay:!this.state.isDisplay
    });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
           <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <LeftNav  isDisplay={this.state.isDisplay}/>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} >
          <Head/>
          </Header>
          <Content style={{ margin: '80px 16px 0 0' }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a cat.</div> */}
           
            {/* <Home/> */}
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {/* 展示某一个组件下的所有子组件*/}
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}


export default BaseLayout;