import { useSearchParams } from 'react-router-dom'

function publishedArticles () {
  const [params] = useSearchParams()
  const id = params.get('id')
  return (
    <>
      publishedArticles
      <h1>传过来的参数：{id}</h1>
    </>
  )
}

export default publishedArticles