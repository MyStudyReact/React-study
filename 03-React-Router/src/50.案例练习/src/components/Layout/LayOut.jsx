import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Breadcrumb, Layout, Menu } from 'antd'
import React, { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import './style/style.less'


const { Header, Content, Footer, Sider } = Layout
function getItem (label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  }
}


const LayOut = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const [collapsed, setCollapsed] = useState(false)
  const [items, setItems] = useState([])
  const [curLabel, setCurLabel] = useState('')

  useEffect(() => {
    const items = [
      getItem('数据概览', '/', <PieChartOutlined />),
      getItem('内容管理', '/contentManage', <DesktopOutlined />),
      getItem('发布文章', '/publishedArticles', <UserOutlined />),
    ]
    setItems(items)

    setCurLabel(items[0].label)
  }, [])
  const onClick = (e) => {
    navigate(e.key)
    items.forEach(item => {
      if (item.key === e.key) {
        setCurLabel(item.label)
      }
    })
  }
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        {/* // >=4.20.0 可用，推荐的写法 */}
        <Menu theme="dark" defaultSelectedKeys={pathname} selectedKeys={pathname} mode="inline" items={items} onClick={onClick} />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>{curLabel}</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>

        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}
export default LayOut