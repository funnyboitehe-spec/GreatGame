import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2, RotateCcw, ExternalLink } from 'lucide-react';
import { useState } from 'react';

export default function GamePlayer({ game, onClose }) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    const iframe = document.getElementById('game-iframe');
    if (iframe?.requestFullscreen) {
      iframe.requestFullscreen();
    }
  };

  const reloadGame = () => {
    const iframe = document.getElementById('game-iframe');
    if (iframe) iframe.src = iframe.src;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-sm"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-zinc-900/50 border-b border-zinc-800">
        <div className="flex items-center gap-4">
          <button
            onClick={onClose}
            className="p-2 hover:bg-zinc-800 rounded-full transition-colors text-zinc-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
          <div>
            <h2 className="text-xl font-bold text-white">{game.title}</h2>
            <span className="text-xs text-zinc-500 uppercase tracking-widest">{game.category}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={reloadGame}
            className="flex items-center gap-2 px-4 py-2 hover:bg-zinc-800 rounded-lg transition-colors text-sm text-zinc-300"
            title="Reload game"
          >
            <RotateCcw className="w-4 h-4" />
            <span className="hidden sm:inline">Reload</span>
          </button>
          <button
            onClick={toggleFullscreen}
            className="flex items-center gap-2 px-4 py-2 hover:bg-zinc-800 rounded-lg transition-colors text-sm text-zinc-300"
            title="Fullscreen"
          >
            <Maximize2 className="w-4 h-4" />
            <span className="hidden sm:inline">Fullscreen</span>
          </button>
          <a
            href={game.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white text-black hover:bg-zinc-200 rounded-lg transition-colors text-sm font-semibold"
          >
            <ExternalLink className="w-4 h-4" />
            <span className="hidden sm:inline">Open in New Tab</span>
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 relative bg-black flex items-center justify-center p-4 sm:p-8">
        <div className="w-full h-full max-w-6xl mx-auto shadow-2xl shadow-white/5 rounded-xl overflow-hidden border border-zinc-800">
          <iframe
            id="game-iframe"
            src={game.url}
            className="w-full h-full bg-white"
            frameBorder="0"
            allowFullScreen
            loading="lazy"
            title={game.title}
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </motion.div>
  );
}
