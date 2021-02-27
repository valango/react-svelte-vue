<!-- src/Game.svelte -->
<script>
import Board from './Board.svelte'
import { onDestroy } from 'svelte'

const TICK = 1000
const { round } = Math

let movesCount = -1
let winner = null
let status = 'nothing yet'
let ticker, time
const times = [0, 0]

const getPlayer = () => (movesCount & 1) ? 'O' : 'X'

const commitMove = (calculatedWinner) => {
  if (calculatedWinner) {
    clearTimeout(ticker)
    status = (winner = calculatedWinner) + ' won this game'
  } else {
    time = round(times[++movesCount & 1] / TICK)
    status = '\'' + getPlayer() + '\' to move'
  }
}

const tick = () => {
  time = round((times[movesCount & 1] += TICK) / TICK)
  ticker = setTimeout(tick, TICK)
}

commitMove(tick())
onDestroy(() => clearTimeout(ticker))
</script>

<div class="game">
  <Board api={ {commitMove, getPlayer} } />
  <div class="game-info">
    <div class="status">{ `${status} (${time} secs)` }</div>
    <ol><!-- todo --></ol>
  </div>
</div>
