import { useState } from 'react'
// 範例資料
import data from '@/data/books.json'
import Item from './item'

export default function List() {
  // 先擴充原本的書籍資料，多一個代表是否有加入收藏的屬性fav(布林值，預設是false)
  const initState = data.map((v, i) => {
    return { ...v, fav: false }
  })

  // 宣告狀態
  const [books, setBooks] = useState(initState)

  // 處理fav切換布林值的函式
  const handleToggleFav = (bookIsbn) => {
    const nextBooks = books.map((v, i) => {
      // 如果符合(isbn是傳入的bookIsbn)，切換(反相)其中屬性fav的布林值物件
      if (v.isbn === bookIsbn) return { ...v, fav: !v.fav }
      // 否則回傳原本物件
      else return v
    })

    setBooks(nextBooks)
  }

  return (
    <>
      <h1>書籍清單</h1>
      <table>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>title</th>
            <th>author</th>
            <th>加入收藏</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => {
            const { isbn, title, author, fav } = book
            return (
              <Item
                // map裡才要加key值，使用isbn
                key={isbn}
                isbn={isbn}
                title={title}
                author={author}
                fav={fav}
                handleToggleFav={handleToggleFav}
              />
            )
          })}
        </tbody>
      </table>
    </>
  )
}
