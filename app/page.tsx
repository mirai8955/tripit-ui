import { Header } from '@/components/Header'
import { SearchBar } from '@/components/SearchBar'
import { TripFeed } from '@/components/TripFeed'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Share Your Travel Adventures
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover real travel experiences from travelers around the world and plan your perfect trip
          </p>
          <SearchBar />
        </div>
        <TripFeed />
      </main>
    </div>
  )
} 