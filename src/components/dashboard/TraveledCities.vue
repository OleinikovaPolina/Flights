<template>
  <div class="chart-container text-center">
    <v-chart
      v-if="traveledCities.length > 0"
      :option="option"
      autoresize
      class="full-weight full-height"
    />
    <div
      v-else
      class="flex column items-center"
    >
      <no-data-svg
        height="100"
        class="q-mt-md"
      />
      <div class="text-h6 q-mt-md text-primary text-center">
        No information
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { use } from 'echarts/core'
import { BarChart } from 'echarts/charts'
import { TooltipComponent, GridComponent, MarkPointComponent, MarkLineComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { storeToRefs } from 'pinia'
import { useAnalyticStore } from 'stores/analytic'
import { useQuasar } from 'quasar'
import VChart from 'vue-echarts'
import NoDataSvg from 'src/assets/undraw_no_data.svg'

use([
  BarChart,
  TooltipComponent,
  MarkPointComponent,
  MarkLineComponent,
  GridComponent,
  CanvasRenderer
])

const analyticStore = useAnalyticStore()
const { traveledCities } = storeToRefs(analyticStore)

const $q = useQuasar()

const option = computed(() => ({
  grid: {
    left: '5%',
    right: '5%',
    bottom: '10%',
    top: '20%'
  },
  xAxis: {
    type: 'category',
    data: traveledCities.value.map(city => city.destination)
  },
  yAxis: {
    name: 'Count',
    type: 'value'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
    backgroundColor: $q.dark.isActive ? 'black' : 'white'
  },
  series: [
    {
      name: 'travelers',
      data: traveledCities.value.map(city => city.analytics.travelers.score),
      type: 'bar',
      itemStyle: { color: '#1976D2' },
      markPoint: {
        data: [
          { type: 'max', name: 'Max' },
          { type: 'min', name: 'Min' }
        ]
      },
      markLine: {
        data: [{ type: 'average', name: 'Avg' }]
      }
    },
    {
      name: 'flights',
      data: traveledCities.value.map(city => city.analytics.flights.score),
      type: 'bar',
      itemStyle: { color: '#81c784' },
      markPoint: {
        data: [
          { type: 'max', name: 'Max' },
          { type: 'min', name: 'Min' }
        ]
      },
      markLine: {
        data: [{ type: 'average', name: 'Avg' }]
      }
    }
  ]
}))
</script>

<style scoped lang="scss">
.chart-container {
  height: 250px;
}
</style>
