import { useState } from 'react'
// 導入.module.css檔案
import styles from './star.module.css'

export default function Star({
  maxCount = 5, // 最多可評的分數(幾個星星)
  initRating = 0, // 初始評分(一開始點亮的星星數量)
  onRatingChange = () => {}, // 點按回傳評分用的函式
  fillColor = 'gold',
  emptyColor = 'gray',
}) {
  // 記錄點按時的評分，一開始是0分代表沒有評分
  const [rating, setRating] = useState(initRating)
  //滑鼠游標懸停(hover)的評分，一開始是0分代表沒有評分
  const [hoverRating, setHoverRating] = useState(0)

  return (
    <>
      <div>
        {Array(maxCount)
          .fill(1)
          .map((v, i) => {
            // 每個星星圖示按鈕的分數，相當於索引+1
            const score = i + 1

            return (
              <button
                // 從初次渲染到應用程式執行過程中，都不會有新增、刪除、修改、排序…的情況
                // 才能使用index(索引)當key
                key={i}
                className={styles.starBtn}
                onClick={() => {
                  // 點按後設定分數
                  setRating(score)
                }}
                onMouseEnter={() => {
                  // 滑鼠游標進入設定分數
                  setHoverRating(score)
                }}
                onMouseLeave={() => {
                  // 滑鼠游標離開設定回初始0分
                  setHoverRating(0)
                }}
              >
                <span
                  style={{
                    '--fill-color': fillColor,
                    '--empty-color': emptyColor,
                  }}
                  // 判斷星星是否要點亮。如果這個星星的分數(score)小於等於目前的選中的評分(rating)狀態，或是滑鼠游標懸停(hover)的評分，則套用亮起樣式
                  className={
                    score <= rating || score <= hoverRating
                      ? styles.on
                      : styles.off
                  }
                  // style={{
                  //   color:
                  //     score <= rating || score <= hoverRating
                  //       ? fillColor
                  //       : emptyColor,
                  // }}
                >
                  &#9733;
                </span>
              </button>
            )
          })}
      </div>
      {/* <style jsx>
        {`
          .on {
            color: ${fillColor};
          }
          .off {
            color: ${emptyColor};
          }
        `}
      </style> */}
    </>
  )
}
