<template>
  <q-page>
    <q-form
      ref="formRequired"
      @submit="addRouteQuery"
    >
      <div class="row q-col-gutter-x-lg relative-position">
        <q-select
          v-model="filters.origin"
          :options="originAirports || []"
          label="Origin"
          option-value="iataCode"
          option-label="name"
          class="col-6"
          filled
          :bg-color="$q.dark.isActive ? 'dark' : 'white'"
          :rules="[(val) => !!val]"
          use-input
          hide-selected
          fill-input
          input-debounce="1000"
          :loading="isLoadingAirports"
          @filter="(val, update) => filterAirportsOptions(val, update, 'origin')"
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
        <q-select
          v-model="filters.destination"
          :options="destinationAirports || []"
          label="Destination"
          option-value="iataCode"
          option-label="name"
          class="col-6"
          filled
          :bg-color="$q.dark.isActive ? 'dark' : 'white'"
          :rules="[(val) => !!val]"
          use-input
          hide-selected
          fill-input
          input-debounce="1000"
          :loading="isLoadingAirports"
          @filter="(val, update) => filterAirportsOptions(val, update, 'destination')"
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

        <div class="absolute-center q-pb-md">
          <q-btn
            icon="sync_alt"
            color="primary"
            size="sm"
            round
            unelevated
            @click="swapOriginDestination"
          />
        </div>
      </div>

      <div class="row q-col-gutter-x-lg">
        <q-input
          v-model="filters.departureDate"
          filled
          label="Departure date"
          :bg-color="$q.dark.isActive ? 'dark' : 'white'"
          mask="date"
          class="col-6 col-md-3"
          :rules="[
            'date',
            (val) => !!val,
            (val) =>
              val >= date.formatDate(new Date(), 'YYYY/MM/DD') ||
              '* Later today',
          ]"
        >
          <template #append>
            <q-icon
              name="event"
              class="cursor-pointer"
            >
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date
                  v-model="filters.departureDate"
                  :options="departureDateOptions"
                >
                  <div class="row items-center justify-end">
                    <q-btn
                      v-close-popup
                      label="Close"
                      color="primary"
                      flat
                    />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <q-input
          v-model="filters.returnDate"
          filled
          label="Return date"
          :bg-color="$q.dark.isActive ? 'dark' : 'white'"
          mask="date"
          class="col-6 col-md-3"
          :rules="[
            (val) => val === null || date.isValid(val) || '* Invalid date',
            (val) =>
              val === null || val > filters.departureDate || '* Later departure date',
            (val) =>
              val === null ||
              val >= date.formatDate(new Date(), 'YYYY/MM/DD') ||
              '* Later today',
          ]"
        >
          <template #append>
            <q-icon
              name="event"
              class="cursor-pointer"
            >
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date
                  v-model="filters.returnDate"
                  :options="returnDateOptions"
                >
                  <div class="row items-center justify-end">
                    <q-btn
                      v-close-popup
                      label="Close"
                      color="primary"
                      flat
                    />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

        <q-input
          v-model.number="filters.adults"
          label="Adults"
          type="number"
          class="col-6 col-md-3"
          min="1"
          filled
          :bg-color="$q.dark.isActive ? 'dark' : 'white'"
          :rules="[
            (val) => val > 0,
            (val) => val + filters.children <= 9 || '* Too many people',
          ]"
        />
        <div class="col-6 col-md-3">
          <q-btn
            color="amber-14"
            unelevated
            class="full-width"
            type="submit"
            style="height: 56px"
          >
            Search
          </q-btn>
        </div>
      </div>
    </q-form>

    <div class="row q-col-gutter-x-lg">
      <div
        v-if="$q.screen.lt.md"
        class="flex justify-center full-width"
      >
        <q-btn
          unelevated
          color="primary"
          class="full-width"
          @click="showFilters = !showFilters"
        >
          {{ showFilters ? 'Less' : 'More' }} filters
        </q-btn>
      </div>
      <div
        class="col-12 col-md-4 q-py-md"
        :class="{ 'order-last': !$q.screen.lt.md }"
      >
        <q-form
          v-if="showFilters || !$q.screen.lt.md"
          ref="formFilters"
          class="q-gutter-y-md"
          @submit="addRouteQuery"
        >
          <q-toggle
            v-model="filters.nonStop"
            label="Non stop"
          />
          <q-select
            v-model="filters.travelClass"
            :options="travelClassOptions || []"
            label="Travel class"
            option-value="iataCode"
            option-label="name"
            :bg-color="$q.dark.isActive ? 'dark' : 'white'"
            filled
          />
          <q-input
            v-model.number="filters.children"
            label="Children"
            type="number"
            min="0"
            filled
            :bg-color="$q.dark.isActive ? 'dark' : 'white'"
            hint="from 2 to 12 years"
            :rules="[
              (val) => val >= 0 || '* Non-negative number',
              (val) => val + filters.adults <= 9 || '* Too many people',
            ]"
          />
          <q-input
            v-model.number="filters.infants"
            label="Infants"
            type="number"
            min="0"
            filled
            :bg-color="$q.dark.isActive ? 'dark' : 'white'"
            hint="up to 2 years, without a place"
            :rules="[(val) => val >= 0 || '* Non-negative number']"
          />
          <q-input
            v-model.number="filters.maxPrice"
            label="Max price"
            type="number"
            min="0"
            filled
            :bg-color="$q.dark.isActive ? 'dark' : 'white'"
            :rules="[(val) => val >= 0 || '* Non-negative number']"
          />
          <q-btn
            color="amber-14"
            unelevated
            class="full-width"
            type="submit"
          >
            Filter
          </q-btn>
        </q-form>
      </div>

      <div class="col-12 col-md-8 q-pt-md">
        <div class="relative-position full-height">
          <div
            v-if="flights.length > 0"
            class="q-gutter-y-lg"
          >
            <q-card
              v-for="(flight, i) in flights"
              :key="i"
              class="shadow-0"
            >
              <flight-info :flight="flight" />
              <q-separator />
              <q-card-section class="row justify-between items-center">
                <q-btn
                  color="amber-14"
                  unelevated
                  @click="showDialog(flight)"
                >
                  More
                </q-btn>
                <div class="text-h5">
                  {{ flight.price.total }} {{ flight.price.currency }}
                </div>
              </q-card-section>
            </q-card>
          </div>

          <div
            v-else-if="notFound"
            class="text-center flex-center"
          >
            <stranded-traveler-svg
              height="150"
              class="q-mt-md"
            />
            <div>Not found...</div>
          </div>

          <div
            v-else
            class="text-center flex-center"
          >
            <travel-booking-svg
              height="150"
              class="q-mt-md"
            />
            <div>There will be found flights here</div>
          </div>

          <q-inner-loading
            :showing="isLoading"
            class="q-pt-lg"
            style="justify-content: start"
          >
            <q-spinner-ios
              color="primary"
              size="4em"
            />
            <div class="text-primary q-mt-md">Search flights...</div>
          </q-inner-loading>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, nextTick, onMounted, reactive, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useFlightStore } from 'stores/flight'
