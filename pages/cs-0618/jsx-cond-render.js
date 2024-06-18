import { useState } from 'react'

export default function JsxCondRender() {
  const [total, setTotal] = useState(0)

  return (
    <>
      <h1>JSX中條件式渲染(conditional render)</h1>
      <hr />
      <h1>{total}</h1>
      <button
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +1
      </button>
      <hr />
      {/* if表達式語法(&&運算子)，因為使用的是falsy判斷，造成不精確，0或NaN一樣會呈現 */}
      {total && <p>目前的total值是{total}</p>}
      {/* 強制轉換前面的判斷式為布林值 */}
      {Boolean(total) && <p>目前的total值是{total}</p>}
      {/* 改用比較運算子，作精確運算 */}
      {!!total && <p>目前的total值是{total}</p>}
      {/* 改用三元運算子 */}
      {total ? <p>目前的total值是{total}</p> : ''}
    </>
  )
}
