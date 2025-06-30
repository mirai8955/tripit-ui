import { MapPin, Clock, ArrowRight } from 'lucide-react'

interface TripTimelineProps {
  timeline: Array<{
    time: string
    location: string
    transport: string
    duration: string
  }>
  isExpanded: boolean
}

export function TripTimeline({ timeline, isExpanded }: TripTimelineProps) {
  const visibleTimeline = isExpanded ? timeline : timeline.slice(0, 3)

  return (
    <div className="space-y-1">
      {visibleTimeline.map((step, index) => (
        <div key={index} className="relative">
          {/* Location Point and Details */}
          <div className="flex items-center space-x-4">
            {/* Timeline dot */}
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-md z-10" />
            </div>

            {/* Location details next to point */}
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span className="font-medium text-gray-900">{step.location}</span>
                <div className="flex items-center space-x-1 text-sm text-gray-500 ml-auto">
                  <Clock className="h-3 w-3" />
                  <span>{step.time}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Transportation Line (if next step exists) */}
          {index < timeline.length - 1 && (
            <div className="flex items-center space-x-4 my-2">
              {/* Line with transportation info */}
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-8 bg-gradient-to-b from-blue-500 to-gray-300" />
              </div>
              
              {/* Transportation details next to line */}
              <div className="flex-1">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <ArrowRight className="h-3 w-3" />
                  <span>{step.transport}</span>
                  <span className="text-gray-400">({step.duration})</span>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Collapsed indicator */}
      {!isExpanded && timeline.length > 3 && (
        <div className="flex items-center justify-center text-gray-500 text-sm mt-4">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-gray-300 rounded-full" />
            <div className="w-2 h-2 bg-gray-300 rounded-full" />
            <div className="w-2 h-2 bg-gray-300 rounded-full" />
            <span className="ml-2">+{timeline.length - 3} more stops</span>
          </div>
        </div>
      )}
    </div>
  )
} 