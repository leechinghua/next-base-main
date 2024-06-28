import { useState, useEffect } from 'react'
import Link from 'next/link'

// 模擬後端資料來源https://my-json-server.typicode.com/eyesofkids/json-fake-data/products
export default function List() {
  // 注意1: 初始值至少要空白陣列。
  // 注意2: 再應用程式執行過程中，一定要保持狀態的資料類型一致(務必一定要是陣列)
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const url =
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/products/'

    // 使用try-catch語句
    try {
      const res = await fetch(url)
      const data = await res.json()
      console.log(data)
      // 設定到狀態中 ===> 進入update階段，觸發重新渲染(re-render)，呈現資料
      // 確定資料是陣列資料類型才設定到狀態中(最基本的保護)
      if (Array.isArray(data)) {
        setProducts(data)
      }
    } catch (e) {
      console.error(e)
    }
  }

  // 樣式2 didMount
  // 首次渲染(render)之後(after)，執行一次第一傳入參數函式其中程式碼，之後不會再執行
  useEffect(() => {
    getProducts()
  }, [])
  return (
    <>
      <h1>商品列表頁</h1>
      <ul>
        {products.map((v, i) => {
          return (
            <li key={v.id}>
              <Link href={`/cs-0628/product/${v.id}`}>{v.name}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
