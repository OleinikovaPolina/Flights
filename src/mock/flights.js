export const initFlightsOffers = () => ({
  'data': [
    {
      'type': 'flight-offer',
      'id': '1',
      'source': 'GDS',
      'instantTicketingRequired': false,
      'nonHomogeneous': false,
      'oneWay': false,
      'lastTicketingDate': '2039-12-12',
      'lastTicketingDateTime': '2039-12-12',
      'numberOfBookableSeats': 9,
      'itineraries': [
        {
          'duration': 'PT16H34M',
          'segments': [
            {
              'departure': {
                'iataCode': 'CDG',
                'terminal': '1',
                'at': '2039-12-13T13:10:00'
              },
              'arrival': {
                'iataCode': 'KEF',
                'at': '2039-12-13T15:50:00'
              },
              'carrierCode': 'FI',
              'number': '545',
              'aircraft': {
                'code': '7M8'
              },
              'operating': {
                'carrierCode': 'FI'
              },
              'duration': 'PT3H40M',
              'id': '17',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'KEF',
                'at': '2039-12-13T17:05:00'
              },
              'arrival': {
                'iataCode': 'BOS',
                'terminal': 'E',
                'at': '2039-12-13T17:50:00'
              },
              'carrierCode': 'FI',
              'number': '631',
              'aircraft': {
                'code': '76W'
              },
              'operating': {
                'carrierCode': 'FI'
              },
              'duration': 'PT5H45M',
              'id': '18',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'BOS',
                'terminal': 'C',
                'at': '2039-12-13T20:45:00'
              },
              'arrival': {
                'iataCode': 'ATL',
                'terminal': 'N',
                'at': '2039-12-13T23:44:00'
              },
              'carrierCode': 'FI',
              'number': '7901',
              'aircraft': {
                'code': 'E90'
              },
              'operating': {
                'carrierCode': 'B6'
              },
              'duration': 'PT2H59M',
              'id': '19',
              'numberOfStops': 0,
              'blacklistedInEU': false
            }
          ]
        },
        {
          'duration': 'PT18H20M',
          'segments': [
            {
              'departure': {
                'iataCode': 'ATL',
                'terminal': 'N',
                'at': '2039-12-15T11:40:00'
              },
              'arrival': {
                'iataCode': 'JFK',
                'terminal': '5',
                'at': '2039-12-15T13:51:00'
              },
              'carrierCode': 'FI',
              'number': '7904',
              'aircraft': {
                'code': 'E90'
              },
              'operating': {
                'carrierCode': 'B6'
              },
              'duration': 'PT2H11M',
              'id': '29',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'JFK',
                'terminal': '7',
                'at': '2039-12-15T19:25:00'
              },
              'arrival': {
                'iataCode': 'KEF',
                'at': '2039-12-16T06:05:00'
              },
              'carrierCode': 'FI',
              'number': '614',
              'aircraft': {
                'code': '7M9'
              },
              'operating': {
                'carrierCode': 'FI'
              },
              'duration': 'PT5H40M',
              'id': '30',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'KEF',
                'at': '2039-12-16T07:35:00'
              },
              'arrival': {
                'iataCode': 'CDG',
                'terminal': '1',
                'at': '2039-12-16T12:00:00'
              },
              'carrierCode': 'FI',
              'number': '542',
              'aircraft': {
                'code': '7M8'
              },
              'operating': {
                'carrierCode': 'FI'
              },
              'duration': 'PT3H25M',
              'id': '31',
              'numberOfStops': 0,
              'blacklistedInEU': false
            }
          ]
        }
      ],
      'price': {
        'currency': 'EUR',
        'total': '1325.38',
        'base': '952.00',
        'fees': [
          {
            'amount': '0.00',
            'type': 'SUPPLIER'
          },
          {
            'amount': '0.00',
            'type': 'TICKETING'
          }
        ],
        'grandTotal': '1325.38'
      },
      'pricingOptions': {
        'fareType': [
          'PUBLISHED'
        ],
        'includedCheckedBagsOnly': true
      },
      'validatingAirlineCodes': [
        'FI'
      ],
      'travelerPricings': [
        {
          'travelerId': '1',
          'fareOption': 'STANDARD',
          'travelerType': 'ADULT',
          'price': {
            'currency': 'EUR',
            'total': '1325.38',
            'base': '952.00'
          },
          'fareDetailsBySegment': [
            {
              'segmentId': '17',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '18',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '19',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '29',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '30',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '31',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      'type': 'flight-offer',
      'id': '2',
      'source': 'GDS',
      'instantTicketingRequired': false,
      'nonHomogeneous': false,
      'oneWay': false,
      'lastTicketingDate': '2039-12-12',
      'lastTicketingDateTime': '2039-12-12',
      'numberOfBookableSeats': 9,
      'itineraries': [
        {
          'duration': 'PT16H44M',
          'segments': [
            {
              'departure': {
                'iataCode': 'CDG',
                'terminal': '1',
                'at': '2039-12-13T13:00:00'
              },
              'arrival': {
                'iataCode': 'KEF',
                'at': '2039-12-13T15:40:00'
              },
              'carrierCode': 'FI',
              'number': '543',
              'aircraft': {
                'code': '7M8'
              },
              'operating': {
                'carrierCode': 'FI'
              },
              'duration': 'PT3H40M',
              'id': '22',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'KEF',
                'at': '2039-12-13T17:05:00'
              },
              'arrival': {
                'iataCode': 'BOS',
                'terminal': 'E',
                'at': '2039-12-13T17:50:00'
              },
              'carrierCode': 'FI',
              'number': '631',
              'aircraft': {
                'code': '76W'
              },
              'operating': {
                'carrierCode': 'FI'
              },
              'duration': 'PT5H45M',
              'id': '23',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'BOS',
                'terminal': 'C',
                'at': '2039-12-13T20:45:00'
              },
              'arrival': {
                'iataCode': 'ATL',
                'terminal': 'N',
                'at': '2039-12-13T23:44:00'
              },
              'carrierCode': 'FI',
              'number': '7901',
              'aircraft': {
                'code': 'E90'
              },
              'operating': {
                'carrierCode': 'B6'
              },
              'duration': 'PT2H59M',
              'id': '24',
              'numberOfStops': 0,
              'blacklistedInEU': false
            }
          ]
        },
        {
          'duration': 'PT18H20M',
          'segments': [
            {
              'departure': {
                'iataCode': 'ATL',
                'terminal': 'N',
                'at': '2039-12-15T11:40:00'
              },
              'arrival': {
                'iataCode': 'JFK',
                'terminal': '5',
                'at': '2039-12-15T13:51:00'
              },
              'carrierCode': 'FI',
              'number': '7904',
              'aircraft': {
                'code': 'E90'
              },
              'operating': {
                'carrierCode': 'B6'
              },
              'duration': 'PT2H11M',
              'id': '29',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'JFK',
                'terminal': '7',
                'at': '2039-12-15T19:25:00'
              },
              'arrival': {
                'iataCode': 'KEF',
                'at': '2039-12-16T06:05:00'
              },
              'carrierCode': 'FI',
              'number': '614',
              'aircraft': {
                'code': '7M9'
              },
              'operating': {
                'carrierCode': 'FI'
              },
              'duration': 'PT5H40M',
              'id': '30',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'KEF',
                'at': '2039-12-16T07:35:00'
              },
              'arrival': {
                'iataCode': 'CDG',
                'terminal': '1',
                'at': '2039-12-16T12:00:00'
              },
              'carrierCode': 'FI',
              'number': '542',
              'aircraft': {
                'code': '7M8'
              },
              'operating': {
                'carrierCode': 'FI'
              },
              'duration': 'PT3H25M',
              'id': '31',
              'numberOfStops': 0,
              'blacklistedInEU': false
            }
          ]
        }
      ],
      'price': {
        'currency': 'EUR',
        'total': '1325.38',
        'base': '952.00',
        'fees': [
          {
            'amount': '0.00',
            'type': 'SUPPLIER'
          },
          {
            'amount': '0.00',
            'type': 'TICKETING'
          }
        ],
        'grandTotal': '1325.38'
      },
      'pricingOptions': {
        'fareType': [
          'PUBLISHED'
        ],
        'includedCheckedBagsOnly': true
      },
      'validatingAirlineCodes': [
        'FI'
      ],
      'travelerPricings': [
        {
          'travelerId': '1',
          'fareOption': 'STANDARD',
          'travelerType': 'ADULT',
          'price': {
            'currency': 'EUR',
            'total': '1325.38',
            'base': '952.00'
          },
          'fareDetailsBySegment': [
            {
              'segmentId': '22',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '23',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '24',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '29',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '30',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '31',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      'type': 'flight-offer',
      'id': '3',
      'source': 'GDS',
      'instantTicketingRequired': false,
      'nonHomogeneous': false,
      'oneWay': false,
      'lastTicketingDate': '2039-12-12',
      'lastTicketingDateTime': '2039-12-12',
      'numberOfBookableSeats': 9,
      'itineraries': [
        {
          'duration': 'PT16H34M',
          'segments': [
            {
              'departure': {
                'iataCode': 'CDG',
                'terminal': '1',
                'at': '2039-12-13T13:10:00'
              },
              'arrival': {
                'iataCode': 'KEF',
                'at': '2039-12-13T15:50:00'
              },
              'carrierCode': 'FI',
              'number': '545',
              'aircraft': {
                'code': '7M8'
              },
              'operating': {
                'carrierCode': 'FI'
              },
              'duration': 'PT3H40M',
              'id': '17',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'KEF',
                'at': '2039-12-13T17:05:00'
              },
              'arrival': {
                'iataCode': 'BOS',
                'terminal': 'E',
                'at': '2039-12-13T17:50:00'
              },
              'carrierCode': 'FI',
              'number': '631',
              'aircraft': {
                'code': '76W'
              },
              'operating': {
                'carrierCode': 'FI'
              },
              'duration': 'PT5H45M',
              'id': '18',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'BOS',
                'terminal': 'C',
                'at': '2039-12-13T20:45:00'
              },
              'arrival': {
                'iataCode': 'ATL',
                'terminal': 'N',
                'at': '2039-12-13T23:44:00'
              },
              'carrierCode': 'FI',
              'number': '7901',
              'aircraft': {
                'code': 'E90'
              },
              'operating': {
                'carrierCode': 'B6'
              },
              'duration': 'PT2H59M',
              'id': '19',
              'numberOfStops': 0,
              'blacklistedInEU': false
            }
          ]
        },
        {
          'duration': 'PT18H30M',
          'segments': [
            {
              'departure': {
                'iataCode': 'ATL',
                'terminal': 'N',
                'at': '2039-12-15T11:40:00'
              },
              'arrival': {
                'iataCode': 'JFK',
                'terminal': '5',
                'at': '2039-12-15T13:51:00'
              },
              'carrierCode': 'FI',
              'number': '7904',
              'aircraft': {
                'code': 'E90'
              },
              'operating': {
                'carrierCode': 'B6'
              },
              'duration': 'PT2H11M',
              'id': '32',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'JFK',
                'terminal': '7',
                'at': '2039-12-15T19:25:00'
              },
              'arrival': {
                'iataCode': 'KEF',
                'at': '2039-12-16T06:05:00'
              },
              'carrierCode': 'FI',
              'number': '614',
              'aircraft': {
                'code': '7M9'
              },
              'operating': {
                'carrierCode': 'FI'
              },
              'duration': 'PT5H40M',
              'id': '33',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'KEF',
                'at': '2039-12-16T07:45:00'
              },
              'arrival': {
                'iataCode': 'CDG',
                'terminal': '1',
                'at': '2039-12-16T12:10:00'
              },
              'carrierCode': 'FI',
              'number': '544',
              'aircraft': {
                'code': '7M8'
              },
              'operating': {
                'carrierCode': 'FI'
              },
              'duration': 'PT3H25M',
              'id': '34',
              'numberOfStops': 0,
              'blacklistedInEU': false
            }
          ]
        }
      ],
      'price': {
        'currency': 'EUR',
        'total': '1325.38',
        'base': '952.00',
        'fees': [
          {
            'amount': '0.00',
            'type': 'SUPPLIER'
          },
          {
            'amount': '0.00',
            'type': 'TICKETING'
          }
        ],
        'grandTotal': '1325.38'
      },
      'pricingOptions': {
        'fareType': [
          'PUBLISHED'
        ],
        'includedCheckedBagsOnly': true
      },
      'validatingAirlineCodes': [
        'FI'
      ],
      'travelerPricings': [
        {
          'travelerId': '1',
          'fareOption': 'STANDARD',
          'travelerType': 'ADULT',
          'price': {
            'currency': 'EUR',
            'total': '1325.38',
            'base': '952.00'
          },
          'fareDetailsBySegment': [
            {
              'segmentId': '17',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '18',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '19',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '32',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '33',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '34',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      'type': 'flight-offer',
      'id': '4',
      'source': 'GDS',
      'instantTicketingRequired': false,
      'nonHomogeneous': false,
      'oneWay': false,
      'lastTicketingDate': '2039-12-12',
      'lastTicketingDateTime': '2039-12-12',
      'numberOfBookableSeats': 9,
      'itineraries': [
        {
          'duration': 'PT16H44M',
          'segments': [
            {
              'departure': {
                'iataCode': 'CDG',
                'terminal': '1',
                'at': '2039-12-13T13:00:00'
              },
              'arrival': {
                'iataCode': 'KEF',
                'at': '2039-12-13T15:40:00'
              },
              'carrierCode': 'FI',
              'number': '543',
              'aircraft': {
                'code': '7M8'
              },
              'operating': {
                'carrierCode': 'FI'
              },
              'duration': 'PT3H40M',
              'id': '22',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'KEF',
                'at': '2039-12-13T17:05:00'
              },
              'arrival': {
                'iataCode': 'BOS',
                'terminal': 'E',
                'at': '2039-12-13T17:50:00'
              },
              'carrierCode': 'FI',
              'number': '631',
              'aircraft': {
                'code': '76W'
              },
              'operating': {
                'carrierCode': 'FI'
              },
              'duration': 'PT5H45M',
              'id': '23',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'BOS',
                'terminal': 'C',
                'at': '2039-12-13T20:45:00'
              },
              'arrival': {
                'iataCode': 'ATL',
                'terminal': 'N',
                'at': '2039-12-13T23:44:00'
              },
              'carrierCode': 'FI',
              'number': '7901',
              'aircraft': {
                'code': 'E90'
              },
              'operating': {
                'carrierCode': 'B6'
              },
              'duration': 'PT2H59M',
              'id': '24',
              'numberOfStops': 0,
              'blacklistedInEU': false
            }
          ]
        },
        {
          'duration': 'PT18H30M',
          'segments': [
            {
              'departure': {
                'iataCode': 'ATL',
                'terminal': 'N',
                'at': '2039-12-15T11:40:00'
              },
              'arrival': {
                'iataCode': 'JFK',
                'terminal': '5',
                'at': '2039-12-15T13:51:00'
              },
              'carrierCode': 'FI',
              'number': '7904',
              'aircraft': {
                'code': 'E90'
              },
              'operating': {
                'carrierCode': 'B6'
              },
              'duration': 'PT2H11M',
              'id': '32',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'JFK',
                'terminal': '7',
                'at': '2039-12-15T19:25:00'
              },
              'arrival': {
                'iataCode': 'KEF',
                'at': '2039-12-16T06:05:00'
              },
              'carrierCode': 'FI',
              'number': '614',
              'aircraft': {
                'code': '7M9'
              },
              'operating': {
                'carrierCode': 'FI'
              },
              'duration': 'PT5H40M',
              'id': '33',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'KEF',
                'at': '2039-12-16T07:45:00'
              },
              'arrival': {
                'iataCode': 'CDG',
                'terminal': '1',
                'at': '2039-12-16T12:10:00'
              },
              'carrierCode': 'FI',
              'number': '544',
              'aircraft': {
                'code': '7M8'
              },
              'operating': {
                'carrierCode': 'FI'
              },
              'duration': 'PT3H25M',
              'id': '34',
              'numberOfStops': 0,
              'blacklistedInEU': false
            }
          ]
        }
      ],
      'price': {
        'currency': 'EUR',
        'total': '1325.38',
        'base': '952.00',
        'fees': [
          {
            'amount': '0.00',
            'type': 'SUPPLIER'
          },
          {
            'amount': '0.00',
            'type': 'TICKETING'
          }
        ],
        'grandTotal': '1325.38'
      },
      'pricingOptions': {
        'fareType': [
          'PUBLISHED'
        ],
        'includedCheckedBagsOnly': true
      },
      'validatingAirlineCodes': [
        'FI'
      ],
      'travelerPricings': [
        {
          'travelerId': '1',
          'fareOption': 'STANDARD',
          'travelerType': 'ADULT',
          'price': {
            'currency': 'EUR',
            'total': '1325.38',
            'base': '952.00'
          },
          'fareDetailsBySegment': [
            {
              'segmentId': '22',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '23',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '24',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '32',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '33',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '34',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      'type': 'flight-offer',
      'id': '5',
      'source': 'GDS',
      'instantTicketingRequired': false,
      'nonHomogeneous': false,
      'oneWay': false,
      'lastTicketingDate': '2039-12-12',
      'lastTicketingDateTime': '2039-12-12',
      'numberOfBookableSeats': 9,
      'itineraries': [
        {
          'duration': 'PT35H22M',
          'segments': [
            {
              'departure': {
                'iataCode': 'CDG',
                'terminal': '1',
                'at': '2039-12-13T13:10:00'
              },
              'arrival': {
                'iataCode': 'KEF',
                'at': '2039-12-13T15:50:00'
              },
              'carrierCode': 'FI',
              'number': '545',
              'aircraft': {
                'code': '7M8'
              },
              'operating': {
                'carrierCode': 'FI'
              },
              'duration': 'PT3H40M',
              'id': '5',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'KEF',
                'at': '2039-12-13T17:05:00'
              },
              'arrival': {
                'iataCode': 'BOS',
                'terminal': 'E',
                'at': '2039-12-13T17:50:00'
              },
              'carrierCode': 'FI',
              'number': '631',
              'aircraft': {
                'code': '76W'
              },
              'operating': {
                'carrierCode': 'FI'
              },
              'duration': 'PT5H45M',
              'id': '6',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'BOS',
                'terminal': 'C',
                'at': '2039-12-14T15:20:00'
              },
              'arrival': {
                'iataCode': 'ATL',
                'terminal': 'N',
                'at': '2039-12-14T18:32:00'
              },
              'carrierCode': 'FI',
              'number': '7903',
              'aircraft': {
                'code': 'E90'
              },
              'operating': {
                'carrierCode': 'B6'
              },
              'duration': 'PT3H12M',
              'id': '7',
              'numberOfStops': 0,
              'blacklistedInEU': false
            }
          ]
        },
        {
          'duration': 'PT18H20M',
          'segments': [
            {
              'departure': {
                'iataCode': 'ATL',
                'terminal': 'N',
                'at': '2039-12-15T11:40:00'
              },
              'arrival': {
                'iataCode': 'JFK',
                'terminal': '5',
                'at': '2039-12-15T13:51:00'
              },
              'carrierCode': 'FI',
              'number': '7904',
              'aircraft': {
                'code': 'E90'
              },
              'operating': {
                'carrierCode': 'B6'
              },
              'duration': 'PT2H11M',
              'id': '29',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'JFK',
                'terminal': '7',
                'at': '2039-12-15T19:25:00'
              },
              'arrival': {
                'iataCode': 'KEF',
                'at': '2039-12-16T06:05:00'
              },
              'carrierCode': 'FI',
              'number': '614',
              'aircraft': {
                'code': '7M9'
              },
              'operating': {
                'carrierCode': 'FI'
              },
              'duration': 'PT5H40M',
              'id': '30',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'KEF',
                'at': '2039-12-16T07:35:00'
              },
              'arrival': {
                'iataCode': 'CDG',
                'terminal': '1',
                'at': '2039-12-16T12:00:00'
              },
              'carrierCode': 'FI',
              'number': '542',
              'aircraft': {
                'code': '7M8'
              },
              'operating': {
                'carrierCode': 'FI'
              },
              'duration': 'PT3H25M',
              'id': '31',
              'numberOfStops': 0,
              'blacklistedInEU': false
            }
          ]
        }
      ],
      'price': {
        'currency': 'EUR',
        'total': '1325.38',
        'base': '952.00',
        'fees': [
          {
            'amount': '0.00',
            'type': 'SUPPLIER'
          },
          {
            'amount': '0.00',
            'type': 'TICKETING'
          }
        ],
        'grandTotal': '1325.38'
      },
      'pricingOptions': {
        'fareType': [
          'PUBLISHED'
        ],
        'includedCheckedBagsOnly': true
      },
      'validatingAirlineCodes': [
        'FI'
      ],
      'travelerPricings': [
        {
          'travelerId': '1',
          'fareOption': 'STANDARD',
          'travelerType': 'ADULT',
          'price': {
            'currency': 'EUR',
            'total': '1325.38',
            'base': '952.00'
          },
          'fareDetailsBySegment': [
            {
              'segmentId': '5',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '6',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '7',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '29',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '30',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '31',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      'type': 'flight-offer',
      'id': '6',
      'source': 'GDS',
      'instantTicketingRequired': false,
      'nonHomogeneous': false,
      'oneWay': false,
      'lastTicketingDate': '2039-12-12',
      'lastTicketingDateTime': '2039-12-12',
      'numberOfBookableSeats': 9,
      'itineraries': [
        {
          'duration': 'PT35H32M',
          'segments': [
            {
              'departure': {
                'iataCode': 'CDG',
                'terminal': '1',
                'at': '2039-12-13T13:00:00'
              },
              'arrival': {
                'iataCode': 'KEF',
                'at': '2039-12-13T15:40:00'
              },
              'carrierCode': 'FI',
              'number': '543',
              'aircraft': {
                'code': '7M8'
              },
              'operating': {
                'carrierCode': 'FI'
              },
              'duration': 'PT3H40M',
              'id': '11',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'KEF',
                'at': '2039-12-13T17:05:00'
              },
              'arrival': {
                'iataCode': 'BOS',
                'terminal': 'E',
                'at': '2039-12-13T17:50:00'
              },
              'carrierCode': 'FI',
              'number': '631',
              'aircraft': {
                'code': '76W'
              },
              'operating': {
                'carrierCode': 'FI'
              },
              'duration': 'PT5H45M',
              'id': '12',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'BOS',
                'terminal': 'C',
                'at': '2039-12-14T15:20:00'
              },
              'arrival': {
                'iataCode': 'ATL',
                'terminal': 'N',
                'at': '2039-12-14T18:32:00'
              },
              'carrierCode': 'FI',
              'number': '7903',
              'aircraft': {
                'code': 'E90'
              },
              'operating': {
                'carrierCode': 'B6'
              },
              'duration': 'PT3H12M',
              'id': '13',
              'numberOfStops': 0,
              'blacklistedInEU': false
            }
          ]
        },
        {
          'duration': 'PT18H20M',
          'segments': [
            {
              'departure': {
                'iataCode': 'ATL',
                'terminal': 'N',
                'at': '2039-12-15T11:40:00'
              },
              'arrival': {
                'iataCode': 'JFK',
                'terminal': '5',
                'at': '2039-12-15T13:51:00'
              },
              'carrierCode': 'FI',
              'number': '7904',
              'aircraft': {
                'code': 'E90'
              },
              'operating': {
                'carrierCode': 'B6'
              },
              'duration': 'PT2H11M',
              'id': '29',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'JFK',
                'terminal': '7',
                'at': '2039-12-15T19:25:00'
              },
              'arrival': {
                'iataCode': 'KEF',
                'at': '2039-12-16T06:05:00'
              },
              'carrierCode': 'FI',
              'number': '614',
              'aircraft': {
                'code': '7M9'
              },
              'operating': {
                'carrierCode': 'FI'
              },
              'duration': 'PT5H40M',
              'id': '30',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'KEF',
                'at': '2039-12-16T07:35:00'
              },
              'arrival': {
                'iataCode': 'CDG',
                'terminal': '1',
                'at': '2039-12-16T12:00:00'
              },
              'carrierCode': 'FI',
              'number': '542',
              'aircraft': {
                'code': '7M8'
              },
              'operating': {
                'carrierCode': 'FI'
              },
              'duration': 'PT3H25M',
              'id': '31',
              'numberOfStops': 0,
              'blacklistedInEU': false
            }
          ]
        }
      ],
      'price': {
        'currency': 'EUR',
        'total': '1325.38',
        'base': '952.00',
        'fees': [
          {
            'amount': '0.00',
            'type': 'SUPPLIER'
          },
          {
            'amount': '0.00',
            'type': 'TICKETING'
          }
        ],
        'grandTotal': '1325.38'
      },
      'pricingOptions': {
        'fareType': [
          'PUBLISHED'
        ],
        'includedCheckedBagsOnly': true
      },
      'validatingAirlineCodes': [
        'FI'
      ],
      'travelerPricings': [
        {
          'travelerId': '1',
          'fareOption': 'STANDARD',
          'travelerType': 'ADULT',
          'price': {
            'currency': 'EUR',
            'total': '1325.38',
            'base': '952.00'
          },
          'fareDetailsBySegment': [
            {
              'segmentId': '11',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '12',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '13',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '29',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '30',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '31',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      'type': 'flight-offer',
      'id': '7',
      'source': 'GDS',
      'instantTicketingRequired': false,
      'nonHomogeneous': false,
      'oneWay': false,
      'lastTicketingDate': '2039-12-12',
      'lastTicketingDateTime': '2039-12-12',
      'numberOfBookableSeats': 9,
      'itineraries': [
        {
          'duration': 'PT35H22M',
          'segments': [
            {
              'departure': {
                'iataCode': 'CDG',
                'terminal': '1',
                'at': '2039-12-13T13:10:00'
              },
              'arrival': {
                'iataCode': 'KEF',
                'at': '2039-12-13T15:50:00'
              },
              'carrierCode': 'FI',
              'number': '545',
              'aircraft': {
                'code': '7M8'
              },
              'operating': {
                'carrierCode': 'FI'
              },
              'duration': 'PT3H40M',
              'id': '5',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'KEF',
                'at': '2039-12-13T17:05:00'
              },
              'arrival': {
                'iataCode': 'BOS',
                'terminal': 'E',
                'at': '2039-12-13T17:50:00'
              },
              'carrierCode': 'FI',
              'number': '631',
              'aircraft': {
                'code': '76W'
              },
              'operating': {
                'carrierCode': 'FI'
              },
              'duration': 'PT5H45M',
              'id': '6',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'BOS',
                'terminal': 'C',
                'at': '2039-12-14T15:20:00'
              },
              'arrival': {
                'iataCode': 'ATL',
                'terminal': 'N',
                'at': '2039-12-14T18:32:00'
              },
              'carrierCode': 'FI',
              'number': '7903',
              'aircraft': {
                'code': 'E90'
              },
              'operating': {
                'carrierCode': 'B6'
              },
              'duration': 'PT3H12M',
              'id': '7',
              'numberOfStops': 0,
              'blacklistedInEU': false
            }
          ]
        },
        {
          'duration': 'PT18H30M',
          'segments': [
            {
              'departure': {
                'iataCode': 'ATL',
                'terminal': 'N',
                'at': '2039-12-15T11:40:00'
              },
              'arrival': {
                'iataCode': 'JFK',
                'terminal': '5',
                'at': '2039-12-15T13:51:00'
              },
              'carrierCode': 'FI',
              'number': '7904',
              'aircraft': {
                'code': 'E90'
              },
              'operating': {
                'carrierCode': 'B6'
              },
              'duration': 'PT2H11M',
              'id': '32',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'JFK',
                'terminal': '7',
                'at': '2039-12-15T19:25:00'
              },
              'arrival': {
                'iataCode': 'KEF',
                'at': '2039-12-16T06:05:00'
              },
              'carrierCode': 'FI',
              'number': '614',
              'aircraft': {
                'code': '7M9'
              },
              'operating': {
                'carrierCode': 'FI'
              },
              'duration': 'PT5H40M',
              'id': '33',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'KEF',
                'at': '2039-12-16T07:45:00'
              },
              'arrival': {
                'iataCode': 'CDG',
                'terminal': '1',
                'at': '2039-12-16T12:10:00'
              },
              'carrierCode': 'FI',
              'number': '544',
              'aircraft': {
                'code': '7M8'
              },
              'operating': {
                'carrierCode': 'FI'
              },
              'duration': 'PT3H25M',
              'id': '34',
              'numberOfStops': 0,
              'blacklistedInEU': false
            }
          ]
        }
      ],
      'price': {
        'currency': 'EUR',
        'total': '1325.38',
        'base': '952.00',
        'fees': [
          {
            'amount': '0.00',
            'type': 'SUPPLIER'
          },
          {
            'amount': '0.00',
            'type': 'TICKETING'
          }
        ],
        'grandTotal': '1325.38'
      },
      'pricingOptions': {
        'fareType': [
          'PUBLISHED'
        ],
        'includedCheckedBagsOnly': true
      },
      'validatingAirlineCodes': [
        'FI'
      ],
      'travelerPricings': [
        {
          'travelerId': '1',
          'fareOption': 'STANDARD',
          'travelerType': 'ADULT',
          'price': {
            'currency': 'EUR',
            'total': '1325.38',
            'base': '952.00'
          },
          'fareDetailsBySegment': [
            {
              'segmentId': '5',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '6',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '7',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '32',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '33',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '34',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      'type': 'flight-offer',
      'id': '8',
      'source': 'GDS',
      'instantTicketingRequired': false,
      'nonHomogeneous': false,
      'oneWay': false,
      'lastTicketingDate': '2039-12-12',
      'lastTicketingDateTime': '2039-12-12',
      'numberOfBookableSeats': 9,
      'itineraries': [
        {
          'duration': 'PT35H32M',
          'segments': [
            {
              'departure': {
                'iataCode': 'CDG',
                'terminal': '1',
                'at': '2039-12-13T13:00:00'
              },
              'arrival': {
                'iataCode': 'KEF',
                'at': '2039-12-13T15:40:00'
              },
              'carrierCode': 'FI',
              'number': '543',
              'aircraft': {
                'code': '7M8'
              },
              'operating': {
                'carrierCode': 'FI'
              },
              'duration': 'PT3H40M',
              'id': '11',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'KEF',
                'at': '2039-12-13T17:05:00'
              },
              'arrival': {
                'iataCode': 'BOS',
                'terminal': 'E',
                'at': '2039-12-13T17:50:00'
              },
              'carrierCode': 'FI',
              'number': '631',
              'aircraft': {
                'code': '76W'
              },
              'operating': {
                'carrierCode': 'FI'
              },
              'duration': 'PT5H45M',
              'id': '12',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'BOS',
                'terminal': 'C',
                'at': '2039-12-14T15:20:00'
              },
              'arrival': {
                'iataCode': 'ATL',
                'terminal': 'N',
                'at': '2039-12-14T18:32:00'
              },
              'carrierCode': 'FI',
              'number': '7903',
              'aircraft': {
                'code': 'E90'
              },
              'operating': {
                'carrierCode': 'B6'
              },
              'duration': 'PT3H12M',
              'id': '13',
              'numberOfStops': 0,
              'blacklistedInEU': false
            }
          ]
        },
        {
          'duration': 'PT18H30M',
          'segments': [
            {
              'departure': {
                'iataCode': 'ATL',
                'terminal': 'N',
                'at': '2039-12-15T11:40:00'
              },
              'arrival': {
                'iataCode': 'JFK',
                'terminal': '5',
                'at': '2039-12-15T13:51:00'
              },
              'carrierCode': 'FI',
              'number': '7904',
              'aircraft': {
                'code': 'E90'
              },
              'operating': {
                'carrierCode': 'B6'
              },
              'duration': 'PT2H11M',
              'id': '32',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'JFK',
                'terminal': '7',
                'at': '2039-12-15T19:25:00'
              },
              'arrival': {
                'iataCode': 'KEF',
                'at': '2039-12-16T06:05:00'
              },
              'carrierCode': 'FI',
              'number': '614',
              'aircraft': {
                'code': '7M9'
              },
              'operating': {
                'carrierCode': 'FI'
              },
              'duration': 'PT5H40M',
              'id': '33',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'KEF',
                'at': '2039-12-16T07:45:00'
              },
              'arrival': {
                'iataCode': 'CDG',
                'terminal': '1',
                'at': '2039-12-16T12:10:00'
              },
              'carrierCode': 'FI',
              'number': '544',
              'aircraft': {
                'code': '7M8'
              },
              'operating': {
                'carrierCode': 'FI'
              },
              'duration': 'PT3H25M',
              'id': '34',
              'numberOfStops': 0,
              'blacklistedInEU': false
            }
          ]
        }
      ],
      'price': {
        'currency': 'EUR',
        'total': '1325.38',
        'base': '952.00',
        'fees': [
          {
            'amount': '0.00',
            'type': 'SUPPLIER'
          },
          {
            'amount': '0.00',
            'type': 'TICKETING'
          }
        ],
        'grandTotal': '1325.38'
      },
      'pricingOptions': {
        'fareType': [
          'PUBLISHED'
        ],
        'includedCheckedBagsOnly': true
      },
      'validatingAirlineCodes': [
        'FI'
      ],
      'travelerPricings': [
        {
          'travelerId': '1',
          'fareOption': 'STANDARD',
          'travelerType': 'ADULT',
          'price': {
            'currency': 'EUR',
            'total': '1325.38',
            'base': '952.00'
          },
          'fareDetailsBySegment': [
            {
              'segmentId': '11',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '12',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '13',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '32',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '33',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '34',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      'type': 'flight-offer',
      'id': '9',
      'source': 'GDS',
      'instantTicketingRequired': false,
      'nonHomogeneous': false,
      'oneWay': false,
      'lastTicketingDate': '2039-12-12',
      'lastTicketingDateTime': '2039-12-12',
      'numberOfBookableSeats': 9,
      'itineraries': [
        {
          'duration': 'PT35H22M',
          'segments': [
            {
              'departure': {
                'iataCode': 'CDG',
                'terminal': '1',
                'at': '2039-12-13T13:10:00'
              },
              'arrival': {
                'iataCode': 'KEF',
                'at': '2039-12-13T15:50:00'
              },
              'carrierCode': 'FI',
              'number': '545',
              'aircraft': {
                'code': '7M8'
              },
              'operating': {
                'carrierCode': 'FI'
              },
              'duration': 'PT3H40M',
              'id': '8',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'KEF',
                'at': '2039-12-14T10:00:00'
              },
              'arrival': {
                'iataCode': 'BOS',
                'terminal': 'E',
                'at': '2039-12-14T10:35:00'
              },
              'carrierCode': 'FI',
              'number': '635',
              'aircraft': {
                'code': '7M8'
              },
              'operating': {
                'carrierCode': 'FI'
              },
              'duration': 'PT5H35M',
              'id': '9',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'BOS',
                'terminal': 'C',
                'at': '2039-12-14T15:20:00'
              },
              'arrival': {
                'iataCode': 'ATL',
                'terminal': 'N',
                'at': '2039-12-14T18:32:00'
              },
              'carrierCode': 'FI',
              'number': '7903',
              'aircraft': {
                'code': 'E90'
              },
              'operating': {
                'carrierCode': 'B6'
              },
              'duration': 'PT3H12M',
              'id': '10',
              'numberOfStops': 0,
              'blacklistedInEU': false
            }
          ]
        },
        {
          'duration': 'PT18H20M',
          'segments': [
            {
              'departure': {
                'iataCode': 'ATL',
                'terminal': 'N',
                'at': '2039-12-15T11:40:00'
              },
              'arrival': {
                'iataCode': 'JFK',
                'terminal': '5',
                'at': '2039-12-15T13:51:00'
              },
              'carrierCode': 'FI',
              'number': '7904',
              'aircraft': {
                'code': 'E90'
              },
              'operating': {
                'carrierCode': 'B6'
              },
              'duration': 'PT2H11M',
              'id': '29',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'JFK',
                'terminal': '7',
                'at': '2039-12-15T19:25:00'
              },
              'arrival': {
                'iataCode': 'KEF',
                'at': '2039-12-16T06:05:00'
              },
              'carrierCode': 'FI',
              'number': '614',
              'aircraft': {
                'code': '7M9'
              },
              'operating': {
                'carrierCode': 'FI'
              },
              'duration': 'PT5H40M',
              'id': '30',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'KEF',
                'at': '2039-12-16T07:35:00'
              },
              'arrival': {
                'iataCode': 'CDG',
                'terminal': '1',
                'at': '2039-12-16T12:00:00'
              },
              'carrierCode': 'FI',
              'number': '542',
              'aircraft': {
                'code': '7M8'
              },
              'operating': {
                'carrierCode': 'FI'
              },
              'duration': 'PT3H25M',
              'id': '31',
              'numberOfStops': 0,
              'blacklistedInEU': false
            }
          ]
        }
      ],
      'price': {
        'currency': 'EUR',
        'total': '1373.72',
        'base': '999.00',
        'fees': [
          {
            'amount': '0.00',
            'type': 'SUPPLIER'
          },
          {
            'amount': '0.00',
            'type': 'TICKETING'
          }
        ],
        'grandTotal': '1373.72'
      },
      'pricingOptions': {
        'fareType': [
          'PUBLISHED'
        ],
        'includedCheckedBagsOnly': true
      },
      'validatingAirlineCodes': [
        'FI'
      ],
      'travelerPricings': [
        {
          'travelerId': '1',
          'fareOption': 'STANDARD',
          'travelerType': 'ADULT',
          'price': {
            'currency': 'EUR',
            'total': '1373.72',
            'base': '999.00'
          },
          'fareDetailsBySegment': [
            {
              'segmentId': '8',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '9',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '10',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '29',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '30',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '31',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      'type': 'flight-offer',
      'id': '10',
      'source': 'GDS',
      'instantTicketingRequired': false,
      'nonHomogeneous': false,
      'oneWay': false,
      'lastTicketingDate': '2039-12-12',
      'lastTicketingDateTime': '2039-12-12',
      'numberOfBookableSeats': 9,
      'itineraries': [
        {
          'duration': 'PT35H32M',
          'segments': [
            {
              'departure': {
                'iataCode': 'CDG',
                'terminal': '1',
                'at': '2039-12-13T13:00:00'
              },
              'arrival': {
                'iataCode': 'KEF',
                'at': '2039-12-13T15:40:00'
              },
              'carrierCode': 'FI',
              'number': '543',
              'aircraft': {
                'code': '7M8'
              },
              'operating': {
                'carrierCode': 'FI'
              },
              'duration': 'PT3H40M',
              'id': '14',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'KEF',
                'at': '2039-12-14T10:00:00'
              },
              'arrival': {
                'iataCode': 'BOS',
                'terminal': 'E',
                'at': '2039-12-14T10:35:00'
              },
              'carrierCode': 'FI',
              'number': '635',
              'aircraft': {
                'code': '7M8'
              },
              'operating': {
                'carrierCode': 'FI'
              },
              'duration': 'PT5H35M',
              'id': '15',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'BOS',
                'terminal': 'C',
                'at': '2039-12-14T15:20:00'
              },
              'arrival': {
                'iataCode': 'ATL',
                'terminal': 'N',
                'at': '2039-12-14T18:32:00'
              },
              'carrierCode': 'FI',
              'number': '7903',
              'aircraft': {
                'code': 'E90'
              },
              'operating': {
                'carrierCode': 'B6'
              },
              'duration': 'PT3H12M',
              'id': '16',
              'numberOfStops': 0,
              'blacklistedInEU': false
            }
          ]
        },
        {
          'duration': 'PT18H20M',
          'segments': [
            {
              'departure': {
                'iataCode': 'ATL',
                'terminal': 'N',
                'at': '2039-12-15T11:40:00'
              },
              'arrival': {
                'iataCode': 'JFK',
                'terminal': '5',
                'at': '2039-12-15T13:51:00'
              },
              'carrierCode': 'FI',
              'number': '7904',
              'aircraft': {
                'code': 'E90'
              },
              'operating': {
                'carrierCode': 'B6'
              },
              'duration': 'PT2H11M',
              'id': '29',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'JFK',
                'terminal': '7',
                'at': '2039-12-15T19:25:00'
              },
              'arrival': {
                'iataCode': 'KEF',
                'at': '2039-12-16T06:05:00'
              },
              'carrierCode': 'FI',
              'number': '614',
              'aircraft': {
                'code': '7M9'
              },
              'operating': {
                'carrierCode': 'FI'
              },
              'duration': 'PT5H40M',
              'id': '30',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'KEF',
                'at': '2039-12-16T07:35:00'
              },
              'arrival': {
                'iataCode': 'CDG',
                'terminal': '1',
                'at': '2039-12-16T12:00:00'
              },
              'carrierCode': 'FI',
              'number': '542',
              'aircraft': {
                'code': '7M8'
              },
              'operating': {
                'carrierCode': 'FI'
              },
              'duration': 'PT3H25M',
              'id': '31',
              'numberOfStops': 0,
              'blacklistedInEU': false
            }
          ]
        }
      ],
      'price': {
        'currency': 'EUR',
        'total': '1373.72',
        'base': '999.00',
        'fees': [
          {
            'amount': '0.00',
            'type': 'SUPPLIER'
          },
          {
            'amount': '0.00',
            'type': 'TICKETING'
          }
        ],
        'grandTotal': '1373.72'
      },
      'pricingOptions': {
        'fareType': [
          'PUBLISHED'
        ],
        'includedCheckedBagsOnly': true
      },
      'validatingAirlineCodes': [
        'FI'
      ],
      'travelerPricings': [
        {
          'travelerId': '1',
          'fareOption': 'STANDARD',
          'travelerType': 'ADULT',
          'price': {
            'currency': 'EUR',
            'total': '1373.72',
            'base': '999.00'
          },
          'fareDetailsBySegment': [
            {
              'segmentId': '14',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '15',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '16',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '29',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '30',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '31',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      'type': 'flight-offer',
      'id': '11',
      'source': 'GDS',
      'instantTicketingRequired': false,
      'nonHomogeneous': false,
      'oneWay': false,
      'lastTicketingDate': '2039-12-12',
      'lastTicketingDateTime': '2039-12-12',
      'numberOfBookableSeats': 9,
      'itineraries': [
        {
          'duration': 'PT35H22M',
          'segments': [
            {
              'departure': {
                'iataCode': 'CDG',
                'terminal': '1',
                'at': '2039-12-13T13:10:00'
              },
              'arrival': {
                'iataCode': 'KEF',
                'at': '2039-12-13T15:50:00'
              },
              'carrierCode': 'FI',
              'number': '545',
              'aircraft': {
                'code': '7M8'
              },
              'operating': {
                'carrierCode': 'FI'
              },
              'duration': 'PT3H40M',
              'id': '8',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'KEF',
                'at': '2039-12-14T10:00:00'
              },
              'arrival': {
                'iataCode': 'BOS',
                'terminal': 'E',
                'at': '2039-12-14T10:35:00'
              },
              'carrierCode': 'FI',
              'number': '635',
              'aircraft': {
                'code': '7M8'
              },
              'operating': {
                'carrierCode': 'FI'
              },
              'duration': 'PT5H35M',
              'id': '9',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'BOS',
                'terminal': 'C',
                'at': '2039-12-14T15:20:00'
              },
              'arrival': {
                'iataCode': 'ATL',
                'terminal': 'N',
                'at': '2039-12-14T18:32:00'
              },
              'carrierCode': 'FI',
              'number': '7903',
              'aircraft': {
                'code': 'E90'
              },
              'operating': {
                'carrierCode': 'B6'
              },
              'duration': 'PT3H12M',
              'id': '10',
              'numberOfStops': 0,
              'blacklistedInEU': false
            }
          ]
        },
        {
          'duration': 'PT18H30M',
          'segments': [
            {
              'departure': {
                'iataCode': 'ATL',
                'terminal': 'N',
                'at': '2039-12-15T11:40:00'
              },
              'arrival': {
                'iataCode': 'JFK',
                'terminal': '5',
                'at': '2039-12-15T13:51:00'
              },
              'carrierCode': 'FI',
              'number': '7904',
              'aircraft': {
                'code': 'E90'
              },
              'operating': {
                'carrierCode': 'B6'
              },
              'duration': 'PT2H11M',
              'id': '32',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'JFK',
                'terminal': '7',
                'at': '2039-12-15T19:25:00'
              },
              'arrival': {
                'iataCode': 'KEF',
                'at': '2039-12-16T06:05:00'
              },
              'carrierCode': 'FI',
              'number': '614',
              'aircraft': {
                'code': '7M9'
              },
              'operating': {
                'carrierCode': 'FI'
              },
              'duration': 'PT5H40M',
              'id': '33',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'KEF',
                'at': '2039-12-16T07:45:00'
              },
              'arrival': {
                'iataCode': 'CDG',
                'terminal': '1',
                'at': '2039-12-16T12:10:00'
              },
              'carrierCode': 'FI',
              'number': '544',
              'aircraft': {
                'code': '7M8'
              },
              'operating': {
                'carrierCode': 'FI'
              },
              'duration': 'PT3H25M',
              'id': '34',
              'numberOfStops': 0,
              'blacklistedInEU': false
            }
          ]
        }
      ],
      'price': {
        'currency': 'EUR',
        'total': '1373.72',
        'base': '999.00',
        'fees': [
          {
            'amount': '0.00',
            'type': 'SUPPLIER'
          },
          {
            'amount': '0.00',
            'type': 'TICKETING'
          }
        ],
        'grandTotal': '1373.72'
      },
      'pricingOptions': {
        'fareType': [
          'PUBLISHED'
        ],
        'includedCheckedBagsOnly': true
      },
      'validatingAirlineCodes': [
        'FI'
      ],
      'travelerPricings': [
        {
          'travelerId': '1',
          'fareOption': 'STANDARD',
          'travelerType': 'ADULT',
          'price': {
            'currency': 'EUR',
            'total': '1373.72',
            'base': '999.00'
          },
          'fareDetailsBySegment': [
            {
              'segmentId': '8',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '9',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '10',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '32',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '33',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '34',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      'type': 'flight-offer',
      'id': '12',
      'source': 'GDS',
      'instantTicketingRequired': false,
      'nonHomogeneous': false,
      'oneWay': false,
      'lastTicketingDate': '2039-12-12',
      'lastTicketingDateTime': '2039-12-12',
      'numberOfBookableSeats': 9,
      'itineraries': [
        {
          'duration': 'PT35H32M',
          'segments': [
            {
              'departure': {
                'iataCode': 'CDG',
                'terminal': '1',
                'at': '2039-12-13T13:00:00'
              },
              'arrival': {
                'iataCode': 'KEF',
                'at': '2039-12-13T15:40:00'
              },
              'carrierCode': 'FI',
              'number': '543',
              'aircraft': {
                'code': '7M8'
              },
              'operating': {
                'carrierCode': 'FI'
              },
              'duration': 'PT3H40M',
              'id': '14',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'KEF',
                'at': '2039-12-14T10:00:00'
              },
              'arrival': {
                'iataCode': 'BOS',
                'terminal': 'E',
                'at': '2039-12-14T10:35:00'
              },
              'carrierCode': 'FI',
              'number': '635',
              'aircraft': {
                'code': '7M8'
              },
              'operating': {
                'carrierCode': 'FI'
              },
              'duration': 'PT5H35M',
              'id': '15',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'BOS',
                'terminal': 'C',
                'at': '2039-12-14T15:20:00'
              },
              'arrival': {
                'iataCode': 'ATL',
                'terminal': 'N',
                'at': '2039-12-14T18:32:00'
              },
              'carrierCode': 'FI',
              'number': '7903',
              'aircraft': {
                'code': 'E90'
              },
              'operating': {
                'carrierCode': 'B6'
              },
              'duration': 'PT3H12M',
              'id': '16',
              'numberOfStops': 0,
              'blacklistedInEU': false
            }
          ]
        },
        {
          'duration': 'PT18H30M',
          'segments': [
            {
              'departure': {
                'iataCode': 'ATL',
                'terminal': 'N',
                'at': '2039-12-15T11:40:00'
              },
              'arrival': {
                'iataCode': 'JFK',
                'terminal': '5',
                'at': '2039-12-15T13:51:00'
              },
              'carrierCode': 'FI',
              'number': '7904',
              'aircraft': {
                'code': 'E90'
              },
              'operating': {
                'carrierCode': 'B6'
              },
              'duration': 'PT2H11M',
              'id': '32',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'JFK',
                'terminal': '7',
                'at': '2039-12-15T19:25:00'
              },
              'arrival': {
                'iataCode': 'KEF',
                'at': '2039-12-16T06:05:00'
              },
              'carrierCode': 'FI',
              'number': '614',
              'aircraft': {
                'code': '7M9'
              },
              'operating': {
                'carrierCode': 'FI'
              },
              'duration': 'PT5H40M',
              'id': '33',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'KEF',
                'at': '2039-12-16T07:45:00'
              },
              'arrival': {
                'iataCode': 'CDG',
                'terminal': '1',
                'at': '2039-12-16T12:10:00'
              },
              'carrierCode': 'FI',
              'number': '544',
              'aircraft': {
                'code': '7M8'
              },
              'operating': {
                'carrierCode': 'FI'
              },
              'duration': 'PT3H25M',
              'id': '34',
              'numberOfStops': 0,
              'blacklistedInEU': false
            }
          ]
        }
      ],
      'price': {
        'currency': 'EUR',
        'total': '1373.72',
        'base': '999.00',
        'fees': [
          {
            'amount': '0.00',
            'type': 'SUPPLIER'
          },
          {
            'amount': '0.00',
            'type': 'TICKETING'
          }
        ],
        'grandTotal': '1373.72'
      },
      'pricingOptions': {
        'fareType': [
          'PUBLISHED'
        ],
        'includedCheckedBagsOnly': true
      },
      'validatingAirlineCodes': [
        'FI'
      ],
      'travelerPricings': [
        {
          'travelerId': '1',
          'fareOption': 'STANDARD',
          'travelerType': 'ADULT',
          'price': {
            'currency': 'EUR',
            'total': '1373.72',
            'base': '999.00'
          },
          'fareDetailsBySegment': [
            {
              'segmentId': '14',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '15',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '16',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '32',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '33',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '34',
              'cabin': 'ECONOMY',
              'fareBasis': 'VJ2QOAEC',
              'brandedFare': 'STANDARD',
              'brandedFareLabel': 'ECONOMY STANDARD',
              'class': 'V',
              'includedCheckedBags': {
                'quantity': 1
              },
              'amenities': [
                {
                  'description': 'ALCOHOLIC DRINK',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'NON ALCOHOLIC DRINK',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MEAL',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'USB POWER',
                  'isChargeable': false,
                  'amenityType': 'ENTERTAINMENT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREMIUM SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHANGE BEFORE DEPARTURE',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      'type': 'flight-offer',
      'id': '13',
      'source': 'GDS',
      'instantTicketingRequired': false,
      'nonHomogeneous': false,
      'oneWay': false,
      'lastTicketingDate': '2039-12-13',
      'lastTicketingDateTime': '2039-12-13',
      'numberOfBookableSeats': 9,
      'itineraries': [
        {
          'duration': 'PT13H35M',
          'segments': [
            {
              'departure': {
                'iataCode': 'CDG',
                'terminal': '2B',
                'at': '2039-12-13T14:00:00'
              },
              'arrival': {
                'iataCode': 'YUL',
                'at': '2039-12-13T15:45:00'
              },
              'carrierCode': 'UA',
              'number': '8121',
              'aircraft': {
                'code': '77W'
              },
              'operating': {
                'carrierCode': 'AC'
              },
              'duration': 'PT7H45M',
              'id': '20',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'YUL',
                'at': '2039-12-13T18:25:00'
              },
              'arrival': {
                'iataCode': 'ATL',
                'terminal': 'I',
                'at': '2039-12-13T21:35:00'
              },
              'carrierCode': 'UA',
              'number': '8256',
              'aircraft': {
                'code': 'CR9'
              },
              'duration': 'PT3H10M',
              'id': '21',
              'numberOfStops': 0,
              'blacklistedInEU': false
            }
          ]
        },
        {
          'duration': 'PT11H',
          'segments': [
            {
              'departure': {
                'iataCode': 'ATL',
                'terminal': 'I',
                'at': '2039-12-15T17:25:00'
              },
              'arrival': {
                'iataCode': 'YYZ',
                'terminal': '1',
                'at': '2039-12-15T19:42:00'
              },
              'carrierCode': 'AC',
              'number': '1308',
              'aircraft': {
                'code': '223'
              },
              'operating': {
                'carrierCode': 'AC'
              },
              'duration': 'PT2H17M',
              'id': '25',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'YYZ',
                'terminal': '1',
                'at': '2039-12-15T20:45:00'
              },
              'arrival': {
                'iataCode': 'CDG',
                'terminal': '2B',
                'at': '2039-12-16T10:25:00'
              },
              'carrierCode': 'AC',
              'number': '872',
              'aircraft': {
                'code': '333'
              },
              'operating': {
                'carrierCode': 'AC'
              },
              'duration': 'PT7H40M',
              'id': '26',
              'numberOfStops': 0,
              'blacklistedInEU': false
            }
          ]
        }
      ],
      'price': {
        'currency': 'EUR',
        'total': '1425.01',
        'base': '1050.00',
        'fees': [
          {
            'amount': '0.00',
            'type': 'SUPPLIER'
          },
          {
            'amount': '0.00',
            'type': 'TICKETING'
          }
        ],
        'grandTotal': '1425.01'
      },
      'pricingOptions': {
        'fareType': [
          'PUBLISHED'
        ],
        'includedCheckedBagsOnly': false
      },
      'validatingAirlineCodes': [
        'UA'
      ],
      'travelerPricings': [
        {
          'travelerId': '1',
          'fareOption': 'STANDARD',
          'travelerType': 'ADULT',
          'price': {
            'currency': 'EUR',
            'total': '1425.01',
            'base': '1050.00'
          },
          'fareDetailsBySegment': [
            {
              'segmentId': '20',
              'cabin': 'ECONOMY',
              'fareBasis': 'HLPMB0BQ',
              'brandedFare': 'ECOBASIC',
              'brandedFareLabel': 'BASIC ECONOMY',
              'class': 'H',
              'includedCheckedBags': {
                'quantity': 0
              },
              'amenities': [
                {
                  'description': 'CHECKED BAG FIRST',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'SECOND BAG',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PRE RESERVED SEAT ASSIGNMENT',
                  'isChargeable': true,
                  'amenityType': 'PRE_RESERVED_SEAT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PRIORITY BOARDING',
                  'isChargeable': true,
                  'amenityType': 'TRAVEL_SERVICES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MILEAGE ACCRUAL',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '21',
              'cabin': 'ECONOMY',
              'fareBasis': 'HLPMB0BQ',
              'brandedFare': 'ECOBASIC',
              'brandedFareLabel': 'BASIC ECONOMY',
              'class': 'H',
              'includedCheckedBags': {
                'quantity': 0
              },
              'amenities': [
                {
                  'description': 'CHECKED BAG FIRST',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'SECOND BAG',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PRE RESERVED SEAT ASSIGNMENT',
                  'isChargeable': true,
                  'amenityType': 'PRE_RESERVED_SEAT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PRIORITY BOARDING',
                  'isChargeable': true,
                  'amenityType': 'TRAVEL_SERVICES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MILEAGE ACCRUAL',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '25',
              'cabin': 'ECONOMY',
              'fareBasis': 'HLPMB0BQ',
              'brandedFare': 'BASIC',
              'brandedFareLabel': 'BASIC',
              'class': 'H',
              'includedCheckedBags': {
                'quantity': 0
              },
              'amenities': [
                {
                  'description': 'CHECKED BAG FIRST',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHECKED BAG SECOND',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'COMPLIMENTARY MEAL',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '26',
              'cabin': 'ECONOMY',
              'fareBasis': 'HLPMB0BQ',
              'brandedFare': 'BASIC',
              'brandedFareLabel': 'BASIC',
              'class': 'H',
              'includedCheckedBags': {
                'quantity': 0
              },
              'amenities': [
                {
                  'description': 'CHECKED BAG FIRST',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHECKED BAG SECOND',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'COMPLIMENTARY MEAL',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      'type': 'flight-offer',
      'id': '14',
      'source': 'GDS',
      'instantTicketingRequired': false,
      'nonHomogeneous': false,
      'oneWay': false,
      'lastTicketingDate': '2039-12-13',
      'lastTicketingDateTime': '2039-12-13',
      'numberOfBookableSeats': 9,
      'itineraries': [
        {
          'duration': 'PT13H35M',
          'segments': [
            {
              'departure': {
                'iataCode': 'CDG',
                'terminal': '2B',
                'at': '2039-12-13T14:00:00'
              },
              'arrival': {
                'iataCode': 'YUL',
                'at': '2039-12-13T15:45:00'
              },
              'carrierCode': 'UA',
              'number': '8121',
              'aircraft': {
                'code': '77W'
              },
              'operating': {
                'carrierCode': 'AC'
              },
              'duration': 'PT7H45M',
              'id': '20',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'YUL',
                'at': '2039-12-13T18:25:00'
              },
              'arrival': {
                'iataCode': 'ATL',
                'terminal': 'I',
                'at': '2039-12-13T21:35:00'
              },
              'carrierCode': 'UA',
              'number': '8256',
              'aircraft': {
                'code': 'CR9'
              },
              'duration': 'PT3H10M',
              'id': '21',
              'numberOfStops': 0,
              'blacklistedInEU': false
            }
          ]
        },
        {
          'duration': 'PT11H10M',
          'segments': [
            {
              'departure': {
                'iataCode': 'ATL',
                'terminal': 'I',
                'at': '2039-12-15T17:15:00'
              },
              'arrival': {
                'iataCode': 'YYZ',
                'terminal': '1',
                'at': '2039-12-15T19:33:00'
              },
              'carrierCode': 'AC',
              'number': '8954',
              'aircraft': {
                'code': 'CR9'
              },
              'duration': 'PT2H18M',
              'id': '27',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'YYZ',
                'terminal': '1',
                'at': '2039-12-15T20:45:00'
              },
              'arrival': {
                'iataCode': 'CDG',
                'terminal': '2B',
                'at': '2039-12-16T10:25:00'
              },
              'carrierCode': 'AC',
              'number': '872',
              'aircraft': {
                'code': '333'
              },
              'operating': {
                'carrierCode': 'AC'
              },
              'duration': 'PT7H40M',
              'id': '28',
              'numberOfStops': 0,
              'blacklistedInEU': false
            }
          ]
        }
      ],
      'price': {
        'currency': 'EUR',
        'total': '1425.01',
        'base': '1050.00',
        'fees': [
          {
            'amount': '0.00',
            'type': 'SUPPLIER'
          },
          {
            'amount': '0.00',
            'type': 'TICKETING'
          }
        ],
        'grandTotal': '1425.01'
      },
      'pricingOptions': {
        'fareType': [
          'PUBLISHED'
        ],
        'includedCheckedBagsOnly': false
      },
      'validatingAirlineCodes': [
        'UA'
      ],
      'travelerPricings': [
        {
          'travelerId': '1',
          'fareOption': 'STANDARD',
          'travelerType': 'ADULT',
          'price': {
            'currency': 'EUR',
            'total': '1425.01',
            'base': '1050.00'
          },
          'fareDetailsBySegment': [
            {
              'segmentId': '20',
              'cabin': 'ECONOMY',
              'fareBasis': 'HLPMB0BQ',
              'brandedFare': 'ECOBASIC',
              'brandedFareLabel': 'BASIC ECONOMY',
              'class': 'H',
              'includedCheckedBags': {
                'quantity': 0
              },
              'amenities': [
                {
                  'description': 'CHECKED BAG FIRST',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'SECOND BAG',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PRE RESERVED SEAT ASSIGNMENT',
                  'isChargeable': true,
                  'amenityType': 'PRE_RESERVED_SEAT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PRIORITY BOARDING',
                  'isChargeable': true,
                  'amenityType': 'TRAVEL_SERVICES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MILEAGE ACCRUAL',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '21',
              'cabin': 'ECONOMY',
              'fareBasis': 'HLPMB0BQ',
              'brandedFare': 'ECOBASIC',
              'brandedFareLabel': 'BASIC ECONOMY',
              'class': 'H',
              'includedCheckedBags': {
                'quantity': 0
              },
              'amenities': [
                {
                  'description': 'CHECKED BAG FIRST',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'SECOND BAG',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PRE RESERVED SEAT ASSIGNMENT',
                  'isChargeable': true,
                  'amenityType': 'PRE_RESERVED_SEAT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PRIORITY BOARDING',
                  'isChargeable': true,
                  'amenityType': 'TRAVEL_SERVICES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MILEAGE ACCRUAL',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '27',
              'cabin': 'ECONOMY',
              'fareBasis': 'HLPMB0BQ',
              'brandedFare': 'BASIC',
              'brandedFareLabel': 'BASIC',
              'class': 'H',
              'includedCheckedBags': {
                'quantity': 0
              },
              'amenities': [
                {
                  'description': 'CHECKED BAG FIRST',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHECKED BAG SECOND',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'COMPLIMENTARY MEAL',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '28',
              'cabin': 'ECONOMY',
              'fareBasis': 'HLPMB0BQ',
              'brandedFare': 'BASIC',
              'brandedFareLabel': 'BASIC',
              'class': 'H',
              'includedCheckedBags': {
                'quantity': 0
              },
              'amenities': [
                {
                  'description': 'CHECKED BAG FIRST',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHECKED BAG SECOND',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'COMPLIMENTARY MEAL',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      'type': 'flight-offer',
      'id': '15',
      'source': 'GDS',
      'instantTicketingRequired': false,
      'nonHomogeneous': false,
      'oneWay': false,
      'lastTicketingDate': '2039-12-13',
      'lastTicketingDateTime': '2039-12-13',
      'numberOfBookableSeats': 9,
      'itineraries': [
        {
          'duration': 'PT13H22M',
          'segments': [
            {
              'departure': {
                'iataCode': 'CDG',
                'terminal': '1',
                'at': '2039-12-13T11:40:00'
              },
              'arrival': {
                'iataCode': 'IAD',
                'at': '2039-12-13T14:25:00'
              },
              'carrierCode': 'UA',
              'number': '914',
              'aircraft': {
                'code': '788'
              },
              'operating': {
                'carrierCode': 'UA'
              },
              'duration': 'PT8H45M',
              'id': '3',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'IAD',
                'at': '2039-12-13T17:05:00'
              },
              'arrival': {
                'iataCode': 'ATL',
                'terminal': 'N',
                'at': '2039-12-13T19:02:00'
              },
              'carrierCode': 'UA',
              'number': '2081',
              'aircraft': {
                'code': '319'
              },
              'operating': {
                'carrierCode': 'UA'
              },
              'duration': 'PT1H57M',
              'id': '4',
              'numberOfStops': 0,
              'blacklistedInEU': false
            }
          ]
        },
        {
          'duration': 'PT11H',
          'segments': [
            {
              'departure': {
                'iataCode': 'ATL',
                'terminal': 'I',
                'at': '2039-12-15T17:25:00'
              },
              'arrival': {
                'iataCode': 'YYZ',
                'terminal': '1',
                'at': '2039-12-15T19:42:00'
              },
              'carrierCode': 'AC',
              'number': '1308',
              'aircraft': {
                'code': '223'
              },
              'operating': {
                'carrierCode': 'AC'
              },
              'duration': 'PT2H17M',
              'id': '25',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'YYZ',
                'terminal': '1',
                'at': '2039-12-15T20:45:00'
              },
              'arrival': {
                'iataCode': 'CDG',
                'terminal': '2B',
                'at': '2039-12-16T10:25:00'
              },
              'carrierCode': 'AC',
              'number': '872',
              'aircraft': {
                'code': '333'
              },
              'operating': {
                'carrierCode': 'AC'
              },
              'duration': 'PT7H40M',
              'id': '26',
              'numberOfStops': 0,
              'blacklistedInEU': false
            }
          ]
        }
      ],
      'price': {
        'currency': 'EUR',
        'total': '1429.93',
        'base': '1050.00',
        'fees': [
          {
            'amount': '0.00',
            'type': 'SUPPLIER'
          },
          {
            'amount': '0.00',
            'type': 'TICKETING'
          }
        ],
        'grandTotal': '1429.93'
      },
      'pricingOptions': {
        'fareType': [
          'PUBLISHED'
        ],
        'includedCheckedBagsOnly': false
      },
      'validatingAirlineCodes': [
        'UA'
      ],
      'travelerPricings': [
        {
          'travelerId': '1',
          'fareOption': 'STANDARD',
          'travelerType': 'ADULT',
          'price': {
            'currency': 'EUR',
            'total': '1429.93',
            'base': '1050.00'
          },
          'fareDetailsBySegment': [
            {
              'segmentId': '3',
              'cabin': 'ECONOMY',
              'fareBasis': 'HLPMB0BQ',
              'brandedFare': 'ECOBASIC',
              'brandedFareLabel': 'BASIC ECONOMY',
              'class': 'H',
              'includedCheckedBags': {
                'quantity': 0
              },
              'amenities': [
                {
                  'description': 'CHECKED BAG FIRST',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'SECOND BAG',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PRE RESERVED SEAT ASSIGNMENT',
                  'isChargeable': true,
                  'amenityType': 'PRE_RESERVED_SEAT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PRIORITY BOARDING',
                  'isChargeable': true,
                  'amenityType': 'TRAVEL_SERVICES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MILEAGE ACCRUAL',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '4',
              'cabin': 'ECONOMY',
              'fareBasis': 'HLPMB0BQ',
              'brandedFare': 'ECOBASIC',
              'brandedFareLabel': 'BASIC ECONOMY',
              'class': 'H',
              'includedCheckedBags': {
                'quantity': 0
              },
              'amenities': [
                {
                  'description': 'CHECKED BAG FIRST',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'SECOND BAG',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PRE RESERVED SEAT ASSIGNMENT',
                  'isChargeable': true,
                  'amenityType': 'PRE_RESERVED_SEAT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PRIORITY BOARDING',
                  'isChargeable': true,
                  'amenityType': 'TRAVEL_SERVICES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MILEAGE ACCRUAL',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '25',
              'cabin': 'ECONOMY',
              'fareBasis': 'HLPMB0BQ',
              'brandedFare': 'BASIC',
              'brandedFareLabel': 'BASIC',
              'class': 'H',
              'includedCheckedBags': {
                'quantity': 0
              },
              'amenities': [
                {
                  'description': 'CHECKED BAG FIRST',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHECKED BAG SECOND',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'COMPLIMENTARY MEAL',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '26',
              'cabin': 'ECONOMY',
              'fareBasis': 'HLPMB0BQ',
              'brandedFare': 'BASIC',
              'brandedFareLabel': 'BASIC',
              'class': 'H',
              'includedCheckedBags': {
                'quantity': 0
              },
              'amenities': [
                {
                  'description': 'CHECKED BAG FIRST',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHECKED BAG SECOND',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'COMPLIMENTARY MEAL',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      'type': 'flight-offer',
      'id': '16',
      'source': 'GDS',
      'instantTicketingRequired': false,
      'nonHomogeneous': false,
      'oneWay': false,
      'lastTicketingDate': '2039-12-13',
      'lastTicketingDateTime': '2039-12-13',
      'numberOfBookableSeats': 9,
      'itineraries': [
        {
          'duration': 'PT13H22M',
          'segments': [
            {
              'departure': {
                'iataCode': 'CDG',
                'terminal': '1',
                'at': '2039-12-13T11:40:00'
              },
              'arrival': {
                'iataCode': 'IAD',
                'at': '2039-12-13T14:25:00'
              },
              'carrierCode': 'UA',
              'number': '914',
              'aircraft': {
                'code': '788'
              },
              'operating': {
                'carrierCode': 'UA'
              },
              'duration': 'PT8H45M',
              'id': '3',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'IAD',
                'at': '2039-12-13T17:05:00'
              },
              'arrival': {
                'iataCode': 'ATL',
                'terminal': 'N',
                'at': '2039-12-13T19:02:00'
              },
              'carrierCode': 'UA',
              'number': '2081',
              'aircraft': {
                'code': '319'
              },
              'operating': {
                'carrierCode': 'UA'
              },
              'duration': 'PT1H57M',
              'id': '4',
              'numberOfStops': 0,
              'blacklistedInEU': false
            }
          ]
        },
        {
          'duration': 'PT11H10M',
          'segments': [
            {
              'departure': {
                'iataCode': 'ATL',
                'terminal': 'I',
                'at': '2039-12-15T17:15:00'
              },
              'arrival': {
                'iataCode': 'YYZ',
                'terminal': '1',
                'at': '2039-12-15T19:33:00'
              },
              'carrierCode': 'AC',
              'number': '8954',
              'aircraft': {
                'code': 'CR9'
              },
              'duration': 'PT2H18M',
              'id': '27',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'YYZ',
                'terminal': '1',
                'at': '2039-12-15T20:45:00'
              },
              'arrival': {
                'iataCode': 'CDG',
                'terminal': '2B',
                'at': '2039-12-16T10:25:00'
              },
              'carrierCode': 'AC',
              'number': '872',
              'aircraft': {
                'code': '333'
              },
              'operating': {
                'carrierCode': 'AC'
              },
              'duration': 'PT7H40M',
              'id': '28',
              'numberOfStops': 0,
              'blacklistedInEU': false
            }
          ]
        }
      ],
      'price': {
        'currency': 'EUR',
        'total': '1429.93',
        'base': '1050.00',
        'fees': [
          {
            'amount': '0.00',
            'type': 'SUPPLIER'
          },
          {
            'amount': '0.00',
            'type': 'TICKETING'
          }
        ],
        'grandTotal': '1429.93'
      },
      'pricingOptions': {
        'fareType': [
          'PUBLISHED'
        ],
        'includedCheckedBagsOnly': false
      },
      'validatingAirlineCodes': [
        'UA'
      ],
      'travelerPricings': [
        {
          'travelerId': '1',
          'fareOption': 'STANDARD',
          'travelerType': 'ADULT',
          'price': {
            'currency': 'EUR',
            'total': '1429.93',
            'base': '1050.00'
          },
          'fareDetailsBySegment': [
            {
              'segmentId': '3',
              'cabin': 'ECONOMY',
              'fareBasis': 'HLPMB0BQ',
              'brandedFare': 'ECOBASIC',
              'brandedFareLabel': 'BASIC ECONOMY',
              'class': 'H',
              'includedCheckedBags': {
                'quantity': 0
              },
              'amenities': [
                {
                  'description': 'CHECKED BAG FIRST',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'SECOND BAG',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PRE RESERVED SEAT ASSIGNMENT',
                  'isChargeable': true,
                  'amenityType': 'PRE_RESERVED_SEAT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PRIORITY BOARDING',
                  'isChargeable': true,
                  'amenityType': 'TRAVEL_SERVICES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MILEAGE ACCRUAL',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '4',
              'cabin': 'ECONOMY',
              'fareBasis': 'HLPMB0BQ',
              'brandedFare': 'ECOBASIC',
              'brandedFareLabel': 'BASIC ECONOMY',
              'class': 'H',
              'includedCheckedBags': {
                'quantity': 0
              },
              'amenities': [
                {
                  'description': 'CHECKED BAG FIRST',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'SECOND BAG',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PRE RESERVED SEAT ASSIGNMENT',
                  'isChargeable': true,
                  'amenityType': 'PRE_RESERVED_SEAT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PRIORITY BOARDING',
                  'isChargeable': true,
                  'amenityType': 'TRAVEL_SERVICES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MILEAGE ACCRUAL',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '27',
              'cabin': 'ECONOMY',
              'fareBasis': 'HLPMB0BQ',
              'brandedFare': 'BASIC',
              'brandedFareLabel': 'BASIC',
              'class': 'H',
              'includedCheckedBags': {
                'quantity': 0
              },
              'amenities': [
                {
                  'description': 'CHECKED BAG FIRST',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHECKED BAG SECOND',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'COMPLIMENTARY MEAL',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '28',
              'cabin': 'ECONOMY',
              'fareBasis': 'HLPMB0BQ',
              'brandedFare': 'BASIC',
              'brandedFareLabel': 'BASIC',
              'class': 'H',
              'includedCheckedBags': {
                'quantity': 0
              },
              'amenities': [
                {
                  'description': 'CHECKED BAG FIRST',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHECKED BAG SECOND',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'COMPLIMENTARY MEAL',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      'type': 'flight-offer',
      'id': '17',
      'source': 'GDS',
      'instantTicketingRequired': false,
      'nonHomogeneous': false,
      'oneWay': false,
      'lastTicketingDate': '2039-12-13',
      'lastTicketingDateTime': '2039-12-13',
      'numberOfBookableSeats': 9,
      'itineraries': [
        {
          'duration': 'PT13H35M',
          'segments': [
            {
              'departure': {
                'iataCode': 'CDG',
                'terminal': '2B',
                'at': '2039-12-13T14:00:00'
              },
              'arrival': {
                'iataCode': 'YUL',
                'at': '2039-12-13T15:45:00'
              },
              'carrierCode': 'UA',
              'number': '8121',
              'aircraft': {
                'code': '77W'
              },
              'operating': {
                'carrierCode': 'AC'
              },
              'duration': 'PT7H45M',
              'id': '20',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'YUL',
                'at': '2039-12-13T18:25:00'
              },
              'arrival': {
                'iataCode': 'ATL',
                'terminal': 'I',
                'at': '2039-12-13T21:35:00'
              },
              'carrierCode': 'UA',
              'number': '8256',
              'aircraft': {
                'code': 'CR9'
              },
              'duration': 'PT3H10M',
              'id': '21',
              'numberOfStops': 0,
              'blacklistedInEU': false
            }
          ]
        },
        {
          'duration': 'PT11H40M',
          'segments': [
            {
              'departure': {
                'iataCode': 'ATL',
                'terminal': 'I',
                'at': '2039-12-15T16:50:00'
              },
              'arrival': {
                'iataCode': 'FRA',
                'terminal': '1',
                'at': '2039-12-16T07:45:00'
              },
              'carrierCode': 'LH',
              'number': '445',
              'aircraft': {
                'code': '343'
              },
              'operating': {
                'carrierCode': 'LH'
              },
              'duration': 'PT8H55M',
              'id': '35',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'FRA',
                'terminal': '1',
                'at': '2039-12-16T09:15:00'
              },
              'arrival': {
                'iataCode': 'CDG',
                'terminal': '1',
                'at': '2039-12-16T10:30:00'
              },
              'carrierCode': 'LH',
              'number': '1030',
              'aircraft': {
                'code': '321'
              },
              'operating': {
                'carrierCode': 'LH'
              },
              'duration': 'PT1H15M',
              'id': '36',
              'numberOfStops': 0,
              'blacklistedInEU': false
            }
          ]
        }
      ],
      'price': {
        'currency': 'EUR',
        'total': '1430.13',
        'base': '1050.00',
        'fees': [
          {
            'amount': '0.00',
            'type': 'SUPPLIER'
          },
          {
            'amount': '0.00',
            'type': 'TICKETING'
          }
        ],
        'grandTotal': '1430.13'
      },
      'pricingOptions': {
        'fareType': [
          'PUBLISHED'
        ],
        'includedCheckedBagsOnly': false
      },
      'validatingAirlineCodes': [
        'UA'
      ],
      'travelerPricings': [
        {
          'travelerId': '1',
          'fareOption': 'STANDARD',
          'travelerType': 'ADULT',
          'price': {
            'currency': 'EUR',
            'total': '1430.13',
            'base': '1050.00'
          },
          'fareDetailsBySegment': [
            {
              'segmentId': '20',
              'cabin': 'ECONOMY',
              'fareBasis': 'HLPMB0BQ',
              'brandedFare': 'ECOBASIC',
              'brandedFareLabel': 'BASIC ECONOMY',
              'class': 'H',
              'includedCheckedBags': {
                'quantity': 0
              },
              'amenities': [
                {
                  'description': 'CHECKED BAG FIRST',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'SECOND BAG',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PRE RESERVED SEAT ASSIGNMENT',
                  'isChargeable': true,
                  'amenityType': 'PRE_RESERVED_SEAT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PRIORITY BOARDING',
                  'isChargeable': true,
                  'amenityType': 'TRAVEL_SERVICES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MILEAGE ACCRUAL',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '21',
              'cabin': 'ECONOMY',
              'fareBasis': 'HLPMB0BQ',
              'brandedFare': 'ECOBASIC',
              'brandedFareLabel': 'BASIC ECONOMY',
              'class': 'H',
              'includedCheckedBags': {
                'quantity': 0
              },
              'amenities': [
                {
                  'description': 'CHECKED BAG FIRST',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'SECOND BAG',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PRE RESERVED SEAT ASSIGNMENT',
                  'isChargeable': true,
                  'amenityType': 'PRE_RESERVED_SEAT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PRIORITY BOARDING',
                  'isChargeable': true,
                  'amenityType': 'TRAVEL_SERVICES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MILEAGE ACCRUAL',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '35',
              'cabin': 'ECONOMY',
              'fareBasis': 'HLPMB0BQ',
              'brandedFare': 'ECOLIGHT',
              'brandedFareLabel': 'ECONOMY LIGHT',
              'class': 'H',
              'includedCheckedBags': {
                'quantity': 0
              },
              'amenities': [
                {
                  'description': '1ST BAG UPTO50LB23KG 62LI158CM',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CATERING ON EUROPE FLTS',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CATERING ON INTERCONT FLTS',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'STANDARD SEAT RESERVATION',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MILEAGE ACCRUAL',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'UPGRADE ELIGIBILITY',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREFERRED SEAT RESERVATION',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '36',
              'cabin': 'ECONOMY',
              'fareBasis': 'HLPMB0BQ',
              'brandedFare': 'ECOLIGHT',
              'brandedFareLabel': 'ECONOMY LIGHT',
              'class': 'H',
              'includedCheckedBags': {
                'quantity': 0
              },
              'amenities': [
                {
                  'description': '1ST BAG UPTO50LB23KG 62LI158CM',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CATERING ON EUROPE FLTS',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CATERING ON INTERCONT FLTS',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'STANDARD SEAT RESERVATION',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MILEAGE ACCRUAL',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'UPGRADE ELIGIBILITY',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREFERRED SEAT RESERVATION',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      'type': 'flight-offer',
      'id': '18',
      'source': 'GDS',
      'instantTicketingRequired': false,
      'nonHomogeneous': false,
      'oneWay': false,
      'lastTicketingDate': '2039-12-13',
      'lastTicketingDateTime': '2039-12-13',
      'numberOfBookableSeats': 9,
      'itineraries': [
        {
          'duration': 'PT13H20M',
          'segments': [
            {
              'departure': {
                'iataCode': 'CDG',
                'terminal': '1',
                'at': '2039-12-13T07:45:00'
              },
              'arrival': {
                'iataCode': 'FRA',
                'terminal': '1',
                'at': '2039-12-13T09:00:00'
              },
              'carrierCode': 'LH',
              'number': '1051',
              'aircraft': {
                'code': '321'
              },
              'operating': {
                'carrierCode': 'LH'
              },
              'duration': 'PT1H15M',
              'id': '1',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'FRA',
                'terminal': '1',
                'at': '2039-12-13T10:35:00'
              },
              'arrival': {
                'iataCode': 'ATL',
                'terminal': 'I',
                'at': '2039-12-13T15:05:00'
              },
              'carrierCode': 'LH',
              'number': '444',
              'aircraft': {
                'code': '333'
              },
              'operating': {
                'carrierCode': 'LH'
              },
              'duration': 'PT10H30M',
              'id': '2',
              'numberOfStops': 0,
              'blacklistedInEU': false
            }
          ]
        },
        {
          'duration': 'PT11H',
          'segments': [
            {
              'departure': {
                'iataCode': 'ATL',
                'terminal': 'I',
                'at': '2039-12-15T17:25:00'
              },
              'arrival': {
                'iataCode': 'YYZ',
                'terminal': '1',
                'at': '2039-12-15T19:42:00'
              },
              'carrierCode': 'AC',
              'number': '1308',
              'aircraft': {
                'code': '223'
              },
              'operating': {
                'carrierCode': 'AC'
              },
              'duration': 'PT2H17M',
              'id': '25',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'YYZ',
                'terminal': '1',
                'at': '2039-12-15T20:45:00'
              },
              'arrival': {
                'iataCode': 'CDG',
                'terminal': '2B',
                'at': '2039-12-16T10:25:00'
              },
              'carrierCode': 'AC',
              'number': '872',
              'aircraft': {
                'code': '333'
              },
              'operating': {
                'carrierCode': 'AC'
              },
              'duration': 'PT7H40M',
              'id': '26',
              'numberOfStops': 0,
              'blacklistedInEU': false
            }
          ]
        }
      ],
      'price': {
        'currency': 'EUR',
        'total': '1434.92',
        'base': '1050.00',
        'fees': [
          {
            'amount': '0.00',
            'type': 'SUPPLIER'
          },
          {
            'amount': '0.00',
            'type': 'TICKETING'
          }
        ],
        'grandTotal': '1434.92'
      },
      'pricingOptions': {
        'fareType': [
          'PUBLISHED'
        ],
        'includedCheckedBagsOnly': false
      },
      'validatingAirlineCodes': [
        'LH'
      ],
      'travelerPricings': [
        {
          'travelerId': '1',
          'fareOption': 'STANDARD',
          'travelerType': 'ADULT',
          'price': {
            'currency': 'EUR',
            'total': '1434.92',
            'base': '1050.00'
          },
          'fareDetailsBySegment': [
            {
              'segmentId': '1',
              'cabin': 'ECONOMY',
              'fareBasis': 'HLPMB0BQ',
              'brandedFare': 'ECOLIGHT',
              'brandedFareLabel': 'ECONOMY LIGHT',
              'class': 'H',
              'includedCheckedBags': {
                'quantity': 0
              },
              'amenities': [
                {
                  'description': '1ST BAG UPTO50LB23KG 62LI158CM',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CATERING ON EUROPE FLTS',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CATERING ON INTERCONT FLTS',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'STANDARD SEAT RESERVATION',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MILEAGE ACCRUAL',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'UPGRADE ELIGIBILITY',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREFERRED SEAT RESERVATION',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '2',
              'cabin': 'ECONOMY',
              'fareBasis': 'HLPMB0BQ',
              'brandedFare': 'ECOLIGHT',
              'brandedFareLabel': 'ECONOMY LIGHT',
              'class': 'H',
              'includedCheckedBags': {
                'quantity': 0
              },
              'amenities': [
                {
                  'description': '1ST BAG UPTO50LB23KG 62LI158CM',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CATERING ON EUROPE FLTS',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CATERING ON INTERCONT FLTS',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'STANDARD SEAT RESERVATION',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MILEAGE ACCRUAL',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'UPGRADE ELIGIBILITY',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREFERRED SEAT RESERVATION',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '25',
              'cabin': 'ECONOMY',
              'fareBasis': 'HLPMB0BQ',
              'brandedFare': 'BASIC',
              'brandedFareLabel': 'BASIC',
              'class': 'H',
              'includedCheckedBags': {
                'quantity': 0
              },
              'amenities': [
                {
                  'description': 'CHECKED BAG FIRST',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHECKED BAG SECOND',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'COMPLIMENTARY MEAL',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '26',
              'cabin': 'ECONOMY',
              'fareBasis': 'HLPMB0BQ',
              'brandedFare': 'BASIC',
              'brandedFareLabel': 'BASIC',
              'class': 'H',
              'includedCheckedBags': {
                'quantity': 0
              },
              'amenities': [
                {
                  'description': 'CHECKED BAG FIRST',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHECKED BAG SECOND',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'COMPLIMENTARY MEAL',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      'type': 'flight-offer',
      'id': '19',
      'source': 'GDS',
      'instantTicketingRequired': false,
      'nonHomogeneous': false,
      'oneWay': false,
      'lastTicketingDate': '2039-12-13',
      'lastTicketingDateTime': '2039-12-13',
      'numberOfBookableSeats': 9,
      'itineraries': [
        {
          'duration': 'PT13H20M',
          'segments': [
            {
              'departure': {
                'iataCode': 'CDG',
                'terminal': '1',
                'at': '2039-12-13T07:45:00'
              },
              'arrival': {
                'iataCode': 'FRA',
                'terminal': '1',
                'at': '2039-12-13T09:00:00'
              },
              'carrierCode': 'LH',
              'number': '1051',
              'aircraft': {
                'code': '321'
              },
              'operating': {
                'carrierCode': 'LH'
              },
              'duration': 'PT1H15M',
              'id': '1',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'FRA',
                'terminal': '1',
                'at': '2039-12-13T10:35:00'
              },
              'arrival': {
                'iataCode': 'ATL',
                'terminal': 'I',
                'at': '2039-12-13T15:05:00'
              },
              'carrierCode': 'LH',
              'number': '444',
              'aircraft': {
                'code': '333'
              },
              'operating': {
                'carrierCode': 'LH'
              },
              'duration': 'PT10H30M',
              'id': '2',
              'numberOfStops': 0,
              'blacklistedInEU': false
            }
          ]
        },
        {
          'duration': 'PT11H10M',
          'segments': [
            {
              'departure': {
                'iataCode': 'ATL',
                'terminal': 'I',
                'at': '2039-12-15T17:15:00'
              },
              'arrival': {
                'iataCode': 'YYZ',
                'terminal': '1',
                'at': '2039-12-15T19:33:00'
              },
              'carrierCode': 'AC',
              'number': '8954',
              'aircraft': {
                'code': 'CR9'
              },
              'duration': 'PT2H18M',
              'id': '27',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'YYZ',
                'terminal': '1',
                'at': '2039-12-15T20:45:00'
              },
              'arrival': {
                'iataCode': 'CDG',
                'terminal': '2B',
                'at': '2039-12-16T10:25:00'
              },
              'carrierCode': 'AC',
              'number': '872',
              'aircraft': {
                'code': '333'
              },
              'operating': {
                'carrierCode': 'AC'
              },
              'duration': 'PT7H40M',
              'id': '28',
              'numberOfStops': 0,
              'blacklistedInEU': false
            }
          ]
        }
      ],
      'price': {
        'currency': 'EUR',
        'total': '1434.92',
        'base': '1050.00',
        'fees': [
          {
            'amount': '0.00',
            'type': 'SUPPLIER'
          },
          {
            'amount': '0.00',
            'type': 'TICKETING'
          }
        ],
        'grandTotal': '1434.92'
      },
      'pricingOptions': {
        'fareType': [
          'PUBLISHED'
        ],
        'includedCheckedBagsOnly': false
      },
      'validatingAirlineCodes': [
        'LH'
      ],
      'travelerPricings': [
        {
          'travelerId': '1',
          'fareOption': 'STANDARD',
          'travelerType': 'ADULT',
          'price': {
            'currency': 'EUR',
            'total': '1434.92',
            'base': '1050.00'
          },
          'fareDetailsBySegment': [
            {
              'segmentId': '1',
              'cabin': 'ECONOMY',
              'fareBasis': 'HLPMB0BQ',
              'brandedFare': 'ECOLIGHT',
              'brandedFareLabel': 'ECONOMY LIGHT',
              'class': 'H',
              'includedCheckedBags': {
                'quantity': 0
              },
              'amenities': [
                {
                  'description': '1ST BAG UPTO50LB23KG 62LI158CM',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CATERING ON EUROPE FLTS',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CATERING ON INTERCONT FLTS',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'STANDARD SEAT RESERVATION',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MILEAGE ACCRUAL',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'UPGRADE ELIGIBILITY',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREFERRED SEAT RESERVATION',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '2',
              'cabin': 'ECONOMY',
              'fareBasis': 'HLPMB0BQ',
              'brandedFare': 'ECOLIGHT',
              'brandedFareLabel': 'ECONOMY LIGHT',
              'class': 'H',
              'includedCheckedBags': {
                'quantity': 0
              },
              'amenities': [
                {
                  'description': '1ST BAG UPTO50LB23KG 62LI158CM',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CATERING ON EUROPE FLTS',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CATERING ON INTERCONT FLTS',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'STANDARD SEAT RESERVATION',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MILEAGE ACCRUAL',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'UPGRADE ELIGIBILITY',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREFERRED SEAT RESERVATION',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '27',
              'cabin': 'ECONOMY',
              'fareBasis': 'HLPMB0BQ',
              'brandedFare': 'BASIC',
              'brandedFareLabel': 'BASIC',
              'class': 'H',
              'includedCheckedBags': {
                'quantity': 0
              },
              'amenities': [
                {
                  'description': 'CHECKED BAG FIRST',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHECKED BAG SECOND',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'COMPLIMENTARY MEAL',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '28',
              'cabin': 'ECONOMY',
              'fareBasis': 'HLPMB0BQ',
              'brandedFare': 'BASIC',
              'brandedFareLabel': 'BASIC',
              'class': 'H',
              'includedCheckedBags': {
                'quantity': 0
              },
              'amenities': [
                {
                  'description': 'CHECKED BAG FIRST',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CHECKED BAG SECOND',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'COMPLIMENTARY MEAL',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'BASIC SEAT',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      'type': 'flight-offer',
      'id': '20',
      'source': 'GDS',
      'instantTicketingRequired': false,
      'nonHomogeneous': false,
      'oneWay': false,
      'lastTicketingDate': '2039-12-13',
      'lastTicketingDateTime': '2039-12-13',
      'numberOfBookableSeats': 9,
      'itineraries': [
        {
          'duration': 'PT13H22M',
          'segments': [
            {
              'departure': {
                'iataCode': 'CDG',
                'terminal': '1',
                'at': '2039-12-13T11:40:00'
              },
              'arrival': {
                'iataCode': 'IAD',
                'at': '2039-12-13T14:25:00'
              },
              'carrierCode': 'UA',
              'number': '914',
              'aircraft': {
                'code': '788'
              },
              'operating': {
                'carrierCode': 'UA'
              },
              'duration': 'PT8H45M',
              'id': '3',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'IAD',
                'at': '2039-12-13T17:05:00'
              },
              'arrival': {
                'iataCode': 'ATL',
                'terminal': 'N',
                'at': '2039-12-13T19:02:00'
              },
              'carrierCode': 'UA',
              'number': '2081',
              'aircraft': {
                'code': '319'
              },
              'operating': {
                'carrierCode': 'UA'
              },
              'duration': 'PT1H57M',
              'id': '4',
              'numberOfStops': 0,
              'blacklistedInEU': false
            }
          ]
        },
        {
          'duration': 'PT11H40M',
          'segments': [
            {
              'departure': {
                'iataCode': 'ATL',
                'terminal': 'I',
                'at': '2039-12-15T16:50:00'
              },
              'arrival': {
                'iataCode': 'FRA',
                'terminal': '1',
                'at': '2039-12-16T07:45:00'
              },
              'carrierCode': 'LH',
              'number': '445',
              'aircraft': {
                'code': '343'
              },
              'operating': {
                'carrierCode': 'LH'
              },
              'duration': 'PT8H55M',
              'id': '35',
              'numberOfStops': 0,
              'blacklistedInEU': false
            },
            {
              'departure': {
                'iataCode': 'FRA',
                'terminal': '1',
                'at': '2039-12-16T09:15:00'
              },
              'arrival': {
                'iataCode': 'CDG',
                'terminal': '1',
                'at': '2039-12-16T10:30:00'
              },
              'carrierCode': 'LH',
              'number': '1030',
              'aircraft': {
                'code': '321'
              },
              'operating': {
                'carrierCode': 'LH'
              },
              'duration': 'PT1H15M',
              'id': '36',
              'numberOfStops': 0,
              'blacklistedInEU': false
            }
          ]
        }
      ],
      'price': {
        'currency': 'EUR',
        'total': '1435.05',
        'base': '1050.00',
        'fees': [
          {
            'amount': '0.00',
            'type': 'SUPPLIER'
          },
          {
            'amount': '0.00',
            'type': 'TICKETING'
          }
        ],
        'grandTotal': '1435.05'
      },
      'pricingOptions': {
        'fareType': [
          'PUBLISHED'
        ],
        'includedCheckedBagsOnly': false
      },
      'validatingAirlineCodes': [
        'UA'
      ],
      'travelerPricings': [
        {
          'travelerId': '1',
          'fareOption': 'STANDARD',
          'travelerType': 'ADULT',
          'price': {
            'currency': 'EUR',
            'total': '1435.05',
            'base': '1050.00'
          },
          'fareDetailsBySegment': [
            {
              'segmentId': '3',
              'cabin': 'ECONOMY',
              'fareBasis': 'HLPMB0BQ',
              'brandedFare': 'ECOBASIC',
              'brandedFareLabel': 'BASIC ECONOMY',
              'class': 'H',
              'includedCheckedBags': {
                'quantity': 0
              },
              'amenities': [
                {
                  'description': 'CHECKED BAG FIRST',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'SECOND BAG',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PRE RESERVED SEAT ASSIGNMENT',
                  'isChargeable': true,
                  'amenityType': 'PRE_RESERVED_SEAT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PRIORITY BOARDING',
                  'isChargeable': true,
                  'amenityType': 'TRAVEL_SERVICES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MILEAGE ACCRUAL',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '4',
              'cabin': 'ECONOMY',
              'fareBasis': 'HLPMB0BQ',
              'brandedFare': 'ECOBASIC',
              'brandedFareLabel': 'BASIC ECONOMY',
              'class': 'H',
              'includedCheckedBags': {
                'quantity': 0
              },
              'amenities': [
                {
                  'description': 'CHECKED BAG FIRST',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'SECOND BAG',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PRE RESERVED SEAT ASSIGNMENT',
                  'isChargeable': true,
                  'amenityType': 'PRE_RESERVED_SEAT',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PRIORITY BOARDING',
                  'isChargeable': true,
                  'amenityType': 'TRAVEL_SERVICES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MILEAGE ACCRUAL',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '35',
              'cabin': 'ECONOMY',
              'fareBasis': 'HLPMB0BQ',
              'brandedFare': 'ECOLIGHT',
              'brandedFareLabel': 'ECONOMY LIGHT',
              'class': 'H',
              'includedCheckedBags': {
                'quantity': 0
              },
              'amenities': [
                {
                  'description': '1ST BAG UPTO50LB23KG 62LI158CM',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CATERING ON EUROPE FLTS',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CATERING ON INTERCONT FLTS',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'STANDARD SEAT RESERVATION',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MILEAGE ACCRUAL',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'UPGRADE ELIGIBILITY',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREFERRED SEAT RESERVATION',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            },
            {
              'segmentId': '36',
              'cabin': 'ECONOMY',
              'fareBasis': 'HLPMB0BQ',
              'brandedFare': 'ECOLIGHT',
              'brandedFareLabel': 'ECONOMY LIGHT',
              'class': 'H',
              'includedCheckedBags': {
                'quantity': 0
              },
              'amenities': [
                {
                  'description': '1ST BAG UPTO50LB23KG 62LI158CM',
                  'isChargeable': true,
                  'amenityType': 'BAGGAGE',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CATERING ON EUROPE FLTS',
                  'isChargeable': true,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'CATERING ON INTERCONT FLTS',
                  'isChargeable': false,
                  'amenityType': 'MEAL',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'STANDARD SEAT RESERVATION',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'MILEAGE ACCRUAL',
                  'isChargeable': false,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'UPGRADE ELIGIBILITY',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                },
                {
                  'description': 'PREFERRED SEAT RESERVATION',
                  'isChargeable': true,
                  'amenityType': 'BRANDED_FARES',
                  'amenityProvider': {
                    'name': 'BrandedFare'
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
})

export const initFlightPrice = () => ({
  'data': {
    'type': 'flight-offers-pricing',
    'flightOffers': [
      {
        'type': 'flight-offer',
        'id': '1',
        'source': 'GDS',
        'instantTicketingRequired': false,
        'nonHomogeneous': false,
        'paymentCardRequired': false,
        'lastTicketingDate': '2039-12-12',
        'itineraries': [
          {
            'segments': [
              {
                'departure': {
                  'iataCode': 'CDG',
                  'terminal': '1',
                  'at': '2039-12-13T13:10:00'
                },
                'arrival': {
                  'iataCode': 'KEF',
                  'at': '2039-12-13T15:50:00'
                },
                'carrierCode': 'FI',
                'number': '545',
                'aircraft': {
                  'code': '7M8'
                },
                'operating': {
                  'carrierCode': 'FI'
                },
                'duration': 'PT3H40M',
                'id': '17',
                'numberOfStops': 0,
                'co2Emissions': [
                  {
                    'weight': 134,
                    'weightUnit': 'KG',
                    'cabin': 'ECONOMY'
                  }
                ]
              },
              {
                'departure': {
                  'iataCode': 'KEF',
                  'at': '2039-12-13T17:05:00'
                },
                'arrival': {
                  'iataCode': 'BOS',
                  'terminal': 'E',
                  'at': '2039-12-13T17:50:00'
                },
                'carrierCode': 'FI',
                'number': '631',
                'aircraft': {
                  'code': '76W'
                },
                'operating': {
                  'carrierCode': 'FI'
                },
                'duration': 'PT5H45M',
                'id': '18',
                'numberOfStops': 0,
                'co2Emissions': [
                  {
                    'weight': 190,
                    'weightUnit': 'KG',
                    'cabin': 'ECONOMY'
                  }
                ]
              },
              {
                'departure': {
                  'iataCode': 'BOS',
                  'terminal': 'C',
                  'at': '2039-12-13T20:45:00'
                },
                'arrival': {
                  'iataCode': 'ATL',
                  'terminal': 'N',
                  'at': '2039-12-13T23:44:00'
                },
                'carrierCode': 'FI',
                'number': '7901',
                'aircraft': {
                  'code': 'E90'
                },
                'operating': {
                  'carrierCode': 'B6'
                },
                'duration': 'PT2H59M',
                'id': '19',
                'numberOfStops': 0,
                'co2Emissions': [
                  {
                    'weight': 133,
                    'weightUnit': 'KG',
                    'cabin': 'ECONOMY'
                  }
                ]
              }
            ]
          },
          {
            'segments': [
              {
                'departure': {
                  'iataCode': 'ATL',
                  'terminal': 'N',
                  'at': '2039-12-15T11:40:00'
                },
                'arrival': {
                  'iataCode': 'JFK',
                  'terminal': '5',
                  'at': '2039-12-15T13:51:00'
                },
                'carrierCode': 'FI',
                'number': '7904',
                'aircraft': {
                  'code': 'E90'
                },
                'operating': {
                  'carrierCode': 'B6'
                },
                'duration': 'PT2H11M',
                'id': '29',
                'numberOfStops': 0,
                'co2Emissions': [
                  {
                    'weight': 119,
                    'weightUnit': 'KG',
                    'cabin': 'ECONOMY'
                  }
                ]
              },
              {
                'departure': {
                  'iataCode': 'JFK',
                  'terminal': '7',
                  'at': '2039-12-15T19:25:00'
                },
                'arrival': {
                  'iataCode': 'KEF',
                  'at': '2039-12-16T06:05:00'
                },
                'carrierCode': 'FI',
                'number': '614',
                'aircraft': {
                  'code': '7M9'
                },
                'operating': {
                  'carrierCode': 'FI'
                },
                'duration': 'PT5H40M',
                'id': '30',
                'numberOfStops': 0,
                'co2Emissions': [
                  {
                    'weight': 205,
                    'weightUnit': 'KG',
                    'cabin': 'ECONOMY'
                  }
                ]
              },
              {
                'departure': {
                  'iataCode': 'KEF',
                  'at': '2039-12-16T07:35:00'
                },
                'arrival': {
                  'iataCode': 'CDG',
                  'terminal': '1',
                  'at': '2039-12-16T12:00:00'
                },
                'carrierCode': 'FI',
                'number': '542',
                'aircraft': {
                  'code': '7M8'
                },
                'operating': {
                  'carrierCode': 'FI'
                },
                'duration': 'PT3H25M',
                'id': '31',
                'numberOfStops': 0,
                'co2Emissions': [
                  {
                    'weight': 134,
                    'weightUnit': 'KG',
                    'cabin': 'ECONOMY'
                  }
                ]
              }
            ]
          }
        ],
        'price': {
          'currency': 'EUR',
          'total': '1325.38',
          'base': '952.00',
          'fees': [
            {
              'amount': '0.00',
              'type': 'SUPPLIER'
            },
            {
              'amount': '0.00',
              'type': 'TICKETING'
            },
            {
              'amount': '0.00',
              'type': 'FORM_OF_PAYMENT'
            }
          ],
          'grandTotal': '1325.38',
          'billingCurrency': 'EUR'
        },
        'pricingOptions': {
          'fareType': [
            'PUBLISHED'
          ],
          'includedCheckedBagsOnly': true
        },
        'validatingAirlineCodes': [
          'FI'
        ],
        'travelerPricings': [
          {
            'travelerId': '1',
            'fareOption': 'STANDARD',
            'travelerType': 'ADULT',
            'price': {
              'currency': 'EUR',
              'total': '1325.38',
              'base': '952.00',
              'taxes': [
                {
                  'amount': '6.50',
                  'code': 'XY'
                },
                {
                  'amount': '3.00',
                  'code': 'O4'
                },
                {
                  'amount': '12.33',
                  'code': 'QX'
                },
                {
                  'amount': '3.56',
                  'code': 'XA'
                },
                {
                  'amount': '7.02',
                  'code': 'IS'
                },
                {
                  'amount': '6.47',
                  'code': 'YC'
                },
                {
                  'amount': '21.57',
                  'code': 'FR'
                },
                {
                  'amount': '4.18',
                  'code': 'XF'
                },
                {
                  'amount': '4.51',
                  'code': 'IZ'
                },
                {
                  'amount': '10.40',
                  'code': 'AY'
                },
                {
                  'amount': '246.00',
                  'code': 'YR'
                },
                {
                  'amount': '6.00',
                  'code': 'ZU'
                },
                {
                  'amount': '2.68',
                  'code': 'T1'
                },
                {
                  'amount': '39.16',
                  'code': 'US'
                }
              ],
              'refundableTaxes': '127.38'
            },
            'fareDetailsBySegment': [
              {
                'segmentId': '17',
                'cabin': 'ECONOMY',
                'fareBasis': 'VJ2QOAEC',
                'brandedFare': 'STANDARD',
                'class': 'V',
                'includedCheckedBags': {
                  'quantity': 1
                }
              },
              {
                'segmentId': '18',
                'cabin': 'ECONOMY',
                'fareBasis': 'VJ2QOAEC',
                'brandedFare': 'STANDARD',
                'class': 'V',
                'includedCheckedBags': {
                  'quantity': 1
                }
              },
              {
                'segmentId': '19',
                'cabin': 'ECONOMY',
                'fareBasis': 'VJ2QOAEC',
                'brandedFare': 'STANDARD',
                'class': 'V',
                'includedCheckedBags': {
                  'quantity': 1
                }
              },
              {
                'segmentId': '29',
                'cabin': 'ECONOMY',
                'fareBasis': 'VJ2QOAEC',
                'brandedFare': 'STANDARD',
                'class': 'V',
                'includedCheckedBags': {
                  'quantity': 1
                }
              },
              {
                'segmentId': '30',
                'cabin': 'ECONOMY',
                'fareBasis': 'VJ2QOAEC',
                'brandedFare': 'STANDARD',
                'class': 'V',
                'includedCheckedBags': {
                  'quantity': 1
                }
              },
              {
                'segmentId': '31',
                'cabin': 'ECONOMY',
                'fareBasis': 'VJ2QOAEC',
                'brandedFare': 'STANDARD',
                'class': 'V',
                'includedCheckedBags': {
                  'quantity': 1
                }
              }
            ]
          }
        ]
      }
    ],
    'bookingRequirements': {
      'emailAddressRequired': true,
      'mobilePhoneNumberRequired': true,
      'travelerRequirements': [
        {
          'travelerId': '1',
          'genderRequired': true,
          'documentRequired': true,
          'dateOfBirthRequired': true,
          'redressRequiredIfAny': true,
          'residenceRequired': true
        }
      ]
    }
  },
  'dictionaries': {
    'locations': {
      'CDG': {
        'cityCode': 'PAR',
        'countryCode': 'FR'
      },
      'BOS': {
        'cityCode': 'BOS',
        'countryCode': 'US'
      },
      'ATL': {
        'cityCode': 'ATL',
        'countryCode': 'US'
      },
      'KEF': {
        'cityCode': 'REK',
        'countryCode': 'IS'
      },
      'JFK': {
        'cityCode': 'NYC',
        'countryCode': 'US'
      }
    }
  }
})

export const initFlightDestinations = () => ({
  'data': [
    {
      'type': 'flight-destination',
      'origin': 'ORY',
      'destination': 'MAD',
      'departureDate': '2040-01-09',
      'returnDate': '2040-01-16',
      'price': {
        'total': '97.81'
      },
      'links': {
        'flightDates': 'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=PAR&destination=MAD&departureDate=2039-12-13,2040-06-09&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
        'flightOffers': 'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=PAR&destinationLocationCode=MAD&departureDate=2040-01-09&returnDate=2040-01-16&adults=1&nonStop=false'
      }
    },
    {
      'type': 'flight-destination',
      'origin': 'ORY',
      'destination': 'LIS',
      'departureDate': '2040-01-08',
      'returnDate': '2040-01-20',
      'price': {
        'total': '99.01'
      },
      'links': {
        'flightDates': 'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=PAR&destination=LIS&departureDate=2039-12-13,2040-06-09&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
        'flightOffers': 'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=PAR&destinationLocationCode=LIS&departureDate=2040-01-08&returnDate=2040-01-20&adults=1&nonStop=false'
      }
    },
    {
      'type': 'flight-destination',
      'origin': 'ORY',
      'destination': 'OPO',
      'departureDate': '2040-04-10',
      'returnDate': '2040-04-17',
      'price': {
        'total': '120.63'
      },
      'links': {
        'flightDates': 'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=PAR&destination=OPO&departureDate=2039-12-13,2040-06-09&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
        'flightOffers': 'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=PAR&destinationLocationCode=OPO&departureDate=2040-04-10&returnDate=2040-04-17&adults=1&nonStop=false'
      }
    },
    {
      'type': 'flight-destination',
      'origin': 'ORY',
      'destination': 'LIN',
      'departureDate': '2039-12-20',
      'returnDate': '2039-12-24',
      'price': {
        'total': '122.65'
      },
      'links': {
        'flightDates': 'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=PAR&destination=LIN&departureDate=2039-12-13,2040-06-09&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
        'flightOffers': 'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=PAR&destinationLocationCode=LIN&departureDate=2039-12-20&returnDate=2039-12-24&adults=1&nonStop=false'
      }
    },
    {
      'type': 'flight-destination',
      'origin': 'CDG',
      'destination': 'FCO',
      'departureDate': '2039-12-31',
      'returnDate': '2040-01-09',
      'price': {
        'total': '131.46'
      },
      'links': {
        'flightDates': 'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=PAR&destination=FCO&departureDate=2039-12-13,2040-06-09&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
        'flightOffers': 'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=PAR&destinationLocationCode=FCO&departureDate=2039-12-31&returnDate=2040-01-09&adults=1&nonStop=false'
      }
    },
    {
      'type': 'flight-destination',
      'origin': 'ORY',
      'destination': 'TUN',
      'departureDate': '2040-02-16',
      'returnDate': '2040-02-20',
      'price': {
        'total': '137.17'
      },
      'links': {
        'flightDates': 'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=PAR&destination=TUN&departureDate=2039-12-13,2040-06-09&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
        'flightOffers': 'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=PAR&destinationLocationCode=TUN&departureDate=2040-02-16&returnDate=2040-02-20&adults=1&nonStop=false'
      }
    },
    {
      'type': 'flight-destination',
      'origin': 'ORY',
      'destination': 'RAK',
      'departureDate': '2040-01-06',
      'returnDate': '2040-01-16',
      'price': {
        'total': '142.14'
      },
      'links': {
        'flightDates': 'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=PAR&destination=RAK&departureDate=2039-12-13,2040-06-09&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
        'flightOffers': 'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=PAR&destinationLocationCode=RAK&departureDate=2040-01-06&returnDate=2040-01-16&adults=1&nonStop=false'
      }
    },
    {
      'type': 'flight-destination',
      'origin': 'ORY',
      'destination': 'BCN',
      'departureDate': '2040-01-16',
      'returnDate': '2040-01-30',
      'price': {
        'total': '145.29'
      },
      'links': {
        'flightDates': 'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=PAR&destination=BCN&departureDate=2039-12-13,2040-06-09&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
        'flightOffers': 'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=PAR&destinationLocationCode=BCN&departureDate=2040-01-16&returnDate=2040-01-30&adults=1&nonStop=false'
      }
    },
    {
      'type': 'flight-destination',
      'origin': 'CDG',
      'destination': 'ATH',
      'departureDate': '2040-01-03',
      'returnDate': '2040-01-14',
      'price': {
        'total': '149.28'
      },
      'links': {
        'flightDates': 'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=PAR&destination=ATH&departureDate=2039-12-13,2040-06-09&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
        'flightOffers': 'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=PAR&destinationLocationCode=ATH&departureDate=2040-01-03&returnDate=2040-01-14&adults=1&nonStop=false'
      }
    },
    {
      'type': 'flight-destination',
      'origin': 'CDG',
      'destination': 'SAW',
      'departureDate': '2040-03-04',
      'returnDate': '2040-03-18',
      'price': {
        'total': '162.25'
      },
      'links': {
        'flightDates': 'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=PAR&destination=SAW&departureDate=2039-12-13,2040-06-09&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
        'flightOffers': 'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=PAR&destinationLocationCode=SAW&departureDate=2040-03-04&returnDate=2040-03-18&adults=1&nonStop=false'
      }
    },
    {
      'type': 'flight-destination',
      'origin': 'CDG',
      'destination': 'DXB',
      'departureDate': '2040-01-13',
      'returnDate': '2040-01-23',
      'price': {
        'total': '331.62'
      },
      'links': {
        'flightDates': 'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=PAR&destination=DXB&departureDate=2039-12-13,2040-06-09&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
        'flightOffers': 'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=PAR&destinationLocationCode=DXB&departureDate=2040-01-13&returnDate=2040-01-23&adults=1&nonStop=false'
      }
    },
    {
      'type': 'flight-destination',
      'origin': 'CDG',
      'destination': 'YUL',
      'departureDate': '2040-01-28',
      'returnDate': '2040-02-11',
      'price': {
        'total': '370.41'
      },
      'links': {
        'flightDates': 'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=PAR&destination=YUL&departureDate=2039-12-13,2040-06-09&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
        'flightOffers': 'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=PAR&destinationLocationCode=YUL&departureDate=2040-01-28&returnDate=2040-02-11&adults=1&nonStop=false'
      }
    },
    {
      'type': 'flight-destination',
      'origin': 'ORY',
      'destination': 'JFK',
      'departureDate': '2040-02-29',
      'returnDate': '2040-03-04',
      'price': {
        'total': '385.38'
      },
      'links': {
        'flightDates': 'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=PAR&destination=JFK&departureDate=2039-12-13,2040-06-09&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
        'flightOffers': 'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=PAR&destinationLocationCode=JFK&departureDate=2040-02-29&returnDate=2040-03-04&adults=1&nonStop=false'
      }
    },
    {
      'type': 'flight-destination',
      'origin': 'ORY',
      'destination': 'MIA',
      'departureDate': '2040-01-18',
      'returnDate': '2040-01-30',
      'price': {
        'total': '397.69'
      },
      'links': {
        'flightDates': 'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=PAR&destination=MIA&departureDate=2039-12-13,2040-06-09&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
        'flightOffers': 'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=PAR&destinationLocationCode=MIA&departureDate=2040-01-18&returnDate=2040-01-30&adults=1&nonStop=false'
      }
    },
    {
      'type': 'flight-destination',
      'origin': 'CDG',
      'destination': 'SFO',
      'departureDate': '2040-01-15',
      'returnDate': '2040-01-29',
      'price': {
        'total': '466.42'
      },
      'links': {
        'flightDates': 'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=PAR&destination=SFO&departureDate=2039-12-13,2040-06-09&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
        'flightOffers': 'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=PAR&destinationLocationCode=SFO&departureDate=2040-01-15&returnDate=2040-01-29&adults=1&nonStop=false'
      }
    },
    {
      'type': 'flight-destination',
      'origin': 'CDG',
      'destination': 'LAX',
      'departureDate': '2040-01-12',
      'returnDate': '2040-01-21',
      'price': {
        'total': '466.42'
      },
      'links': {
        'flightDates': 'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=PAR&destination=LAX&departureDate=2039-12-13,2040-06-09&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
        'flightOffers': 'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=PAR&destinationLocationCode=LAX&departureDate=2040-01-12&returnDate=2040-01-21&adults=1&nonStop=false'
      }
    },
    {
      'type': 'flight-destination',
      'origin': 'CDG',
      'destination': 'CUN',
      'departureDate': '2040-01-27',
      'returnDate': '2040-02-02',
      'price': {
        'total': '576.90'
      },
      'links': {
        'flightDates': 'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=PAR&destination=CUN&departureDate=2039-12-13,2040-06-09&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
        'flightOffers': 'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=PAR&destinationLocationCode=CUN&departureDate=2040-01-27&returnDate=2040-02-02&adults=1&nonStop=false'
      }
    },
    {
      'type': 'flight-destination',
      'origin': 'ORY',
      'destination': 'PTP',
      'departureDate': '2040-01-24',
      'returnDate': '2040-01-29',
      'price': {
        'total': '609.35'
      },
      'links': {
        'flightDates': 'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=PAR&destination=PTP&departureDate=2039-12-13,2040-06-09&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
        'flightOffers': 'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=PAR&destinationLocationCode=PTP&departureDate=2040-01-24&returnDate=2040-01-29&adults=1&nonStop=false'
      }
    },
    {
      'type': 'flight-destination',
      'origin': 'ORY',
      'destination': 'FDF',
      'departureDate': '2040-01-17',
      'returnDate': '2040-01-22',
      'price': {
        'total': '609.43'
      },
      'links': {
        'flightDates': 'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=PAR&destination=FDF&departureDate=2039-12-13,2040-06-09&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
        'flightOffers': 'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=PAR&destinationLocationCode=FDF&departureDate=2040-01-17&returnDate=2040-01-22&adults=1&nonStop=false'
      }
    },
    {
      'type': 'flight-destination',
      'origin': 'CDG',
      'destination': 'BKK',
      'departureDate': '2040-03-03',
      'returnDate': '2040-03-14',
      'price': {
        'total': '629.93'
      },
      'links': {
        'flightDates': 'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=PAR&destination=BKK&departureDate=2039-12-13,2040-06-09&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
        'flightOffers': 'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=PAR&destinationLocationCode=BKK&departureDate=2040-03-03&returnDate=2040-03-14&adults=1&nonStop=false'
      }
    },
    {
      'type': 'flight-destination',
      'origin': 'CDG',
      'destination': 'HKT',
      'departureDate': '2040-05-08',
      'returnDate': '2040-05-20',
      'price': {
        'total': '640.30'
      },
      'links': {
        'flightDates': 'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=PAR&destination=HKT&departureDate=2039-12-13,2040-06-09&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
        'flightOffers': 'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=PAR&destinationLocationCode=HKT&departureDate=2040-05-08&returnDate=2040-05-20&adults=1&nonStop=false'
      }
    },
    {
      'type': 'flight-destination',
      'origin': 'CDG',
      'destination': 'HND',
      'departureDate': '2040-04-25',
      'returnDate': '2040-05-10',
      'price': {
        'total': '670.00'
      },
      'links': {
        'flightDates': 'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=PAR&destination=HND&departureDate=2039-12-13,2040-06-09&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
        'flightOffers': 'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=PAR&destinationLocationCode=HND&departureDate=2040-04-25&returnDate=2040-05-10&adults=1&nonStop=false'
      }
    },
    {
      'type': 'flight-destination',
      'origin': 'CDG',
      'destination': 'DPS',
      'departureDate': '2040-05-09',
      'returnDate': '2040-05-22',
      'price': {
        'total': '672.49'
      },
      'links': {
        'flightDates': 'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=PAR&destination=DPS&departureDate=2039-12-13,2040-06-09&oneWay=false&duration=1,15&nonStop=false&viewBy=DURATION',
        'flightOffers': 'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=PAR&destinationLocationCode=DPS&departureDate=2040-05-09&returnDate=2040-05-22&adults=1&nonStop=false'
      }
    }
  ],
  'dictionaries': {
    'currencies': {
      'EUR': 'EURO'
    },
    'locations': {
      'LAX': {
        'subType': 'AIRPORT',
        'detailedName': 'LOS ANGELES INTL'
      },
      'DPS': {
        'subType': 'AIRPORT',
        'detailedName': 'NGURAH RAI'
      },
      'CDG': {
        'subType': 'AIRPORT',
        'detailedName': 'CHARLES DE GAULLE'
      },
      'SAW': {
        'subType': 'AIRPORT',
        'detailedName': 'SABIHA GOKCEN'
      },
      'FDF': {
        'subType': 'AIRPORT',
        'detailedName': 'MARTINIQUE A.CESAIRE'
      },
      'PTP': {
        'subType': 'AIRPORT',
        'detailedName': 'LE RAIZET'
      },
      'JFK': {
        'subType': 'AIRPORT',
        'detailedName': 'JOHN F KENNEDY INTL'
      },
      'OPO': {
        'subType': 'AIRPORT',
        'detailedName': 'FRANCISCO SA CARNEIRO'
      },
      'ORY': {
        'subType': 'AIRPORT',
        'detailedName': 'ORLY'
      },
      'SFO': {
        'subType': 'AIRPORT',
        'detailedName': 'SAN FRANCISCO INTL'
      },
      'CUN': {
        'subType': 'AIRPORT',
        'detailedName': 'INTERNATIONAL'
      },
      'BKK': {
        'subType': 'AIRPORT',
        'detailedName': 'SUVARNABHUMI INTL'
      },
      'MIA': {
        'subType': 'AIRPORT',
        'detailedName': 'MIAMI INTL'
      },
      'TUN': {
        'subType': 'AIRPORT',
        'detailedName': 'CARTHAGE'
      },
      'BCN': {
        'subType': 'AIRPORT',
        'detailedName': 'AIRPORT'
      },
      'DXB': {
        'subType': 'AIRPORT',
        'detailedName': 'DUBAI INTL'
      },
      'LIN': {
        'subType': 'AIRPORT',
        'detailedName': 'LINATE'
      },
      'HKT': {
        'subType': 'AIRPORT',
        'detailedName': 'PHUKET INTL'
      },
      'YUL': {
        'subType': 'AIRPORT',
        'detailedName': 'PIERRE E. TRUDEAU INTL'
      },
      'MAD': {
        'subType': 'AIRPORT',
        'detailedName': 'ADOLFO SUAREZ BARAJAS'
      },
      'FCO': {
        'subType': 'AIRPORT',
        'detailedName': 'FIUMICINO'
      },
      'ATH': {
        'subType': 'AIRPORT',
        'detailedName': 'ATHENS INT E VENIZELOS'
      },
      'LIS': {
        'subType': 'AIRPORT',
        'detailedName': 'AIRPORT'
      },
      'RAK': {
        'subType': 'AIRPORT',
        'detailedName': 'MENARA'
      },
      'HND': {
        'subType': 'AIRPORT',
        'detailedName': 'TOKYO INTL HANEDA'
      }
    }
  },
  'meta': {
    'currency': 'EUR',
    'links': {
      'self': 'https://test.api.amadeus.com/v1/shopping/flight-destinations?origin=PAR&departureDate=2039-12-13,2040-06-09&oneWay=false&duration=1,15&nonStop=false&viewBy=DESTINATION'
    },
    'defaults': {
      'departureDate': '2039-12-13,2040-06-09',
      'oneWay': false,
      'duration': '1,15',
      'nonStop': false,
      'viewBy': 'DESTINATION'
    }
  }
})

export const initRecommendations = () => ({
  'data': [
      {
          'subtype': 'CITY',
          'name': 'Algiers',
          'iataCode': 'ALG',
          'geoCode': {
              'latitude': 36.6985,
              'longitude': 3.2067200000000002
          },
          'type': 'recommended-location',
          'relevance': 0.98107288
      },
      {
          'subtype': 'CITY',
          'name': 'Marseille',
          'iataCode': 'MRS',
          'geoCode': {
              'latitude': 43.435559999999995,
              'longitude': 5.21361
          },
          'type': 'recommended-location',
          'relevance': 0.96589865
      },
      {
          'subtype': 'CITY',
          'name': 'Lisbon',
          'iataCode': 'LIS',
          'geoCode': {
              'latitude': 38.78131,
              'longitude': -9.13592
          },
          'type': 'recommended-location',
          'relevance': 0.96138911
      },
      {
          'subtype': 'CITY',
          'name': 'Barcelona',
          'iataCode': 'BCN',
          'geoCode': {
              'latitude': 41.297078000000006,
              'longitude': 2.078464
          },
          'type': 'recommended-location',
          'relevance': 0.94695961
      },
      {
          'subtype': 'CITY',
          'name': 'Tunis',
          'iataCode': 'TUN',
          'geoCode': {
              'latitude': 36.85103,
              'longitude': 10.227219999999999
          },
          'type': 'recommended-location',
          'relevance': 0.94334968
      }
  ],
  'meta': {
      'count': 5,
      'links': {
          'self': 'https://test.api.amadeus.com/v1/reference-data/recommended-locations?cityCodes=PAR&travelerCountryCode=FR'
      }
  }
})
