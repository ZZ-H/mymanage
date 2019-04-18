import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCustomer } from '../../redux/actions'
import './saleDetails.css'


import {
    List, NavBar, Card, WhiteSpace, WingBlank

} from 'antd-mobile'


class SaleDetails extends Component {
  
    render() {
        return (
            <div>
                <NavBar>销售变更</NavBar>
                <Card.Body>
                    <div className='saleItem'>
                        <div className='customerName'>客户名称：</div>
                        <div className='content'>深圳市夜听文化传播有限公司</div>
                    </div>
                    <WhiteSpace />
                    <div className='saleItem'>
                        <div className='customerName'>等级：</div>
                        <div className='content'>中</div>
                    </div>
                    <WhiteSpace />
                    <div className='saleItem'>
                        <div className='customerName'>责任人：</div>
                        <div className='content'>江小白</div>
                    </div>
                    <WhiteSpace />
                    <div className='saleItem'>
                        <div className='customerName'>销售阶段：</div>
                        <div className='content'>面谈</div>
                    </div>
                    <WhiteSpace />
                    <div className='saleItem'>
                        <div className='customerName'>状态：</div>
                        <div className='content'>正常</div>
                    </div>
                    <WhiteSpace />
                    <div className='saleItem'>
                        <div className='customerName'>来源：</div>
                        <div className='content'>推荐</div>
                    </div>
                    <WhiteSpace />
                    <div className='saleItem'>
                        <div className='customerName'>创建日期：</div>
                        <div className='content'>2019-4-12</div>
                    </div>
                    <WhiteSpace />
                    <div className='saleItem'>
                        <div className='customerName2'>当前状态已停留：</div>
                        <div>0天</div>
                    </div>
                </Card.Body>
                <div className='changInfo'>变更信息</div>

                <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                    <Card>
                        <Card.Header
                            title="This is title"
                            title="This "
                            
                            extra={<span>this is extra</span>}
                        />
                        <Card.Body>
                            <div>This is content of `Card`</div>
                        </Card.Body>
                        <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
                    </Card>
                    <WhiteSpace size="lg" />
                </WingBlank>



            </div>
        )
    }
}

export default connect(
    state => ({ customer: state.customer }),
    { getCustomer }
)(SaleDetails)