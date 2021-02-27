<!-- src/Square.svelte -->
<script>
export let api, id

let mark = ''

const onClick = () => (mark = api.handleClick(id))
</script>

<button class="square" on:click={ onClick(id) }>
  { mark }
</button>
