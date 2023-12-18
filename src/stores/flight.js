import { defineStore } from 'pinia'
import { api } from 'boot/axios'

export const useFlightStore = defineStore('flight', {
  state: () => ({
    isLoading: false,
    flights: [],
    flight: null,
    inspiration: null,
    recommendations: []
  }),

  getters: {
    inspirationData: state => state.inspiration?.data || [],
    inspirationDictionaries: state => state.inspiration?.dictionaries || [],
    inspirationCurrency: state => state.inspiration?.meta.currency || 'EUR'
  },

  actions: {
    async getFlights(payload) {
      this.isLoading = true
      try {
        const response = await api.get('/v2/shopping/flight-offers', { params: payload })
        if (response.status === 200) {
          this.flights = response.data.data
          return true
        }
      } catch (_) {
        this.flights = []
      } finally {
        this.isLoading = false
      }
    },

    async resetFlights() {
      this.flights = []
    },

    async getFlightPricing(payload) {
      this.isLoading = true
      try {
        const response = await api.post('/v1/shopping/flight-offers/pricing', {
          data: {
            type: 'flight-offers-pricing', flightOffers: [payload]
          }
        })
        if (response.status === 200) {
          this.flight = response.data.data?.flightOffers[0] || null
          return true
        }
      } catch (_) {
        this.flight = null
      } finally {
        this.isLoading = false
      }
    },

    async getFlightInspiration(payload) {
      this.isLoading = true
      try {
        const response = await api.get('/v1/shopping/flight-destinations', { params: payload })
        if (response.status === 200) {
          this.inspiration = response.data || null
          return true
        }
      } catch (_) {
        this.inspiration = null
      } finally {
        this.isLoading = false
      }
    },

    async getRecommendations(payload) {
      this.isLoading = true
      try {
        const response = await api.get('/v1/reference-data/recommended-locations', { params: payload })
        if (response.status === 200) {
          this.recommendations = response.data.data || []
          return true
        }
      } catch (_) {
        this.recommendations = []
      } finally {
        this.isLoading = false
      }
    },

    async getLatLng(iataCode) {
      this.isLoading = true
      try {
        const { data } = await api.get('https://www.iatageo.com/getLatLng/' + iataCode)
        const foundData = this.inspiration?.data.find(item => item.destination === iataCode)
        if (foundData) {
          foundData.geoCode = {
            latitude: Number(data.latitude),
            longitude: Number(data.longitude)
          }
        }
        return {
          latitude: Number(data.latitude),
          longitude: Number(data.longitude)
        }
      } catch (_) {
        this.inspiration = null
      } finally {
        this.isLoading = false
      }
    }
  }
})
