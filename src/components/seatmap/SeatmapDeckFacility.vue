<template>
  <div
    class="absolute flex flex-center items-center"
    :style="style"
  >
    <div
      class="seatmap__facility flex items-center flex-center"
      :class="$q.dark.isActive ? 'bg-grey-8' : 'bg-grey-3'"
      style="width: 85%; height: 85%"
    >
      {{ code }}
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'SeatmapDeckFacility',

  props: {
    code: { type: String, default: '' },
    y: { type: Number, default: null },
    x: { type: Number, default: null },
    size: { type: Number, default: null }
  },

  setup(props) {
    const style = computed(() => ({
      left: `${props.y * props.size}em `,
      top: `${props.x * props.size}em`,
      width: `${props.size}em `,
      height: `${props.size}em`
    }))

    return {
      style
    }
  }
})
</script>

<style scoped lang="scss">
.seatmap__facility {
  font-size: 9px;

  @media (min-width: 1024px) {
    font-size: 12px;
  }
}
</style>
