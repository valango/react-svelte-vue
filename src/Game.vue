<!-- src/Game.vue -->
<script>
import Board from './Board.vue'

const TICK = 1000
const { round } = Math

export default {
  components: { Board },
  data: () => ({
    movesCount: -1,
    status: '',
    ticker: null,
    time: 0,
    times: [0, 0],
    winner: null
  }),
  methods: {
    getPlayer () {
      return (this.movesCount & 1) ? 'O' : 'X'
    },
    commitMove (calculatedWinner) {
      if (calculatedWinner) {
        clearTimeout(this.ticker)
        this.status = (this.winner = calculatedWinner) + ' won this game'
      } else {
        this.time = round(this.times[++this.movesCount & 1] / TICK)
        this.status = '\'' + this.getPlayer() + '\' to move'
      }
    }
  },
  created () {
    const tick = () => {
      this.time = round((this.times[this.movesCount & 1] += TICK) / TICK)
      this.ticker = setTimeout(tick, TICK)
    }
    this.commitMove(tick())
  },
  beforeDestroy () {
    clearTimeout(this.ticker)
  }
}
</script>

<template>
  <div class="game">
    <Board :api="{getPlayer, commitMove}" />
    <div class="game-info">
      <div class="status">{{ status + ' (' + time + ' secs)' }}</div>
      <ol><!-- todo  --></ol>
    </div>
  </div>
</template>
