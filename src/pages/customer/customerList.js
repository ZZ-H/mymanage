// import React, {Component} from 'react'
// import {connect} from 'react-redux'
// import { List } from 'antd-mobile'
// import {getCustomerList} from '../../redux/actions'
// import {
//     NavBar,
//     SearchBar,
//     Button
//   } from 'antd-mobile'

// const Item = List.Item;
// const Brief = Item.Brief;

//   class CustomerList extends Component{
//       state={
//           customername: '',
//           cusList: []
//       }
//       componentDidMount(){
//           this.props.getCustomerList()     
//       }   
//       handleChange = (name,val) => {
//           this.setState({
//               [name]:val
//           })
//           console.log(this.state.customername)
//       }
//       handelSubmit = () => {
//         const {list} = this.props.customerList
//         console.log("list:"+list)
//         const customername = this.state.customername;
//         console.log("customername:"+customername)
//         let clist = list.filter((item) => {
//             return item.name.indexOf(customername)!==-1
//         })
//         this.setState({cusList:clist})
       
//         console.log("cusList"+this.state.cusList)

//       }
//       phoneCall = () => {
        

//       render(){        
//         let {list} = this.props.customerList;
//         if(this.state.cusList&&this.state.cusList.length>0&&this.state.customername!==''){
//          list=this.state.cusList
//         }
//           return(
//             <div>
//               <NavBar>客户列表</NavBar>  
//               <SearchBar placeholder="搜索客户名" onChange={val => {this.handleChange('customername',val)}} onSubmit={this.handelSubmit}/>         
//               {list && list.map((item,index)=>(              
//                 <List key={index}>
//                    <Item
//                    arrow="horizontal"
//                    multipleLine
//                    onClick={() => {}}
//                    >
//                    客户名称:{item.name}
//                    <Brief>级别:{item.level}</Brief>  
//                    <Brief>过期时间{item.expireTime}</Brief>                
//                    </Item>
//                  </List>        
//                ) )   
//               }
//         <div onClick={this.phoneCall}>电话咨询</div>
//             </div>
//           )
//       }
//   }

//   export default connect(
//     state => ({customerList: state.customerList}),
//     {getCustomerList}
//   )(CustomerList)