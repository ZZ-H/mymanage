import {combineReducers} from 'redux'
import {ListView} from 'antd-mobile'
import {
    AUTH_SUCCESS,
    RECEIVE_CUSTOMER,
    RECEIVE_CUSTOMERLIST,
    INITDATASOURCE
  } from './action-types'

const initUser = {
    username: '', // 用户名
    type: '', // 用户类型 dashen/laoban
    msg: '', // 错误提示信息
    redirectTo: '' // 需要自动重定向的路由路径
  }

  function user(state=initUser, action) {
    switch (action.type) {
      case AUTH_SUCCESS: // data是user
        return {...action.data}
      default:
        return state
    }
  }

const initCustomer = {

}
function customer(state=initCustomer, action) {
    switch (action.type) {
      case RECEIVE_CUSTOMER: // data是user
        return {...action.data}
      case RECEIVE_CUSTOMERLIST:
        return {...action.type}
      default:
        return state
    }
  }

const initCustomerList = {

} 

function customerList(state=initCustomerList, action) {
    switch (action.type) {
      case RECEIVE_CUSTOMERLIST:
        return {...action.data}
      default:
        return state
    }
  }

  //长列表
const initListData = []



export const ListViewData = (state = initListData,action) => {
  switch(action.type){
      case INITDATASOURCE:
      return  action.data

    default: 
      return state
  }
}


export default combineReducers({
    user,
    customer,
    customerList,
    ListViewData

   
  })