import { Gamepad2, Search } from 'lucide-react';

export default function Navbar({ searchQuery, setSearchQuery }) {
  return (
    <nav className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-white p-1.5 rounded-lg">
            <Gamepad2 className="w-6 h-6 text-black" />
          </div>
          <span className="text-xl font-black tracking-tighter text-zinc-100 uppercase sm:block hidden">
            Pixel Portal
          </span>
        </div>

        <div className="flex-1 max-w-md relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-white transition-colors" />
          <input
            type="text"
            placeholder="Search games..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-800 rounded-full py-2 pl-10 pr-4 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all font-medium"
          />
        </div>

        <div className="hidden sm:flex items-center gap-6">
          <a href="#" className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors">Arcade</a>
          <a href="#" className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors">Puzzle</a>
          <a href="#" className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors">Action</a>
        </div>
      </div>
    </nav>
  );
}
