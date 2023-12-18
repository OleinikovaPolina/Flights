import { defineStore } from 'pinia'
import { api } from 'boot/axios'

export const useAirportStore = defineStore('airport', {
  state: () => ({
    isLoading: false,
    airports: []
  }),

  actions: {
    async getAirports(payload) {
      this.isLoading = true
      try {
        const response = await api.get('/v1/reference-data/locations/cities', {
          params: {
            include: 'AIRPORTS',
            keyword: payload.keyword
          }
        })
        if (response.status === 200) {
          const cities = response.data.data?.filter(city => city.iataCode) || []
          const res = []
          cities?.forEach(city => {
            res.push(city)
            city.relationships?.forEach(relationship => {
              const airport = response.data.included.airports[relationship.id]
              if (airport) {
                res.push(airport)
              }
            })
          })
          this.airports = res
          return res
        }
      } catch (_) {
        this.airports = []
      } finally {
        this.isLoading = false
      }
      return []
    }
  }
})
