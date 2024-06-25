import { useState } from 'react'
import { useAuth } from '@/hooks/use-auth'

export default function LoginPanel() {
  // 專門提供給文字輸入框輸入綁定使用(可控controlled)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { login } = useAuth()

  return (
    <>
      <h2>登入面版</h2>
      <div>
        帳號:{' '}
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value)
          }}
        />
      </div>
      <div>
        密碼:{' '}
        <input
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
      </div>
      <button
        onClick={() => {
          login(username, password)
        }}
      >
        登入
      </button>
    </>
  )
}
