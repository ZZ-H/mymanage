import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCustomer } from '../../redux/actions'
import '../../pages/customer/customerList.css'
import Select from 'react-select'


import {
    List, NavBar, Tabs, SearchBar, Button, Card, WhiteSpace, Modal, WingBlank, Accordion

} from 'antd-mobile'

const prompt = Modal.prompt;

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];



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

                <div style={{ marginTop: 10, marginBottom: 10 }}>
                <div className='accordionContainer'>
                  
                    <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
                        <Accordion.Panel header="Title 1">
                            <List className="my-list">
                                <List.Item>content 1</List.Item>
                                <List.Item>content 2</List.Item>
                                <List.Item>content 3</List.Item>
                            </List>
                        </Accordion.Panel>       
                    </Accordion>
                    
                    <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
                        <Accordion.Panel header="Title 1">
                            <List className="my-list">
                                <List.Item>content 1</List.Item>
                                <List.Item>content 2</List.Item>
                                <List.Item>content 3</List.Item>
                            </List>
                        </Accordion.Panel>       
                    </Accordion>
                    <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
                        <Accordion.Panel header="Title 1">
                            <List className="my-list">
                                <List.Item>content 1</List.Item>
                                <List.Item>content 2</List.Item>
                                <List.Item>content 3</List.Item>
                            </List>
                        </Accordion.Panel>       
                    </Accordion>
                    <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
                        <Accordion.Panel header="Title 1">
                            <List className="my-list">
                                <List.Item>content 1</List.Item>
                                <List.Item>content 2</List.Item>
                                <List.Item>content 3</List.Item>
                            </List>
                        </Accordion.Panel>       
                    </Accordion>
                    
                    <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
                        <Accordion.Panel header="Title 1">
                            <List className="my-list">
                                <List.Item>content 1</List.Item>
                                <List.Item>content 2</List.Item>
                                <List.Item>content 3</List.Item>
                            </List>
                        </Accordion.Panel>       
                    </Accordion>
                    <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
                        <Accordion.Panel header="Title 1">
                            <List className="my-list">
                                <List.Item>content 1</List.Item>
                                <List.Item>content 2</List.Item>
                                <List.Item>content 3</List.Item>
                            </List>
                        </Accordion.Panel>       
                    </Accordion>
                    
                </div>
                </div>
                {/* <div style={{ display: 'flex' }}>
                    <div>责任人</div>
                    <select>
                        <option>--</option>
                        <option>aaa</option>
                        <option>bbb</option>
                    </select>
                </div> */}

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
                        <Button type='ghost' inline size="small" onClick={() => prompt(
                            '更新状态信息',
                            '阶段变更',

                            // [{ text: '线索', onPress: () => console.log('线索') },
                            // { text: '沟通', onPress: () => console.log('沟通') },
                            // { text: '面谈', onPress: () => console.log('面谈') },
                            // { text: '签约', onPress: () => console.log('签约') },
                            // { text: '合作', onPress: () => console.log('合作') }],

                            () => {
                                return (
                                    <Button type="ghost" inline size="small" >线索</Button>
                                )
                            },

                            // (login, password) => console.log(`login: ${login}, password: ${password}`),
                            'login-password',
                        )}
                        >更新状态信息</Button>
                        <Button type="ghost" inline size="small" >状态变更</Button>
                        <Button type="ghost" inline size="small" >转移</Button>
                    </Card.Body>

                </Card>



            </div>
        )
    }
}

export default connect(
    state => ({ customer: state.customer }),
    { getCustomer }
)(CustomerList)