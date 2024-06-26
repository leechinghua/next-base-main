import { useState } from 'react'
import InputIME from '@/components/controlled-form/input-ime'

export default function MyInputText() {
  const [inputText, setInputText] = useState('')
  // 數字輸入框(input-number)
  const [inputNumber, setInputNumber] = useState('')
  // 日期輸入框 - (狀態是字串值)
  const [inputDateText, setInputDateText] = useState('2020-01-22')
  // 日期輸入框 - (時間日期物件值)
  const dateToString = (date = null) =>
    date instanceof Date ? date.toISOString().split('T')[0] : ''
  const stringToDate = (str = '') => new Date(str)

  const [inputDateObject, setInputDateObject] = useState(
    stringToDate('2024-01-01')
  )

  // 密碼輸入框
  const [inputPassword, setInputPassword] = useState('')
  // 顯示密碼的核取方塊使用，切換是否呈現密碼?
  const [showPassword, setShowPassword] = useState(false)
  return (
    <>
      <div title="input-text">
        <h2>文字輸入框(input-text)</h2>
        <InputIME
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />
        <h2>數字輸入框(input-number)</h2>
        <input
          type="number"
          value={inputNumber}
          min={0}
          max={10}
          step={1}
          onChange={(e) => {
            setInputNumber(Number(e.target.value))
          }}
        />
        <h2>日期輸入框 - (狀態是字串值)</h2>
        <input
          type="date"
          value={inputDateText}
          min="2018-01-01"
          max="2025-12-31"
          onChange={(e) => {
            setInputDateText(e.target.value)
          }}
        />
        <h2>日期輸入框 - (時間日期物件值)</h2>
        <input
          type="date"
          value={dateToString(inputDateObject)}
          onChange={(e) => {
            setInputDateObject(stringToDate(e.target.value))
          }}
        />
        <h2>密碼輸入框</h2>
        <input
          type={showPassword ? 'text' : 'password'}
          value={inputPassword}
          onChange={(e) => {
            setInputPassword(e.target.value)
          }}
        />
        {''}
        <input
          type="checkbox"
          value={inputPassword}
          onChange={(e) => {
            // 第一種寫法，使用事件的checked值
            //setShowPassword(e.target.checked)
            // 第二種寫法，布林值切換(toggle)
            setShowPassword(!showPassword)
          }}
        />
        顯示密碼
      </div>
    </>
  )
}
