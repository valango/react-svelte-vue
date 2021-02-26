<template>
  <div>
    <div class="board-row">
      <Square />
      <Square />
      <Square />
    </div>
    <div class="board-row">
      <Square />
      <Square />
      <Square />
    </div>
    <div class="board-row">
      <Square />
      <Square />
      <Square />
    </div>
  </div>
</template>

<script>
import Square from './Square.vue'

export default {
  components: { Square },

  data () {
    return {}
  }
}
</script>
