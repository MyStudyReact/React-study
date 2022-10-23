import { useState, useEffect } from "react"

export function useLocalStorage (key, defaultValue) {
  const [message, setMessage] = useState(defaultValue)

  // 每次只要message 就会自动同步到本地localStorage
  useEffect(() => {
    window.localStorage.setItem(key, message)
  }, [key, message])

  return [message, setMessage]
}