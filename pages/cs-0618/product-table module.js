// 導入時就自動轉為JS資料格式
import products from '@/data/Product.json'
import Image from 'next/image'

export default function ProductTable() {
  console.log(products)
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>圖片</th>
            <th>名稱</th>
            <th>價格</th>
          </tr>
        </thead>
        <tbody>
          {products.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>
                  <Image
                    src={`/pics/${v.photos.split(',')[0]}`}
                    alt={v.name}
                    width={150}
                    height={100}
                  />
                </td>
                <td>{v.name}</td>
                <td>{v.price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <style jsx>
      {
        
      }
      </style>
    </>
  )
}
