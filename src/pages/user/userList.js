import React, {Component} from 'react'
import {connect} from 'react-redux'
import { List } from 'antd-mobile'
import {getCustomer} from '../../redux/actions'
import Star from "../../pages/star/star"
import {
    NavBar,
    SearchBar,
  } from 'antd-mobile'

const Item = List.Item;
const Brief = Item.Brief;

  class Home extends Component{

      componentDidMount(){
          this.props.getCustomer()     
      }   
      render(){        
          const {total, list} = this.props.customer
          return(
            <div>
              <NavBar>用户管理</NavBar>  
              <Star star={4}/>
              <SearchBar placeholder="搜索客户名" />
              {list && list.map((item,index)=>(              
                <List key={index}>
                   <Item
                   arrow="horizontal"
                   thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
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
          )
      }
  }

  export default connect(
    state => ({customer: state.customer}),
    {getCustomer}
  )(Home)