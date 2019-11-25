import React, { Component } from 'react'
import {Card, Table ,Button,Icon} from 'antd';
 import tabledata from '../../../../config/tabledata'
import {connect} from 'react-redux';
import  {getCategoryAsync}  from '../../../../redux/action-creaters/category.js'
// import category from '../../../../redux/reducers/category';

@connect(state=>({categories:state.category}),{getCategoryAsync})

   class Category extends Component {
     
    changedata=(data)=>{
      data.map((item)=>{
        return  {
         key: item._id,
         name: item.name,
        }
      })
    }

  componentDidMount(){
    this.props.getCategoryAsync()
  }

    
  
   render(){
//列 
    
    const columns = [
      {
        title: '品类名称',
        dataIndex: 'name',
      },
      {
        title: '操作',
      
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
      // const  data= this.changedata(this.props.categories)
      // console.log(this.props.categories)
      //疑问  为什么转换后没有生效
      // const data=tabledata
     return (
      
        <Card title='分类列表'
        extra={<Button><Icon type='plus'/>添加分类</Button>}
        >
       
        <Table columns={columns} dataSource={this.props.categories}  pagination={{pageSize:2,showQuickJumper:true}}
              rowKey="_id"
        />


       </Card>  
      
     )
   }
  
}
export default Category