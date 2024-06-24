import React from 'react'

export default function ChildA({ dataFromChild }) {
  return (
    <>
      <h3>ChildA</h3>
      <p>來自子女B的資料: {dataFromChild}</p>
    </>
  )
}
