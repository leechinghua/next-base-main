import { useRef } from 'react'

export default function InputRef() {
  // 1. 初始值為`null`，要對應表單元素的API，例如`getElementById`獲取元素參照時，沒得到時會回傳`null`
  // 宣告後 inputRef 相當於 `{ current: null }` 物件
  const inputRef = useRef(null)

  return (
    <>
      <h2>input-text使用ref(不可控)</h2>
      {/* 2. 這裡要定義ref值對應 */}
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          // 3. react在背後得到dom元件實體參照後，會掛入inputRef.current屬性
          alert(inputRef.current.value)
        }}
      >
        獲得值
      </button>
      <button
        onClick={() => {
          inputRef.current.focus()
        }}
      >
        聚焦(focus)
      </button>
      <button
        onClick={() => {
          inputRef.current.blur()
        }}
      >
        失焦(blur)
      </button>
    </>
  )
}
