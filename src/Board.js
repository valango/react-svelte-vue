//  src/Board.js
import React from 'react'
import Square from './Square'

export default class Board extends React.Component {
  constructor (props) {
    super(props)
  }

  renderSquare (i) {
    console.log('renderSquare', i)          //  Redraw monitoring.
    return <Square
      id={i}
      onEmptySquareClicked={this.props.onEmptySquareClicked}
    />
  }

  render () {
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
