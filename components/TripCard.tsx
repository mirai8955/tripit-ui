'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { TripTimeline } from '@/components/TripTimeline'
import { Heart, Share2, MapPin, Clock, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react'

interface TripCardProps {
  trip: {
    id: number
    author: {
      name: string
      avatar: string
      verified: boolean
    }
    title: string
    duration: string
    likes: number
    timeline: Array<{
      time: string
      location: string
      transport: string
      duration: string
    }>
    images: string[]
  }
}

export function TripCard({ trip }: TripCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* ヘッダー */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <img
              src={trip.author.avatar}
              alt={trip.author.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <div className="flex items-center space-x-1">
                <span className="font-medium text-gray-900">{trip.author.name}</span>
                {trip.author.verified && (
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                )}
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-500">{trip.duration}</div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">{trip.title}</h3>
        
        {/* 画像 */}
        {trip.images.length > 0 && (
          <div className="mb-4">
            <img
              src={trip.images[0]}
              alt={trip.title}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        )}
      </div>

      {/* タイムライン（プレビュー/展開） */}
      <div className="p-6">
        <TripTimeline 
          timeline={trip.timeline} 
          isExpanded={isExpanded} 
        />
        
        {trip.timeline.length > 3 && (
          <Button
            variant="ghost"
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full mt-4 text-blue-600 hover:text-blue-700"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="h-4 w-4 mr-2" />
                折りたたむ
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4 mr-2" />
                すべて表示 ({trip.timeline.length}箇所)
              </>
            )}
          </Button>
        )}
      </div>

      {/* アクション */}
      <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsLiked(!isLiked)}
            className={`flex items-center space-x-2 ${
              isLiked ? 'text-red-500' : 'text-gray-600'
            }`}
          >
            <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
            <span>{trip.likes + (isLiked ? 1 : 0)}</span>
          </Button>
          
          <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-gray-600">
            <Share2 className="h-4 w-4" />
            <span>シェア</span>
          </Button>
        </div>

        <Button variant="outline" size="sm">
          詳細を見る
        </Button>
      </div>
    </div>
  )
} 