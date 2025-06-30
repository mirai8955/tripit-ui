import { Button } from '@/components/ui/button'
import { Search, MapPin, Calendar } from 'lucide-react'

export function SearchBar() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-4xl mx-auto">
      <div className="grid md:grid-cols-4 gap-4">
        {/* 出発地 */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">出発地</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="東京駅"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* 目的地 */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">目的地</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="大阪"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* 日付 */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">日付</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="date"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* 検索ボタン */}
        <div className="flex items-end">
          <Button className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
            <Search className="h-4 w-4 mr-2" />
            検索
          </Button>
        </div>
      </div>
    </div>
  )
} 