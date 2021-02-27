<!-- src/Board.svelte -->
<script>
import Square from './Square.svelte'
import { calculateWinner } from './lib/game-logic'

export let api
const squares = new Array(9).fill('')
const triad = [0, 1, 2]   //  Needed by {#each}
let winner

const handleClick = (i) => {
  if (squares[i] || winner) return ''
  squares[i] = api.getPlayer()
  api.commitMove(winner = calculateWinner(squares))
  return squares[i]
}
</script>

<div>
  {#each triad as row}
    <div class="board-row">
      {#each triad as col}
        <Square api={ {handleClick} } id={ 3 * row + col } />
      {/each}
    </div>
  {/each}
</div>
