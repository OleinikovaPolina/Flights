<template>
  <div
    class="relative-position"
    :class="$q.dark.isActive ? 'bg-dark' : 'bg-white'"
    :style="{ width: `${width}em`, height: `${length}em`, fontSize:10 }"
  >
    <seatmap-deck-wing
      :start="wingStart"
      :end="wingEnd"
      :width="width"
      :size="size"
    />
    <seatmap-deck-seat
      v-for="(seat, i) in seats"
      :key="'seat' + i"
      :size="size"
      :seat="seat"
    />
    <seatmap-deck-seat-number
      v-for="(seatNumber, i) in seatNumbers"
      :key="'seat-number-' + i"
      :number="seatNumber.number"
      :size="size"
      :x="seatNumber.coordinates.x"
    />
    <seatmap-deck-exit
      v-for="(row, i) in exitRows"
      :key="'exit' + i"
      :row="row"
      :size="size"
      :width="width"
    />
    <seatmap-deck-facility
      v-for="(facility, i) in facilities"
      :key="'facility' + i"
      :code="facility.code"
      :x="facility.coordinates.x"
      :y="facility.coordinates.y"
      :size="size"
    />
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'
import SeatmapDeckSeat from './SeatmapDeckSeat.vue'
import SeatmapDeckExit from './SeatmapDeckExit.vue'
import SeatmapDeckFacility from './SeatmapDeckFacility.vue'
import SeatmapDeckWing from './SeatmapDeckWing.vue'
import SeatmapDeckSeatNumber from './SeatmapDeckSeatNumber.vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'SeatmapDeck',

  components: {
    SeatmapDeckSeat,
    SeatmapDeckExit,
    SeatmapDeckFacility,
    SeatmapDeckWing,
    SeatmapDeckSeatNumber
  },

  props: {
    deck: { type: Object, required: true }
  },

  setup(props) {
    const $q = useQuasar()

    const size = $q.screen.lt.md ? 1 : 2
    const width = computed(() => props.deck.deckConfiguration.width * size)
    const length = computed(() => props.deck.deckConfiguration.length * size)
    const exitRows = computed(() => props.deck.deckConfiguration.exitRowsX)
    const wingStart = computed(() => props.deck.deckConfiguration.startWingsX)
    const wingEnd = computed(() => props.deck.deckConfiguration.endWingsX)
    const seats = computed(() => props.deck.seats)
    const facilities = computed(() => props.deck.facilities)
    const seatNumbers = computed(() => props.deck.seats
      .map(seat => ({ ...seat, number: parseInt(seat.number) }))
      .filter((value, index, self) => index === self.findIndex(item => item.number === value.number)))

    return {
      size,
      width,
      length,
      exitRows,
      wingStart,
      wingEnd,
      seatNumbers,
      facilities,
      seats
    }
  }
})
</script>
