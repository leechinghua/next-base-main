import React from 'react'

export default function JsxRender() {
  return (
    <>
      <h1>Jsx中各種值render(渲染)範例</h1>
      <hr />
      <h1>number</h1>
      {123}
      {1 - 1}
      {NaN}
      <hr />
      <h2>string</h2>
      hello
      {'    '}
      {'abc'}
      {`price=${100 - 1}`}
      <hr />
      <h2>boolean</h2>
      {/* 不會渲染呈現 */}
      {true}
      {false}
      <hr />
      <h2>null/undefined</h2>
      {/* 不會渲染呈現 */}
      {null}
      {undefined}
      <hr />
      <h2>array</h2>
      {/* 類似於array.join('') */}
      {[1, 2, 3]}
      {['hello', 'a', 'b']}
      {[<p key="1">1</p>, <p key="2">1</p>]}
      {/* 給識別的key */}
      <hr />
      <h2>object</h2>
      {/* 不能直接渲染呈現，會造成中斷錯誤，不是React Child */}
      {/* https://github.com/orgs/mfee-react/discussions/91 */}
      {/* {{ a: 1, b: 2 }} */}
      <hr />
      <h2>function</h2>
      {/* 不會直接渲染呈現，會有警告，不是React Child */}
      {/* https://github.com/orgs/mfee-react/discussions/91 */}
      {/* {() => {}} */}
    </>
  )
}
