<!-- src/Square.svelte -->
<script>
export let mark = ''
export let onClick = () => undefined
</script>

<button class="square" on:click={onClick()}>
  { mark || '' }
</button>
