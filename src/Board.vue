<!-- src/Board.vue -->
<script>
import Square from './Square.vue'
import { calculateWinner } from './lib/game-logic'

export default {
  components: { Square },
  props: {
    api: { type: Object, required: true }
  },
  data: () => ({
    squares: new Array(9).fill(''),
    winner: null
  }),
  methods: {
    handleClick (i) {
      if (this.squares[i] || this.winner) return ''
      this.squares[i] = this.api.getPlayer()
      this.api.commitMove(this.winner = calculateWinner(this.squares))
      return this.squares[i]
    }
  }
}
</script>

<template>
  <div>
    <div v-for="r in 3" class="board-row">
      <Square v-for="c in 3" :api="{handleClick}" :key="3*(r-1)+c-1" />
    </div>
  </div>
</template>
