import { useState } from 'react'

export default function MyRadioButtonGroup() {
  // 選項按鈕群組(radio-button-group)
  const petOptions = ['狗', '貓', '倉鼠']
  // 狀態值代表從中選擇一個，空白字串代表一開始沒選擇
  const [pet, setPet] = useState('')

  return (
    <>
      <div title="radio-button-group">
        <h2>選項按鈕群組</h2>
        {petOptions.map((v, i) => {
          return (
            <label
              // 只有當初次render後不會再更動，應用執行過程中，完全不會新增、刪除、修改，才能使用索引當key值
              key={i}
            >
              <input
                type="radio"
                value={v}
                // 每個radio選項用自己本身的值v和狀態pet比較，相符會是true，代表被選中
                checked={v === pet}
                onChange={(e) => {
                  // 第一種寫法: 有加value屬性，和其它可控元件寫法類似
                  setPet(e.target.value)
                  // 第二種寫法: 直接用v值
                  //setPet(v)
                }}
              />
              {v}
            </label>
          )
        })}
      </div>
    </>
  )
}