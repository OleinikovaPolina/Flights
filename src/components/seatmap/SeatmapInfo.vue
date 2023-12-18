<template>
  <div>
    <template v-if="seatmapData">
      <seatmap-info-amenities :amenities="seatmapData.aircraftCabinAmenities" />
      <q-card class="shadow-0 q-mt-md">
        <q-card-section>
          <div
            class="row q-gutter-md flex-center q-mb-md"
            :class="{ 'text-caption': $q.screen.lt.md }"
          >
            <div class="flex items-center">
              <img
                :src="seatSVG"
                alt="seat"
                class="q-mr-xs seatmap__seat_available seatmap__conventional-sign"
              />
              Available seat
            </div>
            <div class="flex items-center">
              <img
                :src="seatSVG"
                alt="seat"
                class="q-mr-xs seatmap__seat_blocked seatmap__conventional-sign"
              />
              Unavailable seat
            </div>
            <div class="flex items-center">
              <div class="bg-red-11 q-mr-xs seatmap__conventional-sign_exit" />
              Exit
            </div>
            <div
              v-for="(value, name, i) in dictionaries.facilities"
              :key="i"
              class="flex items-center"
            >
              <div
                class="flex items-center flex-center q-mr-xs seatmap__conventional-sign"
                :class="$q.dark.isActive ? 'bg-grey-8' : 'bg-grey-3'"
              >
                {{ name }}
              </div>
              {{ value }}
            </div>
          </div>
          <div class="flex flex-center">
            <seatmap-deck
              v-for="(deck, i) in seatmapData.decks"
              :key="i"
              :deck="deck"
            />
          </div>
        </q-card-section>
      </q-card>
    </template>
    <div
      v-else
      class="flex column items-center"
    >
      <no-data-svg
        height="150"
        class="q-mt-md"
      />
      <div class="text-h6 q-mt-md text-primary text-center">
        No information about the seat map
      </div>
    </div>
  </div>
</template>

<script>
import { useSeatmapStore } from 'src/stores/seatmap'
import { defineComponent, computed } from 'vue'
import { storeToRefs } from 'pinia'
import SeatmapDeck from './SeatmapDeck.vue'
import SeatmapInfoAmenities from './SeatmapInfoAmenities.vue'
import NoDataSvg from 'src/assets/undraw_no_data.svg'
import seatSVG from 'src/assets/seat.svg?href'

export default defineComponent({
  name: 'SeatmapInfo',
  components: { SeatmapDeck, SeatmapInfoAmenities, NoDataSvg },
  props: {
    segmentSeatmap: { type: String, default: '1' }
  },
  setup(props) {
    const seatmapStore = useSeatmapStore()
    const { seatmap, dictionaries } = storeToRefs(seatmapStore)

    const seatmapData = computed(() => {
      return seatmap.value?.data.find(seatmap => seatmap.segmentId === props.segmentSeatmap)
    })

    return {
      seatmapData,
      dictionaries,
      seatSVG
    }
  }
})
</script>

<style scoped lang="scss">
.seatmap__conventional-sign {
  width: 25px;
  height: 25px
}

.seatmap__conventional-sign_exit {
  width: 0.5em;
  height: 1.8em
}
</style>
