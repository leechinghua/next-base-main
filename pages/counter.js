import { useState } from 'react'

export default function Counter() {
  const [total, setTotal] = useState(1)
  // 只有setTotal可改變常數total
  return (
    <>
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
