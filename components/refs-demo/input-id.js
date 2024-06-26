export default function InputId() {
  return (
    <>
      <h2>input-text使用id(不可控)</h2>
      <input type="text" id="myInput" />
      <button
        onClick={() => {
          alert(document.getElementById('myInput').value)
        }}
      >
        獲得值
      </button>
      <button
        onClick={() => {
          document.getElementById('myInput').focus()
        }}
      >
        聚焦(focus)
      </button>
      <button
        onClick={() => {
          document.getElementById('myInput').blur()
        }}
      >
        失焦(blur)
      </button>
    </>
  )
}
