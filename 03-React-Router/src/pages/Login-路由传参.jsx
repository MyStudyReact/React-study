// 1.导入useNavigate
import { useNavigate } from 'react-router-dom'

function Login () {
  // 2.执行useNavigate,得到一个跳转函数
  const navigate = useNavigate()
  // 跳转关于页
  function goAbout () {
    // 3.调用我们的跳转函数，传入我们的目标路径
    // navigate('/about')

    // 加上replace 就不需要历史数据了
    // navigate('/about', { replace: true })

    //searchParams传参
    // navigate('/about?id=1001')

    //params传参
    navigate('/about/1001')
  }
  return (
    <div>
      Login
      <button style={{ margin: '0 10px' }} onClick={goAbout}>跳到关于</button>
    </div>
  )
}

export default Login