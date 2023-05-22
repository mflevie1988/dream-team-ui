import { Destination } from '../reducers/destinations';
import { v4 as uuid4 } from 'uuid';

export const destinations: Destination[] = [
  {
    id: uuid4(),
    countryName: 'Bali',
    cities: [
      {
        id: uuid4(),
        name: 'Kuta',
        hotels: [
          {
            id: uuid4(),
            name: 'Rama Beach Resort & Villa',
            starRating: 4,
            rooms: [
              {
                id: uuid4(),
                type: 'Deluxe Room'
              },
              {
                id: uuid4(),
                type: 'Premiere Deluxe Cottage'
              },
              {
                id: uuid4(),
                type: 'Pool Villa'
              },
              {
                id: uuid4(),
                type: 'Suite Pool Villa'
              },
              {
                id: uuid4(),
                type: 'Family Villa'
              }
            ]
          },
          {
            id: uuid4(),
            name: 'The Sun Hotel & Spa',
            starRating: 4,
            rooms: [
              {
                id: uuid4(),
                type: 'Superior Room'
              },
              {
                id: uuid4(),
                type: 'Premium Room'
              },
              {
                id: uuid4(),
                type: 'Deluxe Balcony Room'
              },
              {
                id: uuid4(),
                type: 'Deluxe Pool Access Room'
              },
              {
                id: uuid4(),
                type: 'Family Superior Room'
              }
            ]
          },
          {
            id: uuid4(),
            name: 'Bedrock',
            starRating: 4,
            rooms: [
              {
                id: uuid4(),
                type: 'Superior Room'
              },
              {
                id: uuid4(),
                type: 'Deluxe Room'
              },
              {
                id: uuid4(),
                type: 'Grand Deluxe room'
              },
              {
                id: uuid4(),
                type: 'Luxury Room'
              },
              {
                id: uuid4(),
                type: 'Junior Suite'
              }
            ]
          },
          {
            id: uuid4(),
            name: 'Swiss-Belhotel Rainforest',
            starRating: 4,
            rooms: [
              {
                id: uuid4(),
                type: 'Deluxe Room'
              },
              {
                id: uuid4(),
                type: 'Grand Deluxe Room'
              },
              {
                id: uuid4(),
                type: 'Junior Suite'
              },
              {
                id: uuid4(),
                type: 'Executive Suite'
              }
            ]
          },
          {
            id: uuid4(),
            name: 'Swiss-Belinn Legian',
            starRating: 3,
            rooms: [
              {
                id: uuid4(),
                type: 'Superior Room'
              },
              {
                id: uuid4(),
                type: 'Deluxe Room'
              },
              {
                id: uuid4(),
                type: 'Suite'
              }
            ]
          }
        ]
      },
      {
        id: uuid4(),
        name: 'Gili Trawangan',
        hotels: [
          {
            id: uuid4(),
            name: 'Coco Cabana',
            starRating: 4,
            rooms: [
              {
                id: uuid4(),
                type: 'Family Room'
              },
              {
                id: uuid4(),
                type: 'Deluxe Room'
              },
              {
                id: uuid4(),
                type: 'Standard Double Room'
              }
            ]
          },
          {
            id: uuid4(),
            name: 'Manta Dive',
            starRating: 3,
            rooms: [
              {
                id: uuid4(),
                type: 'Deluxe Room'
              },
              {
                id: uuid4(),
                type: 'Traditional Bungalow'
              },
              {
                id: uuid4(),
                type: 'Standard Room'
              }
            ]
          },
          {
            id: uuid4(),
            name: 'Gili Villas',
            starRating: 4,
            rooms: [
              {
                id: uuid4(),
                type: '1-Bedroom Villa'
              },
              {
                id: uuid4(),
                type: '2-Bedroom Villa'
              }
            ]
          }
        ]
      },
      {
        id: uuid4(),
        name: 'Ubud',
        hotels: [
          {
            id: uuid4(),
            name: 'Anumana Ubud Bali',
            starRating: 4,
            rooms: [
              {
                id: uuid4(),
                type: 'Superior Lagoon View'
              },
              {
                id: uuid4(),
                type: 'Superior Lagoon Access'
              },
              {
                id: uuid4(),
                type: 'Deluxe Lagoon View'
              },
              {
                id: uuid4(),
                type: 'Deluxe Plunge Pool'
              },
              {
                id: uuid4(),
                type: 'Suite Lagoon View'
              },
              {
                id: uuid4(),
                type: 'Suite Plunge Pool'
              }
            ]
          },
          {
            id: uuid4(),
            name: "Ketut's Place Villa Ubud",
            starRating: 4,
            rooms: [
              {
                id: uuid4(),
                type: 'Deluxe Room'
              },
              {
                id: uuid4(),
                type: 'Suite Room'
              },
              {
                id: uuid4(),
                type: 'Royal Villa'
              }
            ]
          },
          {
            id: uuid4(),
            name: "Ketut's Place Bed & Breakfast Ubud",
            starRating: 3,
            rooms: [
              {
                id: uuid4(),
                type: 'Standard Room with fan'
              },
              {
                id: uuid4(),
                type: 'Standard Room with AC'
              },
              {
                id: uuid4(),
                type: 'Deluxe Room'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: uuid4(),
    countryName: 'Thailand',
    cities: [
      {
        id: uuid4(),
        name: 'Bangkok',
        hotels: [
          {
            id: uuid4(),
            name: 'SureStay Plus Hotel by Best Western Sukhumvit 2',
            starRating: 4,
            rooms: [
              {
                id: uuid4(),
                type: 'Superior Room'
              },
              {
                id: uuid4(),
                type: 'Deluxe Room'
              }
            ]
          },
          {
            id: uuid4(),
            name: 'Cross Vibe Bangkok Sukhumvit Hotel',
            starRating: 4,
            rooms: [
              {
                id: '11',
                type: 'Standard Twin'
              },
              {
                id: '12',
                type: 'Standard Double'
              },
              {
                id: '12',
                type: 'Superior Twin'
              },
              {
                id: '12',
                type: 'Superior Double'
              },
              {
                id: '12',
                type: 'Suite'
              },
              {
                id: '12',
                type: 'Studio'
              },
              {
                id: '12',
                type: 'One Bedroom'
              },
              {
                id: '12',
                type: 'Two Bedroom (3 persons)'
              },
              {
                id: '12',
                type: 'Three Bedroom (6 Persons)'
              }
            ]
          },
          {
            id: uuid4(),
            name: 'Red Planet Bangkok Asoke',
            starRating: 3,
            rooms: [
              {
                id: uuid4(),
                type: 'Standard Room'
              },
              {
                id: uuid4(),
                type: 'Single Room'
              },
              {
                id: uuid4(),
                type: 'Double Room'
              },
              {
                id: uuid4(),
                type: 'Twin Room'
              }
            ]
          },
          {
            id: uuid4(),
            name: 'Red Planet Bangkok Surawong',
            starRating: 3,
            rooms: [
              {
                id: uuid4(),
                type: 'Standard Room'
              },
              {
                id: uuid4(),
                type: 'Single Room'
              },
              {
                id: uuid4(),
                type: 'Double Room'
              },
              {
                id: uuid4(),
                type: 'Twin Room'
              }
            ]
          }
        ]
      },
      {
        id: uuid4(),
        name: 'Pattaya',
        hotels: [
          {
            id: uuid4(),
            name: 'Mind Resort',
            starRating: 4,
            rooms: [
              {
                id: uuid4(),
                type: 'Standard Room'
              },
              {
                id: uuid4(),
                type: 'Superior Room'
              },
              {
                id: uuid4(),
                type: 'Deluxe Room'
              },
              {
                id: uuid4(),
                type: 'Executive Room'
              },
              {
                id: uuid4(),
                type: 'Pool Access Room'
              }
            ]
          },
          {
            id: uuid4(),
            name: 'Red Planet Pattaya',
            starRating: 3,
            rooms: [
              {
                id: uuid4(),
                type: 'Standard Room'
              },
              {
                id: uuid4(),
                type: 'Single Room'
              },
              {
                id: uuid4(),
                type: 'Double Room'
              },
              {
                id: uuid4(),
                type: 'Twin Room'
              }
            ]
          }
        ]
      }
    ]
  }
];
