import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCustomer } from '../../redux/actions'
import '../../pages/customer/customerList.css'


import {
    List, NavBar, Tabs, SearchBar, Button, Card, WhiteSpace,Modal

} from 'antd-mobile'

const prompt = Modal.prompt;


class CustomerList extends Component {
    handlePeriodChange = () => {

    }

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
                <NavBar>客户列表</NavBar>
                <div className='searchContainer'>
                    <div className='searchBar_cl'>
                        <SearchBar placeholder="Search" maxLength={8} />
                    </div>
                    <div className='search_cl'>
                        <Button type="ghost" inline size="small" >搜索</Button>
                    </div>
                </div>
                <Tabs tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={6} />}></Tabs>
                <WhiteSpace size='lg' />
                <Card>
                    <Card.Header
                        title="This is title"
                        title="This "

                        extra={<span>this is extra</span>}
                    />
                    <Card.Body>
                        <div>This is content of `Card`</div>
                        {/* <Button type="ghost" inline size="small" onCLick='handlePeriodChange'>阶段变更</Button> */}
                        <Button onClick={() => prompt(
                            'Login',
                            'Please input login information',
                            (login, password) => console.log(`login: ${login}, password: ${password}`),
                            'login-password',
                            null,
                            ['Please input name', 'Please input password'],
                        )}
                        >login-password</Button>
                        <Button type="ghost" inline size="small" >状态变更</Button>
                        <Button type="ghost" inline size="small" >转移</Button>
                    </Card.Body>

                </Card>

                <Button onClick={() => prompt(
                    '更新状态信息',
                    '阶段变更',
                    (login, password) => console.log(`login: ${login}, password: ${password}`),
                    'login-password',
                    null,
                    ['Please input name', 'Please input password'],
                )}
                >更新状态信息</Button>

            </div>
        )
    }
}

export default connect(
    state => ({ customer: state.customer }),
    { getCustomer }
)(CustomerList)