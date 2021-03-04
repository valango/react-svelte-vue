//  src/Game.js
import Board from './Board'
import { calculateWinner } from './lib/game-logic'
import React from 'react'

const TICK = 1000
const { round } = Math

export default class Game extends React.Component {
  constructor (props) {
    super(props)
    this.state = { status: '', time: 0 }
    this.movesCount = -1
    this.squares = new Array(9).fill('')
    this.tick = undefined
    this.ticker = undefined
    this.times = [0, 0]
    this.winner = undefined
  }

  getPlayer () {
    return (this.movesCount & 1) ? 'O' : 'X'
  }

  commitMove (id) {
    const rune = this.squares[id] = this.getPlayer()

    if ((this.winner = calculateWinner(this.squares))) {
      clearTimeout(this.ticker)
      this.setState({ status: this.winner + ' won this game' })
    } else {
      this.updateTime(++this.movesCount)
      this.setState({ status: '\'' + this.getPlayer() + '\' to move' })
    }
    return rune
  }

  componentDidMount () {   //  Disabled for redraw monitoring.
    this.commitMove(0)
    this.tick = setTimeout(() => this.timerTick(), TICK)
  }

  componentWillUnmount () {
    clearTimeout(this.tick)
  }

  onEmptySquareClicked (id) {
    return this.winner ? '' : this.commitMove(id)
  }

  timerTick () {
    this.times[this.movesCount & 1] += TICK
    this.updateTime()
    this.tick = setTimeout(() => this.timerTick(), TICK)
  }

  updateTime () {
    this.setState({ time: round(this.times[this.movesCount & 1] / TICK) })
  }

  render () {
    const { status, time } = this.state
    return (
      <div className="game">
        <div className="game-board">
          <Board
            onEmptySquareClicked={(id) => this.onEmptySquareClicked(id)}
          />
        </div>
        <div className="game-info">
          <div className="status">{status + ' (' + time + ' secs)'}</div>
          <ol>{ /* todo */}</ol>
        </div>
      </div>
    )
  }
}
