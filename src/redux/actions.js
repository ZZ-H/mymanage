import {
    RECEIVE_CUSTOMER,
    RECEIVE_CUSTOMERLIST,
    RECEIVE_USERLIST,
    INITDATASOURCE
  } from './action-types'
  import {
    reqLogin,
    reqCustomer,
    reqCustomerList,
    reqUserList,
    reqListViewData   
  } from '../api/index'

  const receiveCustomer = (customer) => ({type:RECEIVE_CUSTOMER, data:customer});
  const receiveCustomerList = (customerList) => ({type:RECEIVE_CUSTOMERLIST, data:customerList})
  const receiveUserList = (user) => ({type:RECEIVE_USERLIST, data:user});
  const initDataSource = (List) => ({type:INITDATASOURCE, data:List});

  export const login = (user) => { 
    return async dispatch => {  
      const response = await reqLogin(user)
      const result = response.data
      console.log(result);
    }
  }

  export const getCustomer = () => {  
    return async dispatch => {  
      const response = await reqCustomer()
      const result = response.data
      if(result.code===0){
          dispatch(receiveCustomer(result.data))
      }
      
    }
  }

  export const getCustomerList = () => {
      return async dispatch => {
          const response = await reqCustomerList()
          const result = response.data
          console.log(result)
          if(result.code===0){
              dispatch(receiveCustomerList(result.data))
          }
      }
  }

export const getListViewData = (p) => {
  return async dispatch => {
    const response = await reqListViewData(p)
    const result = response.data
    if(result.code===0){
        dispatch(initDataSource(result.data.list))
    }
   
}
}

export const getUserList = () => {
  return async dispatch => {
    const response = await reqUserList()
    const result = response.data
    if(result.code===0){
        dispatch(receiveUserList(result.data))
    }
}
}