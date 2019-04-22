import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCustomer } from '../../redux/actions'


import {
    List, NavBar, WhiteSpace, TextareaItem, Tabs

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
                <Tabs tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={6} />}>
                    {/* <List renderHeader={() => 'Customize to focus'}> */}
                    <List>
                        <TextareaItem
                            title="当前责任人"
                            placeholder="当前责任人"
                            data-seed="logId"
                            ref={el => this.autoFocusInst = el}
                            autoHeight
                        />
                        <TextareaItem
                            title="客户来源"
                            placeholder="客户来源"
                            data-seed="logId"
                            autoHeight
                            ref={el => this.customFocusInst = el}
                        />
                        <TextareaItem
                            title="客户等级"
                            placeholder="客户等级"
                            data-seed="logId"
                            ref={el => this.autoFocusInst = el}
                            autoHeight
                        />
                        <TextareaItem
                            title="成立时间"
                            placeholder="成立时间"
                            data-seed="logId"
                            autoHeight
                            ref={el => this.customFocusInst = el}
                        />

                    </List>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                        Content of second tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                        Content of third tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                        Content of first tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                        Content of second tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                        Content of third tab
                    </div>
                </Tabs>


            </div>


        )
    }
}

export default connect(
    state => ({ customer: state.customer }),
    { getCustomer }
)(CustomerDetails)