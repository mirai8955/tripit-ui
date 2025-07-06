import { MapPin, ArrowRight, PlusCircle, Clock } from 'lucide-react'
import type { TripSpot } from '@/types/trip'
import { Button } from '@/components/ui/button'

interface TripTimelineProps {
  spots: TripSpot[]
  isExpanded: boolean
  onAddSpot?: (spot: TripSpot) => void
}

export function TripTimeline({ spots, isExpanded, onAddSpot }: TripTimelineProps) {
  const visibleSpots = isExpanded ? spots : spots.slice(0, 3)

  return (
    <div className="space-y-1">
      {visibleSpots.map((spot, index) => (
        <div key={spot.id}>
          {/* Location Point and Details */}
          <div className="flex items-start space-x-4">
            {/* Timeline dot and line */}
            <div className="flex flex-col items-center h-full">
              <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-md z-10 flex-shrink-0" />
              {index < spots.length - 1 && (
                 <div className="w-0.5 flex-grow bg-gradient-to-b from-blue-500 to-gray-300 my-2" />
              )}
            </div>

            {/* Details container */}
            <div className="flex-1 pb-4">
              {/* Location details */}
              <div className="flex items-center space-x-1.5">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span className="font-medium text-gray-900">{spot.name}</span>
                {onAddSpot && (
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-7 w-7" // Always visible, removed hover effect
                    onClick={() => onAddSpot(spot)}
                    title={`Add ${spot.name} to your plan`}
                  >
                    <PlusCircle className="h-5 w-5 text-green-500 transition-colors hover:text-green-600" />
                  </Button>
                )}
              </div>

              <div className="ml-6 mt-1 flex items-center space-x-2 text-sm text-gray-500">
                {spot.arrivalTime && (
                  <>
                    <Clock className="h-4 w-4" />
                    <span>{spot.arrivalTime}</span>
                  </>
                )}
              </div>

              <p className="ml-6 mt-2 text-sm text-gray-600">{spot.description}</p>

              {/* Transportation details to next spot */}
              {spot.routeToNext && (
                <div className="mt-4 ml-6 flex items-center space-x-2 text-sm text-gray-600">
                  <ArrowRight className="h-3 w-3" />
                  <span>{spot.routeToNext.method}</span>
                  <span className="text-gray-400">({spot.routeToNext.duration})</span>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Collapsed indicator */}
      {!isExpanded && spots.length > 3 && (
        <div className="flex items-center justify-center text-gray-500 text-sm mt-4">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-gray-300 rounded-full" />
            <div className="w-2 h-2 bg-gray-300 rounded-full" />
            <div className="w-2 h-2 bg-gray-300 rounded-full" />
            <span className="ml-2">+{spots.length - 3} more stops</span>
          </div>
        </div>
      )}
    </div>
  )
} 