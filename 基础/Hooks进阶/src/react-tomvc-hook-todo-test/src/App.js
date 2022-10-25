import { Input, Table, Space, Popconfirm } from 'antd'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

const { Search } = Input


function App () {
  const [dataList, setDataList] = useState([])

  useEffect(() => {
    getList()
  }, [])

  // 获取列表
  async function getList () {
    const res = await axios.get('http://localhost:3001/data')
    setDataList(res.data)
  }

  // 删除
  async function confirmDeletet (id) {
    await axios.delete('http://localhost:3001/data/' + id)
    getList()
  }


  // 搜索
  async function onSearch (value) {
    const res = await axios.get('http://localhost:3001/data/?q=' + value)
    setDataList(res.data)
  }


  const columns = [
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
      render: (text, record) => (
        <Space size="middle">
          <Popconfirm title="确定要删除吗?"
            onConfirm={() => confirmDeletet(record.id)}>
            <a href="#">删除</a>
          </Popconfirm>
        </Space>
      ),
    },
  ]

  return (
    <div className="container">
      <div className="search-box">
        <Search
          placeholder="请输入关键词"
          allowClear
          enterButton="搜索"
          size="large"
          onSearch={onSearch}
        />
      </div>
      <Table bordered
        dataSource={dataList}
        columns={columns}
        rowKey={(record) => record.id}
        pagination={false} />
    </div>
  )
}

export default App
