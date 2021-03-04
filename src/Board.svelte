<!-- src/Board.svelte -->
<script>
import Square from './Square.svelte'

export let api

const triad = [0, 1, 2]   //  Needed by {#each}
</script>

<div>
  {#each triad as row}
    <div class="board-row">
      {#each triad as col}
        <Square api={ api } id={ 3 * row + col } />
      {/each}
    </div>
  {/each}
</div>
