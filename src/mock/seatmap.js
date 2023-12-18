export const initSeatmap = () => ({
  'meta': {
    'count': 4
  },
  'data': [
    {
      'id': '1',
      'type': 'seatmap',
      'departure': {
        'iataCode': 'CDG',
        'terminal': '1',
        'at': '2023-12-13T13:10:00'
      },
      'arrival': {
        'iataCode': 'KEF',
        'at': '2023-12-13T15:50:00'
      },
      'carrierCode': 'FI',
      'number': '545',
      'operating': {
        'carrierCode': 'FI'
      },
      'aircraft': {
        'code': '7M8'
      },
      'class': 'V',
      'flightOfferId': '1',
      'segmentId': '17',
      'decks': [
        {
          'deckType': 'MAIN',
          'deckConfiguration': {
            'width': 7,
            'length': 26,
            'startSeatRow': 5,
            'endSeatRow': 28,
            'exitRowsX': [
              7,
              8
            ]
          },
          'facilities': [
            {
              'code': 'LA',
              'column': 'A',
              'row': '28',
              'position': 'REAR',
              'coordinates': {
                'x': 24,
                'y': 0
              }
            },
            {
              'code': 'LA',
              'column': 'B',
              'row': '28',
              'position': 'REAR',
              'coordinates': {
                'x': 24,
                'y': 1
              }
            },
            {
              'code': 'LA',
              'column': 'F',
              'row': '28',
              'position': 'REAR',
              'coordinates': {
                'x': 24,
                'y': 6
              }
            },
            {
              'code': 'LA',
              'column': 'E',
              'row': '28',
              'position': 'REAR',
              'coordinates': {
                'x': 24,
                'y': 5
              }
            },
            {
              'code': 'LA',
              'column': 'C',
              'row': '28',
              'position': 'REAR',
              'coordinates': {
                'x': 24,
                'y': 2
              }
            },
            {
              'code': 'LA',
              'column': 'D',
              'row': '28',
              'position': 'REAR',
              'coordinates': {
                'x': 24,
                'y': 4
              }
            },
            {
              'code': 'G',
              'column': 'A',
              'row': '28',
              'position': 'REAR',
              'coordinates': {
                'x': 25,
                'y': 0
              }
            },
            {
              'code': 'G',
              'column': 'B',
              'row': '28',
              'position': 'REAR',
              'coordinates': {
                'x': 25,
                'y': 1
              }
            },
            {
              'code': 'G',
              'column': 'F',
              'row': '28',
              'position': 'REAR',
              'coordinates': {
                'x': 25,
                'y': 6
              }
            },
            {
              'code': 'G',
              'column': 'E',
              'row': '28',
              'position': 'REAR',
              'coordinates': {
                'x': 25,
                'y': 5
              }
            },
            {
              'code': 'G',
              'column': 'C',
              'row': '28',
              'position': 'REAR',
              'coordinates': {
                'x': 25,
                'y': 2
              }
            },
            {
              'code': 'G',
              'column': 'D',
              'row': '28',
              'position': 'REAR',
              'coordinates': {
                'x': 25,
                'y': 4
              }
            },
            {
              'code': 'G',
              'row': '28',
              'position': 'REAR',
              'coordinates': {
                'x': 25
              }
            }
          ],
          'seats': [
            {
              'cabin': 'ECONOMY',
              'number': '5A',
              'characteristicsCodes': [
                '1A',
                'CH',
                'FC',
                'L',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '35.00',
                    'base': '35.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 0,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '5B',
              'characteristicsCodes': [
                '1A',
                '9',
                'CH',
                'FC',
                'L',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '35.00',
                    'base': '35.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 0,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '5C',
              'characteristicsCodes': [
                '1A',
                'A',
                'CH',
                'FC',
                'L',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '35.00',
                    'base': '35.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 0,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '5D',
              'characteristicsCodes': [
                '1A',
                'A',
                'CH',
                'FC',
                'L',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '35.00',
                    'base': '35.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 0,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '5E',
              'characteristicsCodes': [
                '1A',
                '9',
                'CH',
                'FC',
                'L',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '35.00',
                    'base': '35.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 0,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '5F',
              'characteristicsCodes': [
                '1A',
                'CH',
                'FC',
                'L',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '35.00',
                    'base': '35.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 0,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '6A',
              'characteristicsCodes': [
                '1A',
                'CH',
                'FC',
                'L',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '35.00',
                    'base': '35.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 1,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '6B',
              'characteristicsCodes': [
                '1A',
                '9',
                'CH',
                'FC',
                'L',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '35.00',
                    'base': '35.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 1,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '6C',
              'characteristicsCodes': [
                '1A',
                'A',
                'CH',
                'FC',
                'L',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '35.00',
                    'base': '35.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 1,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '6D',
              'characteristicsCodes': [
                '1A',
                'A',
                'CH',
                'FC',
                'L',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '35.00',
                    'base': '35.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 1,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '6E',
              'characteristicsCodes': [
                '1A',
                '9',
                'CH',
                'FC',
                'L',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '35.00',
                    'base': '35.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 1,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '6F',
              'characteristicsCodes': [
                '1A',
                'CH',
                'FC',
                'L',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '35.00',
                    'base': '35.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 1,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '7A',
              'characteristicsCodes': [
                '1A',
                'CH',
                'FC',
                'L',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '35.00',
                    'base': '35.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 2,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '7B',
              'characteristicsCodes': [
                '1A',
                '9',
                'CH',
                'FC',
                'L',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '35.00',
                    'base': '35.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 2,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '7C',
              'characteristicsCodes': [
                '1A',
                'A',
                'CH',
                'FC',
                'L',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '35.00',
                    'base': '35.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 2,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '7D',
              'characteristicsCodes': [
                '1A',
                'A',
                'CH',
                'FC',
                'L',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '35.00',
                    'base': '35.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 2,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '7E',
              'characteristicsCodes': [
                '1A',
                '9',
                'CH',
                'FC',
                'L',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '35.00',
                    'base': '35.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 2,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '7F',
              'characteristicsCodes': [
                '1A',
                'CH',
                'FC',
                'L',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '35.00',
                    'base': '35.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 2,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '8A',
              'characteristicsCodes': [
                'CH',
                'FC',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '24.00',
                    'base': '24.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 3,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '8B',
              'characteristicsCodes': [
                '9',
                'CH',
                'FC',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '24.00',
                    'base': '24.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 3,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '8C',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '24.00',
                    'base': '24.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 3,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '8D',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '24.00',
                    'base': '24.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 3,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '8E',
              'characteristicsCodes': [
                '9',
                'CH',
                'FC',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '24.00',
                    'base': '24.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 3,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '8F',
              'characteristicsCodes': [
                'CH',
                'FC',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '24.00',
                    'base': '24.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 3,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '9A',
              'characteristicsCodes': [
                'CH',
                'FC',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '24.00',
                    'base': '24.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 4,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '9B',
              'characteristicsCodes': [
                '9',
                'CH',
                'FC',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '24.00',
                    'base': '24.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 4,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '9C',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '24.00',
                    'base': '24.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 4,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '9D',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '24.00',
                    'base': '24.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 4,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '9E',
              'characteristicsCodes': [
                '9',
                'CH',
                'FC',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '24.00',
                    'base': '24.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 4,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '9F',
              'characteristicsCodes': [
                'CH',
                'FC',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '24.00',
                    'base': '24.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 4,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '10A',
              'characteristicsCodes': [
                'CH',
                'FC',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '24.00',
                    'base': '24.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 5,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '10B',
              'characteristicsCodes': [
                '9',
                'CH',
                'FC',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '24.00',
                    'base': '24.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 5,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '10C',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '24.00',
                    'base': '24.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 5,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '10D',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '24.00',
                    'base': '24.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 5,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '10E',
              'characteristicsCodes': [
                '9',
                'CH',
                'FC',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '24.00',
                    'base': '24.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 5,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '10F',
              'characteristicsCodes': [
                'CH',
                'FC',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '24.00',
                    'base': '24.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 5,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '11A',
              'characteristicsCodes': [
                '1A',
                'CH',
                'O',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 6,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '11B',
              'characteristicsCodes': [
                '1A',
                '9',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 6,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '11C',
              'characteristicsCodes': [
                '1A',
                'A',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 6,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '11D',
              'characteristicsCodes': [
                '1A',
                'A',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 6,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '11E',
              'characteristicsCodes': [
                '1A',
                '9',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 6,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '11F',
              'characteristicsCodes': [
                '1A',
                'CH',
                'O',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 6,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '12A',
              'characteristicsCodes': [
                '1A',
                '1B',
                '1D',
                'CH',
                'E',
                'IE',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '26.00',
                    'base': '26.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 7,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '12B',
              'characteristicsCodes': [
                '1A',
                '1B',
                '1D',
                '9',
                'CH',
                'E',
                'IE',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '26.00',
                    'base': '26.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 7,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '12C',
              'characteristicsCodes': [
                '1A',
                '1B',
                '1D',
                'A',
                'CH',
                'E',
                'IE',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '26.00',
                    'base': '26.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 7,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '12D',
              'characteristicsCodes': [
                '1A',
                '1B',
                '1D',
                'A',
                'CH',
                'E',
                'IE',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '26.00',
                    'base': '26.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 7,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '12E',
              'characteristicsCodes': [
                '1A',
                '1B',
                '1D',
                '9',
                'CH',
                'E',
                'IE',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '26.00',
                    'base': '26.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 7,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '12F',
              'characteristicsCodes': [
                '1A',
                '1B',
                '1D',
                'CH',
                'E',
                'IE',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '26.00',
                    'base': '26.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 7,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '13A',
              'characteristicsCodes': [
                '1A',
                '1B',
                'CH',
                'E',
                'IE',
                'Q',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '28.00',
                    'base': '28.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 8,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '13B',
              'characteristicsCodes': [
                '1A',
                '1B',
                '9',
                'CH',
                'E',
                'IE',
                'Q',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '28.00',
                    'base': '28.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 8,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '13C',
              'characteristicsCodes': [
                '1A',
                '1B',
                'A',
                'CH',
                'E',
                'IE',
                'Q',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '28.00',
                    'base': '28.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 8,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '13D',
              'characteristicsCodes': [
                '1A',
                '1B',
                'A',
                'CH',
                'E',
                'IE',
                'Q',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '28.00',
                    'base': '28.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 8,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '13E',
              'characteristicsCodes': [
                '1A',
                '1B',
                '9',
                'CH',
                'E',
                'IE',
                'Q',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '28.00',
                    'base': '28.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 8,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '13F',
              'characteristicsCodes': [
                '1A',
                '1B',
                'CH',
                'E',
                'IE',
                'Q',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '28.00',
                    'base': '28.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 8,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '14A',
              'characteristicsCodes': [
                '1A',
                'CH',
                'O',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 9,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '14B',
              'characteristicsCodes': [
                '1A',
                '9',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 9,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '14C',
              'characteristicsCodes': [
                '1A',
                'A',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 9,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '14D',
              'characteristicsCodes': [
                '1A',
                'A',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 9,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '14E',
              'characteristicsCodes': [
                '1A',
                '9',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 9,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '14F',
              'characteristicsCodes': [
                '1A',
                'CH',
                'O',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 9,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '15A',
              'characteristicsCodes': [
                'CH',
                'O',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 10,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '15B',
              'characteristicsCodes': [
                '9',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 10,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '15C',
              'characteristicsCodes': [
                'A',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 10,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '15D',
              'characteristicsCodes': [
                'A',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 10,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '15E',
              'characteristicsCodes': [
                '9',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 10,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '15F',
              'characteristicsCodes': [
                'CH',
                'O',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 10,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '16A',
              'characteristicsCodes': [
                'CH',
                'O',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 11,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '16B',
              'characteristicsCodes': [
                '9',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 11,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '16C',
              'characteristicsCodes': [
                'A',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 11,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '16D',
              'characteristicsCodes': [
                'A',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 11,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '16E',
              'characteristicsCodes': [
                '9',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 11,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '16F',
              'characteristicsCodes': [
                'CH',
                'O',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 11,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '17A',
              'characteristicsCodes': [
                'CH',
                'O',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 12,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '17B',
              'characteristicsCodes': [
                '9',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 12,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '17C',
              'characteristicsCodes': [
                'A',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 12,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '17D',
              'characteristicsCodes': [
                'A',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 12,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '17E',
              'characteristicsCodes': [
                '9',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 12,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '17F',
              'characteristicsCodes': [
                'CH',
                'O',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 12,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '18A',
              'characteristicsCodes': [
                'CH',
                'O',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 13,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '18B',
              'characteristicsCodes': [
                '9',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 13,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '18C',
              'characteristicsCodes': [
                'A',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 13,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '18D',
              'characteristicsCodes': [
                'A',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 13,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '18E',
              'characteristicsCodes': [
                '9',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 13,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '18F',
              'characteristicsCodes': [
                'CH',
                'O',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 13,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '19A',
              'characteristicsCodes': [
                'CH',
                'O',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 14,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '19B',
              'characteristicsCodes': [
                '9',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 14,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '19C',
              'characteristicsCodes': [
                'A',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 14,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '19D',
              'characteristicsCodes': [
                'A',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 14,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '19E',
              'characteristicsCodes': [
                '9',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 14,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '19F',
              'characteristicsCodes': [
                'CH',
                'O',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 14,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '20A',
              'characteristicsCodes': [
                'CH',
                'O',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 15,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '20B',
              'characteristicsCodes': [
                '9',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 15,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '20C',
              'characteristicsCodes': [
                'A',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 15,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '20D',
              'characteristicsCodes': [
                'A',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 15,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '20E',
              'characteristicsCodes': [
                '9',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 15,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '20F',
              'characteristicsCodes': [
                'CH',
                'O',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 15,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '21A',
              'characteristicsCodes': [
                'CH',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 16,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '21B',
              'characteristicsCodes': [
                '9',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 16,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '21C',
              'characteristicsCodes': [
                'A',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 16,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '21D',
              'characteristicsCodes': [
                'A',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 16,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '21E',
              'characteristicsCodes': [
                '9',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 16,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '21F',
              'characteristicsCodes': [
                'CH',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 16,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '22A',
              'characteristicsCodes': [
                'CH',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 17,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '22B',
              'characteristicsCodes': [
                '9',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 17,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '22C',
              'characteristicsCodes': [
                'A',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 17,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '22D',
              'characteristicsCodes': [
                'A',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 17,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '22E',
              'characteristicsCodes': [
                '9',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 17,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '22F',
              'characteristicsCodes': [
                'CH',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 17,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '23A',
              'characteristicsCodes': [
                'CH',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 18,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '23B',
              'characteristicsCodes': [
                '9',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 18,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '23C',
              'characteristicsCodes': [
                'A',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 18,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '23D',
              'characteristicsCodes': [
                'A',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 18,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '23E',
              'characteristicsCodes': [
                '9',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 18,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '23F',
              'characteristicsCodes': [
                'CH',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 18,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '24A',
              'characteristicsCodes': [
                'CH',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 19,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '24B',
              'characteristicsCodes': [
                '9',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 19,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '24C',
              'characteristicsCodes': [
                'A',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 19,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '24D',
              'characteristicsCodes': [
                'A',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 19,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '24E',
              'characteristicsCodes': [
                '9',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 19,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '24F',
              'characteristicsCodes': [
                'CH',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 19,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '25A',
              'characteristicsCodes': [
                'CH',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 20,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '25B',
              'characteristicsCodes': [
                '9',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 20,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '25C',
              'characteristicsCodes': [
                'A',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 20,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '25D',
              'characteristicsCodes': [
                'A',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 20,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '25E',
              'characteristicsCodes': [
                '9',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 20,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '25F',
              'characteristicsCodes': [
                'CH',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 20,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '26A',
              'characteristicsCodes': [
                'CH',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 21,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '26B',
              'characteristicsCodes': [
                '9',
                'CH',
                'U',
                '1'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'BLOCKED',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 21,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '26C',
              'characteristicsCodes': [
                'A',
                'CH',
                'U',
                '1'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'BLOCKED',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 21,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '26D',
              'characteristicsCodes': [
                'A',
                'CH',
                'U',
                '1'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'BLOCKED',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 21,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '26E',
              'characteristicsCodes': [
                '9',
                'CH',
                'U',
                '1'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'BLOCKED',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 21,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '26F',
              'characteristicsCodes': [
                'CH',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 21,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '27A',
              'characteristicsCodes': [
                'CH',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 22,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '27B',
              'characteristicsCodes': [
                '9',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 22,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '27C',
              'characteristicsCodes': [
                'A',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 22,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '27D',
              'characteristicsCodes': [
                'A',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 22,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '27E',
              'characteristicsCodes': [
                '9',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 22,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '27F',
              'characteristicsCodes': [
                'CH',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 22,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '28A',
              'characteristicsCodes': [
                'CH',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 23,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '28B',
              'characteristicsCodes': [
                '9',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 23,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '28C',
              'characteristicsCodes': [
                'A',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 23,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '28D',
              'characteristicsCodes': [
                'A',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 23,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '28E',
              'characteristicsCodes': [
                '9',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 23,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '28F',
              'characteristicsCodes': [
                'CH',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 23,
                'y': 6
              }
            }
          ]
        }
      ],
      'aircraftCabinAmenities': {
        'power': {
          'isChargeable': false,
          'powerType': 'USB_PORT',
          'usbType': 'USB_C'
        },
        'seat': {
          'legSpace': 29,
          'spaceUnit': 'INCHES',
          'tilt': 'NORMAL',
          'medias': [
            {
              'title': 'Comfortable Seats',
              'href': 'https://pdt.content.amadeus.com/AncillaryServicesMedia/14223418_395.jpg',
              'description': {
                'text': 'Settle in with comfortable seats and an ecoTHREAD blanket made from 100% recycled plastic bottles.',
                'lang': 'EN'
              },
              'mediaType': 'image'
            },
            {
              'title': 'Stay Connected',
              'href': 'https://pdt.content.amadeus.com/AncillaryServicesMedia/71344149_DFL.jpg',
              'description': {
                'text': 'Stay connected next time you fly. Choose from our great value Wi-Fi plans.',
                'lang': 'EN'
              },
              'mediaType': 'image'
            },
            {
              'title': 'Be Curious',
              'href': 'https://pdt.content.amadeus.com/AncillaryServicesMedia/42266150_401.jpg',
              'description': {
                'text': "With special seat,meals, toys, and dedicated children's ice channels, we encourage curious minds and inspire tomorrow's explorers.",
                'lang': 'EN'
              },
              'mediaType': 'image'
            }
          ]
        },
        'wifi': {
          'isChargeable': true,
          'wifiCoverage': 'FULL'
        },
        'entertainment': [
          {
            'isChargeable': false,
            'entertainmentType': 'AUDIO_VIDEO_ON_DEMAND'
          },
          {
            'isChargeable': false,
            'entertainmentType': 'IP_TV'
          }
        ],
        'food': {
          'isChargeable': false,
          'foodType': 'SNACK'
        },
        'beverage': {
          'isChargeable': false,
          'beverageType': 'ALCOHOLIC_AND_NON_ALCOHOLIC'
        }
      },
      'availableSeatsCounters': [
        {
          'travelerId': '1',
          'value': 140
        }
      ]
    },
    {
      'id': '2',
      'type': 'seatmap',
      'departure': {
        'iataCode': 'KEF',
        'at': '2023-12-13T17:05:00'
      },
      'arrival': {
        'iataCode': 'BOS',
        'terminal': 'E',
        'at': '2023-12-13T17:50:00'
      },
      'carrierCode': 'FI',
      'number': '631',
      'operating': {
        'carrierCode': 'FI'
      },
      'aircraft': {
        'code': '76W'
      },
      'class': 'V',
      'flightOfferId': '1',
      'segmentId': '18',
      'decks': [
        {
          'deckType': 'MAIN',
          'deckConfiguration': {
            'width': 9,
            'length': 38,
            'startSeatRow': 6,
            'endSeatRow': 41,
            'startWingsX': 8,
            'endWingsX': 18,
            'startWingsRow': 14,
            'endWingsRow': 25,
            'exitRowsX': [
              12,
              13
            ]
          },
          'facilities': [
            {
              'code': 'LA',
              'column': 'A',
              'row': '17',
              'position': 'SEAT',
              'coordinates': {
                'x': 11,
                'y': 0
              }
            },
            {
              'code': 'LA',
              'column': 'B',
              'row': '17',
              'position': 'SEAT',
              'coordinates': {
                'x': 11,
                'y': 1
              }
            },
            {
              'code': 'LA',
              'column': 'F',
              'row': '17',
              'position': 'SEAT',
              'coordinates': {
                'x': 11,
                'y': 7
              }
            },
            {
              'code': 'LA',
              'column': 'G',
              'row': '17',
              'position': 'SEAT',
              'coordinates': {
                'x': 11,
                'y': 8
              }
            },
            {
              'code': 'LA',
              'column': 'A',
              'row': '41',
              'position': 'SEAT',
              'coordinates': {
                'x': 34,
                'y': 0
              }
            },
            {
              'code': 'LA',
              'column': 'B',
              'row': '41',
              'position': 'SEAT',
              'coordinates': {
                'x': 34,
                'y': 1
              }
            },
            {
              'code': 'LA',
              'column': 'F',
              'row': '41',
              'position': 'SEAT',
              'coordinates': {
                'x': 34,
                'y': 7
              }
            },
            {
              'code': 'LA',
              'column': 'G',
              'row': '41',
              'position': 'SEAT',
              'coordinates': {
                'x': 34,
                'y': 8
              }
            },
            {
              'code': 'G',
              'column': 'B',
              'row': '41',
              'position': 'REAR',
              'coordinates': {
                'x': 35,
                'y': 1
              }
            },
            {
              'code': 'G',
              'column': 'F',
              'row': '41',
              'position': 'REAR',
              'coordinates': {
                'x': 35,
                'y': 7
              }
            },
            {
              'code': 'G',
              'column': 'C',
              'row': '41',
              'position': 'REAR',
              'coordinates': {
                'x': 35,
                'y': 3
              }
            },
            {
              'code': 'G',
              'column': 'A',
              'row': '41',
              'position': 'REAR',
              'coordinates': {
                'x': 36,
                'y': 0
              }
            },
            {
              'code': 'G',
              'column': 'B',
              'row': '41',
              'position': 'REAR',
              'coordinates': {
                'x': 36,
                'y': 1
              }
            },
            {
              'code': 'G',
              'column': 'G',
              'row': '41',
              'position': 'REAR',
              'coordinates': {
                'x': 36,
                'y': 8
              }
            },
            {
              'code': 'G',
              'column': 'F',
              'row': '41',
              'position': 'REAR',
              'coordinates': {
                'x': 36,
                'y': 7
              }
            },
            {
              'code': 'G',
              'column': 'A',
              'row': '41',
              'position': 'REAR',
              'coordinates': {
                'x': 37,
                'y': 0
              }
            },
            {
              'code': 'G',
              'column': 'B',
              'row': '41',
              'position': 'REAR',
              'coordinates': {
                'x': 37,
                'y': 1
              }
            },
            {
              'code': 'G',
              'column': 'G',
              'row': '41',
              'position': 'REAR',
              'coordinates': {
                'x': 37,
                'y': 8
              }
            },
            {
              'code': 'G',
              'column': 'F',
              'row': '41',
              'position': 'REAR',
              'coordinates': {
                'x': 37,
                'y': 7
              }
            },
            {
              'code': 'G',
              'row': '41',
              'position': 'REAR',
              'coordinates': {
                'x': 37,
                'y': 2
              }
            },
            {
              'code': 'G',
              'column': 'C',
              'row': '41',
              'position': 'REAR',
              'coordinates': {
                'x': 37,
                'y': 3
              }
            },
            {
              'code': 'G',
              'row': '41',
              'position': 'REAR',
              'coordinates': {
                'x': 37,
                'y': 6
              }
            },
            {
              'code': 'G',
              'column': 'E',
              'row': '41',
              'position': 'REAR',
              'coordinates': {
                'x': 37,
                'y': 5
              }
            },
            {
              'code': 'G',
              'column': 'D',
              'row': '41',
              'position': 'REAR',
              'coordinates': {
                'x': 37,
                'y': 4
              }
            }
          ],
          'seats': [
            {
              'cabin': 'ECONOMY',
              'number': '6A',
              'characteristicsCodes': [
                'CH',
                'FC',
                'L',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '85.00',
                    'base': '85.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 0,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '6B',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC',
                'L'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '85.00',
                    'base': '85.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 0,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '6C',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC',
                'L'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '85.00',
                    'base': '85.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 0,
                'y': 3
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '6D',
              'characteristicsCodes': [
                '9',
                'CH',
                'FC',
                'L'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '85.00',
                    'base': '85.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 0,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '6E',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC',
                'L'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '85.00',
                    'base': '85.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 0,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '6F',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC',
                'L'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '85.00',
                    'base': '85.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 0,
                'y': 7
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '6G',
              'characteristicsCodes': [
                'CH',
                'FC',
                'L',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '85.00',
                    'base': '85.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 0,
                'y': 8
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '7A',
              'characteristicsCodes': [
                'CH',
                'FC',
                'L',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '85.00',
                    'base': '85.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 1,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '7B',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC',
                'L'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '85.00',
                    'base': '85.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 1,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '7C',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC',
                'L'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '85.00',
                    'base': '85.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 1,
                'y': 3
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '7D',
              'characteristicsCodes': [
                '9',
                'CH',
                'FC',
                'L'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '85.00',
                    'base': '85.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 1,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '7E',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC',
                'L'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '85.00',
                    'base': '85.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 1,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '7F',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC',
                'L'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '85.00',
                    'base': '85.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 1,
                'y': 7
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '7G',
              'characteristicsCodes': [
                'CH',
                'FC',
                'L',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '85.00',
                    'base': '85.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 1,
                'y': 8
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '8A',
              'characteristicsCodes': [
                '1W',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 2,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '8B',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 2,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '8C',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 2,
                'y': 3
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '8D',
              'characteristicsCodes': [
                '9',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 2,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '8E',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 2,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '8F',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 2,
                'y': 7
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '8G',
              'characteristicsCodes': [
                '1W',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 2,
                'y': 8
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '9A',
              'characteristicsCodes': [
                'CH',
                'FC',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 3,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '9B',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 3,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '9C',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 3,
                'y': 3
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '9D',
              'characteristicsCodes': [
                '9',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 3,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '9E',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 3,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '9F',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 3,
                'y': 7
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '9G',
              'characteristicsCodes': [
                'CH',
                'FC',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 3,
                'y': 8
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '10A',
              'characteristicsCodes': [
                'CH',
                'FC',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 4,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '10B',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 4,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '10C',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 4,
                'y': 3
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '10D',
              'characteristicsCodes': [
                '9',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 4,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '10E',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 4,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '10F',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 4,
                'y': 7
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '10G',
              'characteristicsCodes': [
                'CH',
                'FC',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 4,
                'y': 8
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '11A',
              'characteristicsCodes': [
                'CH',
                'FC',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 5,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '11B',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 5,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '11C',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 5,
                'y': 3
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '11D',
              'characteristicsCodes': [
                '9',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 5,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '11E',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 5,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '11F',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 5,
                'y': 7
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '11G',
              'characteristicsCodes': [
                'CH',
                'FC',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 5,
                'y': 8
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '12A',
              'characteristicsCodes': [
                'CH',
                'FC',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 6,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '12B',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 6,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '12C',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 6,
                'y': 3
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '12D',
              'characteristicsCodes': [
                '9',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 6,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '12E',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 6,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '12F',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 6,
                'y': 7
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '12G',
              'characteristicsCodes': [
                'CH',
                'FC',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 6,
                'y': 8
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '13A',
              'characteristicsCodes': [
                'CH',
                'FC',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 7,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '13B',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 7,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '13C',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 7,
                'y': 3
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '13D',
              'characteristicsCodes': [
                '9',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 7,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '13E',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 7,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '13F',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 7,
                'y': 7
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '13G',
              'characteristicsCodes': [
                'CH',
                'FC',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 7,
                'y': 8
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '14A',
              'characteristicsCodes': [
                'CH',
                'FC',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 8,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '14B',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 8,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '14C',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 8,
                'y': 3
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '14D',
              'characteristicsCodes': [
                '9',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 8,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '14E',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 8,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '14F',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 8,
                'y': 7
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '14G',
              'characteristicsCodes': [
                'CH',
                'FC',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 8,
                'y': 8
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '15A',
              'characteristicsCodes': [
                'CH',
                'FC',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 9,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '15B',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 9,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '15C',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 9,
                'y': 3
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '15D',
              'characteristicsCodes': [
                '9',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 9,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '15E',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 9,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '15F',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 9,
                'y': 7
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '15G',
              'characteristicsCodes': [
                'CH',
                'FC',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 9,
                'y': 8
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '16A',
              'characteristicsCodes': [
                'CH',
                'FC',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 10,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '16B',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 10,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '16C',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 10,
                'y': 3
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '16D',
              'characteristicsCodes': [
                '9',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 10,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '16E',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 10,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '16F',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 10,
                'y': 7
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '16G',
              'characteristicsCodes': [
                'CH',
                'FC',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 10,
                'y': 8
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '17C',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 11,
                'y': 3
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '17D',
              'characteristicsCodes': [
                '9',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 11,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '17E',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 11,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '19A',
              'characteristicsCodes': [
                '1A',
                '1B',
                '1D',
                'CH',
                'E',
                'IE',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '57.00',
                    'base': '57.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 12,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '19B',
              'characteristicsCodes': [
                '1A',
                '1B',
                '1D',
                'A',
                'CH',
                'E',
                'IE'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '57.00',
                    'base': '57.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 12,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '19C',
              'characteristicsCodes': [
                '1A',
                '1B',
                'A',
                'CH',
                'IE',
                'Q'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '71.00',
                    'base': '71.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 12,
                'y': 3
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '19D',
              'characteristicsCodes': [
                '1A',
                '1B',
                '9',
                'CH',
                'IE',
                'Q'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '71.00',
                    'base': '71.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 12,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '19E',
              'characteristicsCodes': [
                '1A',
                '1B',
                'A',
                'CH',
                'IE',
                'Q'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '71.00',
                    'base': '71.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 12,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '19F',
              'characteristicsCodes': [
                '1A',
                '1B',
                '1D',
                'A',
                'CH',
                'E',
                'IE'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '57.00',
                    'base': '57.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 12,
                'y': 7
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '19G',
              'characteristicsCodes': [
                '1A',
                '1B',
                '1D',
                'CH',
                'E',
                'IE',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '57.00',
                    'base': '57.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 12,
                'y': 8
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '20A',
              'characteristicsCodes': [
                '1A',
                '1B',
                'CH',
                'E',
                'IE',
                'Q',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '71.00',
                    'base': '71.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 13,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '20B',
              'characteristicsCodes': [
                '1A',
                '1B',
                'A',
                'CH',
                'E',
                'IE',
                'Q'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '71.00',
                    'base': '71.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 13,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '20C',
              'characteristicsCodes': [
                '1A',
                '1B',
                'A',
                'CH',
                'IE',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 13,
                'y': 3
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '20D',
              'characteristicsCodes': [
                '1A',
                '1B',
                '9',
                'CH',
                'IE',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 13,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '20E',
              'characteristicsCodes': [
                '1A',
                '1B',
                'A',
                'CH',
                'IE',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 13,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '20F',
              'characteristicsCodes': [
                '1A',
                '1B',
                'A',
                'CH',
                'E',
                'IE',
                'Q'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '71.00',
                    'base': '71.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 13,
                'y': 7
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '20G',
              'characteristicsCodes': [
                '1A',
                '1B',
                'CH',
                'E',
                'IE',
                'Q',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '71.00',
                    'base': '71.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 13,
                'y': 8
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '21A',
              'characteristicsCodes': [
                '1A',
                'CH',
                'O',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 14,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '21B',
              'characteristicsCodes': [
                '1A',
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 14,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '21C',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 14,
                'y': 3
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '21D',
              'characteristicsCodes': [
                '9',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 14,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '21E',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 14,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '21F',
              'characteristicsCodes': [
                '1A',
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 14,
                'y': 7
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '21G',
              'characteristicsCodes': [
                '1A',
                'CH',
                'O',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 14,
                'y': 8
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '22A',
              'characteristicsCodes': [
                'CH',
                'O',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 15,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '22B',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 15,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '22C',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 15,
                'y': 3
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '22D',
              'characteristicsCodes': [
                '9',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 15,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '22E',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 15,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '22F',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 15,
                'y': 7
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '22G',
              'characteristicsCodes': [
                'CH',
                'O',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 15,
                'y': 8
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '23A',
              'characteristicsCodes': [
                'CH',
                'O',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 16,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '23B',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 16,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '23C',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 16,
                'y': 3
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '23D',
              'characteristicsCodes': [
                '9',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 16,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '23E',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 16,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '23F',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 16,
                'y': 7
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '23G',
              'characteristicsCodes': [
                'CH',
                'O',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 16,
                'y': 8
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '24A',
              'characteristicsCodes': [
                'CH',
                'O',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 17,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '24B',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 17,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '24C',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 17,
                'y': 3
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '24D',
              'characteristicsCodes': [
                '9',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 17,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '24E',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 17,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '24F',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 17,
                'y': 7
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '24G',
              'characteristicsCodes': [
                'CH',
                'O',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 17,
                'y': 8
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '25A',
              'characteristicsCodes': [
                'CH',
                'O',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 18,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '25B',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 18,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '25C',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 18,
                'y': 3
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '25D',
              'characteristicsCodes': [
                '9',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 18,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '25E',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 18,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '25F',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 18,
                'y': 7
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '25G',
              'characteristicsCodes': [
                'CH',
                'O',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 18,
                'y': 8
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '26A',
              'characteristicsCodes': [
                'CH',
                'O',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 19,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '26B',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 19,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '26C',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 19,
                'y': 3
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '26D',
              'characteristicsCodes': [
                '9',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 19,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '26E',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 19,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '26F',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 19,
                'y': 7
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '26G',
              'characteristicsCodes': [
                'CH',
                'O',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 19,
                'y': 8
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '27A',
              'characteristicsCodes': [
                'CH',
                'O',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 20,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '27B',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 20,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '27C',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 20,
                'y': 3
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '27D',
              'characteristicsCodes': [
                '9',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 20,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '27E',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 20,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '27F',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 20,
                'y': 7
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '27G',
              'characteristicsCodes': [
                'CH',
                'O',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 20,
                'y': 8
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '28A',
              'characteristicsCodes': [
                'CH',
                'O',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 21,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '28B',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 21,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '28C',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 21,
                'y': 3
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '28D',
              'characteristicsCodes': [
                '9',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 21,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '28E',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 21,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '28F',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 21,
                'y': 7
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '28G',
              'characteristicsCodes': [
                'CH',
                'O',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 21,
                'y': 8
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '29A',
              'characteristicsCodes': [
                'CH',
                'O',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 22,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '29B',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 22,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '29C',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 22,
                'y': 3
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '29D',
              'characteristicsCodes': [
                '9',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 22,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '29E',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 22,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '29F',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 22,
                'y': 7
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '29G',
              'characteristicsCodes': [
                'CH',
                'O',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 22,
                'y': 8
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '30A',
              'characteristicsCodes': [
                'CH',
                'O',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 23,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '30B',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 23,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '30C',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 23,
                'y': 3
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '30D',
              'characteristicsCodes': [
                '9',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 23,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '30E',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 23,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '30F',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 23,
                'y': 7
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '30G',
              'characteristicsCodes': [
                'CH',
                'O',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 23,
                'y': 8
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '31A',
              'characteristicsCodes': [
                'CH',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 24,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '31B',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 24,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '31C',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 24,
                'y': 3
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '31D',
              'characteristicsCodes': [
                '9',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 24,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '31E',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 24,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '31F',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 24,
                'y': 7
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '31G',
              'characteristicsCodes': [
                'CH',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 24,
                'y': 8
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '32A',
              'characteristicsCodes': [
                'CH',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 25,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '32B',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 25,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '32C',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 25,
                'y': 3
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '32D',
              'characteristicsCodes': [
                '9',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 25,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '32E',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 25,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '32F',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 25,
                'y': 7
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '32G',
              'characteristicsCodes': [
                'CH',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 25,
                'y': 8
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '33A',
              'characteristicsCodes': [
                'CH',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 26,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '33B',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 26,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '33C',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 26,
                'y': 3
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '33D',
              'characteristicsCodes': [
                '9',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 26,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '33E',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 26,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '33F',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 26,
                'y': 7
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '33G',
              'characteristicsCodes': [
                'CH',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 26,
                'y': 8
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '34A',
              'characteristicsCodes': [
                'CH',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 27,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '34B',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 27,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '34C',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 27,
                'y': 3
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '34D',
              'characteristicsCodes': [
                '9',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 27,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '34E',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 27,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '34F',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 27,
                'y': 7
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '34G',
              'characteristicsCodes': [
                'CH',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 27,
                'y': 8
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '35A',
              'characteristicsCodes': [
                'CH',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 28,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '35B',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 28,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '35C',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 28,
                'y': 3
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '35D',
              'characteristicsCodes': [
                '9',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 28,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '35E',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 28,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '35F',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 28,
                'y': 7
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '35G',
              'characteristicsCodes': [
                'CH',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 28,
                'y': 8
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '36A',
              'characteristicsCodes': [
                'CH',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 29,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '36B',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 29,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '36C',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 29,
                'y': 3
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '36D',
              'characteristicsCodes': [
                '9',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 29,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '36E',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 29,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '36F',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 29,
                'y': 7
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '36G',
              'characteristicsCodes': [
                'CH',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 29,
                'y': 8
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '37A',
              'characteristicsCodes': [
                'CH',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 30,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '37B',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 30,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '37C',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 30,
                'y': 3
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '37D',
              'characteristicsCodes': [
                '9',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 30,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '37E',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 30,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '37F',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 30,
                'y': 7
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '37G',
              'characteristicsCodes': [
                'CH',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 30,
                'y': 8
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '38A',
              'characteristicsCodes': [
                'CH',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 31,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '38B',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 31,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '38C',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 31,
                'y': 3
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '38D',
              'characteristicsCodes': [
                '9',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 31,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '38E',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 31,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '38F',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 31,
                'y': 7
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '38G',
              'characteristicsCodes': [
                'CH',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 31,
                'y': 8
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '39A',
              'characteristicsCodes': [
                'CH',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 32,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '39B',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 32,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '39C',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 32,
                'y': 3
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '39D',
              'characteristicsCodes': [
                '9',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 32,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '39E',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 32,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '39F',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 32,
                'y': 7
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '39G',
              'characteristicsCodes': [
                'CH',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 32,
                'y': 8
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '40A',
              'characteristicsCodes': [
                'CH',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 33,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '40B',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 33,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '40C',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 33,
                'y': 3
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '40D',
              'characteristicsCodes': [
                '9',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 33,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '40E',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 33,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '40F',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 33,
                'y': 7
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '40G',
              'characteristicsCodes': [
                'CH',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 33,
                'y': 8
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '41C',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 34,
                'y': 3
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '41D',
              'characteristicsCodes': [
                '9',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 34,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '41E',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 34,
                'y': 5
              }
            }
          ]
        }
      ],
      'aircraftCabinAmenities': {
        'power': {
          'isChargeable': false,
          'powerType': 'USB_PORT',
          'usbType': 'USB_C'
        },
        'seat': {
          'legSpace': 29,
          'spaceUnit': 'INCHES',
          'tilt': 'NORMAL',
          'medias': [
            {
              'title': 'Comfortable Seats',
              'href': 'https://pdt.content.amadeus.com/AncillaryServicesMedia/14223418_395.jpg',
              'description': {
                'text': 'Settle in with comfortable seats and an ecoTHREAD blanket made from 100% recycled plastic bottles.',
                'lang': 'EN'
              },
              'mediaType': 'image'
            },
            {
              'title': 'Stay Connected',
              'href': 'https://pdt.content.amadeus.com/AncillaryServicesMedia/71344149_DFL.jpg',
              'description': {
                'text': 'Stay connected next time you fly. Choose from our great value Wi-Fi plans.',
                'lang': 'EN'
              },
              'mediaType': 'image'
            },
            {
              'title': 'Be Curious',
              'href': 'https://pdt.content.amadeus.com/AncillaryServicesMedia/42266150_401.jpg',
              'description': {
                'text': "With special seat,meals, toys, and dedicated children's ice channels, we encourage curious minds and inspire tomorrow's explorers.",
                'lang': 'EN'
              },
              'mediaType': 'image'
            }
          ]
        },
        'wifi': {
          'isChargeable': true,
          'wifiCoverage': 'FULL'
        },
        'entertainment': [
          {
            'isChargeable': false,
            'entertainmentType': 'AUDIO_VIDEO_ON_DEMAND'
          },
          {
            'isChargeable': false,
            'entertainmentType': 'IP_TV'
          }
        ],
        'food': {
          'isChargeable': false,
          'foodType': 'SNACK'
        },
        'beverage': {
          'isChargeable': false,
          'beverageType': 'ALCOHOLIC_AND_NON_ALCOHOLIC'
        }
      },
      'availableSeatsCounters': [
        {
          'travelerId': '1',
          'value': 237
        }
      ]
    },
    {
      'id': '3',
      'type': 'seatmap',
      'departure': {
        'iataCode': 'JFK',
        'terminal': '7',
        'at': '2023-12-15T19:25:00'
      },
      'arrival': {
        'iataCode': 'KEF',
        'at': '2023-12-16T06:05:00'
      },
      'carrierCode': 'FI',
      'number': '614',
      'operating': {
        'carrierCode': 'FI'
      },
      'aircraft': {
        'code': '7M9'
      },
      'class': 'V',
      'flightOfferId': '1',
      'segmentId': '30',
      'decks': [
        {
          'deckType': 'MAIN',
          'deckConfiguration': {
            'width': 7,
            'length': 29,
            'startSeatRow': 5,
            'endSeatRow': 31,
            'startWingsX': 8,
            'endWingsX': 8,
            'startWingsRow': 13,
            'endWingsRow': 13,
            'exitRowsX': [
              9,
              10
            ]
          },
          'facilities': [
            {
              'code': 'LA',
              'column': 'A',
              'row': '31',
              'position': 'REAR',
              'coordinates': {
                'x': 27,
                'y': 0
              }
            },
            {
              'code': 'LA',
              'column': 'B',
              'row': '31',
              'position': 'REAR',
              'coordinates': {
                'x': 27,
                'y': 1
              }
            },
            {
              'code': 'LA',
              'column': 'F',
              'row': '31',
              'position': 'REAR',
              'coordinates': {
                'x': 27,
                'y': 6
              }
            },
            {
              'code': 'LA',
              'column': 'E',
              'row': '31',
              'position': 'REAR',
              'coordinates': {
                'x': 27,
                'y': 5
              }
            },
            {
              'code': 'LA',
              'column': 'C',
              'row': '31',
              'position': 'REAR',
              'coordinates': {
                'x': 27,
                'y': 2
              }
            },
            {
              'code': 'LA',
              'column': 'D',
              'row': '31',
              'position': 'REAR',
              'coordinates': {
                'x': 27,
                'y': 4
              }
            },
            {
              'code': 'G',
              'column': 'A',
              'row': '31',
              'position': 'REAR',
              'coordinates': {
                'x': 28,
                'y': 0
              }
            },
            {
              'code': 'G',
              'column': 'B',
              'row': '31',
              'position': 'REAR',
              'coordinates': {
                'x': 28,
                'y': 1
              }
            },
            {
              'code': 'G',
              'column': 'F',
              'row': '31',
              'position': 'REAR',
              'coordinates': {
                'x': 28,
                'y': 6
              }
            },
            {
              'code': 'G',
              'column': 'E',
              'row': '31',
              'position': 'REAR',
              'coordinates': {
                'x': 28,
                'y': 5
              }
            },
            {
              'code': 'G',
              'column': 'C',
              'row': '31',
              'position': 'REAR',
              'coordinates': {
                'x': 28,
                'y': 2
              }
            },
            {
              'code': 'G',
              'column': 'D',
              'row': '31',
              'position': 'REAR',
              'coordinates': {
                'x': 28,
                'y': 4
              }
            },
            {
              'code': 'G',
              'row': '31',
              'position': 'REAR',
              'coordinates': {
                'x': 28
              }
            }
          ],
          'seats': [
            {
              'cabin': 'ECONOMY',
              'number': '5A',
              'characteristicsCodes': [
                'CH',
                'FC',
                'L',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '85.00',
                    'base': '85.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 0,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '5B',
              'characteristicsCodes': [
                '9',
                'CH',
                'FC',
                'L'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '85.00',
                    'base': '85.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 0,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '5C',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC',
                'L'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '85.00',
                    'base': '85.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 0,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '5D',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC',
                'L'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '85.00',
                    'base': '85.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 0,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '5E',
              'characteristicsCodes': [
                '9',
                'CH',
                'FC',
                'L'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '85.00',
                    'base': '85.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 0,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '5F',
              'characteristicsCodes': [
                'CH',
                'FC',
                'L',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '85.00',
                    'base': '85.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 0,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '6A',
              'characteristicsCodes': [
                'CH',
                'FC',
                'L',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '85.00',
                    'base': '85.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 1,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '6B',
              'characteristicsCodes': [
                '9',
                'CH',
                'FC',
                'L'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '85.00',
                    'base': '85.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 1,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '6C',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC',
                'L'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '85.00',
                    'base': '85.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 1,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '6D',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC',
                'L'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '85.00',
                    'base': '85.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 1,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '6E',
              'characteristicsCodes': [
                '9',
                'CH',
                'FC',
                'L'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '85.00',
                    'base': '85.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 1,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '6F',
              'characteristicsCodes': [
                'CH',
                'FC',
                'L',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '85.00',
                    'base': '85.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 1,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '7A',
              'characteristicsCodes': [
                'CH',
                'FC',
                'L',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '85.00',
                    'base': '85.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 2,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '7B',
              'characteristicsCodes': [
                '9',
                'CH',
                'FC',
                'L'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '85.00',
                    'base': '85.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 2,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '7C',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC',
                'L'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '85.00',
                    'base': '85.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 2,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '7D',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC',
                'L'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '85.00',
                    'base': '85.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 2,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '7E',
              'characteristicsCodes': [
                '9',
                'CH',
                'FC',
                'L'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '85.00',
                    'base': '85.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 2,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '7F',
              'characteristicsCodes': [
                'CH',
                'FC',
                'L',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '85.00',
                    'base': '85.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 2,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '8A',
              'characteristicsCodes': [
                'CH',
                'FC',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 3,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '8B',
              'characteristicsCodes': [
                '9',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 3,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '8C',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 3,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '8D',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 3,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '8E',
              'characteristicsCodes': [
                '9',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 3,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '8F',
              'characteristicsCodes': [
                'CH',
                'FC',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 3,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '9A',
              'characteristicsCodes': [
                'CH',
                'FC',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 4,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '9B',
              'characteristicsCodes': [
                '9',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 4,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '9C',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 4,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '9D',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 4,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '9E',
              'characteristicsCodes': [
                '9',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 4,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '9F',
              'characteristicsCodes': [
                'CH',
                'FC',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 4,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '10A',
              'characteristicsCodes': [
                'CH',
                'FC',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 5,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '10B',
              'characteristicsCodes': [
                '9',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 5,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '10C',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 5,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '10D',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 5,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '10E',
              'characteristicsCodes': [
                '9',
                'CH',
                'FC'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 5,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '10F',
              'characteristicsCodes': [
                'CH',
                'FC',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '43.00',
                    'base': '43.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 5,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '11A',
              'characteristicsCodes': [
                'CH',
                'O',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 6,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '11B',
              'characteristicsCodes': [
                '9',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 6,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '11C',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 6,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '11D',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 6,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '11E',
              'characteristicsCodes': [
                '9',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 6,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '11F',
              'characteristicsCodes': [
                'CH',
                'O',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 6,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '12A',
              'characteristicsCodes': [
                'CH',
                'O',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 7,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '12B',
              'characteristicsCodes': [
                '9',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 7,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '12C',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 7,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '12D',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 7,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '12E',
              'characteristicsCodes': [
                '9',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 7,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '12F',
              'characteristicsCodes': [
                'CH',
                'O',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 7,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '13A',
              'characteristicsCodes': [
                '1A',
                'CH',
                'O',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 8,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '13B',
              'characteristicsCodes': [
                '1A',
                '9',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 8,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '13C',
              'characteristicsCodes': [
                '1A',
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 8,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '13D',
              'characteristicsCodes': [
                '1A',
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 8,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '13E',
              'characteristicsCodes': [
                '1A',
                '9',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 8,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '13F',
              'characteristicsCodes': [
                '1A',
                'CH',
                'O',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 8,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '14A',
              'characteristicsCodes': [
                '1A',
                '1B',
                '1D',
                'CH',
                'E',
                'IE',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '57.00',
                    'base': '57.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 9,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '14B',
              'characteristicsCodes': [
                '1A',
                '1B',
                '1D',
                '9',
                'CH',
                'E',
                'IE'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '57.00',
                    'base': '57.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 9,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '14C',
              'characteristicsCodes': [
                '1A',
                '1B',
                '1D',
                'A',
                'CH',
                'E',
                'IE'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '57.00',
                    'base': '57.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 9,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '14D',
              'characteristicsCodes': [
                '1A',
                '1B',
                '1D',
                'A',
                'CH',
                'E',
                'IE'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '57.00',
                    'base': '57.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 9,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '14E',
              'characteristicsCodes': [
                '1A',
                '1B',
                '1D',
                '9',
                'CH',
                'E',
                'IE'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '57.00',
                    'base': '57.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 9,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '14F',
              'characteristicsCodes': [
                '1A',
                '1B',
                '1D',
                'CH',
                'E',
                'IE',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '57.00',
                    'base': '57.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 9,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '15A',
              'characteristicsCodes': [
                '1A',
                '1B',
                'CH',
                'E',
                'IE',
                'Q',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '71.00',
                    'base': '71.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 10,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '15B',
              'characteristicsCodes': [
                '1A',
                '1B',
                '9',
                'CH',
                'E',
                'IE',
                'Q'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '71.00',
                    'base': '71.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 10,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '15C',
              'characteristicsCodes': [
                '1A',
                '1B',
                'A',
                'CH',
                'E',
                'IE',
                'Q'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '71.00',
                    'base': '71.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 10,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '15D',
              'characteristicsCodes': [
                '1A',
                '1B',
                'A',
                'CH',
                'E',
                'IE',
                'Q'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '71.00',
                    'base': '71.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 10,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '15E',
              'characteristicsCodes': [
                '1A',
                '1B',
                '9',
                'CH',
                'E',
                'IE',
                'Q'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '71.00',
                    'base': '71.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 10,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '15F',
              'characteristicsCodes': [
                '1A',
                '1B',
                'CH',
                'E',
                'IE',
                'Q',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '71.00',
                    'base': '71.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 10,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '16A',
              'characteristicsCodes': [
                '1A',
                'CH',
                'O',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 11,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '16B',
              'characteristicsCodes': [
                '1A',
                '9',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 11,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '16C',
              'characteristicsCodes': [
                '1A',
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 11,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '16D',
              'characteristicsCodes': [
                '1A',
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 11,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '16E',
              'characteristicsCodes': [
                '1A',
                '9',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 11,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '16F',
              'characteristicsCodes': [
                '1A',
                'CH',
                'O',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 11,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '17A',
              'characteristicsCodes': [
                'CH',
                'O',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 12,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '17B',
              'characteristicsCodes': [
                '9',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 12,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '17C',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 12,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '17D',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 12,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '17E',
              'characteristicsCodes': [
                '9',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 12,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '17F',
              'characteristicsCodes': [
                'CH',
                'O',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 12,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '18A',
              'characteristicsCodes': [
                'CH',
                'O',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 13,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '18B',
              'characteristicsCodes': [
                '9',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 13,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '18C',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 13,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '18D',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 13,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '18E',
              'characteristicsCodes': [
                '9',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 13,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '18F',
              'characteristicsCodes': [
                'CH',
                'O',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 13,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '19A',
              'characteristicsCodes': [
                'CH',
                'O',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 14,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '19B',
              'characteristicsCodes': [
                '9',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 14,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '19C',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 14,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '19D',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 14,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '19E',
              'characteristicsCodes': [
                '9',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 14,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '19F',
              'characteristicsCodes': [
                'CH',
                'O',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 14,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '20A',
              'characteristicsCodes': [
                'CH',
                'O',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 15,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '20B',
              'characteristicsCodes': [
                '9',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 15,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '20C',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 15,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '20D',
              'characteristicsCodes': [
                'A',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 15,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '20E',
              'characteristicsCodes': [
                '9',
                'CH',
                'O'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 15,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '20F',
              'characteristicsCodes': [
                'CH',
                'O',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 15,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '21A',
              'characteristicsCodes': [
                'CH',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 16,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '21B',
              'characteristicsCodes': [
                '9',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 16,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '21C',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'OCCUPIED',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 16,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '21D',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 16,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '21E',
              'characteristicsCodes': [
                '9',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 16,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '21F',
              'characteristicsCodes': [
                'CH',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 16,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '22A',
              'characteristicsCodes': [
                'CH',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 17,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '22B',
              'characteristicsCodes': [
                '9',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 17,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '22C',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 17,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '22D',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 17,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '22E',
              'characteristicsCodes': [
                '9',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 17,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '22F',
              'characteristicsCodes': [
                'CH',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 17,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '23A',
              'characteristicsCodes': [
                'CH',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 18,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '23B',
              'characteristicsCodes': [
                '9',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 18,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '23C',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 18,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '23D',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 18,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '23E',
              'characteristicsCodes': [
                '9',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 18,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '23F',
              'characteristicsCodes': [
                'CH',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 18,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '24A',
              'characteristicsCodes': [
                'CH',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 19,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '24B',
              'characteristicsCodes': [
                '9',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 19,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '24C',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 19,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '24D',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 19,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '24E',
              'characteristicsCodes': [
                '9',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 19,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '24F',
              'characteristicsCodes': [
                'CH',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 19,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '25A',
              'characteristicsCodes': [
                'CH',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 20,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '25B',
              'characteristicsCodes': [
                '9',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 20,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '25C',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 20,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '25D',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 20,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '25E',
              'characteristicsCodes': [
                '9',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 20,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '25F',
              'characteristicsCodes': [
                'CH',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 20,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '26A',
              'characteristicsCodes': [
                'CH',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 21,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '26B',
              'characteristicsCodes': [
                '9',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 21,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '26C',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 21,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '26D',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 21,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '26E',
              'characteristicsCodes': [
                '9',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 21,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '26F',
              'characteristicsCodes': [
                'CH',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 21,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '27A',
              'characteristicsCodes': [
                'CH',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 22,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '27B',
              'characteristicsCodes': [
                '9',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 22,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '27C',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 22,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '27D',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 22,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '27E',
              'characteristicsCodes': [
                '9',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 22,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '27F',
              'characteristicsCodes': [
                'CH',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 22,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '28A',
              'characteristicsCodes': [
                'CH',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 23,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '28B',
              'characteristicsCodes': [
                '9',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 23,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '28C',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 23,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '28D',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 23,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '28E',
              'characteristicsCodes': [
                '9',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 23,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '28F',
              'characteristicsCodes': [
                'CH',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 23,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '29A',
              'characteristicsCodes': [
                'CH',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 24,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '29B',
              'characteristicsCodes': [
                '9',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 24,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '29C',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 24,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '29D',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 24,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '29E',
              'characteristicsCodes': [
                '9',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 24,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '29F',
              'characteristicsCodes': [
                'CH',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 24,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '30A',
              'characteristicsCodes': [
                'CH',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 25,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '30B',
              'characteristicsCodes': [
                '9',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 25,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '30C',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 25,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '30D',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 25,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '30E',
              'characteristicsCodes': [
                '9',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 25,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '30F',
              'characteristicsCodes': [
                'CH',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 25,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '31A',
              'characteristicsCodes': [
                'CH',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 26,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '31B',
              'characteristicsCodes': [
                '9',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 26,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '31C',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 26,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '31D',
              'characteristicsCodes': [
                'A',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 26,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '31E',
              'characteristicsCodes': [
                '9',
                'CH'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 26,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '31F',
              'characteristicsCodes': [
                'CH',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 26,
                'y': 6
              }
            }
          ]
        }
      ],
      'aircraftCabinAmenities': {
        'power': {
          'isChargeable': false,
          'powerType': 'USB_PORT',
          'usbType': 'USB_C'
        },
        'seat': {
          'legSpace': 29,
          'spaceUnit': 'INCHES',
          'tilt': 'NORMAL',
          'medias': [
            {
              'title': 'Comfortable Seats',
              'href': 'https://pdt.content.amadeus.com/AncillaryServicesMedia/14223418_395.jpg',
              'description': {
                'text': 'Settle in with comfortable seats and an ecoTHREAD blanket made from 100% recycled plastic bottles.',
                'lang': 'EN'
              },
              'mediaType': 'image'
            },
            {
              'title': 'Stay Connected',
              'href': 'https://pdt.content.amadeus.com/AncillaryServicesMedia/71344149_DFL.jpg',
              'description': {
                'text': 'Stay connected next time you fly. Choose from our great value Wi-Fi plans.',
                'lang': 'EN'
              },
              'mediaType': 'image'
            },
            {
              'title': 'Be Curious',
              'href': 'https://pdt.content.amadeus.com/AncillaryServicesMedia/42266150_401.jpg',
              'description': {
                'text': "With special seat,meals, toys, and dedicated children's ice channels, we encourage curious minds and inspire tomorrow's explorers.",
                'lang': 'EN'
              },
              'mediaType': 'image'
            }
          ]
        },
        'wifi': {
          'isChargeable': true,
          'wifiCoverage': 'FULL'
        },
        'entertainment': [
          {
            'isChargeable': false,
            'entertainmentType': 'AUDIO_VIDEO_ON_DEMAND'
          },
          {
            'isChargeable': false,
            'entertainmentType': 'IP_TV'
          }
        ],
        'food': {
          'isChargeable': false,
          'foodType': 'SNACK'
        },
        'beverage': {
          'isChargeable': false,
          'beverageType': 'ALCOHOLIC_AND_NON_ALCOHOLIC'
        }
      },
      'availableSeatsCounters': [
        {
          'travelerId': '1',
          'value': 161
        }
      ]
    },
    {
      'id': '4',
      'type': 'seatmap',
      'departure': {
        'iataCode': 'KEF',
        'at': '2023-12-16T07:35:00'
      },
      'arrival': {
        'iataCode': 'CDG',
        'terminal': '1',
        'at': '2023-12-16T12:00:00'
      },
      'carrierCode': 'FI',
      'number': '542',
      'operating': {
        'carrierCode': 'FI'
      },
      'aircraft': {
        'code': '7M8'
      },
      'class': 'V',
      'flightOfferId': '1',
      'segmentId': '31',
      'decks': [
        {
          'deckType': 'MAIN',
          'deckConfiguration': {
            'width': 7,
            'length': 26,
            'startSeatRow': 5,
            'endSeatRow': 28,
            'exitRowsX': [
              7,
              8
            ]
          },
          'facilities': [
            {
              'code': 'LA',
              'column': 'A',
              'row': '28',
              'position': 'REAR',
              'coordinates': {
                'x': 24,
                'y': 0
              }
            },
            {
              'code': 'LA',
              'column': 'B',
              'row': '28',
              'position': 'REAR',
              'coordinates': {
                'x': 24,
                'y': 1
              }
            },
            {
              'code': 'LA',
              'column': 'F',
              'row': '28',
              'position': 'REAR',
              'coordinates': {
                'x': 24,
                'y': 6
              }
            },
            {
              'code': 'LA',
              'column': 'E',
              'row': '28',
              'position': 'REAR',
              'coordinates': {
                'x': 24,
                'y': 5
              }
            },
            {
              'code': 'LA',
              'column': 'C',
              'row': '28',
              'position': 'REAR',
              'coordinates': {
                'x': 24,
                'y': 2
              }
            },
            {
              'code': 'LA',
              'column': 'D',
              'row': '28',
              'position': 'REAR',
              'coordinates': {
                'x': 24,
                'y': 4
              }
            },
            {
              'code': 'G',
              'column': 'A',
              'row': '28',
              'position': 'REAR',
              'coordinates': {
                'x': 25,
                'y': 0
              }
            },
            {
              'code': 'G',
              'column': 'B',
              'row': '28',
              'position': 'REAR',
              'coordinates': {
                'x': 25,
                'y': 1
              }
            },
            {
              'code': 'G',
              'column': 'F',
              'row': '28',
              'position': 'REAR',
              'coordinates': {
                'x': 25,
                'y': 6
              }
            },
            {
              'code': 'G',
              'column': 'E',
              'row': '28',
              'position': 'REAR',
              'coordinates': {
                'x': 25,
                'y': 5
              }
            },
            {
              'code': 'G',
              'column': 'C',
              'row': '28',
              'position': 'REAR',
              'coordinates': {
                'x': 25,
                'y': 2
              }
            },
            {
              'code': 'G',
              'column': 'D',
              'row': '28',
              'position': 'REAR',
              'coordinates': {
                'x': 25,
                'y': 4
              }
            },
            {
              'code': 'G',
              'row': '28',
              'position': 'REAR',
              'coordinates': {
                'x': 25
              }
            }
          ],
          'seats': [
            {
              'cabin': 'ECONOMY',
              'number': '5A',
              'characteristicsCodes': [
                '1A',
                'CH',
                'FC',
                'L',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '35.00',
                    'base': '35.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 0,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '5B',
              'characteristicsCodes': [
                '1A',
                '9',
                'CH',
                'FC',
                'L',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '35.00',
                    'base': '35.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 0,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '5C',
              'characteristicsCodes': [
                '1A',
                'A',
                'CH',
                'FC',
                'L',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '35.00',
                    'base': '35.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 0,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '5D',
              'characteristicsCodes': [
                '1A',
                'A',
                'CH',
                'FC',
                'L',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '35.00',
                    'base': '35.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 0,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '5E',
              'characteristicsCodes': [
                '1A',
                '9',
                'CH',
                'FC',
                'L',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '35.00',
                    'base': '35.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 0,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '5F',
              'characteristicsCodes': [
                '1A',
                'CH',
                'FC',
                'L',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '35.00',
                    'base': '35.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 0,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '6A',
              'characteristicsCodes': [
                '1A',
                'CH',
                'FC',
                'L',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '35.00',
                    'base': '35.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 1,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '6B',
              'characteristicsCodes': [
                '1A',
                '9',
                'CH',
                'FC',
                'L',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '35.00',
                    'base': '35.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 1,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '6C',
              'characteristicsCodes': [
                '1A',
                'A',
                'CH',
                'FC',
                'L',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '35.00',
                    'base': '35.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 1,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '6D',
              'characteristicsCodes': [
                '1A',
                'A',
                'CH',
                'FC',
                'L',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '35.00',
                    'base': '35.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 1,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '6E',
              'characteristicsCodes': [
                '1A',
                '9',
                'CH',
                'FC',
                'L',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '35.00',
                    'base': '35.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 1,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '6F',
              'characteristicsCodes': [
                '1A',
                'CH',
                'FC',
                'L',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '35.00',
                    'base': '35.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 1,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '7A',
              'characteristicsCodes': [
                '1A',
                'CH',
                'FC',
                'L',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'OCCUPIED',
                  'price': {
                    'currency': 'EUR',
                    'total': '35.00',
                    'base': '35.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 2,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '7B',
              'characteristicsCodes': [
                '1A',
                '9',
                'CH',
                'FC',
                'L',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'OCCUPIED',
                  'price': {
                    'currency': 'EUR',
                    'total': '35.00',
                    'base': '35.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 2,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '7C',
              'characteristicsCodes': [
                '1A',
                'A',
                'CH',
                'FC',
                'L',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '35.00',
                    'base': '35.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 2,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '7D',
              'characteristicsCodes': [
                '1A',
                'A',
                'CH',
                'FC',
                'L',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '35.00',
                    'base': '35.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 2,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '7E',
              'characteristicsCodes': [
                '1A',
                '9',
                'CH',
                'FC',
                'L',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '35.00',
                    'base': '35.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 2,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '7F',
              'characteristicsCodes': [
                '1A',
                'CH',
                'FC',
                'L',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '35.00',
                    'base': '35.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 2,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '8A',
              'characteristicsCodes': [
                'CH',
                'FC',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'OCCUPIED',
                  'price': {
                    'currency': 'EUR',
                    'total': '24.00',
                    'base': '24.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 3,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '8B',
              'characteristicsCodes': [
                '9',
                'CH',
                'FC',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'OCCUPIED',
                  'price': {
                    'currency': 'EUR',
                    'total': '24.00',
                    'base': '24.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 3,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '8C',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'OCCUPIED',
                  'price': {
                    'currency': 'EUR',
                    'total': '24.00',
                    'base': '24.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 3,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '8D',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'OCCUPIED',
                  'price': {
                    'currency': 'EUR',
                    'total': '24.00',
                    'base': '24.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 3,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '8E',
              'characteristicsCodes': [
                '9',
                'CH',
                'FC',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '24.00',
                    'base': '24.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 3,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '8F',
              'characteristicsCodes': [
                'CH',
                'FC',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '24.00',
                    'base': '24.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 3,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '9A',
              'characteristicsCodes': [
                'CH',
                'FC',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '24.00',
                    'base': '24.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 4,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '9B',
              'characteristicsCodes': [
                '9',
                'CH',
                'FC',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '24.00',
                    'base': '24.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 4,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '9C',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '24.00',
                    'base': '24.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 4,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '9D',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '24.00',
                    'base': '24.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 4,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '9E',
              'characteristicsCodes': [
                '9',
                'CH',
                'FC',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '24.00',
                    'base': '24.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 4,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '9F',
              'characteristicsCodes': [
                'CH',
                'FC',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '24.00',
                    'base': '24.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 4,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '10A',
              'characteristicsCodes': [
                'CH',
                'FC',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '24.00',
                    'base': '24.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 5,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '10B',
              'characteristicsCodes': [
                '9',
                'CH',
                'FC',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '24.00',
                    'base': '24.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 5,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '10C',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '24.00',
                    'base': '24.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 5,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '10D',
              'characteristicsCodes': [
                'A',
                'CH',
                'FC',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '24.00',
                    'base': '24.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 5,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '10E',
              'characteristicsCodes': [
                '9',
                'CH',
                'FC',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '24.00',
                    'base': '24.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 5,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '10F',
              'characteristicsCodes': [
                'CH',
                'FC',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '24.00',
                    'base': '24.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 5,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '11A',
              'characteristicsCodes': [
                '1A',
                'CH',
                'O',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'OCCUPIED',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 6,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '11B',
              'characteristicsCodes': [
                '1A',
                '9',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'OCCUPIED',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 6,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '11C',
              'characteristicsCodes': [
                '1A',
                'A',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'OCCUPIED',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 6,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '11D',
              'characteristicsCodes': [
                '1A',
                'A',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'OCCUPIED',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 6,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '11E',
              'characteristicsCodes': [
                '1A',
                '9',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 6,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '11F',
              'characteristicsCodes': [
                '1A',
                'CH',
                'O',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'OCCUPIED',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 6,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '12A',
              'characteristicsCodes': [
                '1A',
                '1B',
                '1D',
                'CH',
                'E',
                'IE',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '26.00',
                    'base': '26.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 7,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '12B',
              'characteristicsCodes': [
                '1A',
                '1B',
                '1D',
                '9',
                'CH',
                'E',
                'IE',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '26.00',
                    'base': '26.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 7,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '12C',
              'characteristicsCodes': [
                '1A',
                '1B',
                '1D',
                'A',
                'CH',
                'E',
                'IE',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '26.00',
                    'base': '26.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 7,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '12D',
              'characteristicsCodes': [
                '1A',
                '1B',
                '1D',
                'A',
                'CH',
                'E',
                'IE',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '26.00',
                    'base': '26.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 7,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '12E',
              'characteristicsCodes': [
                '1A',
                '1B',
                '1D',
                '9',
                'CH',
                'E',
                'IE',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '26.00',
                    'base': '26.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 7,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '12F',
              'characteristicsCodes': [
                '1A',
                '1B',
                '1D',
                'CH',
                'E',
                'IE',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '26.00',
                    'base': '26.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 7,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '13A',
              'characteristicsCodes': [
                '1A',
                '1B',
                'CH',
                'E',
                'IE',
                'Q',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'OCCUPIED',
                  'price': {
                    'currency': 'EUR',
                    'total': '28.00',
                    'base': '28.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 8,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '13B',
              'characteristicsCodes': [
                '1A',
                '1B',
                '9',
                'CH',
                'E',
                'IE',
                'Q',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'OCCUPIED',
                  'price': {
                    'currency': 'EUR',
                    'total': '28.00',
                    'base': '28.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 8,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '13C',
              'characteristicsCodes': [
                '1A',
                '1B',
                'A',
                'CH',
                'E',
                'IE',
                'Q',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '28.00',
                    'base': '28.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 8,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '13D',
              'characteristicsCodes': [
                '1A',
                '1B',
                'A',
                'CH',
                'E',
                'IE',
                'Q',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '28.00',
                    'base': '28.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 8,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '13E',
              'characteristicsCodes': [
                '1A',
                '1B',
                '9',
                'CH',
                'E',
                'IE',
                'Q',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '28.00',
                    'base': '28.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 8,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '13F',
              'characteristicsCodes': [
                '1A',
                '1B',
                'CH',
                'E',
                'IE',
                'Q',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '28.00',
                    'base': '28.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 8,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '14A',
              'characteristicsCodes': [
                '1A',
                'CH',
                'O',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'OCCUPIED',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 9,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '14B',
              'characteristicsCodes': [
                '1A',
                '9',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 9,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '14C',
              'characteristicsCodes': [
                '1A',
                'A',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'OCCUPIED',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 9,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '14D',
              'characteristicsCodes': [
                '1A',
                'A',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'OCCUPIED',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 9,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '14E',
              'characteristicsCodes': [
                '1A',
                '9',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 9,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '14F',
              'characteristicsCodes': [
                '1A',
                'CH',
                'O',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'OCCUPIED',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 9,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '15A',
              'characteristicsCodes': [
                'CH',
                'O',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'OCCUPIED',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 10,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '15B',
              'characteristicsCodes': [
                '9',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'OCCUPIED',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 10,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '15C',
              'characteristicsCodes': [
                'A',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'OCCUPIED',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 10,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '15D',
              'characteristicsCodes': [
                'A',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'OCCUPIED',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 10,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '15E',
              'characteristicsCodes': [
                '9',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 10,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '15F',
              'characteristicsCodes': [
                'CH',
                'O',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 10,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '16A',
              'characteristicsCodes': [
                'CH',
                'O',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 11,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '16B',
              'characteristicsCodes': [
                '9',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 11,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '16C',
              'characteristicsCodes': [
                'A',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 11,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '16D',
              'characteristicsCodes': [
                'A',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 11,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '16E',
              'characteristicsCodes': [
                '9',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'OCCUPIED',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 11,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '16F',
              'characteristicsCodes': [
                'CH',
                'O',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'OCCUPIED',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 11,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '17A',
              'characteristicsCodes': [
                'CH',
                'O',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 12,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '17B',
              'characteristicsCodes': [
                '9',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 12,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '17C',
              'characteristicsCodes': [
                'A',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 12,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '17D',
              'characteristicsCodes': [
                'A',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 12,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '17E',
              'characteristicsCodes': [
                '9',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 12,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '17F',
              'characteristicsCodes': [
                'CH',
                'O',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 12,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '18A',
              'characteristicsCodes': [
                'CH',
                'O',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 13,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '18B',
              'characteristicsCodes': [
                '9',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 13,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '18C',
              'characteristicsCodes': [
                'A',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 13,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '18D',
              'characteristicsCodes': [
                'A',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 13,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '18E',
              'characteristicsCodes': [
                '9',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 13,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '18F',
              'characteristicsCodes': [
                'CH',
                'O',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 13,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '19A',
              'characteristicsCodes': [
                'CH',
                'O',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 14,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '19B',
              'characteristicsCodes': [
                '9',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 14,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '19C',
              'characteristicsCodes': [
                'A',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 14,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '19D',
              'characteristicsCodes': [
                'A',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 14,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '19E',
              'characteristicsCodes': [
                '9',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 14,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '19F',
              'characteristicsCodes': [
                'CH',
                'O',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 14,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '20A',
              'characteristicsCodes': [
                'CH',
                'O',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 15,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '20B',
              'characteristicsCodes': [
                '9',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 15,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '20C',
              'characteristicsCodes': [
                'A',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 15,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '20D',
              'characteristicsCodes': [
                'A',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 15,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '20E',
              'characteristicsCodes': [
                '9',
                'CH',
                'O',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 15,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '20F',
              'characteristicsCodes': [
                'CH',
                'O',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 15,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '21A',
              'characteristicsCodes': [
                'CH',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 16,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '21B',
              'characteristicsCodes': [
                '9',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'OCCUPIED',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 16,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '21C',
              'characteristicsCodes': [
                'A',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'OCCUPIED',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 16,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '21D',
              'characteristicsCodes': [
                'A',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 16,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '21E',
              'characteristicsCodes': [
                '9',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 16,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '21F',
              'characteristicsCodes': [
                'CH',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 16,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '22A',
              'characteristicsCodes': [
                'CH',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 17,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '22B',
              'characteristicsCodes': [
                '9',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 17,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '22C',
              'characteristicsCodes': [
                'A',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 17,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '22D',
              'characteristicsCodes': [
                'A',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 17,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '22E',
              'characteristicsCodes': [
                '9',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 17,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '22F',
              'characteristicsCodes': [
                'CH',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 17,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '23A',
              'characteristicsCodes': [
                'CH',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 18,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '23B',
              'characteristicsCodes': [
                '9',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 18,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '23C',
              'characteristicsCodes': [
                'A',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 18,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '23D',
              'characteristicsCodes': [
                'A',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 18,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '23E',
              'characteristicsCodes': [
                '9',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 18,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '23F',
              'characteristicsCodes': [
                'CH',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 18,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '24A',
              'characteristicsCodes': [
                'CH',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 19,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '24B',
              'characteristicsCodes': [
                '9',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 19,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '24C',
              'characteristicsCodes': [
                'A',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 19,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '24D',
              'characteristicsCodes': [
                'A',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 19,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '24E',
              'characteristicsCodes': [
                '9',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 19,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '24F',
              'characteristicsCodes': [
                'CH',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 19,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '25A',
              'characteristicsCodes': [
                'CH',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 20,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '25B',
              'characteristicsCodes': [
                '9',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 20,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '25C',
              'characteristicsCodes': [
                'A',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 20,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '25D',
              'characteristicsCodes': [
                'A',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 20,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '25E',
              'characteristicsCodes': [
                '9',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 20,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '25F',
              'characteristicsCodes': [
                'CH',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 20,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '26A',
              'characteristicsCodes': [
                'CH',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 21,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '26B',
              'characteristicsCodes': [
                '9',
                'CH',
                'U',
                '1'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'BLOCKED',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 21,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '26C',
              'characteristicsCodes': [
                'A',
                'CH',
                'U',
                '1'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'BLOCKED',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 21,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '26D',
              'characteristicsCodes': [
                'A',
                'CH',
                'U',
                '1'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'BLOCKED',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 21,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '26E',
              'characteristicsCodes': [
                '9',
                'CH',
                'U',
                '1'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'BLOCKED',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 21,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '26F',
              'characteristicsCodes': [
                'CH',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 21,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '27A',
              'characteristicsCodes': [
                'CH',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 22,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '27B',
              'characteristicsCodes': [
                '9',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 22,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '27C',
              'characteristicsCodes': [
                'A',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 22,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '27D',
              'characteristicsCodes': [
                'A',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 22,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '27E',
              'characteristicsCodes': [
                '9',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 22,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '27F',
              'characteristicsCodes': [
                'CH',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 22,
                'y': 6
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '28A',
              'characteristicsCodes': [
                'CH',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 23,
                'y': 0
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '28B',
              'characteristicsCodes': [
                '9',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 23,
                'y': 1
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '28C',
              'characteristicsCodes': [
                'A',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 23,
                'y': 2
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '28D',
              'characteristicsCodes': [
                'A',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 23,
                'y': 4
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '28E',
              'characteristicsCodes': [
                '9',
                'CH',
                'RS'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 23,
                'y': 5
              }
            },
            {
              'cabin': 'ECONOMY',
              'number': '28F',
              'characteristicsCodes': [
                'CH',
                'RS',
                'W'
              ],
              'travelerPricing': [
                {
                  'travelerId': '1',
                  'seatAvailabilityStatus': 'AVAILABLE',
                  'price': {
                    'currency': 'EUR',
                    'total': '0.00',
                    'base': '0.00',
                    'taxes': [
                      {
                        'amount': '0.00',
                        'code': 'SUPPLIER'
                      }
                    ]
                  }
                }
              ],
              'coordinates': {
                'x': 23,
                'y': 6
              }
            }
          ]
        }
      ],
      'aircraftCabinAmenities': {
        'power': {
          'isChargeable': false,
          'powerType': 'USB_PORT',
          'usbType': 'USB_C'
        },
        'seat': {
          'legSpace': 29,
          'spaceUnit': 'INCHES',
          'tilt': 'NORMAL',
          'medias': [
            {
              'title': 'Comfortable Seats',
              'href': 'https://pdt.content.amadeus.com/AncillaryServicesMedia/14223418_395.jpg',
              'description': {
                'text': 'Settle in with comfortable seats and an ecoTHREAD blanket made from 100% recycled plastic bottles.',
                'lang': 'EN'
              },
              'mediaType': 'image'
            },
            {
              'title': 'Stay Connected',
              'href': 'https://pdt.content.amadeus.com/AncillaryServicesMedia/71344149_DFL.jpg',
              'description': {
                'text': 'Stay connected next time you fly. Choose from our great value Wi-Fi plans.',
                'lang': 'EN'
              },
              'mediaType': 'image'
            },
            {
              'title': 'Be Curious',
              'href': 'https://pdt.content.amadeus.com/AncillaryServicesMedia/42266150_401.jpg',
              'description': {
                'text': "With special seat,meals, toys, and dedicated children's ice channels, we encourage curious minds and inspire tomorrow's explorers.",
                'lang': 'EN'
              },
              'mediaType': 'image'
            }
          ]
        },
        'wifi': {
          'isChargeable': true,
          'wifiCoverage': 'FULL'
        },
        'entertainment': [
          {
            'isChargeable': false,
            'entertainmentType': 'AUDIO_VIDEO_ON_DEMAND'
          },
          {
            'isChargeable': false,
            'entertainmentType': 'IP_TV'
          }
        ],
        'food': {
          'isChargeable': false,
          'foodType': 'SNACK'
        },
        'beverage': {
          'isChargeable': false,
          'beverageType': 'ALCOHOLIC_AND_NON_ALCOHOLIC'
        }
      },
      'availableSeatsCounters': [
        {
          'travelerId': '1',
          'value': 115
        }
      ]
    }
  ],
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
      'KEF': {
        'cityCode': 'REK',
        'countryCode': 'IS'
      },
      'JFK': {
        'cityCode': 'NYC',
        'countryCode': 'US'
      }
    },
    'facilities': {
      'LA': 'Lavatory',
      'G': 'Galley'
    },
    'seatCharacteristics': {
      '1': 'Restricted seat - General',
      '9': 'Center seat (not window, not aisle)',
      'RS': 'Right side of aircraft',
      'A': 'Aisle seat',
      'CH': 'Chargeable seats',
      'E': 'Exit row seat',
      '1W': 'Window seat without window',
      'L': 'Leg space seat',
      'O': 'Preferential seat',
      '1A': 'Seat not allowed for infant',
      '1B': 'Seat not allowed for medical',
      'Q': 'Seat in a quiet zone',
      '1D': 'Restricted recline seat',
      'U': 'Seat suitable for unaccompanied minors',
      'W': 'Window seat',
      'IE': 'Seat not suitable for child',
      'FC': 'Front of cabin class/compartment'
    }
  }
})
