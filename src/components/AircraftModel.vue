<template>
  <div style="width: 100%; aspect-ratio: 2;">
    <renderer
      ref="renderer"
      antialias
      resize
      alpha
      :orbit-ctrl="{ enabled: false }"
    >
      <camera
        :position="{ x: 13, y: 6, z: 7 }"
        :aspect="2"
      />
      <scene>
        <ambient-light :intensity="15" />
        <box ref="box">
          <gltf-model
            src="glb/plane.glb"
            :position="{ x: 0, y: 1, z: 0 }"
          />
        </box>
      </scene>
    </renderer>
  </div>
</template>

<script>
import {
  AmbientLight,
  Camera,
  GltfModel,
  Renderer,
  Scene,
  Box
} from 'troisjs'
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  components: {
    AmbientLight,
    Camera,
    GltfModel,
    Renderer,
    Scene,
    Box
  },
  setup() {
    const renderer = ref(null)
    const box = ref(null)
    const rotateUp = ref(true)
    const maxRotation = 0.15

    onMounted(() => {
      renderer.value?.onBeforeRender(() => {
        if (rotateUp.value) {
          box.value.mesh.rotation.z += 0.001
        } else {
          box.value.mesh.rotation.z -= 0.001
        }
        if (maxRotation < box.value.mesh.rotation.z) {
          rotateUp.value = false
        }
        if (-maxRotation > box.value.mesh.rotation.z) {
          rotateUp.value = true
        }
      })
    })

    return {
      renderer,
      box
    }
  }
})
</script>
