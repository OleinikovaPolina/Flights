export const initAirports = () => ({
  data: [
    {
      type: 'location',
      subType: 'city',
      name: 'PARIS',
      iataCode: 'PAR',
      address: {
        CountryCode: 'FR'
      },
      geoCode: {
        latitude: '49.01278',
        longitude: '2.55'
      },
      relationships: [
        {
          id: 'CDG',
          type: 'Airport',
          href: '#/included/airports/CDG'
        },
        {
          id: 'ORY',
          type: 'Airport',
          href: '#/included/airports/ORY'
        }
      ]
    }
  ],
  included: {
    airports: {
      CDG: {
        name: 'CHARLES DE GAULLE',
        iataCode: 'CDG',
        subType: 'Airport'
      },
      ORY: {
        name: 'ORLY',
        iataCode: 'ORY',
        subType: 'Airport'
      }
    }
  },
  meta: {
    count: '1',
    links: {
      self: 'https://api.amadeus.net/v1/reference-data/locations/cities/keyword=PARIS&CountryCode=FR&include=AIRPORTS'
    }
  }
})
