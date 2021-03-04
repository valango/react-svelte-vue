<!-- src/Square.vue -->
<script>
export default {
  props: {
    api: { type: Object, required: true }
  },
  data: () => ({ rune: '' }),
  methods: {
    onClick () {
      this.rune || (this.rune = this.api.onEmptySquareClicked(this.$vnode.key))
    }
  }
}
</script>

<template>
  <button class="square" @click="onClick">{{ rune }}</button>
</template>
