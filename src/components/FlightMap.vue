<template>
  <div class="flight-map relative-position">
    <v-chart
      ref="chart"
      autoresize
      manual-update
      class="full-width full-height"
    />
    <div
      v-if="loading"
      class="absolute fixed-top full-width full-height"
    >
      <world-icon class="full-width full-height absolute fixed-top flight-map__world-skeleton" />
      <div
        class="flex justify-center items-center full-height"
        :class="analytic ? $q.dark.isActive ? 'text-dark' : 'text-white' : 'text-primary'"
      >
        <q-spinner-ios
          size="2em"
          class="q-mr-md"
          :color="analytic ? $q.dark.isActive ? 'dark' : 'white' : 'primary'"
        />
        <div class="text-h6 text-center">
          Search flights...
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { use, registerMap } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { LinesChart, ScatterChart, EffectScatterChart } from 'echarts/charts'
import { GeoComponent, TooltipComponent } from 'echarts/components'
import { watch, ref, computed } from 'vue'
import VChart from 'vue-echarts'
import worldMap from 'src/assets/world.json'
import { useFlightStore } from 'stores/flight'
import { storeToRefs } from 'pinia'
import { geocluster } from 'src/libs/geocluster'
import { useQuasar } from 'quasar'
import WorldIcon from 'src/assets/world-icon.svg'

use([
  CanvasRenderer,
  ScatterChart,
  EffectScatterChart,
  LinesChart,
  GeoComponent,
  TooltipComponent
])

registerMap('world', worldMap)

const props = defineProps({
  loading: { type: Boolean, default: true },
  analytic: { type: Boolean, default: false },
  origin: { type: Object, required: true }
})

const chart = ref(null)
const $q = useQuasar()

const flightStore = useFlightStore()
const { inspirationData, inspirationDictionaries, inspirationCurrency } = storeToRefs(flightStore)


const routes = computed(() => inspirationData.value
  .filter(flight => flight.geoCode.longitude && flight.geoCode.latitude)
  .map(flight => [
    [props.origin.geoCode.longitude, props.origin.geoCode.latitude],
    [flight.geoCode.longitude, flight.geoCode.latitude]
  ]))

const clustered = computed(() => geocluster(
  inspirationData.value
    .filter(
      flight => flight.geoCode.longitude && flight.geoCode.latitude
    )
    .map(flight => [
      flight.geoCode.longitude,
      flight.geoCode.latitude,
      Number(flight.price.total),
      flight.destination
    ]),
  $q.screen.lt.md ? 1.7 : 0.85
))

const markers = computed(() => clustered.value.map(cluster => cluster.centroid))

const getAverage = numbers => {
  const sum = numbers.reduce((acc, number) => acc + number, 0)
  const { length } = numbers
  return Math.round(sum / length)
}

watch(
  () => [props.loading, $q.dark.isActive],
  ([newLoading, _]) => {
    if (!newLoading) {
      chart.value?.setOption({
        tooltip: {
          formatter(param) {
            const flight = inspirationData.value[param.dataIndex]
            return `${inspirationDictionaries.value.locations[flight.destination]?.detailedName} ${flight.price.total} ${inspirationCurrency.value}`
          },
          backgroundColor: $q.dark.isActive ? 'black' : 'white',
          position: 'bottom'
        },
        geo: {
          map: 'world',
          left: 0,
          right: 0,
          silent: true,
          itemStyle: {
            borderColor: $q.dark.isActive ? '#1D1D1D' : 'white',
            color: $q.dark.isActive ? '#1D1D1D' : 'white'
          }
        },
        series: [
          {
            type: 'lines',
            coordinateSystem: 'geo',
            data: routes.value,
            large: true,
            largeThreshold: 100,
            lineStyle: {
              opacity: 1,
              width: 1,
              curveness: 0.5,
              color: '#1976D2'
            }
          },
          {
            type: 'scatter',
            coordinateSystem: 'geo',
            data: inspirationData.value.map(flight => [
              flight.geoCode.longitude,
              flight.geoCode.latitude
            ]),
            symbolSize: 3,
            itemStyle: {
              color: '#1976D2'
            }
          },
          {
            type: 'scatter',
            coordinateSystem: 'geo',
            data: markers.value,
            symbolSize: 0,
            tooltip: {
              formatter(value) {
                const cluster = clustered.value[value.dataIndex]
                let res = ''
                cluster.elements.forEach(el => {
                  res += `${el[3]}: ${el[2]} ${inspirationCurrency.value}<br />`
                })
                return res
              },
              backgroundColor: $q.dark.isActive ? 'black' : 'white',
              rich: {
                b: {
                  padding: [0, 0, 2, 0],
                  color: $q.dark.isActive ? 'white' : 'grey',
                  fontSize: 8
                },
                value: {
                  align: 'center',
                  color: $q.dark.isActive ? 'white' : 'black',
                  fontSize: 10
                }
              }
            },
            label: {
              formatter: value => {
                if (!props.analytic) {
                  const cluster = clustered.value[value.dataIndex]
                  const cityCount = cluster.elements.length
                  const price = getAverage(cluster.elements.map(el => el[2]))
                  return `{b|${cityCount} places}\n{value|${price} ${inspirationCurrency.value}}`
                }
                return ''
              },
              show: true,
              position: 'top',
              backgroundColor: $q.dark.isActive ? 'black' : 'white',
              opacity: 1,
              shadowBlur: 5,
              shadowColor: $q.dark.isActive ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
              shadowOffsetX: 0,
              shadowOffsetY: 1,
              borderWidth: 1,
              borderRadius: 4,
              padding: [4, 10],
              rich: {
                b: {
                  padding: [0, 0, 2, 0],
                  color: 'grey',
                  fontSize: 8
                },
                value: {
                  align: 'center',
                  color: $q.dark.isActive ? 'white' : 'black',
                  fontSize: 10
                }
              }
            },
            itemStyle: {
              color: '#1976D2'
            }
          }
        ]
      })
    }
  }
)
</script>

<style scoped lang="scss">
.flight-map {
  aspect-ratio: 16/9;

  .marker {
    background: white;
    padding: 1em;
  }

  .flight-map__world-skeleton {
    z-index: -1;
    filter: blur(2px);
    transform: scale(1, 1.33) translate(0%, 6.8%);
  }
}

.body--light .flight-map__world-skeleton {
  color: white
}

.body--dark .flight-map__world-skeleton {
  color: #1D1D1D
}
</style>
