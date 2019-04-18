import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCustomer } from '../../redux/actions'
import MyTabs from '../../components/myTabs'

import {
    List, NavBar,WhiteSpace

} from 'antd-mobile'


class CustomerDetails extends Component {
    
    render() {
        const tabs = [
            { title: '基本' },
            { title: '资质' },
            { title: '财务' },
            { title: '其它收入' },
            { title: '联系人' },
            { title: '变更历史' },
          ];
        
        return (
            <div>
                <NavBar>客户管理系统</NavBar>
                <MyTabs tabs={tabs}></MyTabs>
               
            </div>
                
         
        )
    }
}

export default connect(
    state => ({ customer: state.customer }),
    { getCustomer }
)(CustomerDetails)