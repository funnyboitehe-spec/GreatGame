import { useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar.jsx';
import GameGrid from './components/GameGrid.jsx';
import GamePlayer from './components/GamePlayer.jsx';
import gamesData from './data/games.json';
import { Gamepad2, Sparkles, TrendingUp } from 'lucide-react';

export default function App() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGames = useMemo(() => {
    return gamesData.filter(game =>
      game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-white selection:text-black">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <main className="max-w-7xl mx-auto px-6 pb-20">
        {/* Hero Section */}
        <section className="py-16 sm:py-24 overflow-hidden relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-bold text-zinc-400 uppercase tracking-widest mb-6">
              <Sparkles className="w-3 h-3 text-yellow-500" />
              New Games Added Weekly
            </div>
            <h1 className="text-6xl sm:text-8xl font-black tracking-tighter mb-6 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent uppercase">
              Pixel Portal
            </h1>
            <p className="text-zinc-500 text-lg sm:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              Experience a hand-picked collection of unblocked web games. 
              Instant play, no ads, just pure gaming.
            </p>
          </motion.div>
        </section>

        {/* Game Sections */}
        <div className="space-y-12">
          {/* Featured Section Header */}
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-white" />
              <h2 className="text-xl font-bold tracking-tight">Trending Now</h2>
            </div>
            <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
              {filteredGames.length} Games Available
            </span>
          </div>

          <GameGrid games={filteredGames} onSelectGame={setSelectedGame} />
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-zinc-900 text-center space-y-4">
        <div className="flex items-center justify-center gap-2 text-zinc-600">
          <Gamepad2 className="w-5 h-5" />
          <span className="font-bold tracking-tight text-zinc-500 uppercase">Pixel Portal</span>
        </div>
        <p className="text-xs text-zinc-600 font-medium">
          Built for the next generation of web gamers. © 2026 Pixel Portal.
        </p>
      </footer>

      {/* Game Player Overlay */}
      <AnimatePresence>
        {selectedGame && (
          <GamePlayer
            game={selectedGame}
            onClose={() => setSelectedGame(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
