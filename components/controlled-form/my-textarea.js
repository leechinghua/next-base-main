import { useState } from 'react'

export default function MyTextArea() {
  //  文字輸入框(input-text)

  const [textareaText, setTextareaText] = useState()
  return (
    <>
      <div title="textarea">
        <h2>文字輸入區域</h2>
        <textarea
          value={textareaText}
          onChange={(e) => {
            setTextareaText(e.target.value)
          }}
        />
      </div>
    </>
  )
}
