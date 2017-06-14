import React from 'react';
import { Menu } from 'antd';

class HeaderMenu extends React.Component {
  render() {
    return (
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '55px',float: 'right','background': '#f6f6f6' }}>
       <Menu.Item key="1">消息</Menu.Item>
       <Menu.Item key="2">人员登记</Menu.Item>
       <Menu.Item key="3">快速登录通道</Menu.Item>
       <Menu.Item key="4">新增</Menu.Item>
       <Menu.Item key="5">用户名</Menu.Item>
       <Menu.Item key="6">设置</Menu.Item>
      </Menu>
    );
  }
}

export default HeaderMenu;