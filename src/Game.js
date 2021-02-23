//  src/Game.js
import React from 'react'
import Board from './Board'

const TICK = 1000
const { round } = Math

export default class Game extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      movesCount: 0,
      times: [0, 0],
      winner: null
    }
    //  Todo: check if this is kosher to add instance properties this way.
    this.tick = undefined
  }

  componentDidMount () {
    this.tick = setTimeout(() => this.timerTick(), TICK)
  }

  componentWillUnmount () {
    clearTimeout(this.tick)
  }

  timerTick () {
    const times = [...this.state.times]
    times[this.state.movesCount & 1] += TICK
    this.setState({ times })
    this.tick = setTimeout(() => this.timerTick(), TICK)
  }

  commitMove (winner) {
    this.setState({ movesCount: this.state.movesCount + 1 })
    if (winner) {
      clearTimeout(this.tick)
      this.setState({ winner })
    }
  }

  getPlayer () {
    return (this.state.movesCount & 1) ? 'O' : 'X'
  }

  render () {
    const { movesCount, times, winner } = this.state
    const time = round(times[movesCount & 1] / TICK) + ' secs'
    const status = winner ? (winner + ' won this game') : this.getPlayer()

    return (
      <div className="game">
        <div className="game-board">
          <Board
            commitMove={(winner) => this.commitMove(winner)}
            getPlayer={() => this.getPlayer()}
            winner={this.state.winner}
          />
        </div>
        <div className="game-info">
          <div className="status">{status + ' (' + time + ')'}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    )
  }
}
