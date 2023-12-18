<template>
  <q-card class="shadow-0 text-center">
    <q-card-section>
      <div class="text-h6">Aircraft cabin amenities</div>
      <div class="row flex-center q-mb-md">
        <div
          v-for="(medias, i) in amenities.seat.medias"
          :key="i"
          class="q-pa-sm"
        >
          <q-img
            :src="medias.href"
            spinner-color="primary"
            class="rounded-borders seatmap__media"
          >
            <div class="absolute-bottom">
              {{ medias.title }}
            </div>
            <q-tooltip>
              {{ medias.description.text }}
            </q-tooltip>
          </q-img>
        </div>
      </div>
      <div
        v-if="amenities"
        class="row flex-center"
      >
        <q-chip
          v-if="amenities.power"
          color="amber-14"
          text-color="white"
          icon="power"
          :size="$q.screen.lt.md ? 'sm' : 'md'"
        >
          Power
          <q-icon
            v-if="amenities.power.isChargeable"
            color="white"
            name="paid"
            class="q-ml-sm"
          />
          <q-tooltip>
            <div>
              Is chargeable:
              {{ amenities.power.isChargeable }}
            </div>
            <div>
              Power type:
              {{ amenities.power.powerType }}
            </div>
            <div>Usb type: {{ amenities.power.usbType }}</div>
          </q-tooltip>
        </q-chip>
        <q-chip
          v-if="amenities.wifi"
          color="amber-14"
          text-color="white"
          icon="wifi"
          :size="$q.screen.lt.md ? 'sm' : 'md'"
        >
          WiFi
          <q-icon
            v-if="amenities.wifi.isChargeable"
            color="white"
            name="paid"
            class="q-ml-sm"
          />
          <q-tooltip>
            <div>
              Is chargeable:
              {{ amenities.wifi.isChargeable }}
            </div>
            <div>
              Wifi coverage:
              {{ amenities.wifi.wifiCoverage }}
            </div>
          </q-tooltip>
        </q-chip>
        <q-chip
          v-if="amenities.food"
          color="amber-14"
          text-color="white"
          icon="restaurant"
          :size="$q.screen.lt.md ? 'sm' : 'md'"
        >
          Food
          <q-icon
            v-if="amenities.food.isChargeable"
            color="white"
            name="paid"
            class="q-ml-sm"
          />
          <q-tooltip>
            <div>
              Is chargeable:
              {{ amenities.food.isChargeable }}
            </div>
            <div>
              Food type:
              {{ amenities.food.foodType }}
            </div>
          </q-tooltip>
        </q-chip>
        <q-chip
          v-if="amenities.beverage"
          color="amber-14"
          text-color="white"
          icon="liquor"
          :size="$q.screen.lt.md ? 'sm' : 'md'"
        >
          Beverage
          <q-icon
            v-if="amenities.beverage.isChargeable"
            color="white"
            name="paid"
            class="q-ml-sm"
          />
          <q-tooltip>
            <div>
              Is chargeable:
              {{ amenities.beverage.isChargeable }}
            </div>
            <div>
              Beverage type:
              {{ amenities.beverage.beverageType }}
            </div>
          </q-tooltip>
        </q-chip>
        <q-chip
          v-if="amenities.entertainment.length > 0"
          color="amber-14"
          text-color="white"
          icon="smart_display"
          :size="$q.screen.lt.md ? 'sm' : 'md'"
        >
          Entertainment
          <q-icon
            v-if="amenities.entertainment.some((e) => e.isChargeable)"
            color="white"
            name="paid"
            class="q-ml-sm"
          />
          <q-tooltip class="q-ml-sm q-gutter-y-sm">
            <div
              v-for="(entertainment, i) in amenities.entertainment"
              :key="i"
            >
              <div>Is chargeable: {{ entertainment.isChargeable }}</div>
              <div>
                Entertainment type: {{ entertainment.entertainmentType }}
              </div>
            </div>
          </q-tooltip>
        </q-chip>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SeatmapInfoAmenities',

  props: {
    amenities: { type: Object, default: () => ({}) }
  },

  setup() {
    return {}
  }
})
</script>

<style scoped lang="scss">
.seatmap__media {
  width: 100px;
  aspect-ratio: 4/3;
  object-fit: cover;

  @media (min-width: 1024px) {
    width: 150px;
  }
}
</style>
