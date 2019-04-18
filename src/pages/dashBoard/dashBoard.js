import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getCustomer} from '../../redux/actions'

import {
    List,NavBar
   
  } from 'antd-mobile'


  class DashBoard extends Component{
      render(){
        
          return(
              <div>
                  <NavBar>客户统计</NavBar>
                
              </div>
          )
      }
  }

  export default connect(
    state => ({customer: state.customer}),
    {getCustomer}
  )(DashBoard)