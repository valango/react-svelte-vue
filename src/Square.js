//  src/Square.js
import React, { useState } from 'react'

export default function Square (props) {
  const [rune, setRune] = useState('')

  return (
    <button
      className="square"
      onClick={() => (rune || setRune(props.onEmptySquareClicked(props.id)))}
    > {rune} </button>
  )
}
