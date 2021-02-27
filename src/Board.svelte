<!-- src/Board.svelte -->
<script>
import Square from './Square.svelte'

let clickedSquare

const clicker = (n) => () => (clickedSquare = n)

const squares = new Array(9).fill(null)
const triad = [0, 1, 2]
</script>

<div>
  {#each triad as row}
    <div class="board-row">
      {#each triad as col}
        <Square onClick={clicker(3 * row + col)} />
      {/each}
    </div>
  {/each}
  <div>Clicked: {clickedSquare}</div>
</div>
