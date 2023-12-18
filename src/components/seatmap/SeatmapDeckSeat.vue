<template>
  <div
    class="absolute flex flex-center items-center"
    :style="style"
  >
    <img
      :src="seatSVG"
      alt="seat"
      style="width: 85%; height: 85%"
      :class="availabilityClass"
    />
    <div class="absolute fixed-center seatmap__seat-number">
      {{ seat.number.replace(/[0-9]/g, "") }}
    </div>
    <q-tooltip>
      <div>
        {{ seat.number }}
      </div>
      <div>
        {{ seat.cabin }}
      </div>
      <div>
        {{ seat.travelerPricing[0].seatAvailabilityStatus }}
      </div>
      <div
        v-for="characteristic in seat.characteristicsCodes"
        :key="characteristic"
      >
        {{ dictionaries.seatCharacteristics[characteristic] }}
      </div>
    </q-tooltip>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useSeatmapStore } from 'src/stores/seatmap'
import { storeToRefs } from 'pinia'
import seatSVG from 'src/assets/seat.svg?href'

export default defineComponent({
  name: 'SeatmapDeckSeat',

  props: {
    seat: { type: Object, required: true },
    size: { type: Number, required: true }
  },

  setup(props) {
    const seatmapStore = useSeatmapStore()
    const { dictionaries } = storeToRefs(seatmapStore)

    const availabilityClass = computed(() => props.seat.travelerPricing[0].seatAvailabilityStatus === 'AVAILABLE'
      ? 'seatmap__seat_available'
      : 'seatmap__seat_blocked')
    const style = computed(() => ({
      left: `${props.seat.coordinates.y * props.size}em`,
      top: `${props.seat.coordinates.x * props.size}em`,
      width: `${props.size}em`,
      height: `${props.size}em`
    }))

    return {
      dictionaries,
      availabilityClass,
      style,
      seatSVG
    }
  }
})
</script>

<style scoped lang="scss">
.seatmap__seat-number {
  font-size: 10px;

  @media (min-width: 1024px) {
    font-size: 12px;
  }
}
</style>
