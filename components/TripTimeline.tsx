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
    <div className="space-y-4">
      {visibleTimeline.map((step, index) => (
        <div key={index} className="relative">
          {/* タイムラインの点と線 */}
          <div className="flex items-start space-x-4">
            {/* 左側のタイムライン */}
            <div className="flex flex-col items-center">
              {/* 点 */}
              <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-md z-10" />
              
              {/* 線（最後以外） */}
              {index < visibleTimeline.length - 1 && (
                <div className="w-0.5 h-12 bg-gradient-to-b from-blue-500 to-gray-300 mt-2" />
              )}
            </div>

            {/* 右側の内容 */}
            <div className="flex-1 pb-8">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-blue-600" />
                    <span className="font-medium text-gray-900">{step.location}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Clock className="h-3 w-3" />
                    <span>{step.time}</span>
                  </div>
                </div>
                
                {/* 移動手段（次のステップがある場合） */}
                {index < timeline.length - 1 && (
                  <div className="mt-3 flex items-center space-x-2 text-sm text-gray-600">
                    <ArrowRight className="h-3 w-3" />
                    <span>{step.transport}</span>
                    <span className="text-gray-400">({step.duration})</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* 省略表示 */}
      {!isExpanded && timeline.length > 3 && (
        <div className="flex items-center justify-center text-gray-500 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-gray-300 rounded-full" />
            <div className="w-2 h-2 bg-gray-300 rounded-full" />
            <div className="w-2 h-2 bg-gray-300 rounded-full" />
            <span className="ml-2">他{timeline.length - 3}箇所</span>
          </div>
        </div>
      )}
    </div>
  )
} 