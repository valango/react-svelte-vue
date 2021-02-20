import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const lines = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]
]

const calculateWinner = (squares) => {
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i], v = squares[a]
    if (v && squares[b] === v && squares[c] === v) return v
  }
  return squares.indexOf(null) < 0 ? 'nobody' : null
}

//  Square is a Function Component.
const Square = (props) =>
  <button className="square" onClick={() => props.onClick()}>
    {props.value}
  </button>

class Board extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isNextX: true,
      squares: new Array(9).fill(null),
      winner: null
    }
  }

  handleClick (i) {
    let squares = this.state.squares.slice()
    if (squares[i] || this.state.winner) return
    squares[i] = this.nextPlayer()
    const winner = calculateWinner(squares)
    this.setState({ isNextX: !this.state.isNextX, squares, winner })
  }

  nextPlayer () {
    return this.state.isNextX ? 'X' : 'O'
  }

  renderSquare (i) {
    return <Square
      value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
    />
  }

  render () {
    const { winner } = this.state
    const status = winner ? 'Winner: ' + winner : 'Next player: ' + this.nextPlayer()

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

class Game extends React.Component {
  render () {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    )
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
)
