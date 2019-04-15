

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Router, Route, Link, Redirect } from 'react-router-dom'
import { getListViewData } from '../../redux/actions'
import { ListView, NavBar, Grid, Icon } from 'antd-mobile';
import './home.css'
import Jiantou from '../../assets/right.png'


class Home extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => {
        return row1 !== row2
      }

    });

    this.state = {
      dataSource: dataSource,
      datalist: [],
      isLoading: true,

    };
  }

  componentDidMount() {
    const parmas = {
      startPage: 1,
      pageSize: 5
    }
    this.props.getListViewData(parmas);
    const data2 = this.props.ListViewData;
    console.log(data2);
    this.setState({
      datalist: data2,
      dataSource: this.state.dataSource.cloneWithRows(data2),
      isLoading: false,
    });

    // this.getData();


  }

  componentWillReceiveProps(nextProps, nextState) {
    //debugger;
    if (nextProps.ListViewData !== this.props.ListViewData) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.ListViewData),
        isLoading: false
      });
    }

  }

  onEndReached = (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }

    //this.getData();
    // simulate initial Ajax
    const parmas = {
      startPage: 1,
      pageSize: 5
    }
    this.props.getListViewData(parmas);
    const data1 = this.props.ListViewData;
    let data_new = []
    if (data1) {

      data1.map((item, index) => {
        item.key = index
        data_new.push(item)
      })
    }
    console.log(data1)
    const { datalist, dataSource } = this.state
    let data = datalist.concat(data_new)
    console.log(data)
    this.setState({
      datalist: data,
      dataSource: dataSource.cloneWithRows(data),
      isLoading: false
    })
    console.log(dataSource)

  }

  handleClick = () => {
    this.props.history.push('/home/customerDetails')
    console.log("/home/customerDetails")

  }
  handleClickPeriod = (e) => {
    e.stopPropagation();
    this.props.history.push('/saledetails')
    console.log("/saledetails")
  }

  render() {
    const { datalist } = this.state
    const iconlist = [
      <Link to="/home/customeradd">新增用户</Link>,
      '客户列表', '数量统计', '用户管理'
    ];
    const gridData = iconlist.map(item => ({
      icon: (<Icon type={'check-circle'} />),
      text: item,
    }));
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          // backgroundColor: '#F5F5F9',
          margin: '0 15px',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        }}
      />
    );

    const row = (rowData, sectionID, rowID) => {
      return (
        <div className='cardContainer' key={rowID} style={{ padding: '0 15px' }} onClick={this.handleClick}>
          <div className='headLine'>
            <div className='headLineItem'>{rowData.name}</div>
            <div className='headLineItem1' onClick={(e)=>this.handleClickPeriod(e)}>面谈</div>
            {rowData.level&&<div className='headLineItem2'>超时</div>}
          </div>

          <div>
            <div className='content' style={{ lineHeight: 1 }}>
              <div style={{ marginBottom: '8px', fontWeight: 'bold', flex:6}}>责任人：{rowData.belongUserName}</div>
              <div style={{ marginBottom: '8px', fontWeight: 'bold',flex:4}}>级别：{rowData.level}</div>  
              <img className='imageRight' src={Jiantou} alt="icon" onClick={this.handleClick}></img>     
            </div>

          </div>
          <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>过期时间：{rowData.expireTime}</div>
        </div>
      );
    };
    return (
      <div>
        <div className='headContainer'>
          <NavBar>客户管理系统</NavBar>
          <Grid data={gridData} columnNum={4} hasLine={false} activeStyle={false} />
          <div className='danger'>超时预警</div>
          <div className="gab"></div>
        </div>
        <div style={{ paddingTop: '185px' }}>
          <ListView
            ref={el => this.lv = el}
            dataSource={this.state.dataSource}
            renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
              {this.state.isLoading ? 'Loading...' : 'Loaded'}
            </div>)}
            renderRow={row}
            renderSeparator={separator}
            className="am-list"
            pageSize={20}
            useBodyScroll
            onScroll={() => { console.log('scroll'); }}
            scrollRenderAheadDistance={500}
            onEndReached={this.onEndReached}
            onEndReachedThreshold={20}
          />
        </div>
      </div>
    );

  }
}

export default connect(
  state => ({ ListViewData: state.ListViewData }),
  { getListViewData }
)(Home)