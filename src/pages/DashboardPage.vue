<template>
  <q-page>
    <q-select
      v-model="origin"
      :options="originAirports || []"
      label="Origin"
      option-value="iataCode"
      option-label="name"
      class="col-6 q-mb-md"
      filled
      :bg-color="$q.dark.isActive ? 'dark' : 'white'"
      use-input
      hide-selected
      fill-input
      input-debounce="1000"
      :loading="isLoadingAirports"
      @filter="filterAirportsOptions"
      @update:model-value="getAllAnalytic"
    >
      <template #option="scope">
        <q-item v-bind="scope.itemProps">
          <q-item-section>
            <q-item-label :class="{ 'q-pl-md': scope.opt.subType === 'Airport' }">
              {{ scope.opt.name }} ({{ scope.opt.iataCode }})
            </q-item-label>
          </q-item-section>
        </q-item>
      </template>
      <template #no-option>
        <q-item>
          <q-item-section class="text-grey"> Enter city </q-item-section>
        </q-item>
      </template>
    </q-select>

    <div class="relative-position">
      <div class="row items-stretch q-col-gutter-md">
        <div class="col-12 col-md-4">
          <q-card
            class="shadow-0 full-height"
            :class="$q.dark.isActive ? 'bg-blue-4 text-dark' : 'bg-blue text-white'"
          >
            <q-card-section class="row items-center justify-between no-wrap full-height">
              <div class="col-6">
                <div>Number of recommended flights</div>
                <div class="text-h5">
                  {{ inspirationData.length }}
                </div>
              </div>
              <div class="col-6 full-height">
                <flight-map
                  :origin="origin"
                  :loading="loadingMap"
                  :analytic="true"
                />
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-4">
          <q-card
            class="shadow-0 full-height"
            :class="$q.dark.isActive ? 'bg-green-4 text-dark' : 'bg-green text-white'"
          >
            <q-card-section class="row items-center justify-between no-wrap full-height">
              <div>
                <div>The most traveled city in {{ analyticMonth }}</div>
                <template v-if="traveledCities.length > 0">
                  <div class="text-h5">
                    {{ traveledCities[0].destination }}
                  </div>
                  <div>
                    travelers: {{ traveledCities[0].analytics.travelers.score }}
                  </div>
                  <div>
                    flights: {{ traveledCities[0].analytics.flights.score }}
                  </div>
                </template>
                <div
                  v-else
                  class="text-h5"
                >Looking for...</div>
              </div>
              <div>
                <img
                  :src="travelSVG"
                  alt="travel"
                  style="height: 100px"
                />
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-4">
          <q-card
            class="shadow-0 full-height"
            :class="$q.dark.isActive ? 'bg-amber-4 text-dark' : 'bg-amber text-white'"
          >

            <q-card-section class="row items-center justify-between no-wrap full-height">
              <div>
                <div>The most booked city in {{ analyticMonth }}</div>
                <template v-if="bookedCities.length > 0">
                  <div class="text-h5">
                    {{ bookedCities[0].destination }}
                  </div>
                  <div>
                    travelers: {{ bookedCities[0].analytics.travelers.score }}
                  </div>
                  <div>
                    flights: {{ bookedCities[0].analytics.flights.score }}
                  </div>
                </template>
                <div
                  v-else
                  class="text-h5"
                >Looking for...</div>
              </div>
              <div>
                <img
                  :src="ticketSVG"
                  alt="travel"
                  style="height: 100px"
                />
              </div>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-md-4">
          <q-card class="shadow-0">
            <q-card-section>
              <div class="text-h6 q-mb-md text-center">Recommended Flights</div>
              <flights-graph :origin="origin" />
            </q-card-section>
          </q-card>

          <q-card class="shadow-0 q-mt-md">
            <q-card-section class="text-center no-wrap">
              <div class="text-h6 q-mb-sm">Flight Busiest Traveling Period</div>
              <q-input
                v-model="analyticYear"
                label="Year"
                class="q-mb-lg"
                @update:model-value="getBusiestPeriodDebounce"
              />
              <busiest-period />
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-md-8">
          <q-card class="shadow-0">
            <q-card-section>
              <q-input
                v-model="analyticMonth"
                type="month"
                label="Month and year"
                class="q-mb-md"
                @update:model-value="getAnalyticMonthDebounce"
              />

              <div class="text-h6 q-mb-md text-center">
                Flight Most Traveled Destinations
              </div>
              <traveled-cities />

              <div class="text-h6 q-mb-md text-center">
                Flight Most Booked Destinations
              </div>
              <booked-cities />
            </q-card-section>
          </q-card>
        </div>
      </div>

      <q-inner-loading :showing="loadingMap || isLoading">
        <q-spinner-ios
          color="primary"
          size="4em"
        />
        <div class="text-primary q-mt-md">Search info...</div>
      </q-inner-loading>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import { useAnalyticStore } from 'stores/analytic'
