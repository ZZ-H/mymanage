// import React, {Component} from 'react'
// import {connect} from 'react-redux'
// import {getCustomer} from '../../redux/actions'
// import '../../pages/dashBoard/dashBoard.css'
// import enUS from 'antd-mobile/lib/calendar/locale/en_US'
// import zhCN from 'antd-mobile/lib/calendar/locale/zh_CN'

// import {
//     List,NavBar,Switch, Calendar
   
//   } from 'antd-mobile'


//   class DashBoard extends Component{
//       render(){

//         renderBtn(zh, en, config = {}) {
//             config.locale = this.state.en ? enUS : zhCN;
//         }
        
//           return(
//               <div>
//                   <NavBar>客户统计</NavBar>
//                   <List className="calendar-list" style={{ backgroundColor: 'white' }}>
//                   {this.renderBtn('选择日期时间', 'Select DateTime', { type: 'one', pickTime: true })}
                  
//                   </List>
                
//               </div>
//           )
//       }
//   }

//   export default connect(
//     state => ({customer: state.customer}),
//     {getCustomer}
//   )(DashBoard)