import React from 'react'
import { Layout, Menu, Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Search } = Input;


export default function Navigation() {
    return (
        <div>
        <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
            <Space direction="vertical">
            <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            
            />
            </Space>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">Content</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>,
        </div>
    )
}
