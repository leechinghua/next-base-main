import React from 'react'
import styles from './cart.module.css'
import { useCart } from '@/hooks/use-cart-reducer'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function CartList() {
  const { items, handleDecrease, handleIncrease, handleRemove } = useCart()

  // 改用MySwal取代Swal
  const MySwal = withReactContent(Swal)

  const notifyAndRemove = (productName = '', productId = 0) => {
    MySwal.fire({
      title: '你確定嗎?',
      text: '你將無法回復這個操作!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: '取消',
      confirmButtonText: '確定刪除!',
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire({
          title: '已刪除!',
          text: productName + ' 已從購物車中刪除',
          icon: 'success',
        })

        // 作刪除的動作
        handleRemove(productId)
      }
    })
  }

  return (
    <>
      <ul className={styles['list']}>
        {items.map((v, i) => {
          return (
            <li key={v.id} className={styles['item']}>
              <div className={styles['w-400']}>{v.name}</div>
              <div>{v.price}</div>
              <div>
                <button
                  onClick={() => {
                    handleIncrease(v.id)
                  }}
                >
                  +
                </button>
                <span>{v.qty}</span>
                <button
                  onClick={() => {
                    handleDecrease(v.id)
                  }}
                >
                  -
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    // 改為跳出對話盒，確認後才會刪除
                    notifyAndRemove(v.name, v.id)
                    // handleRemove(v.id)
                  }}
                >
                  移除
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}
