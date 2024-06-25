import { useState } from 'react'
import ProductList from '@/components/checkout/product-list'
import CartList from '@/components/checkout/cart-list'
import styles from '@/components/checkout/cart.module.css'
import { useCart } from '@/hooks/use-cart'
import Navbar from '@/components/checkout/navbar'
import Link from 'next/link'

// 測試用資料(多了一個qty屬性)

export default function Cart() {
  const { totalPrice, totalQty } = useCart()

  return (
    <>
      <div className={styles['container']}>
        <Navbar />
        <h3>購物車</h3>
        <hr />
        <Link href="/cs-0625/checkout/product">連至 商品</Link>
        <div className={styles['cart']}>
          <CartList />
        </div>
        <hr />
        <div>
          總數量:{totalQty} / 總金額: {totalPrice}
        </div>
      </div>
    </>
  )
}
