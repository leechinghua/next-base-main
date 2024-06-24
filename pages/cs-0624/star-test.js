import { useState } from 'react'

import Star from '@/components/star'

export default function StarTest() {
  const [r1, setR1] = useState(4)
  const [r2, setR2] = useState(3)
  return (
    <>
      <h1>星星評分元件測試頁</h1>
      <hr />
      <h2>對照組</h2>
      <Star />
      <hr />
      <h2>測試組</h2>
      <Star
        initRating={r1}
        maxCount={6}
        onRatingChange={setR1}
        fillColor="#ff6600"
        emptyColor="#000000"
      />
      <Star
        initRating={r2}
        maxCount={10}
        onRatingChange={setR2}
        fillColor="#ff6600"
        emptyColor="#000000"
      />
    </>
  )
}
