import { produce } from 'immer'

const initState = {
  items: [], // 加入購物車的物件陣列
  isEmpty: true,
  totalPrice: 0,
  totalQty: 0,
}

const item = {
  id: 0,
  name: '',
  qty: 0,
  price: 0,
  //...
}

export const reducer = (state, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case 'cart/decrease':
        draft.items = draft.items.map((v) => {
          if (v.id === action.payload.id) return { ...v, qty: v.qty - 1 }
          else return v
        })
        break
      case 'cart/increase':
        draft.items = draft.items.map((v) => {
          if (v.id === action.payload.id) return { ...v, qty: v.qty + 1 }
          else return v
        })
        break
      case 'cart/deleteItem':
        draft.items = draft.items.filter((v) => v.id !== action.payload.id)
        break
      case 'cart/addItem':
        draft.items.push(action.payload)
        break
      default:
        throw new Error()
    }
  })
