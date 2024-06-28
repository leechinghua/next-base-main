import React from 'react'

export default function EffectRender() {
  const [name, setName] = useState('Nike')
  return (
    <>
      <h1>Effect與react render關係</h1>
      <hr />
      <p>name = {name}</p>
      <button
        onClick={() => {
          setName('Iris')
        }}
      >
        change
      </button>
      <button
        onClick={() => {
          setName('Iris')
        }}
      >
        force re-render
      </button>
      <button
        onClick={() => {
          setName('Iris')
        }}
      >
        force re-render
      </button>
    </>
  )
}
