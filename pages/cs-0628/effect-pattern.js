import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function EffectPattern() {
  const [total, setTotal] = useState(0)
  // 樣式1: 沒有第二傳入參數。
  // 意義: 每次渲染(render)之後(after)，會再執行第一傳入參數函式其中程式碼
  // 使用情況: 一般很少用到，用於要作記錄或除錯，或是一些特殊專用勾子開發
  // useEffect(() => {
  //   console.log(
  //     '每次渲染(render)之後(after)，會再執行第一傳入參數函式其中程式碼'
  //   )
  // })

  // 樣式2: 第二傳入參數總是使用空陣列
  // 意義: 首次渲染(render)之後(after)，執行一次第一傳入參數函式其中程式碼，之後不會再執行
  // 使用情況: 近似於生命周期方法中的componentDidMount(didMount)。
  // 應用開發時，最常使用到的樣式，用於首次渲染後用fetch/ajax向伺服器獲取資料呈現在頁面上，或整合第三方JS應用
  // useEffect(() => {
  //   console.log(
  //     '首次渲染(render)之後(after)，執行一次第一傳入參數函式其中程式碼，之後不會再執行'
  //   )
  // }, [])
  // ^^ 保持空白陣列。代表它不與任何變數相依，相當於"只套用有加入第二參數的預設行為"

  // 樣式3: 第二傳入參數中有相依變數
  // 意義: 首次渲染(render)之後(after)，執行一次第一傳入參數函式其中程式碼。之後當相依變數有更動之後(after)，會再執行一次。
  // 使用情況: 第二常用樣式，近似生命周期方法中的 componentDidMount(didMount) + componentDidUpdate(didUpdate)
  // 狀態異步的解決方案之一。不同狀態間的連鎖變動(A->B->C)。不同資料要套用到同一元件。
  useEffect(() => {
    console.log(
      '首次渲染(render)之後(after)，執行一次第一傳入參數函式其中程式碼。之後當相依變數有更動之後(after)，會再執行一次。'
    )
  }, [total])
 // ^^^^^^^ total加入到相依變數陣列中，代表要監聽total狀態的更動(change)事件
  // 注意: 因useEffect與render有絕對關係，因此要能加入相依變數陣列中的變數，也要和render有關
  // 所以只有props和state(或是兩者衍生的變數)加入相依變數陣列才有作用
  // 決定相依變數更動的是使用"參照相等性(Referential Equality)"原則，`===`比較或使用`Object.is`

  // 樣式4: 第一傳入參數函式中的回傳值(另個函式)
  // 意義: 元件被移出真實DOM之前(before)會執行一次
  // 使用情況: 近似於componentWillUnmount(或稱為cleanup)通常搭配樣式2使用，作某些元件移出前釋放記憶體或呼叫反函式(計數器/事件監聽...)
  useEffect(() => {
    return () => {
      console.log('元件被移出真實DOM之前會執行一次')
    }
  }, [])
  return (
    <>
      <h1>Effect應用4種樣式範例</h1>
      <hr />
      <Link href="/">連至首頁</Link>
      <h1>{total}</h1>
      <button
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +1
      </button>
    </>
  )
}
