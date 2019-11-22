// import React, { Component } from 'react'
// import LeftNav  from '../home-sider'
// import './index.less'
// import  checkLogin from '../../containers/with-checklogin'
// import { Layout, Breadcrumb} from 'antd';

// const { Header, Content, Footer ,Sider} = Layout;

// @checkLogin
// class Home extends Component {
//   state = {
//     collapsed: false,
//   };

//   onCollapse = collapsed => {
//     console.log(collapsed);
//     this.setState({ collapsed });
//   };

//   render() {
//     return (
//       <Layout style={{ minHeight: '100vh' }}>
//            <Sider
//           collapsible
//           collapsed={this.state.collapsed}
//           onCollapse={this.onCollapse}
//         >
//           <LeftNav />
//         </Sider>
//         <Layout>
//           <Header style={{ background: '#fff', padding: 0 }} />
//           <Content style={{ margin: '0 16px' }}>
//             <Breadcrumb style={{ margin: '16px 0' }}>
//               <Breadcrumb.Item>User</Breadcrumb.Item>
//               <Breadcrumb.Item>Bill</Breadcrumb.Item>
//             </Breadcrumb>
//             <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a cat.</div>
//           </Content>
//           <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
//         </Layout>
//       </Layout>
//     );
//   }
// }


// export default Home;




import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
        home、。。。。。
      </div>
    )
  }
}
