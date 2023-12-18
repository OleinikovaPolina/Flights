<template>
  <div class="chart-container text-center">
    <v-chart
      v-if="inspirationData.length > 0"
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
import { watch, ref } from 'vue'
import { use } from 'echarts/core'
import { GraphChart } from 'echarts/charts'
import { TooltipComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { storeToRefs } from 'pinia'
import { useFlightStore } from 'stores/flight'
import { useQuasar } from 'quasar'
import VChart from 'vue-echarts'
import NoDataSvg from 'src/assets/undraw_no_data.svg'

use([TooltipComponent, GraphChart, CanvasRenderer])

const props = defineProps({
  origin: { type: Object, required: true }
})

const $q = useQuasar()

let data = ref([])
let links = ref([])
let option = ref({})

const flightStore = useFlightStore()
const { inspirationData, inspirationCurrency } = storeToRefs(flightStore)

watch(
  () => inspirationData.value,
  () => {
    data.value = [
      {
        id: 0,
        name: props.origin.iataCode,
        symbolSize: 20,
        itemStyle: { color: '#81c784' },
        category: 1,
        label: {
          show: true
        }
      }
    ]

    const maxPrice = Math.max(
      ...inspirationData.value.map(item => Number(item.price.total))
    )

    data.value = data.value.concat(
      inspirationData.value.map((item, i) => ({
        id: i + 1,
        name: item.destination,
        symbolSize: (Number(item.price.total) / maxPrice) * 20,
        value: `${item.price.total} ${inspirationCurrency.value}`,
        category: 0,
        itemStyle: { color: '#1976D2' },
        label: {
          show: true
        }
      }))
    )

    links.value = inspirationData.value.map((_, i) => ({
      source: 0,
      target: i + 1
    }))

    option.value = {
      tooltip: {
        backgroundColor: $q.dark.isActive ? 'black' : 'white'
      },
      animationDurationUpdate: 500,
      animationEasingUpdate: 'quinticInOut',
      series: [
        {
          type: 'graph',
          layout: 'circular',
          circular: {
            rotateLabel: true
          },
          data: data.value,
          links: links.value,
          categories: [0, 1],
          label: {
            position: 'right',
            formatter: '{b}'
          },
          lineStyle: {
            color: 'source',
            curveness: 0.1
          }
        }
      ]
    }
  },
  { deep: true, immediate: true }
)
</script>

<style scoped lang="scss">
.chart-container {
  height: 250px;
}
</style>
