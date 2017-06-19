import React from 'react';
import Immutable from 'immutable';
import { Menu } from 'antd';
import 'whatwg-fetch';


class HeaderMenu extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
    }
  }

  componentDidMount() {
    let that = this;
    // fetch('http://localhost:8080/user/getUserInfo', {
    //   credentials: 'include'
    // }).then(function(response) {
    //   response.json().then((res) => {
    //     let jsonData = Immutable.fromJS(res);
    //     that.setState(
    //       {
    //         name: jsonData.get("name")
    //       }
    //     );
    //   })
    // });
  }

  render() {
    return (
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '55px',float: 'right','background': '#f6f6f6' }}>
       <Menu.Item key="1">消息</Menu.Item>
       <Menu.Item key="2">人员登记</Menu.Item>
       <Menu.Item key="3">快速登录通道</Menu.Item>
       <Menu.Item key="4">新增</Menu.Item>
       <Menu.Item key="5">{this.state.name || '无名氏'}</Menu.Item>
       <Menu.Item key="6">设置</Menu.Item>
      </Menu>
    );
  }
}

export default HeaderMenu;