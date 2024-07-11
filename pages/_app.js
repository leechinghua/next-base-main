import { useEffect } from 'react'
import { AuthProvider } from '@/hooks/use-auth'
import { CartProvider } from '@/hooks/use-cart'
import '@/styles/globals.scss'
import DefaultLayout from '@/components/layout/default-layout'

export default function MyApp({ Component, pageProps }) {
  // 使用自訂在頁面層級的版面(layout)
  const getLayout =
    Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>)

  useEffect(() => {
    // 要document物件出現後才能導入 bootstrap的js函式庫
    import('bootstrap/dist/js/bootstrap')
  }, [])

  return (
    <CartProvider>
      <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>
    </CartProvider>
  )
}
