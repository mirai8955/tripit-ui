import { TripCard } from '@/components/TripCard'
import type { Trip, TripSpot } from '@/types/trip'

interface TripFeedProps {
  onAddSpot: (spot: TripSpot) => void;
}
// Mock data conforming to the new Trip type
const mockTrips: Trip[] = [
  {
    id: 'trip-1',
    author: {
      id: 'user-1',
      name: "Taro Tanaka",
      profileImageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    title: "Tokyo → Osaka Food Journey",
    coverImageUrl: "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800&h=600&fit=crop",
    likes: 124,
    shares: 42,
    spots: [
      {
        id: 'spot-1-1',
        name: 'Tokyo Station',
        description: 'Start of the journey from the heart of Tokyo.',
        arrivalTime: '09:00',
        location: { latitude: 35.681236, longitude: 139.767125 },
        photos: [],
        routeToNext: { method: 'Shinkansen', duration: '2h 30min' }
      },
      {
        id: 'spot-1-2',
        name: 'Osaka Station',
        description: 'Arrival in Osaka, a city of amazing food.',
        arrivalTime: '11:30',
        location: { latitude: 34.702485, longitude: 135.495951 },
        photos: [],
        routeToNext: { method: 'Walking', duration: '15min' }
      },
      {
        id: 'spot-1-3',
        name: 'Dotonbori',
        description: 'The vibrant and iconic entertainment district.',
        arrivalTime: '12:00',
        location: { latitude: 34.66872, longitude: 135.50128 },
        photos: [],
        routeToNext: { method: 'Walking', duration: '5min' }
      },
      {
        id: 'spot-1-4',
        name: "Okonomiyaki 'Kiji'",
        description: 'Authentic and delicious Okonomiyaki.',
        arrivalTime: '12:30',
        location: { latitude: 34.7019, longitude: 135.495 },
        photos: [],
        routeToNext: null
      }
    ],
  },
  {
    id: 'trip-2',
    author: {
      id: 'user-2',
      name: "Hanako Yamada",
      profileImageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    },
    title: "Kyoto Ancient Capital Tour",
    coverImageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=600&fit=crop",
    likes: 89,
    shares: 22,
    spots: [
      {
        id: 'spot-2-1',
        name: 'Kyoto Station',
        description: 'Gateway to the ancient capital.',
        arrivalTime: '08:00',
        location: { latitude: 34.98584, longitude: 135.75876 },
        photos: [],
        routeToNext: { method: 'Bus', duration: '20min' }
      },
      {
        id: 'spot-2-2',
        name: 'Kiyomizu Temple',
        description: 'Stunning wooden stage with a view of the city.',
        arrivalTime: '08:30',
        location: { latitude: 34.9948, longitude: 135.785 },
        photos: [],
        routeToNext: { method: 'Walking', duration: '15min' }
      },
      {
        id: 'spot-2-3',
        name: 'Gion District',
        description: 'Famous for its traditional teahouses and geishas.',
        arrivalTime: '10:00',
        location: { latitude: 35.003, longitude: 135.778 },
        photos: [],
        routeToNext: null
      }
    ],
  }
];

export function TripFeed({ onAddSpot }: TripFeedProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Travel Itineraries
      </h2>
      <div className="grid gap-6 md:grid-cols-1">
        {mockTrips.map((trip) => (
          <TripCard key={trip.id} trip={trip} onAddSpot={onAddSpot} />
        ))}
      </div>
    </div>
  )
} 