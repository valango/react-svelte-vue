<!-- src/Square.svelte -->
<script>
export let api, id, rune = ''

const onClick = () => (rune || (rune = api.onEmptySquareClicked(id)))
</script>

<button class="square" on:click={ onClick }> { rune } </button>
