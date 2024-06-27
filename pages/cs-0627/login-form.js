import { useState } from 'react'

export default function LoginForm() {
  // 狀態使用物件類型，物件中的屬性名稱對應到欄位的名稱(name屬性)
  const [user, setUser] = useState({
    username: '',
    password: '',
  })
  // 紀錄欄位錯誤訊息
  const [errors, setErrors] = useState({
    username: '',
    password: '',
  })
  // 顯示密碼使用
  const [showPassword, setShowPassword] = useState(false)
  // 多欄位共用事件處理函式
  const handleFieldChange = (e) => {
    // console.log(e.target.name, e.target.type, e.target.value)
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    // 先阻擋form表單元素預設行為
    e.preventDefault()
    // 表單檢查--- START ---
    // 建立一個新的錯誤訊息物件
    const newErrors = { username: '', password: '' }
    // 開始檢查
    // if (user.username === '') {
    // if(user.username) 檢查如果有填寫
    // if(!user.username) 檢查如果沒填的話…
    if (!user.username) {
      newErrors.username = '帳號為必填'
    }
    if (!user.password) {
      newErrors.password = '密碼為必填'
    }

    // 檢查完成後設定到錯誤狀態
    setErrors(newErrors)
    const hasErrors = Object.values(newErrors).some((v) => v)
    if (hasErrors) {
      alert('有檢查到錯誤')
      return // 在函式內作流程控制用，執行到這會跳出函式執行
    }
    // 檢查都沒問題才會到這裡執行
    alert('送到伺服器')
  }
  return (
    <>
      <h1>會員登入表單</h1>
      <hr />
      {/* html5內建表單檢查 一定加入form可以有require跟密碼長度提醒等等 */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            帳號:{' '}
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleFieldChange}
              required
            />
          </label>
        </div>
        <div className="error">{errors.username}</div>
        <div>
          <label>
            密碼:{' '}
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={user.password}
              onChange={handleFieldChange}
              required
              maxLength={10}
              minLength={5}
            />
          </label>
          <input
            type="checkbox"
            checked={showPassword}
            onChange={() => {
              setShowPassword(!showPassword)
            }}
          />
          顯示密碼
        </div>
        <div className="error">{errors.password}</div>
        <div>
          <button type="submit">登入</button>
        </div>
      </form>
      <style jsx>
        {`
          .error {
            color: red;
            font-size: 12px;
            height: 16px;
          }
        `}
      </style>
    </>
  )
}