import { useFlightStore } from 'stores/flight'
import { storeToRefs } from 'pinia'
import { date, debounce } from 'quasar'
import TraveledCities from 'components/dashboard/TraveledCities.vue'
import FlightMap from 'components/FlightMap.vue'
import FlightsGraph from 'components/dashboard/FlightsGraph.vue'
import BookedCities from 'components/dashboard/BookedCities.vue'
import BusiestPeriod from 'components/dashboard/BusiestPeriod.vue'
import { useAirportStore } from 'src/stores/airport'
import travelSVG from 'src/assets/travel.svg?href'
import ticketSVG from 'src/assets/ticket.svg?href'

export default defineComponent({
  name: 'DashboardPage',

  components: {
    BookedCities,
    FlightsGraph,
    FlightMap,
    TraveledCities,
    BusiestPeriod
  },

  setup() {
    const loadingMap = ref(true)
    const origin = ref({ iataCode: 'PAR', name: 'Paris' })
    const analyticYear = ref('2017')
    const analyticMonth = ref(date.formatDate(date.adjustDate(new Date(), { year: 2017 }), 'YYYY-MM'))

    const originAirports = ref([])

    const analyticStore = useAnalyticStore()
    const { bookedCities, traveledCities, isLoading } = storeToRefs(analyticStore)

    const flightStore = useFlightStore()
    const { inspirationData } = storeToRefs(flightStore)

    const airportStore = useAirportStore()
    const isLoadingAirports = storeToRefs(airportStore).isLoading


    onMounted(async () => {
      getAllAnalytic()
    })

    const getAllAnalytic = () => {
      getBusiestPeriod()
      getAnalyticMonth()
      getFlightInspiration()
    }

    const getAnalyticMonth = async () => {
      if (date.isValid(analyticMonth.value)) {
        await analyticStore.getTraveled({
          originCityCode: origin.value.iataCode,
          period: analyticMonth.value
        })
        await analyticStore.getBooked({
          originCityCode: origin.value.iataCode,
          period: analyticMonth.value
        })
      }
    }

    const getAnalyticMonthDebounce = debounce(getAnalyticMonth, 1000)

    const getFlightInspiration = async () => {
      loadingMap.value = true

      await flightStore.getFlightInspiration({ origin: origin.value.iataCode })

      const promises = []
      inspirationData.value.forEach(item => {
        promises.push(flightStore.getLatLng(item.destination))
      })
      await Promise.all(promises)

      origin.value.geoCode = await flightStore.getLatLng(origin.value.iataCode)

      loadingMap.value = false
    }

    const getBusiestPeriod = async () => {
      await analyticStore.getBusiestPeriod({
        cityCode: origin.value.iataCode,
        period: analyticYear.value,
        direction: 'ARRIVING'
      })
    }

    const getBusiestPeriodDebounce = debounce(getBusiestPeriod, 1000)

    const filterAirportsOptions = async (needle, update) => {
      await update(async () => {
        if (needle) {
          originAirports.value = await airportStore.getAirports({
            keyword: needle.toLowerCase()
          })
        }
      })
    }

    return {
      isLoading,
      loadingMap,
      inspirationData,
      origin,
      analyticMonth,
      analyticYear,
      bookedCities,
      traveledCities,
      originAirports,
      getAnalyticMonthDebounce,
      getBusiestPeriodDebounce,
      isLoadingAirports,
      travelSVG,
      ticketSVG,
      filterAirportsOptions,
      getFlightInspiration,
      getAllAnalytic
    }
  }
})
</script>

<style scoped lang="scss">
.body--dark img {
  filter: invert(1)
}
</style>
