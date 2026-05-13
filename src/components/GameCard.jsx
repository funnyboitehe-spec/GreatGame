import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function GameCard({ game, onClick }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800 transition-all hover:border-zinc-700 cursor-pointer"
      onClick={() => onClick(game)}
    >
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={game.thumbnail}
          alt={game.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="bg-white text-black p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
            <Play fill="currentColor" className="w-6 h-6" />
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-semibold text-lg text-zinc-100">{game.title}</h3>
          <span className="text-[10px] uppercase tracking-wider font-bold text-zinc-500 bg-zinc-800 px-2 py-0.5 rounded">
            {game.category}
          </span>
        </div>
        <p className="text-sm text-zinc-400 line-clamp-2 leading-relaxed">
          {game.description}
        </p>
      </div>
    </motion.div>
  );
}
