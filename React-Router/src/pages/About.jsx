import { useSearchParams } from 'react-router-dom'

function About () {
  /**
   * params 是一个对象，对象里有一个get方法
   * 专门用来获取对应的参数
   * 把参数的名称作为get方法的实参传过来
   */
  const [params] = useSearchParams()

  const id = params.get('id')
  const name = params.get('name')
  return (
    <div>about -- 得到的参数为:{id}{name}</div>
  )
}

export default About