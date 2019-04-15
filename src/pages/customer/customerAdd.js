import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getCustomer} from '../../redux/actions'

import {
    List,
   
  } from 'antd-mobile'


  class CustomerAdd extends Component{
      render(){
          return(
              <div>xinzengkehu</div>
          )
      }
  }

  export default connect(
    state => ({customer: state.customer}),
    {getCustomer}
  )(CustomerAdd)