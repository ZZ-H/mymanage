import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCustomer } from '../../redux/actions'
import MyTabs from '../../components/myTabs'

import {
    List, NavBar,WhiteSpace

} from 'antd-mobile'


class CustomerDetails extends Component {
    
    render() {
        
        return (
            <div>
                <NavBar>客户管理系统</NavBar>
                <MyTabs></MyTabs>
               
            </div>
                
         
        )
    }
}

export default connect(
    state => ({ customer: state.customer }),
    { getCustomer }
)(CustomerDetails)