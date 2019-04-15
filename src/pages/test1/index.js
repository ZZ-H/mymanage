/* eslint no-dupe-keys: 0 */
import { ListView } from 'antd-mobile';
import React from 'react'
import {connect} from 'react-redux' 
import {getListViewData} from '../../redux/actions'
import './index.css'
import Jiantou from '../../assets/right.png'


const data = [{"id":25,"name":"this is a test","level":1,"belongUserName":"test","expireTime":"2019-03-28","expireStatus":3},{"id":26,"name":"1111","level":1,"belongUserName":"刘路test","expireTime":"2019-03-28","expireStatus":3},{"id":27,"name":"ddddddddd","level":2,"belongUserName":"小洛不黄","expireTime":"2019-03-29","expireStatus":1},{"id":28,"name":"新测试1","level":2,"belongUserName":"小洛不黄","expireTime":"2019-03-29","expireStatus":1},{"id":32,"name":"testV1.3.7","level":2,"belongUserName":"罗宇成","expireTime":"2019-03-29","expireStatus":1},{"id":33,"name":"testV1.3.7的","level":null,"belongUserName":"刘路test","expireTime":"2019-04-01","expireStatus":1},{"id":7,"name":"深圳市夜听文化传播有限公司","level":1,"belongUserName":"jjj","expireTime":"2019-04-01","expireStatus":1},{"id":35,"name":"test1111","level":null,"belongUserName":"小洛不黄","expireTime":"2019-04-01","expireStatus":1},{"id":31,"name":"深圳市液体固体气体三体有限责任公司","level":null,"belongUserName":"小洛不黄","expireTime":"2019-04-08","expireStatus":1},{"id":29,"name":"刘路测试","level":2,"belongUserName":"刘路test","expireTime":"2019-04-08","expireStatus":1}]

const NUM_ROWS = 20;
let pageIndex = 0;

function genData(pIndex = 0) {
  const dataBlob = {};
  for (let i = 0; i < NUM_ROWS; i++) {
    const ii = (pIndex * NUM_ROWS) + i;
    dataBlob[`${ii}`] = `row - ${ii}`;
  }
  return dataBlob;
}
class Demo extends React.Component {
  // constructor(props) {
  //   super(props);
  //   const dataSource = new ListView.DataSource({
  //     rowHasChanged: (row1, row2) => row1 !== row2,
  //   });
    
  //   this.state = {
  //     dataSource,
  //     isLoading: true,
  //   };
  //   // const {list} = this.props.ListViewData
  //   // if(list){
  //   //   this.state = {
  //   //     dataSource: dataSource.cloneWithRows(list),
  //   //     isLoading: false
  //   // }
    
  // };
  
  // componentDidMount(){
  //   //this.props.getCustomer() ;
  //   // const {total, list} = this.props.customer
  //   // // var list =  
  //    this.rData = data;
  //     this.setState({
  //        dataSource: this.state.dataSource.cloneWithRows(this.rData),
  //       isLoading: false,
  //     });   
  // }

  //   // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.dataSource !== this.props.dataSource) {
      
  //     this.setState({
  //       dataSource: this.state.dataSource.cloneWithRows(nextProps.dataSource),
  //     });
  //   }
  // }

  // onEndReached = (event) => {
  //   console.log('reach end', event);
  //   if (this.state.isLoading && !this.state.hasMore) {
  //     return;
  //   }
    
  //   // this.setState({ isLoading: true });
  //   // setTimeout(() => {
  //   //   // this.rData = { ...this.rData, ...genData(++pageIndex) };
  //   //   this.setState({
  //   //     dataSource: this.state.dataSource.cloneWithRows(this.rData),
  //   //     isLoading: false,
  //   //   });
  //   // }, 1000);
  // }

  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
      isLoading: true,
    };
  }

  componentDidMount() {
    // you can scroll to the specified position
    // setTimeout(() => this.lv.scrollTo(0, 120), 800);

    // simulate initial Ajax
    //setTimeout(() => {
      this.rData = data
      // this.props.getListViewData(1);
      // this.rData = this.props.ListViewData;
      console.log(this.rData);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    //}, 600);
  }

  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.dataSource !== this.props.dataSource) {
  //     this.setState({
  //       dataSource: this.state.dataSource.cloneWithRows(nextProps.dataSource),
  //     });
  //   }
  // }

  onEndReached = (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    console.log('reach end', event);
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.rData = { ...this.rData, ...genData(++pageIndex) };
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 1000);
  }


  render() {
    const list=data
    // const {total, list} = this.props.ListViewData


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
    
    if(!list){
      return <div>11</div>;
    }
    // this.setState({
    //       // dataSource: this.state.dataSource.cloneWithRows(list),
    //     });
    let index = list.length - 1;
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = list.length - 1;
      }
      const obj = list[index--];
      return (
        <div className='container' key={rowID} >
          <div className='container3'>
            <div>{obj.name}</div>
          </div>
           
          <div style={{ display: '-webkit-box', display: 'flex',  padding: '15px 0' }}>
         
            {/* <img style={{ height: '64px', marginRight: '15px' }} src={obj.img} alt="" /> */}
            <div className='container2'>
              {/* <div style={{marginBottom: '8px', fontWeight: 'bold' }}>{obj.belongUserName}</div>
              <div><span style={{ fontSize: '30px', color: '#FF6E27' }}>{rowID}</span>¥</div> */}

              <div className='item2'>{obj.belongUserName}</div>
              <div className='item'>  {rowID}¥</div>
              {/* <label style={{ marginBottom: '8px', fontWeight: 'bold'}}>{obj.belongUserName}</label>
              <label><span style={{ fontSize: '30px', color: '#FF6E27' }}>{rowID}</span>¥</label> */}
            </div>
            </div>
        
        </div>
      );
    };
    return (
      <ListView
        ref={el => this.lv = el}
        dataSource={this.state.dataSource}
        renderHeader={() => <span>header</span>}
        renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
          {this.state.isLoading ? 'Loading...' : 'Loaded'}
        </div>)}
        renderRow={row}
        renderSeparator={separator}
        className="am-list"
        pageSize={4}
        useBodyScroll
        onScroll={() => { console.log('scroll'); }}
        scrollRenderAheadDistance={500}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
      />
    );
  }
}

export default connect(
  state => ({ListViewData: state.ListViewData}),
  {getListViewData}
)(Demo)
