import { motion } from 'framer-motion';
import { playSound } from '../utils/audio';

interface WelcomePageProps {
  onNext: () => void;
}

export const WelcomePage = ({ onNext }: WelcomePageProps) => {
  const handleStart = () => {
    playSound.ding();
    onNext();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen p-8"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="glass-card p-12 text-center max-w-2xl"
      >
        <motion.h1
          className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 bg-clip-text text-transparent"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            backgroundSize: '200% 200%',
          }}
        >
          Hi my love
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-pink-800 mb-8 font-medium"
        >
          I made this just for you!
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleStart}
          className="btn-primary text-xl px-12 py-4"
        >
          Start 💕
        </motion.button>

        {/* Floating hearts */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl"
              initial={{ y: '100vh', x: `${Math.random() * 100}%`, opacity: 0 }}
              animate={{
                y: '-100vh',
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: i * 1.2,
                ease: 'linear',
              }}
            >
              💕
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};
