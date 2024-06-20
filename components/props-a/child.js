import React from 'react'
import PropTypes from 'prop-types'

export default function Child({
  title = '沒寫',
  price = 0,
  isConnected = false,
  aa = [],
  oa = {},
  sum = () => {},
}) {
  return (
    <>
      <h3>Child</h3>
      <p>title={title}</p>
      <p>price={price}</p>
      <p>isConnected={isConnected ? 'true' : 'false'}</p>
      <p>aa={JSON.stringify(aa)}</p>
      <p>oa={JSON.stringify(oa)}</p>
      <p>sum(1,2)={sum(1, 2)}</p>
    </>
  )
}
Child.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isConnected: PropTypes.bool.isRequired,
}
