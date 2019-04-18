import React, {Component} from 'react'
import { Router, Route, Link, Redirect,history } from 'react-router-dom'
import { Tabs, WhiteSpace } from 'antd-mobile';
import createmember from '../../assets/Create_member.png'
import kehuguanli from '../../assets/kehuguanli.png'
import kehuliebiao from '../../assets/kehuliebiao.png'
import shujutongji from '../../assets/shujutongji.png'
import './myIcon.css'

export default class MyIcon extends Component{
    // constructor(props) {
    //     super(props);
    //     console.log(props);
       
    // }
    navigateToMember = () =>{
        this.props.history.push('/customeradd')
    }
    navigateToList = () =>{
        this.props.history.push('/customerList')
    }
    navigateToData = () =>{
        this.props.history.push('/dashboard')
    }

    navigateGuanli = () =>{
        this.props.history.push('/usermanage')
    }
    render(){
        return(
            <div className='iconContainer'>
                <div className='iconItem' onClick={this.navigateToMember}>            
                  <img className='img' src={createmember}></img>
                  <div>新增用户</div>
                </div>
                <div className='iconItem' onClick={this.navigateToList}>
                  <img className='img' src={kehuliebiao}></img>
                  <div>客户列表</div>
                </div>
                <div className='iconItem' onClick={this.navigateToData}>
                  <img className='img' src={shujutongji}></img>
                  <div>数量统计</div>
                </div>
                <div className='iconItem' onClick={this.navigateGuanli}>
                  <img className='img' src={kehuguanli}></img>
                  <div>用户管理</div>
                </div>
            </div>

        )
    }

}