<template>
  <q-page class="text-center flex flex-center">
    <div class="row items-center full-width">
      <div class="col-12 col-md-6 relative-position">
        <div class="absolute not-found__line-container">
          <line-svg class="not-found__line-svg" />
        </div>
        <aircraft-model />
      </div>
      <div class="col-12 col-md-6">
        <div class="text-h1">404</div>

        <div
          class="text-h3"
          style="opacity: 0.4"
        >
          Oops. Nothing here...
        </div>

        <q-btn
          class="q-mt-xl"
          color="white"
          text-color="blue"
          unelevated
          to="/"
          label="Go Home"
          no-caps
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import AircraftModel from 'components/AircraftModel.vue'
import LineSvg from 'src/assets/line.svg'

export default defineComponent({
  name: 'ErrorNotFound',
  components: { AircraftModel, LineSvg }
})
</script>

<style scoped lang="scss">
.not-found__line-container {
  top: 39%;
  left: 25%;
  transform: rotate(-10deg);
  width: 16%;
  overflow: hidden;
  aspect-ratio: 10/3;

  .not-found__line-svg {
    position: relative;
    width: 200%;
    animation: wave 2s linear infinite;
  }
}

@keyframes wave {
  0% {
    left: -85%;
  }

  100% {
    left: 0;
  }
}
</style>
