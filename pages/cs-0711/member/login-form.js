import { useState } from 'react'

export default function LoginForm() {
  // 狀態使用物件類型，物件中的屬性名稱對應到欄位的名稱(name屬性)
  const [user, setUser] = useState({
    username: '',
    password: '',
  })

  // 記錄欄位錯誤訊息用
  const [errors, setErrors] = useState({
    username: '',
    password: '',
  })

  // 顯示密碼使用
  const [showPassword, setShowPassword] = useState(false)

  // 多欄位共用事件處理函式
  const handleFieldChange = (e) => {
    // 可以用e.target來觀察或檢測是哪個欄位觸發事件
    // console.log(e.target.name, e.target.type, e.target.value)

    // ES6中的特性: Computed Property Names(計算得出來的屬性名稱)
    // [e.target.name]: e.target.value
    // ^^^^^^^^^^^^^^^ 這裡可以動態代入變數值或表達式，計算出物件屬性名稱(字串)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  // 表單送出事件處理函式
  const handleSubmit = async (e) => {
    // 先阻擋form表單元件的預設送出行為
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

    if (user.password.length < 5 || user.password.length > 10) {
      newErrors.password ||= '密碼最少6個字元至多10字元'
    }

    // 檢查完成後設定到錯誤狀態
    setErrors(newErrors)

    // newErrors物件中如果有屬性值不是空白字串時，代表有錯誤發生
    const hasErrors = Object.values(newErrors).some((v) => v)

    // 如果有錯誤發生，停止接下來的送到伺服器程式碼
    if (hasErrors) {
      alert('有檢查到錯誤')
      return // 在函式內作流程控制用，執行到這會跳出函式執行
    }
    // 表單檢查--- END ---

    // 檢查都沒問題才會到這裡執行
    try {
      const url = 'http://localhost:3005/api/members/login'
      const res = await fetch(url, {
        credentials: 'include', // 設定cookie或是存取隱私資料時要加這個參數
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })

      const resData = await res.json()
      console.log(resData)

      alert('送到伺服器去')
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <h1>會員登入表單</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        {/* 使用form表單元素都應給每個欄位name屬性值 */}
        <div>
          <label>
            帳號:{' '}
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleFieldChange}
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
          {/* 在form表單元素中的button建議加上類型type，沒寫或預設是submit，點按都會觸發提交submit事件 */}
          <button type="submit">登入</button>
          <button type="button">登出</button>
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
