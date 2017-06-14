import React, { Component } from 'react';
import { Carousel, Collapse, Row, Col } from 'antd';
import 'whatwg-fetch';
import Immutable from 'immutable';

const Panel = Collapse.Panel;

function callback(key) {
    console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;


console.log("ddddddd===")


fetch('http://localhost:8080/user/getUserInfo', {
  credentials: 'include'
}).then(function(response) {
    response.json().then((res) => {
          console.log("jsonData====" + Immutable.fromJS(res))
        })

    //let jsonData = res.json();
  //console.log("jsonData====" + jsonData)
});


class Home extends Component {
    render() {
        return (
            <div>
                <Carousel autoplay effect='scrollx' dots='true' easing='linear' >
                    <div><img style={{ width: '100%', height: '90px', 'backgroundSize': '100%' }} src='https://pic.qianmi.com/ejz/images/banner.jpg' alt=''/></div>
                    <div><img style={{ width: '100%', height: '90px', 'backgroundSize': '100%' }} src='https://pic.qianmi.com/ejz/images/banner.jpg' alt=''/></div>
                    <div><img style={{ width: '100%', height: '90px', 'backgroundSize': '100%' }} src='https://pic.qianmi.com/ejz/images/banner.jpg' alt=''/></div>
                    <div><img style={{ width: '100%', height: '90px', 'backgroundSize': '100%' }} src='https://pic.qianmi.com/ejz/images/banner.jpg' alt=''/></div>
                </Carousel>
                <Row gutter={16} style={{ 'marginBottom': '20px' }}>
                    <Col span={24}>
                        <Collapse defaultActiveKey={['1']} onChange={callback}>
                            <Panel header="盈利状况" key="1">
                                <p>{text}</p>
                            </Panel>
                        </Collapse>
                    </Col>
                </Row>
                <Row gutter={16} style={{ 'marginBottom': '20px' }}>
                    <Col span={12}>
                        <Collapse defaultActiveKey={['1']} onChange={callback}>
                            <Panel header="快捷操作" key="1">
                                <p>{text}</p>
                            </Panel>
                        </Collapse>
                    </Col>
                    <Col span={12}>
                        <Collapse defaultActiveKey={['1']} onChange={callback}>
                            <Panel header="经营概况" key="1">
                                <p>{text}</p>
                            </Panel>
                        </Collapse>
                    </Col>
                </Row>
                <Row gutter={16} style={{ 'marginBottom': '20px' }}>
                    <Col span={12}>
                        <Collapse defaultActiveKey={['1']} onChange={callback}>
                            <Panel header="客户经理" key="1">
                                <p>{text}</p>
                            </Panel>
                        </Collapse>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Home;