import { useState } from 'react'
import ChildA from './child-a'
import ChildB from './child-b'

export default function Parent() {
  const [pData, setPData] = useState('parent data')
  const [dataFromChild, setDataFormChild] = useState('')
  return (
    <>
      <h2>Parent</h2>
      <p>來自子女B的資料: {dataFromChild}</p>
      {/* P -> C */}
      {/* <ChildA pData={pData} /> */}
      {/* C -> P專用的傳送資料的狀態設定函式 */}
      <ChildB setDataFormChild={setDataFormChild} />
    </>
  )
}
