import { useSearchParams, useParams } from 'react-router-dom'

function About () {
  // 1.searchParams传参
  /**
   * params 是一个对象，对象里有一个get方法
   * 专门用来获取对应的参数
   * 把参数的名称作为get方法的实参传过来
   */
  // const [params] = useSearchParams()

  // const id = params.get('id')
  // const name = params.get('name')

  //2.params传参
  const params = useParams()

  return (
    // 1.searchParams传参
    // <div>about -- 得到的参数为:{id}{name}</div>


    //2.params传参
    <div>about -- 得到的参数为:{params.id}</div>
  )
}

export default About