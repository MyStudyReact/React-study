## 自定义hook
**需求描述**：自定义一个hook函数，实现获取滚动距离Y
> const [y] = useWindowScroll()
```JavaScript
import { useState } from "react"

export function useWindowScroll () {
  const [y, setY] = useState(0)
  window.addEventListener('scroll', () => {
    const h = document.documentElement.scrollTop
    setY(h)
  })
  return [y]
}
```