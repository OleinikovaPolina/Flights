import axios from 'axios'
import {
  initFlightsOffers,
  initFlightPrice,
  initFlightDestinations,
  initRecommendations
} from './flights.js'

import { initAirports } from './airports.js'
import { initTraveled, initBooked, initBusiestperiod } from './analytic.js'
import { initSeatmap } from './seatmap.js'

let flightOffers = initFlightsOffers()
let flightPrice = initFlightPrice()
let flightDestinations = initFlightDestinations()
let recommendations = initRecommendations()
let airports = initAirports()
let traveled = initTraveled()
let booked = initBooked()
let busiestperiod = initBusiestperiod()
let seatmap = initSeatmap()

export const api = {
  get: url => {
    return new Promise(resolve => {
      setTimeout(() => {
        switch (url) {
          case '/v2/shopping/flight-offers':
            resolve({ data: flightOffers, status: 200 })
            break
          case '/v1/shopping/flight-destinations':
            resolve({ data: flightDestinations, status: 200 })
            break
          case '/v1/reference-data/recommended-locations':
            resolve({ data: recommendations, status: 200 })
            break
          case '/v1/reference-data/locations/cities':
            resolve({ data: airports, status: 200 })
            break
          case '/v1/travel/analytics/air-traffic/traveled':
            resolve({ data: traveled, status: 200 })
            break
          case '/v1/travel/analytics/air-traffic/booked':
            resolve({ data: booked, status: 200 })
            break
          case '/v1/travel/analytics/air-traffic/busiest-period':
            resolve({ data: busiestperiod, status: 200 })
            break
          default:
            resolve(axios.get(url))
            break
        }
      }, 300)
    })
  },

  post: url => {
    return new Promise(resolve => {
      switch (url) {
        case '/v1/shopping/flight-offers/pricing':
          resolve({ data: flightPrice, status: 200 })
          break
        case '/v1/shopping/seatmaps':
          resolve({ data: seatmap, status: 200 })
          break
      }
    })
  }
}
