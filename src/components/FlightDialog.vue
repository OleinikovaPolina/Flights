<template>
  <q-dialog
    ref="dialogRef"
    full-width
    @hide="onDialogHide"
  >
    <q-card class="q-dialog-plugin">
      <q-card-section class="row items-center bg-primary text-white q-mb-md q-dialog-plugin__header">
        <div class="text-h6">Flight info and pricing</div>
        <q-space />
        <q-btn
          icon="close"
          flat
          round
          dense
          @click="onCancelClick"
        />
      </q-card-section>

      <q-card-section>
        <div class="row q-col-gutter-md">
          <div class="col-12 col-lg-6">
            <div
              v-if="flight"
              class="q-gutter-md"
            >
              <q-card class="shadow-0 q-mb-lg">
                <q-card-section class="row justify-between">
                  <div class="text-h6">Price</div>
                  <div class="text-h6">
                    {{ flight.price.total }}
                    {{ flight.price.currency }}
                  </div>
                </q-card-section>
                <q-list
                  bordered
                  separator
                >
                  <q-item
                    v-for="(travelerPricing, i) in flight.travelerPricings"
                    :key="i"
                  >
                    <q-item-section avatar>
                      <q-icon
                        color="primary"
                        :name="travelerPricing.travelerType === 'CHILD'
                          ? 'child_care'
                          : 'person'
                          "
                      />
                    </q-item-section>
                    <q-item-section>
                      {{ travelerPricing.fareOption }} -
                      {{ travelerPricing.travelerType }}
                      <q-item-label caption>
                        {{ travelerPricing.price.total }}
                        {{ travelerPricing.price.currency }}
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-card>

              <div
                v-for="(itinerary, i) in flight.itineraries"
                :key="i"
              >
                <div class="text-h6">
                  {{ itinerary.segments[0].departure.iataCode }}
                  <template v-if="itinerary.segments.length > 1">
                    -
                    {{
                      itinerary.segments[itinerary.segments.length - 1].arrival.iataCode
                    }}
                  </template>
                </div>
                <div class="text-grey q-mb-sm">
                  {{
                    getDateDiffFullFromat(
                      itinerary.segments[itinerary.segments.length - 1].arrival.at,
                      itinerary.segments[0].departure.at
                    )
                  }}
                  in path
                </div>

                <q-card class="shadow-0">
                  <q-card-section
                    v-for="(segment, z) in itinerary.segments"
                    :key="`${i}-${z}`"
                  >
                    <div class="flex justify-between">
                      <div>
                        {{ segment.duration }}
                        <div class="text-grey">
                          {{
                            getDateDiffFullFromat(segment.arrival.at, segment.departure.at)
                          }}
                          in path
                        </div>
                      </div>

                      <q-btn
                        flat
                        :color="segmentSeatmap === segment.id ? 'primary' : 'grey'"
                        label="Seatmap"
                        @click="changeSegmentSeatmap(segment.id, true)"
                      />
                    </div>

                    <div>
                      <div class="row">
                        <q-icon
                          name="radio_button_checked"
                          color="grey-5"
                          size="1.5rem"
                          class="q-mt-md"
                        />
                        <div class="q-mx-md">
                          <div class="text-h6">
                            {{ date.formatDate(segment.departure.at, "HH:mm") }}
                          </div>
                          <div class="text-grey">
                            {{
                              date.formatDate(
                                segment.departure.at,
                                "DD MMM, ddd"
                              )
                            }}
                          </div>
                        </div>
                        <div class="text-h6">
                          {{ segment.departure.iataCode }}
                        </div>
                      </div>
                      <div class="row">
                        <q-icon
                          name="radio_button_checked"
                          color="grey-5"
                          size="1.5rem"
                          class="q-mt-md"
                        />
                        <div class="q-mx-md">
                          <div class="text-h6">
                            {{ date.formatDate(segment.arrival.at, "HH:mm") }}
                          </div>
                          <div class="text-grey">
                            {{
                              date.formatDate(segment.arrival.at, "DD MMM, ddd")
                            }}
                          </div>
                        </div>
                        <div class="text-h6">
                          {{ segment.arrival.iataCode }}
                        </div>
                      </div>
                    </div>

                    <q-banner
                      v-if="z !== itinerary.segments.length - 1"
                      class="q-mt-lg"
                      rounded
                      :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
                    >
                      <template #avatar>
                        <q-icon
                          name="directions_walk"
                          color="grey"
                        />
                      </template>
                      Change
                      {{
                        getDateDiffFullFromat(
                          itinerary.segments[z + 1].departure.at,
                          segment.arrival.at
                        )
                      }}
                    </q-banner>
                  </q-card-section>
                </q-card>
              </div>
            </div>
            <div
              v-else
              class="flex column items-center"
            >
              <no-data-svg
                height="150"
                class="q-mt-md"
              />
              <div class="text-h6 q-mt-md text-primary text-center">
                No pricing information
              </div>
            </div>
          </div>
          <div
            ref="seatmap"
            class="col-12 col-lg-6"
          >
            <seatmap-info :segment-seatmap="segmentSeatmap" />
          </div>
        </div>

        <q-inner-loading
          :showing="isLoading || isLoadingSeatmap"
          class="q-pt-lg"
          style="justify-content: start"
        >
          <q-spinner-ios
            color="primary"
            size="4em"
          />
          <div class="text-primary q-mt-md">Search prices...</div>
        </q-inner-loading>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          unelevated
          color="primary"
          label="Cancel"
          @click="onCancelClick"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { useDialogPluginComponent, date } from 'quasar'
import { defineComponent, nextTick, ref, watch } from 'vue'
import { useDate } from 'src/composables/date'
import { useFlightStore } from 'stores/flight'
import { useSeatmapStore } from 'stores/seatmap'
import { storeToRefs } from 'pinia'
import SeatmapInfo from './seatmap/SeatmapInfo.vue'
import NoDataSvg from 'src/assets/undraw_no_data.svg'

export default defineComponent({
  name: 'FlightDialog',

  components: { SeatmapInfo, NoDataSvg },

  emits: [...useDialogPluginComponent.emits],

  setup() {
    const { dialogRef, onDialogHide, onDialogCancel } = useDialogPluginComponent()
    const { getDateDiffFullFromat } = useDate()

    const flightStore = useFlightStore()
    const { flight, isLoading } = storeToRefs(flightStore)

    const seatmapStore = useSeatmapStore()
    const isLoadingSeatmap = storeToRefs(seatmapStore).isLoading

    const segmentSeatmap = ref(null)
    const seatmap = ref(null)

    const changeSegmentSeatmap = (newSegment, scroll = false) => {
      segmentSeatmap.value = newSegment
      if (scroll) {
        nextTick(() => {
          seatmap.value?.scrollIntoView({ behavior: 'smooth' })
        })
      }
    }

    watch(
      () => flight,
      () => { changeSegmentSeatmap(flight.value?.itineraries[0].segments[0].id) },
      { deep: true, immediate: true }
    )

    return {
      flight,
      seatmap,
      isLoading,
      isLoadingSeatmap,
      date,
      segmentSeatmap,
      dialogRef,
      onDialogHide,
      onCancelClick: onDialogCancel,
      getDateDiffFullFromat,
      changeSegmentSeatmap
    }
  }
})
</script>

<style scoped lang="scss">
.q-dialog-plugin {
  scroll-padding-top: 65px;

  .q-dialog-plugin__header {
    position: sticky;
    top: 0;
    z-index: 1;
  }
}
</style>
