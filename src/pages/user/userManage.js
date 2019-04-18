import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List } from 'antd-mobile'
import { getUserList } from '../../redux/actions'
import './userManage.css'

import {
  NavBar,
  SearchBar,
  Button
} from 'antd-mobile'

const Item = List.Item;
const Brief = Item.Brief;

class UserManage extends Component {

  componentDidMount() {
    this.props.getUserList()
    console.log(this.props.UserList);
  }
  render() {
    const { total, list } = this.props.UserList
    console.log(list)
    return (
      <div>
        <NavBar>用户管理</NavBar>
        <div className='headContainer1'>
          <div className='name'>姓名</div>
          <div className='searchBar'>
            <SearchBar placeholder="Search" maxLength={8} />
          </div>
          <div className='search'>
            <Button type="ghost" inline size="small" >修改</Button>
          </div>    
        </div>
        {list && list.map((item,index) => (
              <div className='cardContainer1' key={index}>
              <img className='img1'></img>
              <div className='content1'>
                <div>姓名：{item.name}</div>
                <div>昵称：{item.belongUserName}</div>
                <div>手机：{item.level}</div>
              </div>
              <div className='update'>
                <Button type="ghost" inline size="small" >修改</Button>
              </div>
            </div>
            )
          )}
       

      </div>
    )
  }
}

export default connect(
  state => ({ UserList: state.UserList }),
  { getUserList }
)(UserManage)