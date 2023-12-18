import { defineStore } from 'pinia'
import { api } from 'boot/axios'

export const useSeatmapStore = defineStore('seatmap', {
  state: () => ({
    isLoading: false,
    seatmap: null
  }),

  getters: {
    dictionaries: state => state.seatmap?.dictionaries || {}
  },

  actions: {
    async getSeatmap(payload) {
      this.isLoading = true
      try {
        const response = await api.post('/v1/shopping/seatmaps', payload)
        if (response.status === 200) {
          this.seatmap = response.data
        }
      } catch (_) {
        this.seatmap = null
      } finally {
        this.isLoading = false
      }
    }
  }
})
