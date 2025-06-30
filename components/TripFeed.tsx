import { TripCard } from '@/components/TripCard'

// Mock data
const mockTrips = [
  {
    id: 1,
    author: {
      name: "Taro Tanaka",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      verified: true
    },
    title: "Tokyo → Osaka Food Journey",
    duration: "2 days 1 night",
    likes: 124,
    timeline: [
      { time: "09:00", location: "Tokyo Station", transport: "Shinkansen", duration: "2h 30min" },
      { time: "11:30", location: "Osaka Station", transport: "Walking", duration: "15min" },
      { time: "11:45", location: "Dotonbori", transport: "Walking", duration: "5min" },
      { time: "12:00", location: "Okonomiyaki 'Kiji'", transport: "Train", duration: "20min" },
      { time: "14:00", location: "Osaka Castle", transport: "Train", duration: "30min" }
    ],
    images: ["https://images.unsplash.com/photo-1590559899731-a382839e5549?w=300&h=200&fit=crop"]
  },
  {
    id: 2,
    author: {
      name: "Hanako Yamada",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      verified: false
    },
    title: "Kyoto Ancient Capital Tour",
    duration: "1 day",
    likes: 89,
    timeline: [
      { time: "08:00", location: "Kyoto Station", transport: "Bus", duration: "20min" },
      { time: "08:20", location: "Kiyomizu Temple", transport: "Walking", duration: "15min" },
      { time: "10:00", location: "Sannenzaka", transport: "Walking", duration: "10min" },
      { time: "12:00", location: "Gion District", transport: "Bus", duration: "25min" },
      { time: "15:00", location: "Kinkaku-ji Temple", transport: "Train", duration: "45min" }
    ],
    images: ["https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=300&h=200&fit=crop"]
  }
]

export function TripFeed() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Travel Itineraries
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 lg:max-w-4xl lg:mx-auto">
        {mockTrips.map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  )
} 