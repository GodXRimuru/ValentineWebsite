import { useState } from 'react';
import { motion } from 'framer-motion';
import { playSound } from '../utils/audio';

interface PasswordPageProps {
  onNext: () => void;
}

const CORRECT_PASSWORD = '01102024';

export const PasswordPage = ({ onNext }: PasswordPageProps) => {
  const [password, setPassword] = useState('');
  const [isShaking, setIsShaking] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password === CORRECT_PASSWORD) {
      playSound.cheer();
      setError('');
      setTimeout(() => onNext(), 500);
    } else {
      playSound.error();
      setError('Not quite! Try again 💕');
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen p-8"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 1,
          x: isShaking ? [0, -10, 10, -10, 10, 0] : 0
        }}
        transition={{ duration: 0.5 }}
        className="glass-card p-10 max-w-lg w-full text-center"
      >
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
          Do you still remember...
        </h2>
        
        <p className="text-xl text-pink-700 mb-8">
          Our special date? 💕
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="DDMMYYYY"
              maxLength={8}
              className="w-full px-6 py-4 text-center text-2xl rounded-full bg-white/50 backdrop-blur-sm border-2 border-pink-300 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all placeholder-pink-400"
            />
            <p className="text-sm text-pink-600 mt-2">
              Enter the date in DDMMYYYY format
            </p>
          </div>

          {error && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-rose-600 font-semibold"
            >
              {error}
            </motion.p>
          )}

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary w-full py-4 text-xl"
          >
            Submit 💖
          </motion.button>
        </form>

        {/* Hint hearts */}
        <div className="mt-6 flex justify-center gap-2">
          {[...Array(8)].map((_, i) => (
            <motion.span
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="text-pink-400"
            >
              💕
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};
