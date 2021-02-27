<!-- src/Square.svelte -->
<script>
export let id
export let api

let mark = ''

const { handleClick } = api

const onClick = () => (mark = handleClick(id))

</script>

<button class="square" on:click={ onClick(id) }>
  { mark }
</button>
