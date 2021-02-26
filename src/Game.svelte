<script>
import Board from './Board.svelte'

let status = 'nothing yet'
let todo = 'todo topics'
</script>

<div class="game">
  <Board />
  <div class="game-info">
    <div class="status">{ status }</div>
    <ol>{ todo }</ol>
  </div>
</div>
