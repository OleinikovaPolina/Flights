<template>
  <div>
    <div
      class="absolute"
      :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
      :style="styleLeft"
    />
    <div
      class="absolute"
      :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
      :style="styleRight"
    />
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'SeatmapDeckWing',

  props: {
    end: { type: Number, default: null },
    start: { type: Number, default: null },
    width: { type: Number, default: null },
    size: { type: Number, default: null }
  },

  setup(props) {
    const $q = useQuasar()

    const styleLeft = computed(() => ({
      height: `${(props.end - props.start) * props.size}em`,
      top: `${props.start * props.size}em`,
      left: $q.screen.lt.md ? '-50px' : '-150px',
      transform: 'skewY(-30deg)',
      transformOrigin: 'top right',
      width: $q.screen.lt.md ? '50px' : '150px'
    }))
    const styleRight = computed(() => ({
      height: `${(props.end - props.start) * props.size}em`,
      top: `${props.start * props.size}em`,
      left: `${props.width}em`,
      transform: 'skewY(30deg)',
      transformOrigin: 'top left',
      width: $q.screen.lt.md ? '50px' : '150px'
    }))

    return {
      styleLeft,
      styleRight
    }
  }
})
</script>
