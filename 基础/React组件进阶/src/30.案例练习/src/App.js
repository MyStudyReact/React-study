import { Input, Space, Table, Popconfirm } from 'antd'
import axios from 'axios'
import React from 'react'
import './App.css'

// 1.找到对应的组件 把页面搭建起来
// 2.table渲染出来（发送请求(componentDidMount) 拿到数据 交给我们渲染的list(this.setState))
// 3.删除功能（点击哪个就用哪个 id 调用删除接口 重新拉去列表）
// 4.搜索功能（拿到关键词调用接口获取列表数据）
const { Search } = Input

class App extends React.Component {
  state = {
    list: [],
    columns: [
      {
        title: '任务编号',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: '任务名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '任务描述',
        dataIndex: 'des',
        key: 'des',
      },
      {
        title: '操作',
        dataIndex: 'do',
        key: 'do',
        render: (_, record) => (
          <Space size="middle">
            <Popconfirm title="确定要删除吗?"
              onConfirm={() => this.handleDelete(record.id)}>
              <a href="#">删除</a>
            </Popconfirm>
          </Space>
        ),
      },
    ]
  }

  // 搜索
  onSearch = async (value) => {
    const res = await axios.get('http://localhost:3001/data/?q=' + value)
    this.setState({
      list: res.data
    })
  };
  // 删除
  handleDelete = async (id) => {
    // 调用删除接口
    await axios.delete('http://localhost:3001/data/' + id)
    // 重新获取列表
    this.loadList()
  }

  // 加载列表
  loadList = async () => {
    // 需要另开一个终端 npm run mock-serve 即可
    const res = await axios.get('http://localhost:3001/data')
    this.setState({
      list: res.data
    })
  }
  componentDidMount () {
    this.loadList()
  }


  render () {
    return (
      <div className="container">
        {/* 搜索框 on打头的一般都是事件*/}
        {/* onSearch 事件在点击搜索/回车/清空时触发 value 当前输入框的值 */}
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={this.onSearch}
        />

        {/* table表格组件 依赖于两个必要数据 一个是定义列 一个是用来遍历渲染 */}
        <Table dataSource={this.state.list} columns={this.state.columns} />;
      </div>
    )
  }
}

export default App
