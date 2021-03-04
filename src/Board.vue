<!-- src/Board.vue -->
<script>
import Square from './Square.vue'

export default {
  components: { Square },
  props: {
    api: { type: Object, required: true }
  }
}
</script>

<template>
  <div>
    <div v-for="r in 3" class="board-row">
      <Square v-for="c in 3" :api="api" :key="3 * (r - 1) + c - 1" />
    </div>
  </div>
</template>
