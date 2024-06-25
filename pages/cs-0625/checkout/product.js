import ProductList from '@/components/checkout/product-list'
import styles from '@/components/checkout/cart.module.css'
import Navbar from '@/components/checkout/navbar'
import Link from 'next/link'

export default function Product() {
  return (
    <>
      <div className={styles['container']}>
        <Navbar />
        <h3>商品列表</h3>
        <hr />
        <Link href="/cs-0625/checkout/cart">連至 購物車</Link>
        <div className={styles['product']}>
          <ProductList />
        </div>
      </div>
    </>
  )
}
