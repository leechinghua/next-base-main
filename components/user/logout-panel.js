import { useAuth } from '@/hooks/use-auth'

export default function LogoutPanel() {
  const { logout } = useAuth()

  return (
    <>
      <h2>登出面版</h2>
      <button
        onClick={() => {
          logout()
        }}
      >
        登出
      </button>
    </>
  )
}
