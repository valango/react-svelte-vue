<!-- src/Square.vue -->
<script>
export default {
  props: {
    api: { type: Object, required: true }
  },
  data: () => ({ mark: '' }),
  methods: {
    onClick () {
      this.mark = this.api.handleClick(this.$vnode.key)
    }
  },
  updated () {              //  Redraw monitoring.
    console.log('updated', this.$vnode.key)
  }
}
</script>

<template>
  <button class="square" @click="onClick">{{ mark }}</button>
</template>
