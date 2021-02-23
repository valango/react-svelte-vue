//  src/Game.js
import React from 'react'
import Board from './Board'

export default class Game extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      movesCount: 0,
      winner: null
    }
  }

  commitMove (winner) {
    this.setState({ movesCount: this.state.movesCount + 1 })
    if (winner) this.setState({ winner })
  }

  getPlayer () {
    return (this.state.movesCount & 1) ? 'O' : 'X'
  }

  render () {
    const { winner } = this.state
    const status = winner ? 'Winner: ' + winner : 'Next player: ' + this.getPlayer()

    return (
      <div className="game">
        <div className="game-board">
          <Board
            commitMove = {(winner) => this.commitMove(winner)}
            getPlayer = {() => this.getPlayer()}
            winner = {this.state.winner}
          />
        </div>
        <div className="game-info">
          <div className="status">{status}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    )
  }
}
