import React from 'react'
import { Tabs, WhiteSpace } from 'antd-mobile';

export default class MyTabs extends React.Component {

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
        <WhiteSpace />
        <Tabs tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={6} />}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
            Content of first tab
        </div>
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
        <WhiteSpace />
      </div>
    );
  }
}