import { useAirportStore } from 'stores/airport'
import { date } from 'quasar'
import { useRoute, useRouter } from 'vue-router'
import FlightInfo from 'components/FlightInfo.vue'
import FlightDialog from 'components/FlightDialog.vue'
import { useQuasar } from 'quasar'
import { useSeatmapStore } from 'src/stores/seatmap'
import StrandedTravelerSvg from 'src/assets/undraw_stranded_traveler.svg'
import TravelBookingSvg from 'src/assets/undraw_travel_booking.svg'

export default defineComponent({
  name: 'FlightsPage',
  components: { FlightInfo, StrandedTravelerSvg, TravelBookingSvg },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const $q = useQuasar()

    const filters = reactive({
      origin: null,
      destination: null,
      departureDate: null,
      returnDate: null,
      adults: 1,
      children: 0,
      infants: 0,
      travelClass: null,
      nonStop: false,
      maxPrice: null
    })

    const formRequired = ref(null)
    const formFilters = ref(null)
    const notFound = ref(false)
    const showFilters = ref(false)

    const originAirports = ref([])
    const destinationAirports = ref([])
    const travelClassOptions = [
      'ECONOMY',
      'PREMIUM_ECONOMY',
      'BUSINESS',
      'FIRST'
    ]

    const flightStore = useFlightStore()
    const { flights, isLoading } = storeToRefs(flightStore)

    const airportStore = useAirportStore()
    const isLoadingAirports = storeToRefs(airportStore).isLoading

    const seatmapStore = useSeatmapStore()

    onMounted(() => getRouteQuery())

    watch(route, () => getRouteQuery(), { deep: true })

    const getFlights = async () => {
      if (
        filters.origin?.iataCode &&
        filters.destination?.iataCode &&
        filters.departureDate &&
        filters.adults > 0 &&
        filters.adults + filters.children <= 9 &&
        filters.departureDate >= date.formatDate(new Date(), 'YYYY-MM-DD') &&
        (!filters.returnDate || filters.returnDate >= date.formatDate(filters.departureDate, 'YYYY-MM-DD'))
      ) {
        await flightStore.getFlights({
          originLocationCode: filters.origin?.iataCode,
          destinationLocationCode: filters.destination?.iataCode,
          departureDate: date.formatDate(filters.departureDate, 'YYYY-MM-DD'),
          returnDate: date.formatDate(filters.returnDate, 'YYYY-MM-DD'),
          max: 20,
          adults: filters.adults,
          children: filters.children,
          infants: filters.infants,
          travelClass: filters.travelClass,
          nonStop: filters.nonStop,
          maxPrice: filters.maxPrice
        })
        notFound.value = flights.value.length > 0
      } else {
        flightStore.resetFlights()
        notFound.value = false
      }
    }

    const getRouteQuery = async () => {
      if (route.query.origin) {
        filters.origin = originAirports.value.find(
          airport => airport.iataCode === route.query.origin
        )
        if (!filters.origin) {
          const foundOrigin = {
            name: route.query.origin,
            iataCode: route.query.origin
          }
          filters.origin = foundOrigin
          originAirports.value = [foundOrigin]
        }
      } else {
        filters.origin = null
      }
      if (route.query.destination) {
        filters.destination = destinationAirports.value.find(
          airport => airport.iataCode === route.query.destination
        )
        if (!filters.destination) {
          const foundDestination = {
            name: route.query.destination,
            iataCode: route.query.destination
          }
          filters.destination = foundDestination
          destinationAirports.value = [foundDestination]
        }
      } else {
        filters.destination = null
      }
      filters.departureDate = route.query.departure || null
      filters.returnDate = route.query.return || null
      filters.adults = route.query.adults ? Number(route.query.adults) : 1
      filters.children = route.query.children ? Number(route.query.children) : 0
      filters.infants = route.query.infants ? Number(route.query.infants) : 0
      filters.nonStop = route.query.nonStop === 'true'
      filters.maxPrice = route.query.maxPrice
        ? Number(route.query.maxPrice)
        : null
      filters.travelClass = travelClassOptions.find(tClass => tClass === route.query.travelClass) || null

      getFlights()

      nextTick(() => {
        formRequired.value?.resetValidation()
        formFilters.value?.resetValidation()
      })
    }

    const addRouteQuery = () => {
      const query = {}
      if (filters.origin?.iataCode) {
        query.origin = filters.origin.iataCode
      }
      if (filters.destination?.iataCode) {
        query.destination = filters.destination.iataCode
      }
      if (filters.departureDate) {
        query.departure = filters.departureDate
      }
      if (filters.returnDate) {
        query.return = filters.returnDate
      }
      if (filters.adults) {
        query.adults = filters.adults
      }
      if (filters.children) {
        query.children = filters.children
      }
      if (filters.infants) {
        query.infants = filters.infants
      }
      if (filters.nonStop) {
        query.nonStop = filters.nonStop
      }
      if (filters.maxPrice) {
        query.maxPrice = filters.maxPrice
      }
      if (filters.travelClass) {
        query.travelClass = filters.travelClass
      }
      router.push({ query })
    }

    const filterAirports = async (val, type) => {
      if (val) {
        const needle = val.toLowerCase()
        if (type === 'origin') {
          originAirports.value = await airportStore.getAirports({
            keyword: needle
          })
        }
        if (type === 'destination') {
          destinationAirports.value = await airportStore.getAirports({
            keyword: needle
          })
        }
      }
    }

    const filterAirportsOptions = async (val, update, type) => {
      await update(async () => { await filterAirports(val, type) })
    }

    const returnDateOptions = d => {
      if (filters.departureDate) {
        return d > filters.departureDate
      }
      return d >= date.formatDate(new Date(), 'YYYY/MM/DD')
    }

    const departureDateOptions = d => {
      return d >= date.formatDate(new Date(), 'YYYY/MM/DD')
    }

    const swapOriginDestination = () => {
      [filters.origin, filters.destination] = [filters.destination, filters.origin]

      const originAirportsCopy = originAirports.value
      originAirports.value = destinationAirports.value
      destinationAirports.value = originAirportsCopy
    }

    const showDialog = showFlight => {
      flightStore.getFlightPricing(showFlight)
      seatmapStore.getSeatmap({ data: [showFlight] })
      $q.dialog({ component: FlightDialog })
    }

    return {
      date,
      filters,
      originAirports,
      destinationAirports,
      travelClassOptions,
      flights,
      isLoading,
      notFound,
      showFilters,
      formRequired,
      formFilters,
      isLoadingAirports,
      returnDateOptions,
      departureDateOptions,
      filterAirportsOptions,
      addRouteQuery,
      swapOriginDestination,
      showDialog
    }
  }
})
</script>
