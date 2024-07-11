import { useState, useEffect } from 'react'

export default function CustomerList() {
  const [customers, setCustomers] = useState([])
  const getCustomer = async () => {
    const url = 'http://localhost:3005/api/welcome'

    // 使用try-catch語句
    try {
      const res = await fetch(url)
      const resData = await res.json()

      // 設定到狀態中 ===> 進入update階段，觸發重新渲染(re-render)，呈現資料
      // 確定資料是陣列資料類型才設定到狀態中(最基本的保護)
      if (resData.status === 'success') {
        if (Array.isArray(resData.data.customers)) {
          setCustomers(resData.data.customers)
        }
      }
    } catch (e) {
      console.error(e)
    }
  }
  useEffect(() => {
    getCustomer()
  }, [])
  return (
    <>
      <h1>顧客列表頁</h1>
      <ul>
        {customers.map((v, i) => {
          return <li key={v.id}>{v.name}</li>
        })}
      </ul>
    </>
  )
}
