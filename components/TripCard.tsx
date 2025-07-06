'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { TripTimeline } from '@/components/TripTimeline'
import { Heart, Share2, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react'
import type { Trip, TripSpot } from '@/types/trip' // TripSpotをインポート

interface TripCardProps {
  trip: Trip;
  onAddSpot: (spot: TripSpot) => void;
}

export function TripCard({ trip, onAddSpot }: TripCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false); // いいねの状態はデモ用に残す

  const handleLike = () => {
    setIsLiked(!isLiked);
    // ここでAPIを呼び出していいねの状態を更新する
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
      {/* Header */}
      <div className="p-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-3">
            <img
              src={trip.author.profileImageUrl}
              alt={trip.author.name}
              className="w-10 h-10 rounded-full object-cover" // Icon size reduced
            />
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-semibold text-sm text-gray-900">{trip.author.name}</span>
                {/*  APIからのデータにverifiedフラグがあれば使う
                {trip.author.verified && (
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                )}
                */}
              </div>
              <span className="text-xs text-gray-500">_id: {trip.author.id}</span>
            </div>
          </div>
        </div>
        <h2 className="text-lg font-bold text-gray-900">{trip.title}</h2>
      </div>

      {/* Image - Height further reduced */}
      {trip.coverImageUrl && (
        <div className="px-3 mb-2">
          <img
            src={trip.coverImageUrl}
            alt={trip.title}
            className="w-full h-56 object-cover rounded-xl" // Height reduced from h-64 to h-56
          />
        </div>
      )}

      {/* Timeline (Preview/Expanded) */}
      <div className="p-3 flex-grow">
        <TripTimeline 
          spots={trip.spots} // spotsを渡すように変更
          isExpanded={isExpanded} 
          onAddSpot={onAddSpot} // onAddSpotを渡す
        />
        
        {trip.spots.length > 3 && (
          <Button
            variant="ghost"
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full mt-2 text-blue-600 hover:text-blue-700 text-sm"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="h-4 w-4 mr-1" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4 mr-1" />
                Show All ({trip.spots.length} stops)
              </>
            )}
          </Button>
        )}
      </div>

      {/* Actions */}
      <div className="px-3 py-2 mt-auto border-t border-gray-100 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLike}
            className={`flex items-center space-x-2 ${
              isLiked ? 'text-red-500' : 'text-gray-600'
            }`}
          >
            <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
            <span className="font-medium">{trip.likes + (isLiked ? 1 : 0)}</span>
          </Button>
          
          <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-gray-600">
            <Share2 className="h-5 w-5" />
            <span className="font-medium">Share</span>
          </Button>
        </div>

        <Button variant="outline" size="sm">
          View Details
        </Button>
      </div>
    </div>
  )
} 