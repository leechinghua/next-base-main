import React from 'react'

export default function JsxMap() {
  // ul-li呈現以下資料
  const aa = [1, 4, 9, 16]

  // 準備要渲染的陣列
  const ab = aa.map((v, i) => {
    return <li key={i}>{v}</li>
  })
  return (
    <>
      <h1>JSX中陣列map範例</h1>
      <hr />
      <ul>{ab}</ul>
      {/* 實作上不需要額外宣告一個ab，直接在jsx中寫map即可 */}
      <ul>
        {aa.map((v, i) => {
          return <li key={i}>{v}</li>
        })}
      </ul>
    </>
  )
}
