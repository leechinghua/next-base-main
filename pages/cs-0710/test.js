import React from 'react'
import { reducer } from '@/hooks/reducer'

export default function Test() {
  const state = {
    items: [], // 加入購物車的物件陣列
    isEmpty: true,
    totalPrice: 0,
    totalQty: 0,
  }

  const nextState = reducer(state, {
    type: 'cart/addItem',
    payload: {
      id: 1,
      name: 'abc',
      qty: 1,
      price: 100,
    },
  })

  console.log(nextState)

  const nextState2 = reducer(nextState, {
    type: 'cart/increase',
    payload: {
      id: 1,
    },
  })

  console.log(nextState2)

  const nextState3 = reducer(nextState2, {
    type: 'cart/decrease',
    payload: {
      id: 1,
    },
  })

  console.log(nextState3)

  const nextState4 = reducer(nextState3, {
    type: 'cart/deleteItem',
    payload: {
      id: 1,
    },
  })

  console.log(nextState4)

  return (
    <>
      <h1>Test</h1>
    </>
  )
}
