<template>
  <div>
    <div
      class="absolute bg-red-11"
      :style="styleLeft"
    />
    <div
      class="absolute bg-red-11"
      :style="styleRight"
    />
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'SeatmapDeckExit',

  props: {
    row: { type: Number, default: null },
    width: { type: Number, default: null },
    size: { type: Number, default: null }
  },

  setup(props) {
    const styleLeft = computed(() => ({
      left: '-0.5em',
      top: `${props.row * props.size + 0.15}em`,
      width: '0.5em',
      height: `${props.size - 0.3}em`
    }))
    const styleRight = computed(() => ({
      left: `${props.width}em`,
      top: `${props.row * props.size + 0.15}em`,
      width: '0.5em',
      height: `${props.size - 0.3}em`
    }))

    return {
      styleLeft,
      styleRight
    }
  }
})
</script>
