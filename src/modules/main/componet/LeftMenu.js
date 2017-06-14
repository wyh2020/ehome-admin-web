import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class LeftMenu extends React.Component {

    render() {
        return (
            <Menu style={{ width: 60 }} mode="vertical">
                <SubMenu key="sub1" title={<span>业务</span>}>
                    <MenuItemGroup title="保洁">
                        <Menu.Item key="1"><Link to="/order/list">保洁订单</Link></Menu.Item>
                        <Menu.Item key="2">保洁评价</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="家政">
                        <Menu.Item key="3">家政订单</Menu.Item>
                        <Menu.Item key="4">家政面试单</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="其他">
                        <Menu.Item key="3">保险订单</Menu.Item>
                        <Menu.Item key="4">调度订单</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
                <SubMenu key="sub2" title={<span>雇主</span>}>
                    <Menu.Item key="5">雇主管理</Menu.Item>
                    <Menu.Item key="6">会员卡</Menu.Item>
                    <Menu.Item key="7">储值卡</Menu.Item>
                    <Menu.Item key="8">套餐卡</Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" title={<span>阿姨</span>}>
                    <Menu.Item key="9">阿姨管理</Menu.Item>
                    <Menu.Item key="10">阿姨级别</Menu.Item>
                    <Menu.Item key="11">阿姨工具</Menu.Item>
                </SubMenu>
            </Menu>
        );
    }
}

export default LeftMenu;