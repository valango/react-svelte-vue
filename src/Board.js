//  src/Board.js
import React from 'react'
import Square from './Square'
import { calculateWinner } from './lib/game-logic'

export default class Board extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      squares: new Array(9).fill('')
    }
  }

  handleClick (i) {
    let squares = this.state.squares.slice()
    if (squares[i] || this.props.winner) return
    squares[i] = this.props.getPlayer()
    this.setState({ squares })
    this.props.commitMove(calculateWinner(squares))
  }

  renderSquare (i) {
    console.log('renderSquare', i)          //  Redraw monitoring.
    return <Square
      value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
    />
  }

  render () {
    console.log('Board.render')
    return (
      <div>
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
