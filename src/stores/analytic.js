import { defineStore } from 'pinia'
import { api } from 'boot/axios'

export const useAnalyticStore = defineStore('analytic', {
  state: () => ({
    isLoading: false,
    traveledCities: [],
    bookedCities: [],
    busiestPeriod: []
  }),

  actions: {
    async getTraveled(payload) {
      this.isLoading = true
      try {
        const response = await api.get('/v1/travel/analytics/air-traffic/traveled', { params: payload })
        if (response.status === 200) {
          this.traveledCities = response.data.data
        }
      } catch (_) {
        this.traveledCities = []
      } finally {
        this.isLoading = false
      }
    },

    async getBooked(payload) {
      this.isLoading = true
      try {
        const response = await api.get('/v1/travel/analytics/air-traffic/booked', { params: payload })
        if (response.status === 200) {
          this.bookedCities = response.data.data
        }
      } catch (_) {
        this.bookedCities = []
      } finally {
        this.isLoading = false
      }
    },

    async getBusiestPeriod(payload) {
      this.isLoading = true
      try {
        const response = await api.get('/v1/travel/analytics/air-traffic/busiest-period', { params: payload })
        if (response.status === 200) {
          this.busiestPeriod = response.data.data?.sort((a, b) => a.period > b.period ? 1 : -1)
        }
      } catch (_) {
        this.busiestPeriod = []
      } finally {
        this.isLoading = false
      }
    }
  }
})
