import { createContext, useContext, useState } from 'react'
import { useRouter } from 'next/router'

// 1. 建立與導出它
// defaultValue是在套用context失敗時才會出現的值，可以使用有意義的預設值，或使用null(目的是為了除錯)。
const AuthContext = createContext(null)

// 2. 建立一個Context Provider元件
// 目的: 將所有要共享狀態集中統一管理，提供給上層元件(_app.js)使用
// props.children屬性，代表包覆在Provider中所有的子女元件
export function AuthProvider({ children }) {
  // 建立路由器
  const router = useRouter()

  // 會員使用的認証&授權狀態
  const [auth, setAuth] = useState({
    isAuth: false,
    userData: {
      id: 0,
      username: '',
      email: '',
      name: '',
    },
  })

  // 一般命名: login, logout, register
  // 現代另外命名: signIn, signOut, signUp
  const login = (username, password) => {
    if (username === 'ron' && password === '11111') {
      setAuth({
        isAuth: true,
        userData: {
          id: 2,
          username: 'ron',
          email: 'ron@test.com',
          name: 'Ron',
        },
      })

      alert('登入成功')
      // 導向個人資料頁
      router.push('/cs-0625/user/profile')
    } else {
      alert('帳號密碼錯誤')
    }
  }

  const logout = () => {
    setAuth({
      isAuth: false,
      userData: {
        id: 0,
        username: '',
        email: '',
        name: '',
      },
    })
  }

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
// 3. 建立一個包裝useContext與對應context的專用函式
// 目的: 讓消費者們(consumers)方便呼叫使用共享狀態，提高可閱讀性
export const useAuth = () => useContext(AuthContext)
