import { useReducer } from 'react'

// 準備工作1. state初始值
const initState = {
  id: 1,
  name: 'Nike',
  address: {
    country: {
      city: '台南市',
    },
  },
}

// 額外工作: 規劃action type(類型)
// https://redux.js.org/style-guide/#priority-c-rules-recommended
// 更動姓名: `user/changeName`
// 更動城市: `user/changeCity`

// 準備工作2. 撰寫reducer(純函式)
// action = { type, payload: { value:要更動的值 } }
const reducer = (state, action) => {
  switch (action.type) {
    case 'user/changeName':
      return {
        ...state,
        name: action.payload.value,
      }
    case 'user/changeCity':
      return {
        ...state,
        address: {
          ...state.address,
          country: {
            ...state.address.city,
            city: action.payload.value,
          },
        },
      }
    default:
      throw new Error()
  }
}

export default function UserUseReducer() {
  // 第3步: 宣告一組state, dispatch
  const [user, dispatch] = useReducer(reducer, initState)
  return (
    <>
      <h1>useReducer使用範例</h1>
      <p>Name: {user.name}</p>
      <p>City: {user.address.country.city}</p>

      <button
        onClick={() => {
          // 使用dispatch(發送)一個動作物件，來進行狀態變動
          dispatch({ type: 'user/changeName', payload: { value: 'Iris' } })
        }}
      >
        更改name為 Iris
      </button>
      <button
        onClick={() => {
          // 使用dispatch(發送)一個動作物件，來進行狀態變動
          dispatch({ type: 'user/changeCity', payload: { value: '高雄市' } })
        }}
      >
        更改city為 高雄市
      </button>
    </>
  )
}
