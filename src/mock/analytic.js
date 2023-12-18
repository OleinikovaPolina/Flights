export const initTraveled = () => ({
  meta: {
    count: 10
  },
  data: [
    {
      type: 'air-traffic',
      destination: 'PAR',
      subType: 'TRAVELED',
      analytics: {
        flights: {
          score: 74
        },
        travelers: {
          score: 100
        }
      }
    },
    {
      type: 'air-traffic',
      destination: 'BCN',
      subType: 'TRAVELED',
      analytics: {
        flights: {
          score: 100
        },
        travelers: {
          score: 78
        }
      }
    },
    {
      type: 'air-traffic',
      destination: 'TCI',
      subType: 'TRAVELED',
      analytics: {
        flights: {
          score: 33
        },
        travelers: {
          score: 67
        }
      }
    },
    {
      type: 'air-traffic',
      destination: 'LON',
      subType: 'TRAVELED',
      analytics: {
        flights: {
          score: 71
        },
        travelers: {
          score: 56
        }
      }
    },
    {
      type: 'air-traffic',
      destination: 'BRU',
      subType: 'TRAVELED',
      analytics: {
        flights: {
          score: 23
        },
        travelers: {
          score: 38
        }
      }
    },
    {
      type: 'air-traffic',
      destination: 'NYC',
      subType: 'TRAVELED',
      analytics: {
        flights: {
          score: 43
        },
        travelers: {
          score: 22
        }
      }
    },
    {
      type: 'air-traffic',
      destination: 'UIO',
      subType: 'TRAVELED',
      analytics: {
        flights: {
          score: 38
        },
        travelers: {
          score: 15
        }
      }
    },
    {
      type: 'air-traffic',
      destination: 'SDQ',
      subType: 'TRAVELED',
      analytics: {
        flights: {
          score: 10
        },
        travelers: {
          score: 15
        }
      }
    },
    {
      type: 'air-traffic',
      destination: 'OPO',
      subType: 'TRAVELED',
      analytics: {
        flights: {
          score: 16
        },
        travelers: {
          score: 8
        }
      }
    },
    {
      type: 'air-traffic',
      destination: 'DXB',
      subType: 'TRAVELED',
      analytics: {
        flights: {
          score: 26
        },
        travelers: {
          score: 7
        }
      }
    }
  ]
})

export const initBooked = () => ({
  meta: {
    count: 10
  },
  data: [
    {
      type: 'air-traffic',
      destination: 'PAR',
      subType: 'BOOKED',
      analytics: {
        flights: {
          score: 100
        },
        travelers: {
          score: 100
        }
      }
    },
    {
      type: 'air-traffic',
      destination: 'TCI',
      subType: 'BOOKED',
      analytics: {
        flights: {
          score: 61
        },
        travelers: {
          score: 80
        }
      }
    },
    {
      type: 'air-traffic',
      destination: 'LON',
      subType: 'BOOKED',
      analytics: {
        flights: {
          score: 93
        },
        travelers: {
          score: 65
        }
      }
    },
    {
      type: 'air-traffic',
      destination: 'BCN',
      subType: 'BOOKED',
      analytics: {
        flights: {
          score: 91
        },
        travelers: {
          score: 61
        }
      }
    },
    {
      type: 'air-traffic',
      destination: 'NYC',
      subType: 'BOOKED',
      analytics: {
        flights: {
          score: 61
        },
        travelers: {
          score: 51
        }
      }
    },
    {
      type: 'air-traffic',
      destination: 'BRU',
      subType: 'BOOKED',
      analytics: {
        flights: {
          score: 41
        },
        travelers: {
          score: 39
        }
      }
    },
    {
      type: 'air-traffic',
      destination: 'UIO',
      subType: 'BOOKED',
      analytics: {
        flights: {
          score: 48
        },
        travelers: {
          score: 37
        }
      }
    },
    {
      type: 'air-traffic',
      destination: 'SDQ',
      subType: 'BOOKED',
      analytics: {
        flights: {
          score: 15
        },
        travelers: {
          score: 19
        }
      }
    },
    {
      type: 'air-traffic',
      destination: 'DXB',
      subType: 'BOOKED',
      analytics: {
        flights: {
          score: 22
        },
        travelers: {
          score: 11
        }
      }
    },
    {
      type: 'air-traffic',
      destination: 'OPO',
      subType: 'BOOKED',
      analytics: {
        flights: {
          score: 18
        },
        travelers: {
          score: 8
        }
      }
    }
  ]
})

export const initBusiestperiod = () => ({
  meta: {
    count: 12,
    links: {
      self: 'https://test.api.amadeus.com/v1/travel/analytics/air-traffic/busiest-period?cityCode=MAD&direction=ARRIVING&period=2017'
    }
  },
  data: [
    {
      type: 'air-traffic',
      period: '2017-05',
      analytics: {
        travelers: {
          score: 9
        }
      }
    },
    {
      type: 'air-traffic',
      period: '2017-12',
      analytics: {
        travelers: {
          score: 9
        }
      }
    },
    {
      type: 'air-traffic',
      period: '2017-09',
      analytics: {
        travelers: {
          score: 8
        }
      }
    },
    {
      type: 'air-traffic',
      period: '2017-10',
      analytics: {
        travelers: {
          score: 8
        }
      }
    },
    {
      type: 'air-traffic',
      period: '2017-07',
      analytics: {
        travelers: {
          score: 8
        }
      }
    },
    {
      type: 'air-traffic',
      period: '2017-06',
      analytics: {
        travelers: {
          score: 8
        }
      }
    },
    {
      type: 'air-traffic',
      period: '2017-02',
      analytics: {
        travelers: {
          score: 8
        }
      }
    },
    {
      type: 'air-traffic',
      period: '2017-03',
      analytics: {
        travelers: {
          score: 8
        }
      }
    },
    {
      type: 'air-traffic',
      period: '2017-01',
      analytics: {
        travelers: {
          score: 8
        }
      }
    },
    {
      type: 'air-traffic',
      period: '2017-04',
      analytics: {
        travelers: {
          score: 8
        }
      }
    },
    {
      type: 'air-traffic',
      period: '2017-08',
      analytics: {
        travelers: {
          score: 8
        }
      }
    },
    {
      type: 'air-traffic',
      period: '2017-11',
      analytics: {
        travelers: {
          score: 8
        }
      }
    }
  ]
})
