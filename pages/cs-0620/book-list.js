import { useState } from 'react'
import Image from 'next/image'

// 範例資料
import data from '@/data/books.json'

// 實心圖
import bookmarkIconFill from '@/assets/bookmark-fill.svg'
// 空心圖
import bookmarkIcon from '@/assets/bookmark.svg'

export default function BookList() {
  // 先擴充原本的書籍資料, 多一個代表是否有加入收藏的屬性fav
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
          {books.map((v, i) => {
            return (
              <tr key={v.isbn}>
                <td>{v.isbn}</td>
                <td>{v.title}</td>
                <td>{v.author}</td>
                <td>
                  <Image
                    onClick={() => {
                      handleToggleFav(v.isbn)
                    }}
                    src={v.fav ? bookmarkIconFill : bookmarkIcon}
                    alt=""
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
