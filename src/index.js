import React from 'react';
import ReactDOM from 'react-dom';
import store from '././redux/store'
import {HashRouter, Switch, Route,BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import Login from './pages/login/login';
import Home from './pages/home/home';
import CustomerList from './pages/customer/customerList';
import CustomerAdd from './pages/customer/customerAdd';
import customerDetails from './pages/customer/customerDetails';
import SaleDetails from './pages/saleDetails/saleDetails'
import UserManage from './pages/user/userManage'
import DashBoard from './pages/dashBoard/dashBoard'


import  Test1 from './pages/test1';
import  Testui from './pages/testui';



ReactDOM.render((
    <Provider store={store}>
      <HashRouter>
        <Switch>
        <Route path="/home/customerDetails" component={customerDetails}/>
        <Route path="/saleDetails" component={SaleDetails}/>
        <Route path="/usermanage" component={UserManage}/>
        <Route path="/customeradd" component={CustomerAdd}/>
        <Route path="/customerlist" component={CustomerList}/>
        <Route path="/dashboard" component={DashBoard}/>
        {/* <Route path="/myicon" component={MyIcon}/> */}

        <Route path="/login" component={Login}/>
        <Route path="/test" component={Testui}/>
        <Route path="/test1" component={Test1}/>
        <Route path="/" component={Home}></Route>
        </Switch>
      </HashRouter>
    </Provider>
  ), document.getElementById('root'))