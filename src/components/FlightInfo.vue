<template>
  <q-card-section
    v-for="(itinerary, j) in flight.itineraries"
    :key="j"
    class="row justify-between"
    :class="{ 'border-top': j !== 0 }"
  >
    <div>
      <div class="text-h5">
        {{ date.formatDate(itinerary.segments[0].departure.at, "HH:mm") }}
      </div>
      <div class="text-grey">
        {{ itinerary.segments[0].departure.iataCode }}
      </div>
      <div class="text-grey">
        {{
          date.formatDate(itinerary.segments[0].departure.at, "DD MMM, ddd")
        }}
      </div>
    </div>

    <div
      class="text-center col-12 col-md"
      :class="{ 'order-last q-mt-md': $q.screen.lt.md }"
    >
      <div
        class="row justify-between"
        :class="{ 'q-mx-xl': !$q.screen.lt.md }"
      >
        <q-icon
          name="flight_takeoff"
          color="grey-5"
          size="2rem"
        />
        <div class="text-grey">
          In path:
          {{
            getDateDiffFullFromat(
              itinerary.segments[itinerary.segments.length - 1].arrival.at,
              itinerary.segments[0].departure.at
            )
          }}
        </div>
        <q-icon
          name="flight_land"
          color="grey-5"
          size="2rem"
        />
      </div>

      <div
        class="row items-center q-my-sm"
        :class="{ 'q-mx-xl': !$q.screen.lt.md, 'q-mb-lg': $q.screen.lt.md }"
      >
        <template
          v-for="(segment, z) in itinerary.segments"
          :key="`${j}-${z}`"
        >
          <!-- In path -->
          <div class="col relative-position">
            <q-linear-progress
              :value="1"
              class="rounded-borders"
              color="grey-5"
              size="5px"
            />
            <div
              v-if="z === 0 || z === itinerary.segments.length - 1"
              class="absolute-center"
              style="top:25px"
            >
              {{ z === 0 ? segment.departure.iataCode : segment.arrival.iataCode }}
            </div>
            <q-tooltip>
              In path:
              {{ getDateDiffFullFromat(segment.arrival.at, segment.departure.at) }}
            </q-tooltip>
          </div>

          <!-- Change -->
          <div
            v-if="z !== itinerary.segments.length - 1"
            class="col relative-position"
          >
            <q-linear-progress
              :value="0"
              size="2px"
              color="grey-5"
            />
            <div
              class="absolute-center"
              style="top:25px"
            >
              {{ segment.arrival.iataCode }}
              <template v-if="segment.arrival.iataCode !== itinerary.segments[z + 1].departure.iataCode">
                {{ itinerary.segments[z + 1].departure.iataCode }}
              </template>
            </div>
            <q-tooltip>
              Change
              {{
                getDateDiffFullFromat(itinerary.segments[z + 1].departure.at, segment.arrival.at)
              }}
            </q-tooltip>
          </div>
        </template>
      </div>
    </div>

    <div class="text-right">
      <div class="text-h5">
        {{
          date.formatDate(itinerary.segments[itinerary.segments.length - 1].arrival.at, "HH:mm")
        }}
      </div>
      <div class="text-grey">
        {{
          itinerary.segments[itinerary.segments.length - 1].arrival.iataCode
        }}
      </div>
      <div class="text-grey">
        {{
          date.formatDate(itinerary.segments[itinerary.segments.length - 1].arrival.at, "DD MMM, ddd")
        }}
      </div>
    </div>
  </q-card-section>
</template>

<script>
import { defineComponent } from 'vue'
import { date } from 'quasar'
import { useDate } from 'src/composables/date'

export default defineComponent({
  name: 'FlightInfo',
  props: {
    flight: { type: Object, default: () => ({}) }
  },
  setup() {
    const { getDateDiffFullFromat } = useDate()
    return {
      date,
      getDateDiffFullFromat
    }
  }
})
</script>
