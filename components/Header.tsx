import { Button } from '@/components/ui/button'
import { Menu, User } from 'lucide-react'

export function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* ロゴ */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">tripit</h1>
          </div>

          {/* ナビゲーション */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              ホーム
            </a>
            <a href="/search" className="text-gray-700 hover:text-blue-600 transition-colors">
              検索
            </a>
            <a href="/create" className="text-gray-700 hover:text-blue-600 transition-colors">
              投稿する
            </a>
          </nav>

          {/* ユーザーアクション */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button>
              ログイン
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
} 