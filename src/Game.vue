<template>
  <div class="game">
    <Board />
    <div class="game-info">
      <div class="status">{{ status }}</div>
      <ol>{{ todo }}</ol>
    </div>
  </div>
</template>

<script>
import Board from './Board.vue'

export default {
  components: { Board },

  data () {
    return {
      status: 'nothing yet',
      todo: 'todo topics'
    }
  }
}
</script>
