import React, {Component} from 'react'
import {connect} from 'react-redux' 
import {Router, Route, Link, Redirect} from 'react-router-dom'
import {getCustomer} from '../../redux/actions'
import yonghu from '../../assets/yonghu.png'
import Star from '../../pages/star/star'
import './home.css'
// import CustomerAdd from '../customer/customerAdd';

import {
    List,
    NavBar,
    Flex,
    WhiteSpace,
    WingBlank,
    Icon, 
    Grid,
    ListView
  } from 'antd-mobile'

const Item = List.Item;
const Brief = Item.Brief;

  class Home extends Component{

      componentDidMount(){
          this.props.getCustomer()     
      }
 
      render(){        
          const {total, list} = this.props.customer
          console.log("total1:"+total)
          console.log("list1:"+list)
          const  iconlist = [
            <Link to="/home/customeradd">新增用户</Link>,
            '客户列表','数量统计','用户管理'
          ];
            const data = iconlist.map(item => ({
              icon: (<Icon type={'check-circle'} />),
              text: item,
            }));
          return(
            <div>
             
              <NavBar>客户管理系统</NavBar> 
              <Grid data={data} columnNum={4} hasLine={false} activeStyle={false} />
              <div className='danger'>超时预警</div>
             
              <div className='list'>
              {list && list.map((item,index)=>(              
                <List key={index}>
                   <Item
                   arrow="horizontal"
                   multipleLine
                   onClick={() => {}}
                   >
                   客户名称:{item.name}                
                   <Brief>级别:{item.level}</Brief>  
                   <Brief>过期时间{item.expireTime}</Brief>                
                   </Item>
                 </List>        
               ) )   
              }
              </div>
            </div>
          )
      }
  }

  export default connect(
    state => ({customer: state.customer}),
    {getCustomer}
  )(Home)