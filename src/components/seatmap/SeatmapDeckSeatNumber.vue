<template>
  <div
    class="absolute flex items-center"
    :style="style"
  >
    <div class="seatmap__seat-number">{{ number }}</div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'SeatmapDeckSeatNumber',

  props: {
    number: { type: Number, required: true },
    x: { type: Number, required: true },
    size: { type: Number, required: true }
  },

  setup(props) {
    const style = computed(() => ({
      left: '-2em',
      top: `${props.x * props.size}em`,
      width: `${props.size}em`,
      height: `${props.size}em`
    }))

    return {
      style
    }
  }
})
</script>

<style scoped lang="scss">
.seatmap__seat-number {
  font-size: 9px;

  @media (min-width: 1024px) {
    font-size: 10px;
  }
}
</style>
