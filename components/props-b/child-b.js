import { useEffect, useState } from 'react'

export default function ChildB({ setDataFromChild }) {
  // 子女元件狀態(內部私有)
  const [cData, setCData] = useState('child-b data')

  // 注意，直接在這寫是個錯誤寫法:
  //
  // setDataFromChild(cData)
  //
  // 不可以直接寫在元件函式的主體，會有警告訊息或執行錯誤
  // 原因是setDataFromChild是setState，會造成re-render(重新渲染)
  // 對react元件來說具有副作用，需要在事件處理函式或useEffect中呼叫

  // 正確的第2種作法，元件第一次渲染後執行
  useEffect(() => {
    setDataFromChild(cData)
  }, [])

  return (
    <>
      <h3>ChildB</h3>
      <button
        onClick={() => {
          // 正確的第1種作法: 利用事件處函式執行
          setDataFromChild(cData)
        }}
      >
        送資料給子女A元件
      </button>
    </>
  )
}

