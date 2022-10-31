import { Button } from 'antd'
import { SendOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function contentManage () {
  const [loadings, setLoadings] = useState(false)

  const navigate = useNavigate()

  const enterLoading = () => {
    setLoadings(true)
    setTimeout(() => {
      setLoadings(false)
      navigate('/publishedArticles?id=100')
    }, 6000)
  }
  return (
    <>
      <Button
        type="primary"
        icon={<SendOutlined />}
        loading={loadings}
        onClick={enterLoading}
      >
        Click me!
      </Button>
    </>
  )
}

export default contentManage