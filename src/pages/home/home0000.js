
import { ListView } from 'antd-mobile';
import React from 'react'
import {connect} from 'react-redux' 
import {getListViewData} from '../../redux/actions'


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

class Home extends React.Component {
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
  
    setTimeout(() => {
        this.rData = genData();
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(this.rData),
          isLoading: false,
        });
      }, 600)};
 

  onEndReached = (event) => {
  
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    console.log('reach end', event);
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.rData = { ...this.rData, ...genData(++pageIndex) };
      this.setState({
        dataSource: this.props.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 1000);
  }

  render() {
    console.log('render:',JSON.stringify(this.props.customer))
    const data = this.props.customer;
    console.log('renderdata:',data);
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        }}
      />
    );
    let index = this.props.customer.length - 1;
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = this.props.customer.length - 1;
      }
      const obj = this.props.customer[index--];
      return (
        <div key={rowID} style={{ padding: '0 15px' }}>
          <div
            style={{
              lineHeight: '50px',
              color: '#888',
              fontSize: 18,
              borderBottom: '1px solid #F6F6F6',
            }}
          >{obj.name}</div>
          <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
            {/* <img style={{ height: '64px', marginRight: '15px' }} src={obj.img} alt="" /> */}
            <div style={{ lineHeight: 1 }}>
              <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{obj.level}</div>
              <div><span style={{ fontSize: '30px', color: '#FF6E27' }}>{rowID}</span>¥</div>
            </div>
          </div>
        </div>
      );
    };
    return (
      <ListView
        ref={el => this.lv = el}
       // dataSource={this.state.dataSource}
        dataSource={data}
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
    state => ({customer: state.ListViewData}),
    {getListViewData}
  )(Home)
