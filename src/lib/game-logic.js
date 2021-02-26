// src/lib/game-logic
'use strict'

const lines = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]
]

export const calculateWinner = (squares) => {
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i], v = squares[a]
    if (v && squares[b] === v && squares[c] === v) {
      return `Player '${v}'`
    }
  }
  return squares.indexOf(null) < 0 ? 'It is arguable, who' : null
}
