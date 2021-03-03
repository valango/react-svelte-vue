<!-- src/Square.svelte -->
<script>
import { afterUpdate } from 'svelte'

export let api, id

let mark = ''

afterUpdate(() => console.log('updated', id))       //  Redraw monitoring.

const onClick = () => (mark = api.handleClick(id))
</script>

<button class="square" on:click={ onClick }>
  { mark }
</button>
