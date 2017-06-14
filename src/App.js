import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import HeaderMenu from './modules/main/componet/HeaderMenu';
import LeftMenu from './modules/main/componet/LeftMenu';

import Home from './modules/home/index';
import OrderList from './modules/order/list/index';

import { Layout } from 'antd';
const { Header, Content, Sider } = Layout;

class App extends Component {

  render() {
    return (
      <Router>
        <Layout>
          <Header style={{
            'background': '#f6f6f6',
            'height': '55px',
            'lineHeight': '55px',
            'minWidth': '1200px',
            'paddingRight': '20px!important',
            'margin': 'auto',
            'textAlign': 'right!important',
            'color': '#666',
            'position': 'fixed!important',
            'zIndex': '100',
            'right': '0',
            'top': '0',
            'width': '100%',
            'padding': '0 24px 24px'
          }}>
            <HeaderMenu />
          </Header>
          <Layout>
            <Sider width={60} style={{ background: '#fff' }}>
              <div style={{
                'padding': '10px 10px',
                'zIndex': '999',
                'background': '#313a43',
                'position': 'fixed!important',
                'width': '60px',
                'height': '55px',
                'textAlign': 'center!important',
              }} >
              <Link to="/"><img src='https://pic.qianmi.com/ejz/images/elogo-2.png' alt='' /></Link>
              </div>
              <LeftMenu />
            </Sider>
            <Layout style={{ padding: '0 24px 24px', margin: '12px 0' }}>
              <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 600 }}>
                <Route exact path="/" component={Home} />
                <Route path="/order/list" component={OrderList} />
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </Router>
    );
  }


}


export default App;
