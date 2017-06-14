import React, { Component } from 'react';
import { Table, Tabs, Form, Row, Col, Input, Button, Icon, Select, DatePicker } from 'antd';
import moment from 'moment';

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const Option = Select.Option;
const { MonthPicker, RangePicker } = DatePicker;

const columns = [
    { title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
    { title: 'Age', width: 100, dataIndex: 'age', key: 'age', fixed: 'left' },
    { title: 'Column 1', dataIndex: 'address', key: '1', width: 150 },
    { title: 'Column 2', dataIndex: 'address', key: '2', width: 150 },
    { title: 'Column 3', dataIndex: 'address', key: '3', width: 150 },
    { title: 'Column 4', dataIndex: 'address', key: '4', width: 150 },
    { title: 'Column 5', dataIndex: 'address', key: '5', width: 150 },
    { title: 'Column 6', dataIndex: 'address', key: '6', width: 150 },
    { title: 'Column 7', dataIndex: 'address', key: '7', width: 150 },
    { title: 'Column 8', dataIndex: 'address', key: '8' },
    {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () => <a href="javascript:void(0)">action</a>,
    },
];

const data = [];
for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        name: `Edrward ${i}`,
        age: 32,
        address: `London Park no. ${i}`,
    });
}

class OrderList extends Component {

    state = {
        expand: false,
    };

    handleSearch = (e) => {
        e.preventDefault();
        console.log('Received values of form: ');
    }

    handleReset = () => {
        this.props.form.resetFields();
    }

    toggle = () => {
        const { expand } = this.state;
        this.setState({ expand: !expand });
    }


    handleChange = (value) => {
        console.log(`selected ${value}`);
    }

    onChange = (date, dateString) => {
        console.log(date, dateString);
    }

    range = (start, end) => {
        const result = [];
        for (let i = start; i < end; i++) {
            result.push(i);
        }
        return result;
    }

    disabledDate = (current) => {
        // Can not select days before today and today
        return current && current.valueOf() < Date.now();
    }

    disabledDateTime = () => {
        return {
            disabledHours: () => this.range(0, 24).splice(4, 20),
            disabledMinutes: () => this.range(30, 60),
            disabledSeconds: () => [55, 56],
        };
    }

    disabledRangeTime = (_, type) => {
        if (type === 'start') {
            return {
                disabledHours: () => this.range(0, 60).splice(4, 20),
                disabledMinutes: () => this.range(30, 60),
                disabledSeconds: () => [55, 56],
            };
        }
        return {
            disabledHours: () => this.range(0, 60).splice(20, 4),
            disabledMinutes: () => this.range(0, 31),
            disabledSeconds: () => [55, 56],
        };
    }


    render() {
        return (
            <div>
                <div>
                    <Tabs>
                        <TabPane tab="Tab 1" key="1">
                            {this._renderSearchBar()}
                            {this._renderTable()}
                        </TabPane>
                        <TabPane tab="Tab 2" key="2">
                            {this._renderSearchBar()}
                            {this._renderTable()}
                        </TabPane>
                        <TabPane tab="Tab 3" key="3">
                            {this._renderSearchBar()}
                            {this._renderTable()}
                        </TabPane>
                    </Tabs>
                </div>

            </div>
        )
    }




    _renderSearchBar = () => {
        return (
            <Form layout='inline' className="ant-advanced-search-form" onSubmit={this.handleSearch}>
                <Row gutter={40}>
                    <Col span={24}>
                        <FormItem>
                            <Input placeholder="雇主姓名/手机号" />
                        </FormItem>
                        <FormItem>
                            <Select defaultValue="选择保洁类型" style={{ width: 120 }} onChange={this.handleChange}>
                                <Option value="临时保洁">临时保洁</Option>
                                <Option value="深度保洁">深度保洁</Option>
                                <Option value="其他保洁">其他保洁</Option>
                                <Option value="公司保洁">公司保洁</Option>
                            </Select>
                        </FormItem>
                        <FormItem>
                            <RangePicker size='larger'
                                ranges={{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }}
                                onChange={this.onChange}
                            />
                        </FormItem>
                        <FormItem style={{ float: 'right', marginLeft: 8 }}>
                            <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.handleSearch}>
                                搜索 <Icon type={this.state.expand ? 'up' : 'down'} onClick={this.toggle} />
                            </a>
                        </FormItem>
                    </Col>
                </Row>
                <Row gutter={40} style={{ display: this.state.expand ? 'block' : 'none' }}>
                    <Col span={24}>
                        <FormItem>
                            <Input placeholder="订单编号" />
                        </FormItem>
                        <FormItem>
                            <Input placeholder="阿姨姓名" />
                        </FormItem>
                        <FormItem>
                            <RangePicker size='larger'
                                ranges={{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }}
                                onChange={this.onChange}
                            />
                        </FormItem>
                    </Col>
                </Row>
                <Row gutter={40} style={{ display: this.state.expand ? 'block' : 'none' }}>
                    <Col span={24}>
                        <FormItem>
                            <Input placeholder="订单编号" />
                        </FormItem>
                        <FormItem>
                            <Input placeholder="订单编号" />
                        </FormItem>
                        <FormItem>
                            <Input placeholder="订单编号" />
                        </FormItem>
                        <FormItem>
                            <Input placeholder="服务地址" />
                        </FormItem>
                    </Col>
                </Row>
                <Row gutter={40} style={{ display: this.state.expand ? 'block' : 'none' }}>
                    <Col span={24}>
                        <FormItem>
                            <Select defaultValue="选择订单来源" style={{ width: 120 }} onChange={this.handleChange}>
                                <Option value="网站">网站</Option>
                                <Option value="微信">微信</Option>
                                <Option value="App">App</Option>
                                <Option value="测试">测试</Option>
                            </Select>
                        </FormItem>
                        <FormItem>
                            <Input placeholder="创建人" />
                        </FormItem>
                        <FormItem>
                            <Select defaultValue="选择处理门店" style={{ width: 120 }} onChange={this.handleChange}>
                                <Option value="雨花店">雨花店</Option>
                                <Option value="玄武店">玄武店</Option>
                                <Option value="鼓楼店">鼓楼店</Option>
                                <Option value="明发广场店">明发广场店</Option>
                            </Select>
                        </FormItem>
                        <FormItem>
                            <Select defaultValue="选择处理人" style={{ width: 120 }} onChange={this.handleChange}>
                                <Option value="阿汪">阿汪</Option>
                                <Option value="超级亮">超级亮</Option>
                                <Option value="小九">小九</Option>
                                <Option value="老王">老王</Option>
                            </Select>
                        </FormItem>
                    </Col>
                </Row>
            </Form>
        );
    }


    _renderTable = () => {
        return (
            <Table columns={columns} dataSource={data} scroll={{ x: 1500, y: 300 }} />
        );
    }

}

export default OrderList;