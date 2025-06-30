import { TripCard } from '@/components/TripCard'

// モックデータ
const mockTrips = [
  {
    id: 1,
    author: {
      name: "田中太郎",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      verified: true
    },
    title: "東京→大阪 グルメの旅",
    duration: "2日1泊",
    likes: 124,
    timeline: [
      { time: "09:00", location: "東京駅", transport: "新幹線", duration: "2時間30分" },
      { time: "11:30", location: "大阪駅", transport: "徒歩", duration: "15分" },
      { time: "11:45", location: "道頓堀", transport: "徒歩", duration: "5分" },
      { time: "12:00", location: "お好み焼き「きじ」", transport: "電車", duration: "20分" },
      { time: "14:00", location: "大阪城", transport: "電車", duration: "30分" }
    ],
    images: ["https://images.unsplash.com/photo-1590559899731-a382839e5549?w=300&h=200&fit=crop"]
  },
  {
    id: 2,
    author: {
      name: "山田花子",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      verified: false
    },
    title: "京都 古都めぐり",
    duration: "1日",
    likes: 89,
    timeline: [
      { time: "08:00", location: "京都駅", transport: "バス", duration: "20分" },
      { time: "08:20", location: "清水寺", transport: "徒歩", duration: "15分" },
      { time: "10:00", location: "三年坂", transport: "徒歩", duration: "10分" },
      { time: "12:00", location: "祇園", transport: "バス", duration: "25分" },
      { time: "15:00", location: "金閣寺", transport: "電車", duration: "45分" }
    ],
    images: ["https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=300&h=200&fit=crop"]
  }
]

export function TripFeed() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        みんなの旅行計画
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 lg:max-w-4xl lg:mx-auto">
        {mockTrips.map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  )
} 