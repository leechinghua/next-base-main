import { useState } from 'react'

export default function RegisterForm() {
  // 狀態為物件，屬性對應到表單的欄位名稱
  const [user, setUser] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    agree: false, // checkbox 同意會員註冊條款
  })

  // 錯誤訊息狀態
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    agree: '', // 錯誤訊息用字串
  })

  // checkbox 呈現密碼用
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  // 多欄位共用事件函式
  const handleFieldChange = (e) => {
    // console.log(
    //   e.target.name,
    //   e.target.email,
    //   e.target.username,
    //   e.target.password,
    //   e.target.confirmPassword,
    //   e.target.agree
    // )
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    // 先阻擋form表單元素預設行為
    e.preventDefault()
    const newErrors = {
      name: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      agree: '',
    }
    if (!user.name) {
      newErrors.name = '請輸入有效姓名'
    }
    if (!user.email) {
      newErrors.email = '請輸入電子郵件'
    }
    if (!user.username) {
      newErrors.username = '請輸入帳號'
    }
    if (!user.password) {
      newErrors.password = '請輸入密碼'
    }
    if (!user.confirmPassword) {
      newErrors.confirmPassword = '請再次輸入密碼'
    }
    if (user.confirmPassword && user.confirmPassword !== user.password) {
      newErrors.confirmPassword = '請確認是否與密碼相同'
    }
    if (!user.agree) {
      newErrors.agree = '請勾選同意網站會員註冊條款'
    }
    setErrors(newErrors)
    const hasErrors = Object.values(newErrors).some((v) => v)
    if (hasErrors) {
      alert('檢查到錯誤')
      return
    }
    alert('送到伺服器')
  }

  return (
    <>
      <h1>註冊表單</h1>
      <form onSubmit={handleSubmit}>
        <label>
          姓名:{' '}
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleFieldChange}
          />
        </label>
        <br />
        <span className="error">{errors.name}</span>
        <br />
        <label>
          Email:{' '}
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleFieldChange}
          />
        </label>
        <br />
        <span className="error">{errors.email}</span>
        <br />
        <label>
          帳號:{' '}
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleFieldChange}
          />
        </label>
        <br />
        <span className="error">{errors.username}</span>
        <br />
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
        />{' '}
        顯示密碼
        <br />
        <span className="error">{errors.password}</span>
        <br />
        <label>
          確認密碼:{' '}
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={handleFieldChange}
          />
        </label>
        <input
          type="checkbox"
          checked={showConfirmPassword}
          onChange={(e) => {
            setShowConfirmPassword(!showConfirmPassword)
          }}
        />{' '}
        顯示密碼
        <br />
        <span className="error">{errors.confirmPassword}</span>
        <br />
        <label>
          <input
            type="checkbox"
            name="agree"
            checked={user.agree}
            onChange={handleFieldChange}
          />{' '}
          我同意網站會員註冊條款
        </label>
        <br />
        <span className="error">{errors.agree}</span>
        <br />
        <button type="submit">註冊</button>
        <button
          type="button"
          onClick={() => {
            setUser({
              name: '',
              email: '',
              username: '',
              password: '',
              confirmPassword: '',
              agree: '', // 錯誤訊息用字串
            }),
              setShowPassword(false),
              setShowConfirmPassword(false)
          }}
        >
          重置
        </button>
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
