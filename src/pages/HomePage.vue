<template>
  <q-page>
    <div class="row items-center">
      <div
        class="col-12 col-md-4"
        :class="{ 'text-center': $q.screen.lt.md }"
      >
        <div class="text-h4 q-my-lg">Welcome to the world of travel opportunities!</div>
        <div>We are your source for smooth travel planning. With our innovative flight search, seat map view and flight
          analytics service, you get access to flight information around the world.</div>

        <div class="row q-mt-lg">
          <div
            v-if="totalFlights"
            class="col"
          >
            <div>Total number</div>
            <div class="text-h6">{{ totalFlights }} cities</div>
          </div>
          <div
            v-if="avgPrice"
            class="col"
          >
            <div>Average price</div>
            <div class="text-h6">{{ avgPrice }} {{ inspirationCurrency }}</div>
          </div>
          <div
            v-if="avgPeriod"
            class="col"
          >
            <div>Average period</div>
            <div class="text-h6">{{ avgPeriod }} days</div>
          </div>
        </div>

        <div
          v-if="totalFlights || avgPrice || avgPeriod"
          class="text-caption text-grey"
        >
          * for Paris
        </div>

        <q-btn
          color="amber-14"
          unelevated
          to="/flights"
          class="q-my-lg"
        >
          Search flights
        </q-btn>
      </div>
      <div class="col-12 col-md-8">
        <flight-map
          :loading="loading"
          :origin="origin"
        />
      </div>
    </div>

    <div class="text-h4 text-center q-mt-lg">Recommended flights</div>
    <div class="flex justify-center">
      <div
        v-if="!isLoading && recommends.length > 0"
        class="row q-col-gutter-md q-my-lg"
      >
        <div
          v-for="(recommend, i) in recommends"
          :key="i"
          class="col-12 col-md-auto"
        >
          <q-card class="shadow-0">
            <q-card-section>
              <div class="text-h6">
                {{ recommend.name }}
              </div>
              <div class="text-grey">
                {{ date.formatDate(recommend.departureDate, "YYYY/MM/DD, dddd") }}
              </div>
              <div class="text-grey">
                {{ date.formatDate(recommend.returnDate, "YYYY/MM/DD, dddd") }}
              </div>
            </q-card-section>
            <q-separator />
            <q-card-section>
              <div>{{ recommend.price.total }} {{ inspirationCurrency }}</div>
              <q-btn
                color="amber-14"
                unelevated
                size="sm"
                class="full-width q-mt-sm"
                @click="getLinkRecommendation(recommend)"
              >
                Flights
              </q-btn>
            </q-card-section>
          </q-card>
        </div>
      </div>

      <div
        v-else
        class="flex column items-center"
      >
        <best-place-svg
          height="150"
          class="q-mt-md"
        />
        <div class="text-h6 q-mt-md text-primary text-center">
          <template v-if="loading">
            <q-spinner-ios
              color="primary"
              size="2em"
              class="q-mr-md"
            />
            Search recommended flights...
          </template>
          <template v-else>
            Not found(
          </template>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { computed, defineComponent, onMounted, ref } from 'vue'
import { date } from 'quasar'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useFlightStore } from 'stores/flight'
import FlightMap from 'components/FlightMap.vue'
import BestPlaceSvg from 'src/assets/undraw_best_place.svg'

export default defineComponent({
  name: 'HomePage',

  components: { FlightMap, BestPlaceSvg },

  setup() {
    const loading = ref(true)
    const origin = ref({
      iataCode: 'PAR',
      name: 'Paris',
      geoCode: {
        latitude: 48.72333,
        longitude: 2.37944
      }
    })

    const router = useRouter()

    const flightStore = useFlightStore()
    const { inspirationData, recommendations, inspirationCurrency, isLoading } = storeToRefs(flightStore)

    const recommends = computed(() =>
      recommendations.value.reduce((res, recommendation) => {
        const inspiration = inspirationData.value.find(
          inspiration => inspiration.destination === recommendation.iataCode
        )
        if (inspiration) {
          res.push({ ...recommendation, ...inspiration })
        }
        return res
      }, [])
    )

    const avgPrice = computed(() => {
      const prices = inspirationData.value.map(item => Number(item.price.total))
      const sum = prices.reduce((acc, number) => acc + number, 0)
      const { length } = prices
      return Math.round(sum / length)
    })

    const totalFlights = computed(() => {
      return inspirationData.value.length
    })

    const avgPeriod = computed(() => {
      const periods = inspirationData.value.map(item => date.getDateDiff(item.returnDate, item.departureDate, 'days'))
      const sum = periods.reduce((acc, number) => acc + number, 0)
      const { length } = periods
      return Math.round(sum / length)
    })


    const getFlightInspiration = async () => {
      await flightStore.getRecommendations({
        cityCodes: origin.value.iataCode
      })
      await flightStore.getFlightInspiration({ origin: origin.value.iataCode })

      const promises = []
      inspirationData.value.forEach(item => {
        promises.push(flightStore.getLatLng(item.destination))
      })
      await Promise.all(promises)

      loading.value = false
    }

    const getLinkRecommendation = recommend => {
      router.push({
        path: '/flights',
        query: {
          origin: recommend.origin,
          destination: recommend.destination,
          return: recommend.returnDate,
          departure: recommend.departureDate,
          adults: 1
        }
      })
    }

    onMounted(async () => await getFlightInspiration())

    return {
      slide: ref(1),
      isLoading,
      inspirationCurrency,
      origin,
      date,
      recommends,
      loading,
      avgPrice,
      totalFlights,
      avgPeriod,
      getLinkRecommendation
    }
  }
})
</script>

<style scoped lang="scss">
svg {
  color: var(--bg-color)
}
</style>
