import React, {Component} from 'react'
import { Tabs, WhiteSpace } from 'antd-mobile';
import createmember from '../../assets/Create_member.png'
import kehuguanli from '../../assets/kehuguanli.png'
import kehuliebiao from '../../assets/kehuliebiao.png'
import shujutongji from '../../assets/shujutongji.png'
import './myIcon.css'

export default class MyIcon extends Component{
    render(){
        return(
            <div className='iconContainer'>
                <div className='iconItem'>
                  <img className='img' src={createmember}></img>
                  <div>新增用户</div>
                </div>
                <div className='iconItem'>
                  <img className='img' src={kehuliebiao}></img>
                  <div>客户列表</div>
                </div>
                <div className='iconItem'>
                  <img className='img' src={shujutongji}></img>
                  <div>数量统计</div>
                </div>
                <div className='iconItem'>
                  <img className='img' src={kehuguanli}></img>
                  <div>用户管理</div>
                </div>
            </div>

        )
    }

}