import { useState } from 'react'

const initialProducts = [
  {
    id: 0,
    name: '小熊餅乾',
    count: 1,
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    count: 5,
  },
  {
    id: 2,
    name: '小老板海苔',
    count: 2,
  },
]

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts)

  const handleIncrease = (productId) => {
    const nextProducts = products.map((v, i) => {
      // 如果符合(id相當於傳入的productId)的物件，遞增其中屬性count的數字
      if (v.id === productId) return { ...v, count: v.count + 1 }
      // 否則回傳原本物件
      else return v
    })

    setProducts(nextProducts)
  }

  const handleDecrease = (productId) => {
    const nextProducts = products.map((v, i) => {
      // 如果符合(id相當於傳入的productId)的物件，遞減其中屬性count的數字
      if (v.id === productId) return { ...v, count: v.count - 1 }
      // 否則回傳原本物件
      else return v
    })

    setProducts(nextProducts)
  }

  const handleRemove = (productId) => {
    const nextProducts = products.filter((v, i) => {
      return v.id !== productId
    })

    setProducts(nextProducts)
  }

  // react官網解答
  //https://react.dev/learn/updating-arrays-in-state#challenges
  function handleDecreaseClick(productId) {
    // 一定要用let，因為下面要重新指定值一次
    let nextProducts = products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count - 1,
        }
      } else {
        return product
      }
    })

    // 過濾出商品數量大於0
    nextProducts = nextProducts.filter((p) => p.count > 0)

    setProducts(nextProducts)
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              handleIncrease(product.id)
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              // 先計算(預測)按此按鈕後，商品數量會變為多少
              const nextProductCount = product.count - 1

              // 如果按了之後 商品數量<=0，則作移除
              if (nextProductCount <= 0) {
                if (confirm('你確定要移除此商品嗎？')) {
                  handleRemove(product.id)
                }
              } else {
                // 否則作遞減
                handleDecrease(product.id)
              }
            }}
          >
            –
          </button>
        </li>
      ))}
    </ul>
  )
}
