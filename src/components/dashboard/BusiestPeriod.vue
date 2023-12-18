<template>
  <div class="chart-container">
    <v-chart
      v-if="busiestPeriod.length > 0"
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
import { LineChart } from 'echarts/charts'
import { TooltipComponent, GridComponent, MarkPointComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { storeToRefs } from 'pinia'
import { useAnalyticStore } from 'stores/analytic'
import { date, useQuasar } from 'quasar'
import VChart from 'vue-echarts'
import NoDataSvg from 'src/assets/undraw_no_data.svg'

use([TooltipComponent, GridComponent, MarkPointComponent, LineChart, CanvasRenderer])

const analyticStore = useAnalyticStore()
const { busiestPeriod } = storeToRefs(analyticStore)

const $q = useQuasar()

const maxPoints = computed(() => {
  const allPoints = busiestPeriod.value.map((item, i) => ({
    value: item.analytics.travelers.score,
    xAxis: i,
    yAxis: item.analytics.travelers.score
  }))
  const maxScore = Math.max(...allPoints.map(item => item.value))
  return allPoints.filter(item => item.value === maxScore)
})

const option = computed(() => ({
  grid: {
    left: '8%',
    right: '4%',
    bottom: '10%',
    top: '15%'
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: busiestPeriod.value.map(item =>
      date.formatDate(
        date.adjustDate(new Date(), {
          month: Number(item.period.split('-')[1])
        }),
        'MMM'
      )
    )
  },
  yAxis: {
    type: 'value',
    name: 'Count'
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
      data: busiestPeriod.value.map(item => item.analytics.travelers.score),
      type: 'line',
      areaStyle: {},
      symbol: 'none',
      smooth: true,
      itemStyle: { color: '#1976D2' },
      markPoint: {
        data: maxPoints.value
      }
    }
  ]
}))
</script>

<style scoped lang="scss">
.chart-container {
  height: 200px;
}
</style>
