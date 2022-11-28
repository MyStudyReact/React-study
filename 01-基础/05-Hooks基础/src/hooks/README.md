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

**需求描述：** 自定义hook函数，可以自动同步到本地LocalStorage
> const [message, setMessage] = useLocalStorage(key，defaultValue)
> 1. message可以通过自定义传入默认初始值
> 2. 每次修改message数据的时候 都会自动往本地同步一份
```JavaScript
import { useEffect, useState } from 'react'

export function useLocalStorage (key, defaultValue) {
  const [message, setMessage] = useState(defaultValue)
  // 每次只要message变化 就会自动同步到本地localStorage
  useEffect(() => {
    window.localStorage.setItem(key, message)
  }, [message, key])
  return [message, setMessage]
}