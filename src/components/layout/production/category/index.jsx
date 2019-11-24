import React, { Component } from 'react'
import {Card, Table ,Button,Icon} from 'antd';
// import tabledata from '../../../../config/tabledata'
import {connect} from 'react-redux';
import  {getCategoryAsync}  from '../../../../redux/action-creaters/category.js'
// import category from '../../../../redux/reducers/category';

@connect(state=>({categories:state.category}),{getCategoryAsync})

   class Category extends Component {
     
    changedata=(data)=>{
      data.map((item,index)=>{
        return  {
         key: index,
         name: '1111111',
         address: 'Sidney No. 1 Lake Park'
        }
      })
    }

  componentDidMount(){
    this.props.getCategoryAsync()
  }

    onChange=(pagination, filters, sorter, extra)=> {
      console.log('params', pagination, filters, sorter, extra);
    }
  
   render(){
//列 
    const onChange=this.onChange;
    const columns = [
      {
        title: 'Name',
        dataIndex: 'address',
      },
      {
        title: 'Address',
        dataIndex: 'address',
         render(){
           return (
             <div>
               <Button type='link'>增加</Button>
               <Button type='link'>删除</Button>
             </div>
           )
         }
      },
    ];
      const  data= this.changedata(this.props.categories)
      
    onChange()
     return (
      
        <Card title='分类列表'
        extra={<Button><Icon type='plus'/>添加分类</Button>}
        >
       
        <Table columns={columns} dataSource={data} onChange={onChange} pagination={{pageSize:2,showQuickJumper:true}}/>


       </Card>  
      
     )
   }
  
}
export default Category