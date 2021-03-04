<!-- src/Game.svelte -->
<script>
import Board from './Board.svelte'
import { calculateWinner } from './lib/game-logic'
import { onDestroy } from 'svelte'

const TICK = 1000
const { round } = Math

let movesCount = -1, status = 'nothing yet', ticker, time, winner
const squares = new Array(9).fill(''), times = [0, 0]

const getPlayer = () => (movesCount & 1) ? 'O' : 'X'

const commitMove = (id) => {
  const rune = squares[id] = getPlayer()

  if ((winner = calculateWinner(squares))) {
    clearTimeout(ticker)
    status = winner + ' won this game'
  } else {
    time = round(times[++movesCount & 1] / TICK)
    status = '\'' + getPlayer() + '\' to move'
  }
  return rune
}

const onEmptySquareClicked = (id) => (winner ? '' : commitMove(id))

const tick = () => {
  time = round((times[movesCount & 1] += TICK) / TICK)
  ticker = setTimeout(tick, TICK)
}

commitMove(tick() || 0)
onDestroy(() => clearTimeout(ticker))
</script>

<div class="game">
  <Board api={ {onEmptySquareClicked} } />
  <div class="game-info">
    <div class="status">{ `${status} (${time} secs)` }</div>
    <ol><!-- todo --></ol>
  </div>
</div>
