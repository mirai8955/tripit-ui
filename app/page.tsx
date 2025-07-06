'use client'

import { useState } from 'react'
import { Header } from '@/components/Header'
import { SearchBar } from '@/components/SearchBar'
import { TripFeed } from '@/components/TripFeed'
import { MyTripPlanner } from '@/components/MyTripPlanner'
import type { TripSpot } from '@/types/trip'
import { Toaster, toast } from 'sonner'

// MyTripPlannerから移動した初期データ
const initialPlan: TripSpot[] = [
  {
    id: 'my-spot-1',
    name: 'Shibuya Sky',
    description: 'Get a 360° view of Tokyo.',
    location: { latitude: 35.659, longitude: 139.702 },
    photos: [],
    routeToNext: { method: 'Walking', duration: '10min' }
  },
  {
    id: 'my-spot-2',
    name: 'Ghibli Museum',
    description: 'Book tickets in advance!',
    location: { latitude: 35.705, longitude: 139.569 },
    photos: [],
    routeToNext: null
  }
];

export default function HomePage() {
  const [myPlan, setMyPlan] = useState<TripSpot[]>(initialPlan)

  const handleAddSpot = (spot: TripSpot) => {
    // すでに追加されているかチェック
    if (myPlan.find(p => p.id === spot.id)) {
      toast.warning(`"${spot.name}" is already in your plan.`)
      return;
    }
    
    // 新しいスポットを追加
    setMyPlan(prevPlan => [...prevPlan, { ...spot, routeToNext: null }]);
    toast.success(`Added "${spot.name}" to your plan!`)
  }

  const handleRemoveSpot = (spotId: string) => {
    setMyPlan(prevPlan => prevPlan.filter(spot => spot.id !== spotId))
    toast.info(`Spot removed from your plan.`)
  }

  const handleUpdateTime = (spotId: string, newTime: string) => {
    setMyPlan(prevPlan =>
      prevPlan.map(spot =>
        spot.id === spotId ? { ...spot, arrivalTime: newTime } : spot
      )
    );
    // For now, no toast message for time updates to avoid being too noisy
  };
  
  const handleAddCustomSpot = () => {
    // 将来的にカスタムスポット追加モーダルなどを開く
    toast.info("This feature is coming soon!");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster richColors position="top-right" />
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Share Your Travel Adventures
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover real travel experiences from travelers around the world and plan your perfect trip.
          </p>
          <div className="max-w-2xl mx-auto">
            <SearchBar />
          </div>
        </div>

        {/* Two-column layout - Adjusted for better centering */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar: My Trip Planner */}
          <div className="lg:col-span-1">
            <MyTripPlanner 
              plan={myPlan}
              onRemoveSpot={handleRemoveSpot}
              onAddCustomSpot={handleAddCustomSpot}
              onUpdateTime={handleUpdateTime}
            />
          </div>

          {/* Main Content: Trip Feed */}
          <div className="lg:col-span-2">
            <TripFeed onAddSpot={handleAddSpot} />
          </div>
        </div>
      </main>
    </div>
  )
} 